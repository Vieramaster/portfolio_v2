// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://martinviera.dev",

  image: {
    responsiveStyles: true,
  },

  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: /** @type {import("astro").AstroUserConfig["vite"] extends { plugins?: infer P } ? P : never} */ ([
      tailwindcss(),
    ]),
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
      tsconfigPaths: true,
    },
  },
});