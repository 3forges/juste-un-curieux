// 1. Import utilities from `astro:content`
// 
import { z, defineCollection } from 'astro:content'
// 2. Define a `type` and `schema` for each collection
/**
 * social_platform: youtube # "twitch" | "twitter" | "tiktok"
 * display_name: "Histoire de la Russie"
 * youtube_default_playlist_id: "B96JKl2IEv0"
 * youtube_channel_id: "UCRCe4BKXU3gNhwAGwheHYyw"
 * # logo_image: ./src/assets/youtube/channels/logos/histoire_de_l_empire.webp
 * logo_image: ./src/assets/youtube/channels/logos/histoire_de_l_empire.png
 */
const channelsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    social_platform: z.enum(["youtube", "twitch", "twitter", "tiktok"]),
    display_name: z.string(),
    youtube_default_playlist_id: z.string(),
    youtube_channel_id: z.string(),
    tags: z.array(z.string()),
    logo_image: z.object({
      src: z.string(),
      alt: z.string().optional()
    }),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'channels': channelsCollection,
  //socials,
};
