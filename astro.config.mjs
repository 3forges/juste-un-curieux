import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import preact from "@astrojs/preact";


// https://astro.build/config
export default defineConfig({
  site: "https://3forges.github.io/juste-un-curieux/",
  integrations: [tailwind(), icon(), preact({ compat: true })]
});