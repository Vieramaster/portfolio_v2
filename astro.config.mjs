// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://martinviera.dev",

  image: {
    responsiveStyles: true,
  },

  devToolbar: {
    enabled: false,
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Azonix",
      cssVariable: "--font-azonix",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Azonix.woff2"],
            weight: "400",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Fira Code",
      cssVariable: "--font-Firacode",
      fallbacks: ["monospace"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Firacode.woff2"],
            weight: "400",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      fallbacks: ["monospace"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Montserrat.woff2"],
            weight: "400",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "SpaceGrotesk",
      cssVariable: "--font-SpaceGrotesk",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/SpaceGrotesk.woff2"],
            weight: "400 700",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-Inter",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Inter.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "JetBrainsMono",
      cssVariable: "--font-JetBrainsMono",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/JetBrainsMono.woff2"],
            weight: "100 800",
            style: "normal",
          },
        ],
      },
    },
  ],

  vite: {
    plugins:
      /** @type {import("astro").AstroUserConfig["vite"] extends { plugins?: infer P } ? P : never} */ ([
        tailwindcss(),
      ]),
    resolve: /** @type {NonNullable<import("astro").AstroUserConfig["vite"]>["resolve"] & { tsconfigPaths: boolean }} */ ({
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
      tsconfigPaths: true,
    }),
  },
});
