// import React from "preact/compat";
import { TwitchIcon, YoutubeIcon, FacebookIcon, Share2Icon } from 'lucide-preact'
import { useState } from 'preact/compat'; // const [isOpen, setIsOpen] = useState<boolean>(true); // onClick={() => props.setIsOpen(true)}
import DiscordIcon from "./DiscordIcon"
export interface SocialCornerUpProps {
  urlOfLinkToShare: string
  name: string
}

export default function SocialCornerUp( { urlOfLinkToShare = `https://www.twitch.tv/Justin_Curieux`, name}: SocialCornerUpProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false); // onClick={() => props.setIsOpen(true)}

  const onClickHandler = () => {
    console.info(`DRAWER JUSTIN SOCIAL`)
    setIsOpen(!isOpen);
  }
  return (
    <> 
      {// <!-- https://github.com/tholman/github-corners -->
      }

      <div class="relative ml-3 px-2 m-3 mr-6 separateur scroll-ml-14 origin-[right_center] scale-1 transition-all duration-500">
        <div>
          <button 
            onClick={onClickHandler} 
            type="button"
            class="hover:cursor-pointer p-1 relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
        {isOpen &&
        <div 
          class="absolute bottom-[75px] xl:bottom-[70px] right-7 md:right-0 lg:right-0 xl:right-0 2xl:right-0 z-10 mt-2 rounded-md bg-orange-500 py-1 shadow-lg ring-1 ring-orange ring-opacity-5 focus:outline-none" role="menu" tabIndex={-1}>
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
              fill="#ffffff" 
              className="h-18 w-18 m-2 p-1 rounded-full"
            />
          </a>
        </div>
        }
      </div>

    </>

  );
}

