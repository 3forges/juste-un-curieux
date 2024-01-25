//import { h } from 'preact'
import { TwitchIcon, YoutubeIcon, FacebookIcon } from 'lucide-preact'
import DiscordIcon, { type DiscordIconProps} from "./DiscordIcon"

export interface social {
  link: string
  iconName: string
  returnIcon?: Function
  label: string
  bottom: string
  right: string
}

export const socials: social[] = [
  {
    link: "https://www.twitch.tv/Justin_Curieux",
    returnIcon: (props: any) => {
      //return h(TwitchIcon, {...props})
      return (<TwitchIcon {...props} />)
    },
    iconName: 'twitch',
    label: "Twitch",
    bottom: "-bottom-[20px]",
    right: "right-[20px]"
  },
  {
    link: "https://www.youtube.com/@justincurieux31",
    returnIcon: (props: any) => {
      //return h(YoutubeIcon, {...props})
      return (<YoutubeIcon {...props} />)
    },
    iconName: 'youtube',
    label: "Youtube",
    bottom: "bottom-[10px]",
    right: "-right-[10px]"
  },
  {
    link: "https://www.facebook.com/justin.curieux/",
    returnIcon: (props: DiscordIconProps) => {
      //return h(FacebookIcon, {...props})
      return (<FacebookIcon {...props} />)
    },
    iconName: 'facebook',
    label: "Facebook",
    bottom: "bottom-[10px]",
    right: "-right-[50px]"
  },
  {
    link: "https://discord.com/channels/1054405752422420531/1054405753240305736",
    returnIcon: (props: any) => {
      //return h(DiscordIcon, {...props})
      return (<DiscordIcon {...props} />)
    },
    iconName: 'discord',
    label: "Discord",
    bottom: "-bottom-[15px]",
    right: "-right-[70px]"
  },
]