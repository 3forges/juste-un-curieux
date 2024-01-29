import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import preact from "@astrojs/preact";

export const baseURL = `/juste-un-curieux`
// https://astro.build/config
export default defineConfig({
  site: "https://hurt-place.surge.sh",
  //base: `${baseURL}`,
  integrations: [tailwind(), icon(), preact({ compat: true })]
});
