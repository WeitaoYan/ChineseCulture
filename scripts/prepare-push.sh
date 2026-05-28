#!/usr/bin/env bash
# scripts/prepare-push.sh — push前准备脚本: 处理图片大小 + 生成新的sitemap + 自动commit

set -euo pipefail

# 获取 Git 仓库根目录
REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

echo "🔍 开始进行 push 前准备检查..."

# 1. 查找并处理不合规尺寸的图片或被修改的图片
echo "🎨 正在检查图片宽度 (要求 800px)..."
IMAGES_DIR="public/assets/images"
MODIFIED_IMAGES=()

# 检查 ffprobe 是否可用
if ! command -v ffprobe &> /dev/null; then
  echo "⚠️ 警告: 系统中未找到 ffprobe，无法自动检查图片尺寸。将对所有图片执行处理。"
  for img in "$IMAGES_DIR"/*; do
    if [ -f "$img" ]; then
      filename=$(basename "$img")
      ext="${filename##*.}"
      ext_lc=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
      if [[ "$ext_lc" == "png" || "$ext_lc" == "jpg" || "$ext_lc" == "jpeg" ]]; then
        MODIFIED_IMAGES+=("$img")
      fi
    fi
  done
else
  # 获取 Git 缓存或未提交的图片
  git_changed_images=$(git diff --name-only --diff-filter=ACM | grep -E "^$IMAGES_DIR/" || true)
  git_staged_images=$(git diff --cached --name-only --diff-filter=ACM | grep -E "^$IMAGES_DIR/" || true)
  git_untracked_images=$(git ls-files --others --exclude-standard | grep -E "^$IMAGES_DIR/" || true)
  
  # 合并并去重所有有变动的图片
  all_changed_images=$(echo -e "${git_changed_images}\n${git_staged_images}\n${git_untracked_images}" | grep -v '^$' | sort -u || true)

  for img in "$IMAGES_DIR"/*; do
    if [ -f "$img" ]; then
      filename=$(basename "$img")
      ext="${filename##*.}"
      ext_lc=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
      if [[ "$ext_lc" == "png" || "$ext_lc" == "jpg" || "$ext_lc" == "jpeg" ]]; then
        # 检查是否在 Git 变动列表中
        in_git_changes=false
        while read -r changed_img; do
          if [ "$changed_img" = "$img" ]; then
            in_git_changes=true
            break
          fi
        done <<< "$all_changed_images"

        if [ "$in_git_changes" = true ]; then
          MODIFIED_IMAGES+=("$img")
        else
          # 如果不在变动列表，检查宽度是否为 800
          width=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$img" 2>/dev/null || echo "unknown")
          if [ "$width" != "800" ]; then
            echo "📐 图片宽度不符合要求 (${width}px，应为 800px): $img"
            MODIFIED_IMAGES+=("$img")
          fi
        fi
      fi
    fi
  done
fi

# 处理需要压缩和裁剪的图片（同名覆盖处理）
if [ ${#MODIFIED_IMAGES[@]} -gt 0 ]; then
  echo "🚀 开始等比缩放以下图片到 800px 宽度..."
  for img in "${MODIFIED_IMAGES[@]}"; do
    echo "Processing: $img"
    # 为了避免 ffmpeg 在处理同名输出时发生读写冲突导致损坏，我们使用临时文件中转
    mv "$img" "$img.tmp"
    ./scripts/resize-image.sh "$img.tmp" "$(basename "$img")"
    rm -f "$img.tmp"
  done
else
  echo "✅ 所有图片均已符合 800px 宽度规范，无需处理。"
fi

# 2. 生成 sitemap
echo "📄 正在生成新的 sitemap..."
node scripts/generate-sitemap-data.mjs

# 3. 检查是否有变动
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "⚠️ 检测到有文件被修改 (图片已处理或 sitemap 已更新)!"
  git status --short
  
  echo "💾 自动提交修改内容..."
  git add "$IMAGES_DIR" sitemap-data.json
  
  # 自动提交
  git commit -m "chore: auto-resize images and update sitemap before push"
  
  echo "❌ 已为您自动处理并提交修改！"
  echo "👉 请重新执行 'git push' 来推送最新的提交。"
  exit 1
else
  echo "✅ 没有发现变动，文件已是最新状态。继续执行 Push..."
  exit 0
fi
