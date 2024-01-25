import { useEffect } from 'preact/hooks'
import { useState, useRef, JSX, Children } from 'preact/compat'
import { Share2Icon } from 'lucide-preact'
import type { FunctionalComponent } from 'preact'
//import { collections, social } from "~/content/config"
import {
  TwitchSocialMenuItem,
  YoutubeSocialMenuItem,
  FacebookSocialMenuItem,
  DiscordSocialMenuItem
} from './SocialListChildren'
export interface SocialCornerUpChildrenProps {
  urlOfLinkToShare?: string
  name?: string
  // children: JSX.Element[]
  children?: JSX.Element[],
  theme?: any,
}
const doesButtonRoll = true
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


// export const SocialCornerUpChildren: FunctionalComponent<SocialCornerUpChildrenProps> = ( { urlOfLinkToShare, name, children = <></> }: SocialCornerUpChildrenProps): JSX.Element => {
export const SocialCornerUpChildren: FunctionalComponent<SocialCornerUpChildrenProps> = ( { urlOfLinkToShare, name, children = [
  <TwitchSocialMenuItem />,
  <YoutubeSocialMenuItem />,
  <FacebookSocialMenuItem/>,
  <DiscordSocialMenuItem />
] }: SocialCornerUpChildrenProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isUp, setIsUp] = useState<boolean>(true)
  const menuCompo = useRef<HTMLDivElement>(null)

  //console.log(socials, children)

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


        {/*
          Children.forEach(children, (child, index) => {
              console.log(`[SocialCornerUpChildren] - Loop over MainLayout children, chil no.${index} : `, child);
              return (child);
            })
        */
        }

{children.map((child: JSX.Element ) => {
  return child
          })}

        </div>        
      </div>
    </>
  )
}
