import styles from './PlayLiveButton.module.css'
import { Icon } from "astro-icon";

export interface PlayLiveButtonProps {
    onClick: any;
    altText?: string;
    text?: string;
	link_url?: string;
	description?: string;
	social_icon: string;	
}
export function PlayLiveButton(props: PlayLiveButtonProps) {



    return (
        <>
			<div style={styles}>
				<button alt={props.altText?props.altText:"Play The Live!"} class="w-24 h-24 rounded-full bg-blue-500 focus:outline-none" onClick={props.onClick}>

					<i class="fa fa-play fa-2x text-white" id="play-btn"></i>
					{props.text?props.text:""}
				</button>

				<a
					class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-current p-4"
					href={props.link_url}
				>
					<span class="relative flex h-3 w-3"  style={styles}>
						<span class="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
					</span>
					<span class="sr-only">{props.description}</span>
					<Icon class="h-full" name={props.social_icon} />
				</a>
			</div>

        </>
    )
}


































