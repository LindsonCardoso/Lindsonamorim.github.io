import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://github.com/LindsonCardoso/LindsonCardoso.github.io",
  integrations: [mdx(), sitemap(), tailwind()],
  srcDir: "./src",
  outDir: "./dist",
  extensions: [".js", ".jsx"],
});
