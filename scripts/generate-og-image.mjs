// scripts/generate-og-image.mjs
// 生成 1200x630 社交分享图（og:image）— 深红金视觉体系，左文右图
// 运行: node scripts/generate-og-image.mjs
// 输出: public/assets/og/og-home.png（pre-push 钩子只检查 public/assets/images/，此目录不受影响）

import { createCanvas, registerFont, loadImage } from "canvas";
import sharp from "sharp";
import { mkdirSync, statSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT_DIR = resolve(ROOT, "public/assets/og");
const OUT = resolve(OUT_DIR, "og-home.png");

const W = 1200;
const H = 630;

// 配色（站点 CSS 同款）
const RED_DARK = "#7A1A12"; // 深红
const RED = "#A62C21"; // 主红
const GOLD = "#D4AF37"; // 金
const GOLD_LIGHT = "#E8CD6E"; // 亮金
const CREAM = "#F5EDE0"; // 米白

// 字体（系统字体）
registerFont("/usr/share/fonts/opentype/ipafont-gothic/ipag.ttf", {
  family: "IpaGothic",
});
registerFont("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf", {
  family: "DejaVuSerifBold",
});
registerFont("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", {
  family: "DejaVuSansBold",
});
registerFont("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", {
  family: "DejaVuSans",
});

mkdirSync(OUT_DIR, { recursive: true });

const canvas = createCanvas(W, H);
const ctx = canvas.getContext("2d");

function roundRect(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// ---------- 1. 背景：深红渐变 + 淡金同心环底纹 ----------
const bg = ctx.createLinearGradient(0, 0, 0, H);
bg.addColorStop(0, RED_DARK);
bg.addColorStop(0.55, RED);
bg.addColorStop(1, RED_DARK);
ctx.fillStyle = bg;
ctx.fillRect(0, 0, W, H);

ctx.save();
ctx.strokeStyle = GOLD;
ctx.lineWidth = 1.5;
for (let i = 0; i < 6; i++) {
  ctx.globalAlpha = 0.06 + i * 0.015;
  ctx.beginPath();
  ctx.arc(W - 60, H / 2, 90 + i * 42, 0, Math.PI * 2);
  ctx.stroke();
}
ctx.restore();

// ---------- 2. 右侧照片（故宫，cover 裁剪，左缘红色渐隐融合） ----------
const IMG_X = 640;
const IMG_W = W - IMG_X; // 560
const IMG_H = H;

const imgBuf = await sharp(
  resolve(ROOT, "public/assets/images/forbidden-city.png")
)
  .resize(IMG_W, IMG_H, { fit: "cover", position: "attention" })
  .toBuffer();

const photo = await loadImage(imgBuf);
ctx.save();
roundRect(IMG_X, 0, IMG_W, IMG_H, 0);
ctx.clip();
ctx.drawImage(photo, IMG_X, 0, IMG_W, IMG_H);
// 左缘红→透明渐变，衔接红底
const fade = ctx.createLinearGradient(IMG_X, 0, IMG_X + 150, 0);
fade.addColorStop(0, "rgba(122,26,18,1)");
fade.addColorStop(1, "rgba(122,26,18,0)");
ctx.fillStyle = fade;
ctx.fillRect(IMG_X, 0, 150, IMG_H);
// 底缘轻微压暗，保证右下角域名可读
const fadeB = ctx.createLinearGradient(0, IMG_H - 120, 0, IMG_H);
fadeB.addColorStop(0, "rgba(0,0,0,0)");
fadeB.addColorStop(1, "rgba(0,0,0,0.45)");
ctx.fillStyle = fadeB;
ctx.fillRect(IMG_X, IMG_H - 120, IMG_W, 120);
ctx.restore();

// 金色细边框勾勒照片左缘
ctx.save();
ctx.strokeStyle = GOLD;
ctx.globalAlpha = 0.8;
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(IMG_X + 1, 0);
ctx.lineTo(IMG_X + 1, H);
ctx.stroke();
ctx.restore();

// ---------- 3. 左侧文字区 ----------
const TX = 72; // 左边距
const textAlignLeft = TX;

// 3.1 顶部：小型印章「中华」+ 站名
// 印章：红底已深，改为金边白底红字的传统印章样式
const sealSize = 92;
const sealX = textAlignLeft;
const sealY = 84;

// 印章底：米白偏暖
ctx.save();
roundRect(sealX, sealY, sealSize, sealSize, 10);
ctx.fillStyle = "#F7EFDE";
ctx.fill();
// 金色描边
ctx.strokeStyle = GOLD;
ctx.lineWidth = 3;
ctx.stroke();
// 印章文字：竖排「中华」两字
ctx.font = "38px IpaGothic";
ctx.fillStyle = RED;
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("中", sealX + sealSize / 2, sealY + 28);
ctx.fillText("华", sealX + sealSize / 2, sealY + 64);
ctx.restore();

// 站名（印章右侧）
ctx.save();
ctx.textAlign = "left";
ctx.textBaseline = "alphabetic";
ctx.fillStyle = GOLD_LIGHT;
ctx.font = "30px DejaVuSerifBold";
ctx.fillText("Chinese Culture Explorer", sealX + sealSize + 22, sealY + 42);
// 小字分隔线
ctx.strokeStyle = GOLD;
ctx.globalAlpha = 0.55;
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(sealX + sealSize + 22, sealY + 58);
ctx.lineTo(sealX + sealSize + 22 + 250, sealY + 58);
ctx.stroke();
ctx.restore();

// 3.2 主标题（两行，衬线，米白）
ctx.save();
ctx.fillStyle = CREAM;
ctx.font = "58px DejaVuSerifBold";
ctx.textAlign = "left";
ctx.shadowColor = "rgba(0,0,0,0.4)";
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 6;
ctx.fillText("Discover", TX, 300);
ctx.fillText("Chinese Traditional", TX, 372);
ctx.fillText("Culture", TX, 444);
ctx.restore();

// 3.3 副标题（金色小字）
ctx.save();
ctx.fillStyle = GOLD_LIGHT;
ctx.font = "25px DejaVuSans";
ctx.textAlign = "left";
ctx.fillText("5,000 Years of History · Festivals · Philosophy · Arts", TX, 500);
ctx.restore();

// 3.4 底部横线 + 域名
ctx.save();
ctx.strokeStyle = GOLD;
ctx.globalAlpha = 0.7;
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(TX, 540);
ctx.lineTo(TX + 420, 540);
ctx.stroke();
ctx.globalAlpha = 1;
ctx.fillStyle = CREAM;
ctx.font = "24px DejaVuSansBold";
ctx.textAlign = "left";
ctx.fillText("chinese-culture.ikber.cc", TX, 578);
ctx.restore();

// 右下角（照片压暗区上）域名水印
ctx.save();
ctx.textAlign = "right";
ctx.fillStyle = "rgba(245,237,224,0.9)";
ctx.font = "22px DejaVuSansBold";
ctx.fillText("chinese-culture.ikber.cc", W - 36, H - 30);
ctx.restore();

// ---------- 4. 输出 + 压缩 ----------
let buf = canvas.toBuffer("image/png");
await sharp(buf)
  .png({ compressionLevel: 9, palette: true, quality: 92 })
  .toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log(`✅ og:image generated: ${OUT}`);
console.log(`   ${meta.width}x${meta.height}`);
console.log(`   size: ${(statSync(OUT).size / 1024).toFixed(1)} KB`);
