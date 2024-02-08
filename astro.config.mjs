import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import robotsTxt from "astro-robots-txt";
// import { astroImageTools } from "astro-imagetools";

console.log(` [astro.config.mjs] --->>> DEPLOYMENT_ASTRO_BASE_CONFIG = [${process.env.DEPLOYMENT_ASTRO_BASE_CONFIG}]`);
const ASTRO_BASE_CONFIG_ARRAY = (process.env.DEPLOYMENT_ASTRO_BASE_CONFIG?process.env.DEPLOYMENT_ASTRO_BASE_CONFIG.split(`/`):[""]);
console.log(` [astro.config.mjs] --->>> ASTRO_BASE_CONFIG_ARRAY = `, ASTRO_BASE_CONFIG_ARRAY);

export const myDEPLOYMENT_ASTRO_SITE_CONFIG = process.env.DEPLOYMENT_ASTRO_SITE_CONFIG;
export const myDEPLOYMENT_ASTRO_BASE_CONFIG = `/${ASTRO_BASE_CONFIG_ARRAY[ASTRO_BASE_CONFIG_ARRAY.length - 1]}`;
console.log(` [astro.config.mjs] --->>> DEPLOYMENT_ASTRO_SITE_CONFIG = [${myDEPLOYMENT_ASTRO_SITE_CONFIG}]`);
console.log(` [astro.config.mjs] --->>> DEPLOYMENT_ASTRO_BASE_CONFIG = [${myDEPLOYMENT_ASTRO_BASE_CONFIG}]`);
// https://astro.build/config
export default defineConfig({
  /*
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  */
  // site: "https://astro-moon-landing.netlify.app/",
  site: `${myDEPLOYMENT_ASTRO_SITE_CONFIG || ''}`,
  base: `${myDEPLOYMENT_ASTRO_BASE_CONFIG || ''}`,
  integrations: [tailwind(), preact({
    compat: true
  }), robotsTxt()/*, astroImageTools*/]
});
