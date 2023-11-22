//import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";


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
  image: {
    service: {
      entrypoint: "src/build/imageResizeService.ts", // 'astro/assets/services/squoosh' | 'astro/assets/services/sharp' | string,
      config: {
        // ... service-specific config. Optional.
      }
    }
  },
});