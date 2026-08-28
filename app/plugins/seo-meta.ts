// 全局 SEO 插件：消费各页面 definePageMeta({ title, description, og* }) 中的字段。
// Nuxt 不会自动把这些字段渲染成 meta 标签，之前它们是死代码，
// 导致所有只写了 definePageMeta 的页面 SSR 输出空 <title>。
export default defineNuxtPlugin(() => {
  const route = useRoute();
  const siteUrl = "https://chinese-culture.ikber.cc";

  const meta = () => route.meta as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" && v ? v : undefined);
  const absolute = (p?: string) =>
    !p ? undefined : p.startsWith("http") ? p : `${siteUrl}${p}`;

  // 部分 meta title 自带站点后缀，配合 titleTemplate 会重复，先剥掉
  const stripSuffix = (t: string) =>
    t.replace(/\s*[-|]\s*Chinese Culture Explorer\s*$/i, "");

  useSeoMeta({
    title: () => {
      const t = str(meta().title);
      return t ? stripSuffix(t) : undefined;
    },
    description: () => str(meta().description),
    ogTitle: () => str(meta().ogTitle) || (str(meta().title) ? stripSuffix(str(meta().title)!) : undefined),
    ogDescription: () => str(meta().ogDescription) || str(meta().description),
    ogType: () =>
      str(meta().ogType) ||
      (route.path.startsWith("/articles/") ? "article" : "website"),
    ogImage: () => absolute(str(meta().ogImage)),
    twitterCard: () => str(meta().twitterCard) || "summary_large_image",
    twitterTitle: () =>
      str(meta().twitterTitle) ||
      str(meta().ogTitle) ||
      (str(meta().title) ? stripSuffix(str(meta().title)!) : undefined),
    twitterDescription: () =>
      str(meta().twitterDescription) ||
      str(meta().ogDescription) ||
      str(meta().description),
    robots: () => str(meta().robots),
  });
});
