//import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { useState, useRef } from 'preact/compat'
import { Share2Icon, LucideProps } from 'lucide-preact'
import { socials, social } from "./SocialList"
//import { TwitchIcon, YoutubeIcon, FacebookIcon, LucideIcon } from 'lucide-preact'
//import DiscordIcon from "./DiscordIcon"

export interface SocialCornerUpProps {
  urlOfLinkToShare: string
  name: string
}

/**
 * SOME CONF
 */
// querySelector externilastion from preact functions
const fixedElementHeight: number = document.querySelector('#page-header')?.clientHeight || 0
const effet: string = `
  transition-all
  origin-bottom-center
  ease-in-out 
  duration-300
  transform-gpu
`
const iconSize: number = 48
const socialAsAList: boolean = true

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
          {socialAsAList && socials.map(({link: url, label: label, icon: SocialIcon, bottom: bottom, right: right }: social) => {
            console.log(SocialIcon)
            return (
              <a 
                href={`${url}?${urlOfLinkToShare}`}
                target="_blank"
                role="menuitem" 
                class={`absolute rotate-[${isUp?`0deg`:`-180deg`}] ${bottom} ${right}`}
                id={`user-menu-bottom-${label}-${name}`}>
                {
                  SocialIcon( {
                    size:(label !== "Discord")?iconSize:iconSize-12,
                    strokeWidth:2,
                    stroke:`currentColor`,
                    viewBox:(label !== "Discord")?"-2 -4 32 32":"0 0 640 512",
                    alt:"Share",
                    className:(label !== "Discord")?"m-1 p-1 rounded-full focus:border-none":"m-2 p-2 rounded-full focus:border-none"
                  })
                }
                {/* 
                <SocialIcon
                  size={(label !== "Discord")?iconSize:iconSize-12}
                  strokeWidth={2}
                  stroke={`currentColor`}
                  viewBox={(label !== "Discord")?"-2 -4 32 32":"0 0 640 512"}
                  alt="Share"
                  className={(label !== "Discord")?"m-1 p-1 rounded-full focus:border-none":"m-2 p-2 rounded-full focus:border-none"}
                />
                */}
                <span class="sr-only">{label}</span>
              </a>
            )
          })}
        </div>        
      </div>
    </>
  )
}
