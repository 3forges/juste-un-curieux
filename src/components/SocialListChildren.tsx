//import { h } from 'preact'
import { TwitchIcon, YoutubeIcon, FacebookIcon, LucideIcon, LucideProps } from 'lucide-preact'
import DiscordIcon from "./DiscordIcon"
import {v4 as uuidv4} from 'uuid';
import { useState } from 'preact/hooks';

const iconSize: number = 48
const doesButtonRoll = true


/**
 * 
 * ------------------------
 * -- TwitchSocialMenuItem
 * ------------------------
 ****/

export interface TwitchSocialMenuItemProps {
  urlOfLinkToShare?: string;
  size?: number,
  strokeWidth?: number,
  stroke?: string,
  viewBox?: string,
  alt?: string,
  className?: string,
}

export const TwitchSocialMenuItem = ({
  urlOfLinkToShare = 'https://example.com',
  size=iconSize-12,
  strokeWidth=2,
  stroke=`currentColor`,
  viewBox="-2 -4 32 32",
  alt="Share",
  className="m-1 p-1 rounded-full",
}: TwitchSocialMenuItemProps) =>  {
  const randomUuid = uuidv4();
  const [isUp, setIsUp] = useState(true)
  return (
    <a 
      href={`${urlOfLinkToShare}`}
      target="_blank"
      role="menuitem" 
      class={`transition-rotate duration-0 ease-in-out absolute rotate-[${isUp?`0deg`:`-180deg`}] bottom-[10px] -right-[50px]`}
      id={`user-menu-bottom-discord-${randomUuid}`}
    >
      <TwitchIcon 
        size={size}
        strokeWidth={strokeWidth}
        stroke={stroke}
        viewBox={viewBox}
        alt={alt}
        className={className}
      />
      <span class="sr-only">Twitch</span>
    </a>
  )
}



export const TwitchSocialBurgerMenuItem = ({
  urlOfLinkToShare = 'https://example.com',
  size=iconSize-12,
  strokeWidth=2,
  stroke=`currentColor`,
  viewBox="-2 -4 32 32",
  alt="Share",
  className="m-1 p-1 rounded-full",
}: TwitchSocialMenuItemProps) =>  {
  const randomUuid = uuidv4();
  // const [isUp, setIsUp] = useState(true)
  return (

    <>

        <a
            href={`${urlOfLinkToShare}`}
            target="_blank"
            role="menuitem"
            class={`block text-center`}
            id={`user-menu-bottom-twitch`}
          >
          <span class="flex flex-row items-center">
            <TwitchIcon 
            size={size}
            strokeWidth={strokeWidth}
            stroke={stroke}
            viewBox={viewBox}
            alt={alt}
            className={className}
            />
            Twitch
          </span>
        </a>
    </>
  )
}








/**
 * 
 * ------------------------
 * -- YoutubeSocialMenuItem
 * ------------------------
 ****/

export interface YoutubeSocialMenuItemProps {
  urlOfLinkToShare?: string;
  size?: number,
  strokeWidth?: number,
  stroke?: string,
  viewBox?: string,
  alt?: string,
  className?: string,
}
export const YoutubeSocialMenuItem = ({
  urlOfLinkToShare = 'https://example.com',
  size=iconSize-12,
  strokeWidth=2,
  stroke=`currentColor`,
  viewBox="-2 -4 32 32",
  alt="Share",
  className="m-1 p-1 rounded-full",
}: YoutubeSocialMenuItemProps) =>  {
  const randomUuid = uuidv4();
  const [isUp, setIsUp] = useState(true)
  return (
    <a 
      href={`${urlOfLinkToShare}`}
      target="_blank"
      role="menuitem" 
      class={`transition-rotate duration-0 ease-in-out absolute rotate-[${isUp?`0deg`:`-180deg`}] bottom-[10px] -right-[50px]`}
      id={`user-menu-bottom-discord-${randomUuid}`}
    >
      <YoutubeIcon 
        size={size}
        strokeWidth={strokeWidth}
        stroke={stroke}
        viewBox={viewBox}
        alt={alt}
        className={className}
      />
      <span class="sr-only">YouTube</span>
    </a>
  )
}