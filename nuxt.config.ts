// https://nuxt.com/docs/api/configuration/nuxt-config
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

function scanPages() {
  const pagesDir = resolve(dirname(fileURLToPath(import.meta.url)), "app/pages");

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
        const stats = statSync(fullPath);

        // Extract imageSrc prop (article page pattern)
        const imageSrcMatch = content.match(/imageSrc\s*=\s*["']([^"']+)["']/);
        // Extract direct <img src="...">
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

        // Convert file path to URL path
        let urlPath = relPath
          .replace(/\.vue$/, "")
          .replace(/\/index$/, "/")
          .replace(/^index$/, "/");

        // Handle Nuxt dynamic params: _foo.vue -> :foo
        urlPath = urlPath.replace(/_([^/]+)/g, ":$1");

        if (!urlPath.startsWith("/")) urlPath = "/" + urlPath;

        results.push({
          url: urlPath,
          lastmod: stats.mtime.toISOString(),
          images,
        });
      }
    }

    return results;
  }

  return walk(pagesDir);
}

const scannedPages = scanPages();

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/sitemap"],
  site: {
    name: "Chinese Culture Explorer",
    url: "https://chinese-culture.ikber.cc",
  },
  sitemap: {
    urls: scannedPages.map(({ url, lastmod, images }) => ({
      loc: url,
      lastmod,
      images: images.length > 0 ? images : undefined,
    })),
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || "http://localhost:3000",
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
    },
  },
});
