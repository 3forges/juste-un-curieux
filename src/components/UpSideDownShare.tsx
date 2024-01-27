import type { JSX } from 'preact'
import { useState, useRef, useEffect } from 'preact/hooks'
import { Share2Icon } from 'lucide-preact'
import { YoutubeIcon, TwitchIcon, FacebookIcon, DiscordIcon } from './ShareIcons'
import React, { Children } from 'preact/compat'

const doesButtonRoll = true
const fixedElementHeight: number = document.querySelector('#page-header')?.clientHeight || 0

const effet: string = `
  transition-rotate
  origin-bottom-center
  ease-in-out 
  duration-500
`

export default function UpSideDownShare(): JSX.Element {
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
  
  return(
    <>
    <div 
        id={`social_corner_up`}
        class={`
          relative 

          h-[48px]
        `}
      > 
        <div>
          <button 
            onClick={onClickHandler} 
            type="button"
            class={`
              hover:cursor-pointer relative flex rounded-full text-sm 
              ${isOpen?`shadow-gray-400 shadow-lg bottom-1`:``}
            `}
            id={`user-menu-button-bottom-right`}
          >
            <span class="sr-only">Open share menu</span>
            <Share2Icon
              size={48}
              strokeWidth={4}
              stroke={`currentColor`}
              viewBox={"-2 -4 32 32"}
              alt="Share"
              className={`
                ${doesButtonRoll && "transition-rotate duration-500 ease-in-out"} 
                z-10 m-1 p-1 rounded-full 
                ${isUp && doesButtonRoll?`rotate-[0deg]`:`-rotate-[180deg]`}
              `}
            />
          </button>
        </div>
        <div
          ref={menuCompo} 
          class={`
            absolute 
            origin-bottom
            right-[38px]
            bottom-[18px]
            flex
            mt-2 
            bg-transparent 
            py-1 
            z-10
            ${effet} 
            ${isOpen?`scale-125`:`scale-0`} 
            ${isUp?`rotate-[0deg]`:`rotate-[-180deg]`}
          `} 
          tabIndex={-1}
        >

          <TwitchIcon  
            size={24}
            isUp={isUp}
            urlOfLinkToShare="https://twitch.com"
            tailwindcss='-bottom-[20px] right-[35px]'
          />
          <YoutubeIcon  
            size={24}
            isUp={isUp}
            urlOfLinkToShare="https://youtube.com"
            tailwindcss='bottom-[20px] right-[10px]'
          />
          <FacebookIcon  
            size={24}
            isUp={isUp}
            urlOfLinkToShare="https://facebook.com"
            tailwindcss='bottom-[20px] -right-[40px]'
          />  
          <DiscordIcon 
            size={24}
            isUp={isUp}
            urlOfLinkToShare="https://discord.com"
            tailwindcss='-bottom-[20px] -right-[60px]'
          />   

        </div>        
      </div>
    </>
  )
}
