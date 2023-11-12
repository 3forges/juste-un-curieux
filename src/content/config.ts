import { defineCollection, z } from "astro:content";
/*
import { TwitchIcon, YoutubeIcon, FacebookIcon } from 'lucide-preact'
import type { LucideIcon } from 'lucide-preact'
import DiscordIcon from "../components/DiscordIcon"

export interface social {
  link: string
  returnIcon: Function
  label: string
  bottom: string
  right: string
}

const socials: social[] = [
  {
    link: "https://www.twitch.tv/Justin_Curieux",
    returnIcon: (props: LucideIcon) => { return <TwitchIcon {...props} /> },
    label: "Twitch",
    bottom: "-bottom-[20px]",
    right: "right-[20px]"
  },
  {
    link: "https://www.youtube.com/@justincurieux31",
    returnIcon: (props: LucideIcon) => { return <YoutubeIcon {...props} /> },
    label: "Youtube",
    bottom: "bottom-[10px]",
    right: "-right-[10px]"
  },
  {
    link: "https://www.facebook.com/justin.curieux/",
    returnIcon: (props: LucideIcon) => { return <FacebookIcon {...props} /> },
    label: "Facebook",
    bottom: "bottom-[10px]",
    right: "-right-[50px]"
  },
  {
    link: "https://discord.com/channels/1054405752422420531/1054405753240305736",
    returnIcon: (props: LucideIcon) => { return <DiscordIcon {...props} /> },
    label: "Discord",
    bottom: "-bottom-[15px]",
    right: "-right-[70px]"
  },
]
*/
const showcase = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().min(1),
    image: z.string(),
    url: z.string().url(),
    featured: z.number().min(1).optional(),
  }),
});

export const collections = {
  showcase,
  //socials,
};
