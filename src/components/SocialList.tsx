import { TwitchIcon, YoutubeIcon, FacebookIcon, Share2Icon, LucideIcon } from 'lucide-preact'
import DiscordIcon from "./DiscordIcon"

export interface social {
  link: string
  icon: LucideIcon
  label: string
  bottom: string
  right: string
}

export const socials: social[] = [
  {
    link: "https://www.twitch.tv/Justin_Curieux",
    icon: TwitchIcon,
    label: "Twitch",
    bottom: "-bottom-[20px]",
    right: "right-[20px]"
  },
  {
    link: "https://www.youtube.com/@justincurieux31",
    icon: YoutubeIcon,
    label: "Youtube",
    bottom: "bottom-[10px]",
    right: "-right-[10px]"
  },
  {
    link: "https://www.facebook.com/justin.curieux/",
    icon: FacebookIcon,
    label: "Facebook",
    bottom: "bottom-[10px]",
    right: "-right-[50px]"
  },
  {
    link: "https://discord.com/channels/1054405752422420531/1054405753240305736",
    icon: DiscordIcon,
    label: "Discord",
    bottom: "-bottom-[20px]",
    right: "-right-[80px]"
  },
]