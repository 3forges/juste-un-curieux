// import styles from './LogoSVG.module.css'

/**
 * Astro Icon cannot be used into 
 * a React / Preact component, it is 
 * designed to be compiled as an 
 * '*.astro', not as an '*.tsx' 
 */
// import { Icon } from "astro-icon";

export interface LogoSVGProps { // (props: LogoSVGProps)
}
export const defaultDescription = `Play Live Button`

export default function LogoSVG() {

    // const tailwindCssAnimation = `animate-jump-in animate-delay-300 animate-thrice`

    // const tailwindCssAnimation = `animate-jump animate-delay-300 animate-twice`
	// const tailwindCssAnimation = `animate-infinite animate-jump animate-duration-[2000ms]`
	// const tailwindCssAnimation = `animate-infinite animate-jump animate-duration-[1250ms] animate-delay-150 animate-ease-in`
	// const tailwindCssAnimation = `animate-infinite animate-shake animate-duration-[1250ms] animate-delay-150 animate-ease-in`
	// const tailwindCssAnimation = `animate-once animate-jump animate-duration-[1250ms] animate-delay-[400ms] animate-ease-in`
	// const tailwindCssAnimation = `animate-none animate-jump animate-duration-[1250ms] animate-delay-[400ms] animate-ease-in`
	const tailwindCssAnimation = ``
	// animate-shake
	// const tailwindCssAnimation = `animate-infinite animate-spin animate-ease-in-out animate-duration-[1250ms]` // celui là est proche du battement de coeur
	
	
    return (
        <>
			
			<div className={`${tailwindCssAnimation} h-10`} >
			</div>
			{// <?xml version="1.0" encoding="utf-8"?>
			 // <!-- Generator: Adobe Illustrator 24.1.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

			}
			<svg scale="2" class="h-12" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				viewBox="600 600 1000 1000" style="enable-background:new 600 600 1000 1000;">

			<g>
				<path style="stroke: #FF5D01!important; fill: #FF5D01!important;" d="M1364.81,1054.2c-18.91-44.7-50.44-82.66-90.16-109.49c-39.7-26.84-87.7-42.53-139.18-42.52
					c-11.35,0-20.55,9.2-20.55,20.55c0,11.35,9.2,20.55,20.55,20.55v0c28.75,0,56.03,5.82,80.88,16.32
					c37.27,15.76,69.04,42.14,91.45,75.31c22.41,33.19,35.47,73.07,35.48,116.18c0,28.75-5.82,56.03-16.32,80.88
					c-15.76,37.27-42.14,69.04-75.31,91.45c-33.19,22.41-73.07,35.47-116.18,35.48c-0.2,0-0.4,0-0.6,0
					c23.11-61.53,53.79-182.73-3.35-298.15C1053.71,911.11,902.47,903.7,902.47,903.7c-1.95-78.5,67.07-45.25,56.07-120.15
					c-0.85-5.81-3.43-11.37-7.74-15.34c-8.8-8.11-14.44-22.38-19.33-50.93c-5.87-34.26-79.3-47.97-79.3-47.97
					c4.89-47.48-15.13-69.31-15.13-69.31c-284.5,248.37-185.9,407.62-162.24,564.45c25.9,127.48-5.93,188.74-5.93,188.74
					c-49.05,4.01-49.49,46.82-49.49,46.82h497.48h0c6.51,0,12.72,0,18.63,0c0,0,0,0,0.01,0c0.01,0,0.02,0,0.03,0
					c19.49,0,35.53,0,46.63,0c6.63,0,12.52-3.16,16.27-8.04c11.68-3.04,23.02-6.9,33.96-11.53c44.7-18.91,82.66-50.44,109.49-90.16
					c26.84-39.7,42.53-87.7,42.52-139.18C1384.38,1116.78,1377.42,1083.99,1364.81,1054.2z"/>
				<polygon style="stroke: black!important; fill: black!important;" points="910.51,1177.84 816.76,1399.47 839.15,1399.3 910.51,1230.55 981.87,1399.3 1004.24,1399.47 	"/>
				<polygon style="stroke: black!important; fill: black!important;" points="910.49,1072.38 771.98,1399.82 794.37,1399.65 910.49,1125.1 1026.61,1399.65 1048.97,1399.82 	"/>
				<path style="stroke: black!important; fill: black!important;" d="M910.48,860.71L910.48,860.71c-37.52,0-71.44,22.3-86.33,56.74L615.62,1400h133.98l140.46-332.1l11.06-26.17l9.35-22.08
					l9.35,22.08l11.06,26.17l140.46,332.1h133.98L996.8,917.45C981.92,883.01,947.99,860.71,910.48,860.71z"/>
			</g>
			</svg>



        </>
    )
}










































