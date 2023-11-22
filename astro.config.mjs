//import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import { ImageOutputFormat } from "astro";

// import { imageResizingService, justinFormat } from "~/src/build/ImageResizeService";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), preact()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  experimental: { assets: true },

});