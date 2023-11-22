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

/*

  image: {
    service: {
      // entrypoint: `./.ci/dist/build/ImageResizeService.js`, // 'astro/assets/services/squoosh' | 'astro/assets/services/sharp' | string,
      config: {
        // ... service-specific config. Optional.
        bernard: `michel`,
        maxWidth: 1280,
        options: {
             src: `bidule`,
             format: `webp`,// justinFormat,
             height: 150,
             width: 150,
             quality: "mid",
             // ...attributes // => in the options you pass to getURL(), you can add any custom HTML Attribute, which will be added to the rendered <img> HTML Tag
             pesto: `rocks`
        }
      }
    }
  },

*/