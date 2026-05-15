#!/usr/bin/env bash
# resize-image.sh — 将图片裁剪并缩放到 800×450 (16:9)
# 用法: ./scripts/resize-image.sh <源图片路径> [输出文件名]
# 示例: ./scripts/resize-image.sh ~/photo.jpg temple-of-heaven.png
# 默认输出到 public/assets/images/，若只给文件名则放那，给完整路径则用你的路径

set -euo pipefail

SRC="$1"
OUT="${2:-}"

TARGET_W=800
TARGET_H=450
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

ffmpeg -i "$SRC" \
  -vf "scale=$TARGET_W:$TARGET_H:force_original_aspect_ratio=1,pad=$TARGET_W:$TARGET_H:(ow-iw)/2:(oh-ih)/2" \
  -update 1 -y "$OUT" 2>/dev/null

echo "✅ Done: $OUT ($(du -h "$OUT" | cut -f1), ${TARGET_W}×${TARGET_H})"
