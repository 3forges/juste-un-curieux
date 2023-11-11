import { useEffect } from 'preact/hooks'
import { useState, useRef } from 'preact/compat'
import { Share2Icon } from 'lucide-preact'
import { socials, social } from "./SocialList"

export interface SocialCornerUpProps {
  urlOfLinkToShare: string
  name: string
}

/**
 * SOME CONF
 */
const fixedElementHeight: number = document.querySelector('#page-header')?.clientHeight || 0
const effet: string = `
  transition-all
  origin-bottom-center
  ease-in-out 
  duration-300
  transform-gpu
`
const iconSize: number = 48

export default function SocialCornerUp( { urlOfLinkToShare, name }: SocialCornerUpProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isUp, setIsUp] = useState<boolean>(true)
  const menuCompo = useRef<HTMLDivElement>(null)

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  }

  function onScrolling() {
    let scroll: number = document.body.scrollTop || document.documentElement.scrollTop
    const headerHeight: number = fixedElementHeight > 0 ? fixedElementHeight : menuCompo.current?.clientHeight || 0
    setIsUp( (window.innerHeight - scroll - headerHeight < 0) ? false : true )
  }

  useEffect(() => {
    onScrolling()
    document.addEventListener("scroll", onScrolling)
  })

  return (
    <> 
      <div 
         id={`social_corner_up`}
        class={`
          relative 
          ml-6 px-2 m-3 mr-6 
          separateur 
          scroll-ml-14 
        `}
      >
        <div>
          <button 
            onClick={onClickHandler} 
            type="button"
            class={`hover:cursor-pointer p-1 relative flex rounded-full text-sm focus:outline-none ${isOpen?`shadow-gray-400 shadow-lg bottom-1`:``}`}
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
            bottom-[38px]
            flex
            z-10 
            mt-2 
            bg-transparent 
            py-1 
            hover:scale-125
            ${effet} 
            ${isOpen?`scale-110`:`scale-0`} 
            ${isUp?`rotate-[0deg]`:`rotate-[-180deg]`}
          `} 
          role="menu" 
          tabIndex={-1}
        >
          {socials.map((item: social) => {
            return (
              <a 
                href={item.link} 
                role="menuitem" 
                class={`absolute rotate-[${isUp?`0deg`:`-180deg`}] bottom-[${item.bottom}px] right-[${item.right}px]`}
                id={`user-menu-bottom-twitch${item.label}`}>
                <item.icon
                  size={iconSize}
                  strokeWidth={2}
                  stroke={`currentColor`}
                  viewBox={"-2 -4 32 32"}
                  alt="Share"
                  className="h-18 w-18 m-1 p-1 rounded-full"
                />
                <span class="sr-only">{item.label}</span>
              </a>
            )
          })}
          {/* 
          <a href="https://www.twitch.tv/Justin_Curieux" role="menuitem" 
            class={`absolute rotate-[${isUp?`0deg`:`-180deg`}] bottom-[-22px] right-[20px]`}
            id={`user-menu-bottom-twitch${name}`}>
            <TwitchIcon
              size={iconSize}
              strokeWidth={2}
              stroke={`currentColor`}
              viewBox={"-2 -4 32 32"}
              alt="Share"
              className="h-18 w-18 m-1 p-1 rounded-full"
            />
            <span class="sr-only">twitch</span>
          </a>
          <a href="https://www.facebook.com/justin.curieux/" role="menuitem" 
            class={`absolute rotate-[${isUp?`0deg`:`-180deg`}] bottom-[8px] right-[-10px]`}
            id={`user-menu-bottom-youtube${name}`}>
            <YoutubeIcon
              size={iconSize}
              strokeWidth={2}
              stroke={`currentColor`}
              viewBox={"-2 -4 32 32"}
              alt="Share"
              className="h-18 w-18 m-1 p-1 rounded-full"
            />
            <span class="sr-only">youtube</span>
          </a>
          <a href="https://www.youtube.com/@justincurieux31" role="menuitem" 
            class={`absolute rotate-[${isUp?`0deg`:`-180deg`}] bottom-[8px] right-[-50px]`}
            id={`user-menu-bottom-facebook${name}`}>
            <FacebookIcon
              size={iconSize}
              strokeWidth={2}
              stroke={`currentColor`}
              viewBox={"-2 -4 32 32"}
              alt="Share"
              className="h-18 w-18 m-1 p-1 rounded-full"
            />
            <span class="sr-only">facebook</span>
          </a>
          <a href="https://discord.com/channels/1054405752422420531/1054405753240305736" role="menuitem" 
            class={`absolute rotate-[${isUp?`0deg`:`-180deg`}] bottom-[-22px] right-[-80px]`}
            id={`user-menu-bottom-discord${name}`}>
            <DiscordIcon 
              strokeWidth={2}
              stroke={`currentColor`}
              size={`${iconSize-5}px`}
              viewBox={"-2 -4 32 32"}
              alt="Share"
              classname="h-18 w-18 m-2 p-1 rounded-full"
            />
            <span class="sr-only">discord</span>
          </a>
  */}
        </div>        
      </div>
    </>
  );}
