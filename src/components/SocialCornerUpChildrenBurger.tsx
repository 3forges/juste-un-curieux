import { useEffect } from 'preact/hooks'
import { useState, useRef, JSX, Children } from 'preact/compat'
import { Share2Icon } from 'lucide-preact'
import type { FunctionalComponent } from 'preact'
import {
  TwitchSocialBurgerMenuItem,
  YoutubeSocialBurgerMenuItem
} from './SocialListChildren'
//import { collections, social } from "~/content/config"
/*
{
  socials.map((item) => {
    // for astro console log
    console.log("returnIcon: ", item.returnIcon())
    return (
      <li>
        <a
          href={item.link}
          role="menuitem"
          class={`block text-center`}
          id={`user-menu-bottom-${item.label}`}
        >
          <span class="flex flex-row items-center">
            <item.returnIcon
              size={(item.label!="Discord")?48:36}
              strokeWidth={2}
              stroke={`currentColor`}
              viewBox={(item.label!=="Discord")?"-2 -4 32 32":"0 0 640 512"}
              alt="Share"
              className={(item.label!=="Discord")?"h-20 w-20 m-1 items-center rounded-full p-1":"h-20 w-20 m-5 items-center rounded-full p-5"}
            />
            {item.label}
          </span>
        </a>
      </li>
    );
  })
}
*/

export interface SocialCornerUpBurgerChildrenProps {
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



// export const SocialCornerUpBurgerChildren: FunctionalComponent<SocialCornerUpBurgerChildrenProps> = ( { urlOfLinkToShare, name, children = <></> }: SocialCornerUpBurgerChildrenProps): JSX.Element => {
export const SocialCornerUpBurgerChildren: FunctionalComponent<SocialCornerUpBurgerChildrenProps> = ( { urlOfLinkToShare, name, children = [
  <TwitchSocialBurgerMenuItem />,
  <YoutubeSocialBurgerMenuItem />
] }: SocialCornerUpBurgerChildrenProps): JSX.Element => {
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

    {children.map((child: JSX.Element ) => {
      return child
              })}



    </>
  )
}
