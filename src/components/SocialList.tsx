import { TwitchIcon, YoutubeIcon, FacebookIcon, Share2Icon, LucideIcon } from 'lucide-preact'
import DiscordIcon from "./DiscordIcon"

export interface social {
  link: string
  icon: LucideIcon
  label: string
  bottom: number
  right: number
}

export const socials: social[] = [
  {
    link: "#",
    icon: TwitchIcon,
    label: "Twitch",
    bottom: -22,
    right: 20
  },
  {
    link: "#",
    icon: YoutubeIcon,
    label: "Youtube",
    bottom: 8,
    right: -10
  },
  {
    link: "#",
    icon: FacebookIcon,
    label: "Facebook",
    bottom: 8,
    right: -50
  },
  {
    link: "#",
    icon: DiscordIcon,
    label: "Discord",
    bottom: -22,
    right: -80
  },
]