//import { h } from 'preact'
import type { JSX } from 'preact'
import { TwitchIcon, YoutubeIcon, FacebookIcon } from 'lucide-preact'
import DiscordIcon from "./DiscordIcon"
import {v4 as uuidv4} from 'uuid';
import { useState, useRef, useEffect } from 'preact/hooks';
import { Icon } from 'astro-icon/components';

const iconSize: number = 48
const doesButtonRoll = true
const fixedElementHeight: number = document.querySelector('#page-header')?.clientHeight || 0


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
  urlOfLinkToShare = 'https://www.twitch.tv/Justin_Curieux',
  size=iconSize-12,
  strokeWidth=2,
  stroke=`currentColor`,
  viewBox="-2 -4 32 32",
  alt="Share",
  className="m-1 p-1 rounded-full",
}: TwitchSocialMenuItemProps): JSX.Element =>  {
  const randomUuid = uuidv4();
  const [isUp, setIsUp] = useState(true)
  const thisRef = useRef<HTMLAnchorElement>(null)

  function onScrolling() {
    let scroll: number = document.body.scrollTop || document.documentElement.scrollTop
    const headerHeight: number = fixedElementHeight > 0 ? fixedElementHeight : thisRef.current?.clientHeight || 0
    setIsUp( (window.innerHeight - scroll - headerHeight < 0) ? false : true )
  }

  useEffect(() => {
    onScrolling()
    document.addEventListener("scroll", onScrolling)
  })
  return (
    <a 
      ref={thisRef}
      href={`${urlOfLinkToShare}`}
      target="_blank"
      
      class={`transition-rotate duration-0 ease-in-out absolute rotate-[${isUp?`0deg`:`-180deg`}] -bottom-[20px] right-[20px]`}
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

/*
size={(item.label!="Discord")?48:36}
strokeWidth={2}
stroke={`currentColor`}
viewBox={(item.label!=="Discord")?"-2 -4 32 32":"0 0 640 512"}
alt="Share"
className={(item.label!=="Discord")?"h-20 w-20 m-1 items-center rounded-full p-1":"h-20 w-20 m-5 items-center rounded-full p-5"}
*/

export const TwitchSocialBurgerMenuItem = ({
  urlOfLinkToShare = 'https://www.twitch.tv/Justin_Curieux',
  size=iconSize-12,
  strokeWidth=2,
  stroke=`currentColor`,
  viewBox="-2 -4 32 32",
  alt="Share",
  className="h-20 w-20 m-1 items-center rounded-full p-1",
}: TwitchSocialMenuItemProps): JSX.Element =>  {
  const randomUuid = uuidv4();
  // const [isUp, setIsUp] = useState(true)
  return (

        <a
            href={`${urlOfLinkToShare}`}
            target="_blank"

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
  className?: string
}
export const YoutubeSocialMenuItem = ({
  urlOfLinkToShare = 'https://www.youtube.com/@justincurieux31',
  size=iconSize-12,
  strokeWidth=2,
  stroke=`currentColor`,
  viewBox="-2 -4 32 32",
  alt="Share",
  className="m-1 p-1 rounded-full"
}: YoutubeSocialMenuItemProps) =>  {
  const randomUuid = uuidv4();
  const [isUp, setIsUp] = useState(false)
  const thisRef = useRef<HTMLAnchorElement>(null)

  function onScrolling() {
    let scroll: number = document.body.scrollTop || document.documentElement.scrollTop
    const headerHeight: number = fixedElementHeight > 0 ? fixedElementHeight : thisRef.current?.clientHeight || 0
    setIsUp( (window.innerHeight - scroll - headerHeight < 0) ? false : true )
  }

  useEffect(() => {
    onScrolling()
    document.addEventListener("scroll", onScrolling)
  })
  return (
    
      <a 
        ref={thisRef}
        href={`${urlOfLinkToShare}`}
        target="_blank"

        class={`transition-rotate duration-0 ease-in-out absolute rotate-[${isUp?`0deg`:`-180deg`}] bottom-[10px] -right-[10px]`}
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

export const YoutubeSocialBurgerMenuItem = ({
  urlOfLinkToShare = 'https://www.youtube.com/@justincurieux31',
  size=iconSize-12,
  strokeWidth=2,
  stroke=`currentColor`,
  viewBox="-2 -4 32 32",
  alt="Share",
  className="h-20 w-20 m-1 items-center rounded-full p-1",
}: YoutubeSocialMenuItemProps) =>  {
  const randomUuid = uuidv4();
  // const [isUp, setIsUp] = useState(true)
  return (
    
        <a
            href={`${urlOfLinkToShare}`}
            target="_blank"

            class={`block text-center`}
            id={`user-menu-bottom-twitch`}
          >
          <span class="flex flex-row items-center">
            <YoutubeIcon 
            size={size}
            strokeWidth={strokeWidth}
            stroke={stroke}
            viewBox={viewBox}
            alt={alt}
            className={className}
            />
            YouTube
          </span>
        </a>

  )
}

/**
 * 
 * ------------------------
 * -- FacebookSocialMenuItem
 * ------------------------
 ****/

export interface FacebookSocialMenuItemProps {
  urlOfLinkToShare?: string;
  size?: number,
  strokeWidth?: number,
  stroke?: string,
  viewBox?: string,
  alt?: string,
  className?: string
}
export const FacebookSocialMenuItem = ({
  urlOfLinkToShare = 'https://www.facebook.com/justin.curieux/',
  size=iconSize-12,
  strokeWidth=2,
  stroke=`currentColor`,
  viewBox="-2 -4 32 32",
  alt="Share",
  className="m-1 p-1 rounded-full"
}: FacebookSocialMenuItemProps) =>  {
  const randomUuid = uuidv4();
  const [isUp, setIsUp] = useState(false)
  const thisRef = useRef<HTMLAnchorElement>(null)

  function onScrolling() {
    let scroll: number = document.body.scrollTop || document.documentElement.scrollTop
    const headerHeight: number = fixedElementHeight > 0 ? fixedElementHeight : thisRef.current?.clientHeight || 0
    setIsUp( (window.innerHeight - scroll - headerHeight < 0) ? false : true )
  }

  useEffect(() => {
    onScrolling()
    document.addEventListener("scroll", onScrolling)
  })
  return (
    
      <a 
        ref={thisRef}
        href={`${urlOfLinkToShare}`}
        target="_blank"

        class={`transition-rotate duration-0 ease-in-out absolute rotate-[${isUp?`0deg`:`-180deg`}] bottom-[10px] -right-[50px]`}
        id={`user-menu-bottom-discord-${randomUuid}`}
      >
        <FacebookIcon
          size={size}
          strokeWidth={strokeWidth}
          stroke={stroke}
          viewBox={viewBox}
          alt={alt}
          className={className}
        />
        <span class="sr-only">Facebook</span>
      </a>
    
  )
}

export const FacebookSocialBurgerMenuItem = ({
  urlOfLinkToShare = 'https://www.facebook.com/justin.curieux/',
  size=iconSize-12,
  strokeWidth=2,
  stroke=`currentColor`,
  viewBox="-2 -4 32 32",
  alt="Share",
  className="h-20 w-20 m-1 items-center rounded-full p-1",
}: FacebookSocialMenuItemProps) =>  {
  const randomUuid = uuidv4();
  // const [isUp, setIsUp] = useState(true)
  return (

        <a
            href={`${urlOfLinkToShare}`}
            target="_blank"

            class={`block text-center`}
            id={`user-menu-bottom-twitch`}
          >
          <span class="flex flex-row items-center">
            <FacebookIcon 
            size={size}
            strokeWidth={strokeWidth}
            stroke={stroke}
            viewBox={viewBox}
            alt={alt}
            className={className}
            />
            Facebook
          </span>
        </a>
    
  )
}





























































/**
 * 
 * ------------------------
 * -- DiscordSocialMenuItem
 * ------------------------
 ****/

export interface DiscordSocialMenuItemProps {
  urlOfLinkToShare?: string;
  size?: number,
  strokeWidth?: number,
  stroke?: string,
  viewBox?: string,
  alt?: string,
  className?: string
}
export const DiscordSocialMenuItem = ({
  urlOfLinkToShare = 'https://discord.com/channels/1054405752422420531/1054405753240305736',
  size=iconSize-24,
  viewBox = `0 0 640 512`,
  alt = "Discord",
  strokeWidth=2,
  //stroke = "none",
  stroke=`currentColor`,
  className="m-1 p-1 rounded-full"
}: DiscordSocialMenuItemProps) =>  {
  const randomUuid = uuidv4();
  const [isUp, setIsUp] = useState(false)
  const thisRef = useRef<HTMLAnchorElement>(null)

  function onScrolling() {
    let scroll: number = document.body.scrollTop || document.documentElement.scrollTop
    const headerHeight: number = fixedElementHeight > 0 ? fixedElementHeight : thisRef.current?.clientHeight || 0
    setIsUp( (window.innerHeight - scroll - headerHeight < 0) ? false : true )
  }

  useEffect(() => {
    onScrolling()
    document.addEventListener("scroll", onScrolling)
  })
  return (
      <a 
        ref={thisRef}
        href={`${urlOfLinkToShare}`}
        target="_blank"

        class={`p-2 transition-rotate duration-0 ease-in-out absolute rotate-[${isUp?`0deg`:`-180deg`}] -bottom-[15px] -right-[70px]`}
        id={`user-menu-bottom-discord-${randomUuid}`}
      >
        <Icon name="discord" />
        <span class="sr-only">Discord</span>
      </a>
  )
}

export const DiscordSocialBurgerMenuItem = ({
  urlOfLinkToShare = 'https://discord.com/channels/1054405752422420531/1054405753240305736',
  // size=iconSize-12,
  size=iconSize-5,
  viewBox = `0 0 640 512`,
  alt = "Discord",
  strokeWidth=2,
  //stroke = "none",
  stroke=`currentColor`,
  className="h-20 w-20 m-1 items-center rounded-full p-1",
}: DiscordSocialMenuItemProps) =>  {
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
            <DiscordIcon 
            size={size}
            strokeWidth={strokeWidth}
            stroke={stroke}
            viewBox={viewBox}
            alt={alt}
            className={className}
            />
            Discord
          </span>
        </a>
    </>
  )
}