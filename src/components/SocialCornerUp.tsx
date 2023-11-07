// import React from "preact/compat";
import { TwitchIcon, YoutubeIcon, FacebookIcon,Share2Icon } from 'lucide-preact'

import { useState } from 'preact/compat'; // const [isOpen, setIsOpen] = useState<boolean>(true); // onClick={() => props.setIsOpen(true)}
// import styles from '~/components/SocialCornerUp.module.css';
// import SocialCornerUpDrawer from "~/components/SocialCornerUpDrawer";
export interface SocialCornerUpProps {
}

export default function SocialCornerUp() {
  const [isOpen, setIsOpen] = useState<boolean>(true); // onClick={() => props.setIsOpen(true)}
  setIsOpen(false)
  const onClickHandler = () => {
    console.info(`DRAWER JUSTIN SOCIAL`)
    setIsOpen(true);
  }
  return (
    <>
      {// <!-- https://github.com/tholman/github-corners -->
      }

      <div class="relative ml-3 px-2 m-3 mr-6">
        <div>
          <button 

          onClick={onClickHandler} 
          type="button"
          class="hover:cursor-pointer p-1 relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded="false" 
          aria-haspopup="true">
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">Open share menu</span>

            <Share2Icon
              size={48}
              strokeWidth={4}
              stroke={`rgb(245, 119, 10, .9)`}
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
        <div 
          class="absolute top-[-150px] right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
          {// <!-- Active: "bg-gray-100", Not Active: "" -->
          }
          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
        </div>
      </div>

    </>

  );
}

