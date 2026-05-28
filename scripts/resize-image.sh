#!/usr/bin/env bash
# resize-image.sh — 将图片按比例缩放，宽度固定为 800 像素，高度等比自适应
# 用法: ./scripts/resize-image.sh <源图片路径> [输出文件名]
# 示例: ./scripts/resize-image.sh ~/photo.jpg temple-of-heaven.png
# 默认输出到 public/assets/images/，若只给文件名则放那，给完整路径则用你的路径

set -euo pipefail

SRC="$1"
OUT="${2:-}"

TARGET_W=800
ASSETS_DIR="$(cd "$(dirname "$0")/../public/assets/images" && pwd)"

if [ -z "$OUT" ]; then
  # 没给输出名，从源文件取 basename 换成 .png
  base=$(basename "$SRC")
  base="${base%.*}.png"
  OUT="$ASSETS_DIR/$base"
elif [[ "$OUT" != /* && "$OUT" != ./* && "$OUT" != */* ]]; then
  # 只有文件名，没有路径 -> 放到 assets 目录
  OUT="$ASSETS_DIR/$OUT"
fi

outdir=$(dirname "$OUT")
mkdir -p "$outdir"

# 锁定纵横比，宽度调整为 800px，高度自适应
ffmpeg -i "$SRC" \
  -vf "scale=$TARGET_W:-1" \
  -update 1 -y "$OUT" 2>/dev/null

# 获取实际输出的图片尺寸
ACTUAL_DIMS=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "$OUT" 2>/dev/null || echo "${TARGET_W}xauto")

echo "✅ Done: $OUT ($(du -h "$OUT" | cut -f1), ${ACTUAL_DIMS})"
