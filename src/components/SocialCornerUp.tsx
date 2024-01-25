import { useEffect } from 'preact/hooks'
import { useState, useRef } from 'preact/compat'
import { Share2Icon } from 'lucide-preact'
//import { collections, social } from "~/content/config"
import { socials, type social } from "./SocialList";
import { Icon } from 'astro-icon/components'

export interface SocialCornerUpProps {
  urlOfLinkToShare: string
  name: string
  menuShareItems: social[]
}

/**
 * SOME CONF
 */
// querySelector externilastion from preact functions
const fixedElementHeight: number = document.querySelector('#page-header')?.clientHeight || 0
const effet: string = `
  transition-rotate
  origin-bottom-center
  ease-in-out 
  duration-500
`
const iconSize: number = 48
const doesButtonRoll = true

export default function SocialCornerUp( { urlOfLinkToShare, name, menuShareItems }: SocialCornerUpProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isUp, setIsUp] = useState<boolean>(true)
  const menuCompo = useRef<HTMLDivElement>(null)

  //console.log(socials, menuShareItems)

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
          scroll-ml-14 
        `}
      >
        <div>
          <button 
            onClick={onClickHandler} 
            type="button"
            class={`hover:cursor-pointer p-1 relative flex rounded-full text-sm ${isOpen?`shadow-gray-400 shadow-lg bottom-1`:``}`}
            id={`user-menu-button-bottom-right${name}`}
            >

            <span class="sr-only">Open share menu</span>
            <Share2Icon
              size={48}
              strokeWidth={4}
              stroke={`currentColor`}
              viewBox={"-2 -4 32 32"}
              alt="Share"
              className={`${doesButtonRoll && "transition-rotate duration-500 ease-in-out"} z-10  h-18 w-18 m-1 p-1 rounded-full ${isUp && doesButtonRoll?`rotate-[0deg]`:`-rotate-[180deg]`}`}
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
            mt-2 
            bg-transparent 
            py-1 
            ${effet} 
            ${isOpen?`scale-125`:`scale-0`} 
            ${isUp?`rotate-[0deg]`:`rotate-[-180deg]`}
          `} 

          tabIndex={-1}
        >
          {socials.map((item: social) => {
            return (
              <a 
                href={`${item.link}?${urlOfLinkToShare}`}
                target="_blank"
                role="menuitem" 
                class={`transition-rotate duration-0 ease-in-out absolute rotate-[${isUp?`0deg`:`-180deg`}] ${item.bottom} ${item.right}`}
                id={`user-menu-bottom-${item.label}-${name}`}>
                { 
                  <Icon name={item.iconName} />
                }
                <span class="sr-only">{item.label}</span>
              </a>
            )
          })}
        </div>        
      </div>
    </>
  )
}
