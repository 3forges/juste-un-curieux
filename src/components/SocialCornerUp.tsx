import { useEffect } from 'preact/hooks'
import { useState, useRef } from 'preact/compat'
import { TwitchIcon, YoutubeIcon, FacebookIcon, Share2Icon } from 'lucide-preact'
import DiscordIcon from "./DiscordIcon"

export interface SocialCornerUpProps {
  urlOfLinkToShare: string
  name: string
}

const effet: string = `
  transition-all
  ease-in-out 
  delay-50 
  hover:-translate-y-1 
  hover:scale-110 
  duration-200
  origin-bottom-center
`

export default function SocialCornerUp( { urlOfLinkToShare = `https://www.twitch.tv/Justin_Curieux`, name }: SocialCornerUpProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isUp, setIsUp] = useState<boolean>(true)
  const menuCompo = useRef<any>(null)

  const onClickHandler = () => {
    console.info(`>>>SocialCornerUp JUSTIN SOCIAL`)
    setIsOpen(!isOpen);
  }

  function evalscroll() {
    //const { innerHeight: height } = window;
    let scroll = document.body.scrollTop || document.documentElement.scrollTop
    const headerHeight = document.querySelector('#page-header')?.clientHeight || 0
    // console.log(menuCompo.current.clientHeight, headerHeight, scroll)
    const d = innerHeight - scroll - headerHeight
    if (d < 0) setIsUp(false)
    else setIsUp(true)
  }

  useEffect(() => {
    document.addEventListener("scroll", evalscroll)
    evalscroll()
  })

  return (
    <> 
      <div 
         id={`social_corner_up`}
        class="relative ml-3 px-2 m-3 mr-6 separateur scroll-ml-14 origin-center scale-1 transition-all duration-500"
      >
        <div>
          <button 
            onClick={onClickHandler} 
            type="button"
            class={`hover:cursor-pointer p-1 relative flex rounded-full text-sm focus:outline-none shadow-[${`currentColor`}] ${isOpen?`shadow-lg bottom-1`:``}`}
            id={`user-menu-button-bottom-right${name}`}
            >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">Open share menu</span>
            <Share2Icon
              size={48}
              strokeWidth={4}
              stroke={`currentColor`}
              viewBox={"-2 -4 32 32"}
              alt="Share"
              className="h-18 w-18 m-1 p-1 rounded-full"
            />
          </button>
        </div>
        <div
          ref={menuCompo} 
          class={`
            absolute 
            origin-bottom
            right-[38px]
            flex
            ${effet} 
            ${isOpen?`scale-110`:`scale-0`} 
            z-10 
            mt-2 
            bg-transparent 
            py-1 
            ${isUp?`rotate-[0deg] bottom-[90px]`:`rotate-[-180deg] bottom-[-30px]`}
            transform-gpu
          `} 
          role="menu" 
          tabIndex={-1}
        >
          <a href="https://www.twitch.tv/Justin_Curieux" role="menuitem" 
            class={`absolute rotate-[${isUp?`-70deg`:`180deg`}] bottom-[-60px] right-[20px]`}
            id={`user-menu-bottom-twitch${name}`}>
            <TwitchIcon
              size={48}
              strokeWidth={2}
              stroke={`currentColor`}
              viewBox={"-2 -4 32 32"}
              alt="Share"
              className="h-18 w-18 m-1 p-1 rounded-full"
            />
            <span class="sr-only">twitch</span>
          </a>
          <a href="https://www.facebook.com/justin.curieux/" role="menuitem" 
            class={`absolute rotate-[${isUp?`-15deg`:`180deg`}] bottom-[-30px] right-[-10px]`}
            id={`user-menu-bottom-youtube${name}`}>
            <YoutubeIcon
              size={48}
              strokeWidth={2}
              stroke={`currentColor`}
              viewBox={"-2 -4 32 32"}
              alt="Share"
              className="h-18 w-18 m-1 p-1 rounded-full"
            />
            <span class="sr-only">youtube</span>
          </a>
          <a href="https://www.youtube.com/@justincurieux31" role="menuitem" 
            class={`absolute rotate-[${isUp?`15deg`:`180deg`}] bottom-[-30px] right-[-50px]`}
            id={`user-menu-bottom-facebook${name}`}>
            <FacebookIcon
              size={48}
              strokeWidth={2}
              stroke={`currentColor`}
              viewBox={"-2 -4 32 32"}
              alt="Share"
              className="h-18 w-18 m-1 p-1 rounded-full"
            />
            <span class="sr-only">facebook</span>
          </a>
          <a href="https://discord.com/channels/1054405752422420531/1054405753240305736" role="menuitem" 
            class={`absolute rotate-[${isUp?`70deg`:`180deg`}] bottom-[-60px] right-[-80px]`}
            id={`user-menu-bottom-discord${name}`}>
            <DiscordIcon 
              fill={`currentColor`}
              classname="h-18 w-18 m-2 p-1 rounded-full"
            />
            <span class="sr-only">discord</span>
          </a>
        </div>        
      </div>
    </>
  );
}
