#!/usr/bin/env python3
"""自动去除图片四周的纯黑边框（黑边）。

原理：对图片做灰度化后，从四条边逐行/逐列向内扫描，
若某一行/列的全部像素值都 <= 阈值（即“整行纯黑”），则视为黑边裁掉，
直到遇到第一个含内容的行/列为止。因此不会误伤画面内容。

用法:
    python3 scripts/remove-black-borders.py                      # 处理默认目录 public/assets/images
    python3 scripts/remove-black-borders.py a.png b.jpg          # 处理指定文件
    python3 scripts/remove-black-borders.py ./some_dir           # 处理指定目录
    python3 scripts/remove-black-borders.py --dry-run            # 只预览，不实际修改
    python3 scripts/remove-black-borders.py --threshold 48       # 自定义“黑”的阈值(默认 32)

注意: 脚本会原地覆盖有黑边的图片(先裁剪到临时文件再替换)。
原文件已被 git 跟踪，如需还原可用 git checkout -- <文件>。
"""

import argparse
import os
import sys
import tempfile

from PIL import Image

VALID_EXTS = {".png", ".jpg", ".jpeg", ".webp", ".bmp", ".gif"}
JPEG_EXTS = {".jpg", ".jpeg"}


def detect_borders(im: Image.Image, threshold: int) -> tuple[int, int, int, int]:
    """返回 (top, bottom, left, right) 四条边纯黑条的像素厚度。"""
    gray = im.convert("L")
    w, h = gray.size
    px = gray.load()

    def row_is_black(y: int) -> bool:
        for x in range(w):
            if px[x, y] > threshold:
                return False
        return True

    def col_is_black(x: int) -> bool:
        for y in range(h):
            if px[x, y] > threshold:
                return False
        return True

    top = 0
    for y in range(h):
        if row_is_black(y):
            top += 1
        else:
            break

    bottom = 0
    for y in range(h - 1, -1, -1):
        if row_is_black(y):
            bottom += 1
        else:
            break

    left = 0
    for x in range(w):
        if col_is_black(x):
            left += 1
        else:
            break

    right = 0
    for x in range(w - 1, -1, -1):
        if col_is_black(x):
            right += 1
        else:
            break

    return top, bottom, left, right


def save_image(im: Image.Image, path: str) -> None:
    ext = os.path.splitext(path)[1].lower()
    if ext in JPEG_EXTS:
        if im.mode != "RGB":
            im = im.convert("RGB")
        im.save(path, "JPEG", quality=95, optimize=True)
    else:
        im.save(path, optimize=True)


def process_file(path: str, threshold: int, dry_run: bool) -> str:
    """返回该文件的处理结果描述；无黑边返回 None。"""
    try:
        im = Image.open(path)
        im.load()
    except Exception as e:
        return f"❌ 打不开 {path}: {e}"

    w, h = im.size
    top, bottom, left, right = detect_borders(im, threshold)
    new_w, new_h = w - left - right, h - top - bottom

    if not (top or bottom or left or right):
        return None
    if new_w < 10 or new_h < 10:
        return f"⚠️  跳过 {os.path.basename(path)}: 裁剪后尺寸过小({new_w}x{new_h})，疑似误判"

    if dry_run:
        return (
            f"🔍 {os.path.basename(path)}: {w}x{h} -> {new_w}x{new_h} "
            f"(上{top} 下{bottom} 左{left} 右{right})"
        )

    # 先写临时文件再替换，避免写一半中断损坏原图
    fd, tmp = tempfile.mkstemp(
        dir=os.path.dirname(path), suffix=os.path.splitext(path)[1]
    )
    os.close(fd)
    try:
        cropped = im.crop((left, top, w - right, h - bottom))
        save_image(cropped, tmp)
        os.replace(tmp, path)
    except Exception:
        if os.path.exists(tmp):
            os.unlink(tmp)
        raise
    return f"✂️  {os.path.basename(path)}: {w}x{h} -> {new_w}x{new_h} (去黑边 上{top} 下{bottom} 左{left} 右{right})"


def collect_targets(args: list[str], default_dir: str) -> list[str]:
    """把参数展开成具体图片文件列表；无参数时默认扫默认目录。"""
    targets: list[str] = []
    if not args:
        args = [default_dir]

    for arg in args:
        if os.path.isdir(arg):
            for name in sorted(os.listdir(arg)):
                if os.path.splitext(name)[1].lower() in VALID_EXTS:
                    targets.append(os.path.join(arg, name))
        elif os.path.isfile(arg):
            targets.append(arg)
        else:
            print(f"❌ 路径不存在: {arg}")
            sys.exit(1)
    return targets


def main() -> None:
    parser = argparse.ArgumentParser(
        description="去除图片四周纯黑边框", add_help=True
    )
    parser.add_argument("paths", nargs="*", help="图片文件或目录，默认处理 public/assets/images")
    parser.add_argument("--dry-run", action="store_true", help="只预览不修改")
    parser.add_argument("--threshold", type=int, default=32, help="判定为黑的亮度阈值(0-255)，默认 32")
    args = parser.parse_args()

    script_dir = os.path.dirname(os.path.abspath(__file__))
    default_dir = os.path.normpath(
        os.path.join(script_dir, "..", "public", "assets", "images")
    )

    targets = collect_targets(args.paths, default_dir)
    if not targets:
        print("没有找到可处理的图片。")
        return

    action = "预览" if args.dry_run else "清理"
    print(f"===== {action} {len(targets)} 张图片 (阈值={args.threshold}) =====")

    changed, skipped = 0, 0
    for p in targets:
        result = process_file(p, args.threshold, args.dry_run)
        if result is None:
            skipped += 1
        else:
            print(result)
            changed += 1

    if args.dry_run:
        print(f"---- {changed} 张有黑边将被清理, {skipped} 张无需处理 ----")
    else:
        print(f"---- 完成: {changed} 张已清理, {skipped} 张无需处理 ----")


if __name__ == "__main__":
    main()
