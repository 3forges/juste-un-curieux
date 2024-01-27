import type { JSX } from 'preact'

export interface iconProps {
  size?: number,
  strokeWidth?: number,
  stroke?: string,
  viewBox?: string,
  alt?: string,
  isUp?: boolean,
  urlOfLinkToShare?: string, 
  tailwindcss?: string,
}

export function YoutubeIcon( props: iconProps ): JSX.Element {
  return(
    <a 
      href={`${props.urlOfLinkToShare}`}
      target="_blank"
      class={`focus:border-transparent transition-rotate duration-0 ease-in-out absolute rotate-[${props.isUp?`0deg`:`-180deg`}] ${props.tailwindcss}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" 
        width={props.size} height={props.size} 
        viewBox={props.viewBox} stroke-width={props.strokeWidth} 
        class={`lucide lucide-youtube focus:border-0`}
        fill="none" stroke="currentColor" 
        stroke-linecap="round" stroke-linejoin="round" 
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
        <path d="m10 15 5-3-5-3z"/>
      </svg>
    </a>
  )
}

export function FacebookIcon( props: iconProps ): JSX.Element {
  return(
    <a 
      href={`${props.urlOfLinkToShare}`}
      target="_blank"
      class={`transition-rotate duration-0 ease-in-out absolute rotate-[${props.isUp?`0deg`:`-180deg`}] ${props.tailwindcss}`}
    >
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} 
      viewBox={props.viewBox} 
      fill="none" stroke="currentColor" 
      stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" 
      class="lucide lucide-youtube"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
    </a>
  )
}


export function TwitchIcon( props: iconProps ): JSX.Element {
  return(
    <a 
      href={`${props.urlOfLinkToShare}`}
      target="_blank"
      class={`transition-rotate duration-0 ease-in-out absolute rotate-[${props.isUp?`0deg`:`-180deg`}] ${props.tailwindcss}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} 
        viewBox={props.viewBox} 
        fill="none" stroke="currentColor" 
        stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" 
        class="lucide lucide-youtube"
      >
        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/>
      </svg>
    </a>
  )
}

export function DiscordIcon( props: iconProps ): JSX.Element {
  return (
    <a 
      href={`${props.urlOfLinkToShare}`}
      target="_blank"
      class={`transition-rotate duration-0 ease-in-out absolute rotate-[${props.isUp?`0deg`:`-180deg`}] ${props.tailwindcss}`}
    >
    <svg xmlns="http://www.w3.org/2000/svg"
      fill="currentColor" viewBox={props.viewBox}
      width={props.size} height={props.size} 
    >
      <g stroke-width={props.strokeWidth}></g>
      <g stroke-linecap="round" stroke-linejoin="round"></g>
      <g>
        <path d="M18.942 5.556a16.299 16.299 0 0 0-4.126-1.297c-.178.321-.385.754-.529 1.097a15.175 15.175 0 0 0-4.573 0 11.583 11.583 0 0 0-.535-1.097 16.274 16.274 0 0 0-4.129 1.3c-2.611 3.946-3.319 7.794-2.965 11.587a16.494 16.494 0 0 0 5.061 2.593 12.65 12.65 0 0 0 1.084-1.785 10.689 10.689 0 0 1-1.707-.831c.143-.106.283-.217.418-.331 3.291 1.539 6.866 1.539 10.118 0 .137.114.277.225.418.331-.541.326-1.114.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595c.415-4.396-.709-8.209-2.973-11.589zM8.678 14.813c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c.001 1.123-.793 2.045-1.798 2.045zm6.644 0c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c0 1.123-.793 2.045-1.798 2.045z"></path>
      </g>
    </svg>
    </a>
  )
}
