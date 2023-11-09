// import React from "preact/compat";
import { TwitchIcon, YoutubeIcon, FacebookIcon, Share2Icon } from 'lucide-preact'
import { useState, useRef } from 'preact/compat'; // const [isOpen, setIsOpen] = useState<boolean>(true); // onClick={() => props.setIsOpen(true)}
import DiscordIcon from "./DiscordIcon"
import './SocialCornerUp.module.css';
import { useEffect } from 'preact/hooks'

export interface SocialCornerUpProps {
  urlOfLinkToShare: string
  name: string
  headerHeight: number
}
// scale-0 transition-all duration-500
const effet = `transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`

export default function SocialCornerUp( { urlOfLinkToShare = `https://www.twitch.tv/Justin_Curieux`, name, headerHeight = 40 }: SocialCornerUpProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false); // onClick={() => props.setIsOpen(true)}
  const [isUp, setIsUp] = useState<boolean>(true)
  //const currentColor = "#535353"
  const menuCompo = useRef<any>(null)

  const onClickHandler = () => {
    console.info(`>>>SocialCornerUp JUSTIN SOCIAL`)
    setIsOpen(!isOpen);
  }

  const onLeaveHandler = () => {
    //setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const { innerWidth: width, innerHeight: height } = window;
      let scroll = document.body.scrollTop || document.documentElement.scrollTop
      console.log(`menuCompo.height : ${menuCompo.current.clientHeight}`, menuCompo)
      const d = innerHeight - scroll - headerHeight - menuCompo.current.clientHeight;
      console.log("scroll: ", d)
      // console.log(menuCompo.current.classList)
      if (d < 0) {
        //menuCompo.current.classList.remove("bottom-[80px]")
        //menuCompo.current.classList.add("bottom-[-220px]")
        setIsUp(false)
      } else {
        //menuCompo.current.classList.remove("bottom-[-220px]")
        //menuCompo.current.classList.add("bottom-[80px]")
        setIsUp(true)
      }
    })
  }, [])

  return (
    <> 
      {// <!-- https://github.com/tholman/github-corners -->
      }

      <div 
         id={`social_corner_up`}
        onMouseLeave={onLeaveHandler}
        class="relative ml-3 px-2 m-3 mr-6 separateur scroll-ml-14 origin-[right_center] scale-1 transition-all duration-500">
        <div>
          <button 
            onClick={onClickHandler} 
            type="button"
            class="hover:cursor-pointer p-1 relative flex rounded-full text-sm focus:outline-none "
            id={`user-menu-button-bottom-right${name}`}
            >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">Open share menu</span>
            <Share2Icon
              size={48}
              strokeWidth={4}
              stroke={`currentColor`}
              //viewBox={"-6 -6 36 36"}
              viewBox={"-2 -4 32 32"}
              alt="Share"
              className="h-18 w-18 m-1 p-1 rounded-full"
            />
          </button>
        </div>

        {
          /**
          *     <!--
                  Dropdown menu, show/hide based on menu state.
  
                  Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
                -->
          */
        }
        {/**
         *   <div 
         *     class="absolute top-[-150px] ml-4 right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
         *     role="menu"
         *     aria-orientation="vertical"
         *     aria-labelledby="user-menu-button"
         *     tabIndex={-1}
         *   ></div>
         */}
        {// isOpen &&
        }
        <div
          ref={menuCompo} 
          class={`${effet} ${isOpen?`scale-110`:`scale-0`} absolute ${isUp?`bottom-[80px] xl:bottom-[80x]`:`bottom-[-225px] xl:bottom-[-225px]`} z-10 mt-2 rounded-md bg-orange-500 py-1 shadow-lg ring-1 ring-orange ring-opacity-5 focus:outline-none`} role="menu" tabIndex={-1}>
          {// <!-- Active: "bg-gray-100", Not Active: "" -->
          }

          <a href="https://www.twitch.tv/Justin_Curieux" role="menuitem" class="block" id={`user-menu-bottom-twitch${name}`}>
            <TwitchIcon
              size={48}
              strokeWidth={2}
              stroke={`currentColor`}
              //viewBox={"-6 -6 36 36"}
              viewBox={"-2 -4 32 32"}
              alt="Share"
              className="h-18 w-18 m-1 p-1 rounded-full"
            />
            <span class="sr-only">twitch</span>
          </a>
          <a href="https://www.facebook.com/justin.curieux/" role="menuitem" class="block" id={`user-menu-bottom-youtube${name}`}>
            <YoutubeIcon
              size={48}
              strokeWidth={2}
              stroke={`currentColor`}
              //viewBox={"-6 -6 36 36"}
              viewBox={"-2 -4 32 32"}
              alt="Share"
              className="h-18 w-18 m-1 p-1 rounded-full"
            />
            <span class="sr-only">youtube</span>
          </a>
          <a href="https://www.youtube.com/@justincurieux31" role="menuitem" class="block" id={`user-menu-bottom-facebook${name}`}>
            <FacebookIcon
              size={48}
              strokeWidth={2}
              stroke={`currentColor`}
              //viewBox={"-6 -6 36 36"}
              viewBox={"-2 -4 32 32"}
              alt="Share"
              className="h-18 w-18 m-1 p-1 rounded-full"
            />
            <span class="sr-only">facebook</span>
          </a>
          <a href="https://discord.com/channels/1054405752422420531/1054405753240305736" role="menuitem" class="block" id={`user-menu-bottom-discord${name}`}>
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

