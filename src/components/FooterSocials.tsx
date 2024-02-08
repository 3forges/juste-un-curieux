import { IconContext } from "react-icons";
import { BsYoutube, BsTwitterX, BsWhatsapp, BsReddit, BsTelegram, BsTwitch } from "react-icons/bs";

import { FiFacebook } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

import React from 'preact/compat';
import type { NoSubstitutionTemplateLiteral } from "typescript";
export interface FooterSocialsProps {
  icons_size?: number;
}

export function FooterSocials({ icons_size = 48 }: FooterSocialsProps) {
  return (
    <>
      <IconContext.Provider
    value={{ color: "currentColor", className: "", size: icons_size }}
  >
    <ul class="relative grid grid-cols-2 gap-4 sm:grid-cols-4">
      <li>
        {/* {item} */}

        <a
          class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-current p-4"
          href="#"
        >
          <span class="sr-only">YouTube</span>
          <BsYoutube />
        </a>
      </li>
      <li>
        {/* {item} */}

        <a
          class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-current p-4"
          href="#"
        >
          <span class="sr-only">Twitter</span>
          <BsTwitterX />
        </a>
      </li>
      <li>
        {/* {item} */}

        <a
          class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-current p-4"
          href="#"
        >
          <span class="sr-only">WhatsApp</span>
          <BsWhatsapp />
        </a>
      </li>
      <li>
        {/* {item} */}

        <a
          class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-current p-4"
          href="#"
        >
          <span class="sr-only">Reddit</span>
          <BsReddit />
        </a>
      </li>
      <li>
        {/* {item} */}

        <a
          class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-current p-4"
          href="#"
        >
          <span class="sr-only">Telegram</span>
          <BsTelegram />
        </a>
      </li>
      <li>
        {/* {item} */}

        <a
          class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-current p-4"
          href="#"
        >
          <span class="sr-only">Twitch</span>
          <BsTwitch />
        </a>
      </li>
      <li>
        {/* {item} */}

        <a
          class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-current p-4"
          href="#"
        >
          <span class="sr-only">Facebook</span>
          <FiFacebook />
        </a>
      </li>
      <li>
        {/* {item} */}

        <a
          class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-current p-4"
          href="#"
        >
          <span class="sr-only">TikTok</span>
          <FaTiktok />
        </a>
      </li>

    </ul>
  </IconContext.Provider>
    </>
  )
}

