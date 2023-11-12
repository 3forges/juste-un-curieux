import { h } from 'preact'
import { TwitchIcon, YoutubeIcon, FacebookIcon, LucideIcon, LucideProps } from 'lucide-preact'
import DiscordIcon from "./DiscordIcon"

export interface social {
  link: string
  returnIcon: Function
  label: string
  bottom: string
  right: string
}

export const socials: social[] = [
  {
    link: "https://www.twitch.tv/Justin_Curieux",
    returnIcon: (props: LucideIcon) => {
      //return h(TwitchIcon, {...props})
      return (<TwitchIcon {...props} />)
    }
    ,
    label: "Twitch",
    bottom: "-bottom-[20px]",
    right: "right-[20px]"
  },
  {
    link: "https://www.youtube.com/@justincurieux31",
    returnIcon: (props: LucideIcon) => {
      //return h(YoutubeIcon, {...props})
      return (<YoutubeIcon {...props} />)
    },
    label: "Youtube",
    bottom: "bottom-[10px]",
    right: "-right-[10px]"
  },
  {
    link: "https://www.facebook.com/justin.curieux/",
    returnIcon: (props: LucideIcon) => {
      //return h(FacebookIcon, {...props})
      return (<FacebookIcon {...props} />)
    },
    label: "Facebook",
    bottom: "bottom-[10px]",
    right: "-right-[50px]"
  },
  {
    link: "https://discord.com/channels/1054405752422420531/1054405753240305736",
    returnIcon: (props: LucideIcon) => {
      //return h(DiscordIcon, {...props})
      return (<DiscordIcon {...props} />)
    },
    label: "Discord",
    bottom: "-bottom-[15px]",
    right: "-right-[70px]"
  },
]