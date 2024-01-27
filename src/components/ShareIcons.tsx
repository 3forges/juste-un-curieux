import type { JSX } from 'preact'
import { IconContext } from "react-icons"
import { BsDiscord } from "react-icons/bs"
import { FiYoutube, FiFacebook, FiTwitch } from "react-icons/fi"

export interface iconProps {
  size?: number,
  isUp?: boolean,
  urlOfLinkToShare?: string, 
  tailwindcss?: string,
}

export function YoutubeIcon( props: iconProps ): JSX.Element {
  return(
    <a 
      href={`${props.urlOfLinkToShare}`}
      target="_blank"
      class={`focus:border-transparent transition-rotate duration-0 ease-in-out absolute rotate-[${props.isUp?`0deg`:`-180deg`}] ${props.tailwindcss}`}
    >
      <IconContext.Provider value={{ color: "currentColor", className: "", size: props.size }} >
        <FiYoutube />
      </IconContext.Provider>
    </a>
  )
}

export function FacebookIcon( props: iconProps ): JSX.Element {
  return(
    <a 
      href={`${props.urlOfLinkToShare}`}
      target="_blank"
      class={`transition-rotate duration-0 ease-in-out absolute rotate-[${props.isUp?`0deg`:`-180deg`}] ${props.tailwindcss}`}
    >
      <IconContext.Provider value={{ color: "currentColor", className: "", size: props.size }} >
        <FiFacebook />
      </IconContext.Provider>
    </a>
  )
}

export function TwitchIcon( props: iconProps ): JSX.Element {
  return(
    <a 
      href={`${props.urlOfLinkToShare}`}
      target="_blank"
      class={`transition-rotate duration-0 ease-in-out absolute rotate-[${props.isUp?`0deg`:`-180deg`}] ${props.tailwindcss}`}
    >
      <IconContext.Provider value={{ color: "currentColor", className: "", size: props.size }} >
        <FiTwitch />
      </IconContext.Provider>
    </a>
  )
}

export function DiscordIcon( props: iconProps ): JSX.Element {
  return (
    <a 
      href={`${props.urlOfLinkToShare}`}
      target="_blank"
      class={`transition-rotate duration-0 ease-in-out absolute rotate-[${props.isUp?`0deg`:`-180deg`}] ${props.tailwindcss}`}
    >
      <IconContext.Provider value={{ color: "currentColor", className: "", size: props.size }} >
        <BsDiscord />
      </IconContext.Provider>
    </a>
  )
}
