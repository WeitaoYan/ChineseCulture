// Script to generate sitemap data (git timestamps + images) and save to JSON.
// Run: node scripts/generate-sitemap-data.mjs
// Commit the resulting public/sitemap-data.json to the repo.
// Cloudflare Pages then reads this file during build instead of running git commands.

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { join, resolve, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

function getGitLastModified(filePath) {
  try {
    const relPath = relative(rootDir, filePath);
    const output = execSync(
      `git log -1 --format=%cI "${relPath}"`,
      { cwd: rootDir, encoding: "utf-8", timeout: 5000 }
    ).trim();
    return output || null;
  } catch {
    return null;
  }
}

function scanPages() {
  const pagesDir = join(rootDir, "app/pages");

  function walk(dir, basePath = "") {
    const entries = readdirSync(dir, { withFileTypes: true });
    const results = [];

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      const relPath = basePath ? `${basePath}/${entry.name}` : entry.name;

      if (entry.isDirectory()) {
        results.push(...walk(fullPath, relPath));
      } else if (entry.name.endsWith(".vue")) {
        const content = readFileSync(fullPath, "utf-8");

        const imageSrcMatch = content.match(/imageSrc\s*=\s*["']([^"']+)["']/);
        const imgSrcMatches = [
          ...content.matchAll(/<img[^>]*\s+src\s*=\s*["']([^"']+)["']/g),
        ];

        const images = [];
        if (imageSrcMatch) {
          images.push({ loc: imageSrcMatch[1] });
        } else {
          for (const m of imgSrcMatches) {
            images.push({ loc: m[1] });
          }
        }

        let urlPath = relPath
          .replace(/\.vue$/, "")
          .replace(/\/index$/, "")
          .replace(/^index$/, "/");
        urlPath = urlPath.replace(/_([^/]+)/g, ":$1");
        if (!urlPath.startsWith("/")) urlPath = "/" + urlPath;

        results.push({
          loc: urlPath,
          lastmod: getGitLastModified(fullPath),
          images,
        });
      }
    }

    return results;
  }

  return walk(pagesDir);
}

const data = scanPages();
const outputPath = join(rootDir, "sitemap-data.json");
writeFileSync(outputPath, JSON.stringify(data, null, 2));
console.log(`Generated sitemap-data.json with ${data.length} entries.`);
for (const entry of data) {
  console.log(`  ${entry.loc} -> ${entry.lastmod || "(no lastmod)"} [${entry.images.length} image(s)]`);
}
