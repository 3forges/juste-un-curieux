// import styles from './LogoSVG.module.css'
// import './LogoSVG.module.css'
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

    // const tailwindCss = `animate-jump-in animate-delay-300 animate-thrice`

    // const tailwindCss = `animate-jump animate-delay-300 animate-twice`
	// const tailwindCss = `animate-infinite animate-jump animate-duration-[2000ms]`
	// const tailwindCss = `animate-infinite animate-jump animate-duration-[1250ms] animate-delay-150 animate-ease-in`
	// const tailwindCss = `animate-infinite animate-shake animate-duration-[1250ms] animate-delay-150 animate-ease-in`
	// const tailwindCss = `animate-once animate-jump animate-duration-[1250ms] animate-delay-[400ms] animate-ease-in`
	// const tailwindCss = `animate-none animate-jump animate-duration-[1250ms] animate-delay-[400ms] animate-ease-in`
	const tailwindCss = `h-full rounded-full hover:shadow-[0_35px_60px_-15px_rgba(200,200,200,0.9)] fill-orange-600`
	// animate-shake
	// const tailwindCss = `animate-infinite animate-spin animate-ease-in-out animate-duration-[1250ms]` // celui là est proche du battement de coeur
	const justin_curieux_global_alt =`Justin Curieux`
	
    return (
        <>
			
			{// <?xml version="1.0" encoding="utf-8"?>
			 // <!-- Generator: Adobe Illustrator 24.1.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
			 // 0 0 720 50 4
			 // 0 0 540 3 78
			 // 0 0 270 18 9
			 // 100 100 540 3 78
			 // viewBox="0 0 540 378"  width="25%" height="25%"
			 // style="enable-background:new 0 0 540 378;"
			 /**
			  * --------------------------------------
			  */
			} 
				<svg alt={`${justin_curieux_global_alt}`} preserveAspectRatio="xMidYMid slice" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
					viewBox="100 50 540 378" className={`${tailwindCss}`} >


						<g fill="rgb(255,96,2)" width="100%" height="100%">
							<path d="M357.19,217.7c-9.33,7.89-18.27,13.62-27.36,17.51c-0.18,0.08-0.37,0.17-0.56,0.26
								c-0.2,0.09-0.49,0.23-0.54,0.24c-2.68,0.49-4.28,2.27-4.76,5.31c-0.57,3.66-1.16,7.31-1.74,10.97c-0.44-0.59-0.86-1.19-1.27-1.8
								c-3.84-5.57-6.6-11.63-7.87-18.32c-1.27-6.63-0.59-13.07,1.66-19.44c2.52-7.14,3.1-14.5,1.74-21.98
								c-0.09-0.49-0.39-1.01-0.74-1.38c-2.16-2.26-4.03-4.69-4.88-7.76c-0.66-2.41-0.43-4.72,1.03-6.81c0.22-0.31,0.66-0.6,1.03-0.65
								c3.47-0.53,6.87-1.25,10.19-2.42c3.34-1.19,6.71-1.27,9.89,0.61c0.86,0.51,1.63,1.18,2.52,1.83c3.08-1.97,6.15-4.01,7.18-8.12
								c0.28,0.71,0.55,1.3,0.77,1.91c2.45,6.79,3.35,13.71,1.33,20.75c-1.07,3.7-1.5,7.44-1.52,11.25c-0.01,2.41,0.27,4.8,1.07,7.1
								c0.66,1.88,1.73,3.43,3.28,4.71C350.6,213.92,353.84,215.9,357.19,217.7z"/>
							<path d="M413,290.61c-0.12,0.08-0.24,0.17-0.37,0.25h-0.06c-0.24-0.04-0.49-0.08-0.74-0.13
								c-0.67-0.11-1.34-0.22-2-0.37c-2.33-0.55-4.57-1.21-6.74-2.01l0.14-1.22c0.14-1.28,0.14-2.53-0.01-3.84l-0.24-2.12l1.93-0.92
								c1.61-0.77,2.84-1.78,3.78-3.09c0.57-0.79,1.02-1.67,1.38-2.7c0.09-0.24,0.16-0.48,0.23-0.73c0.28,1.72,0.56,3.45,0.83,5.18
								c0.31,1.88,0.61,3.77,0.91,5.65C412.36,286.57,412.67,288.58,413,290.61z"/>
							<path d="M421.24,277.12c-0.92,5.89-3.81,10.29-8.24,13.49c-0.12,0.08-0.24,0.17-0.37,0.25h-0.06
								c-0.24-0.04-0.49-0.08-0.74-0.13c-0.63-0.74-1.42-1.37-2.36-1.81c-0.89-0.71-1.97-1.23-3.26-1.46c0.16-1.44,0.17-2.91-0.01-4.5
								c1.97-0.94,3.65-2.26,4.93-4.05c0.72-1,1.31-2.14,1.77-3.45c1.02-2.87,1.09-5.84,0.65-8.83c-0.92-6.27-3.61-11.82-7.07-17.04
								c-0.03-0.05-0.07-0.1-0.1-0.15c-1.71-2.57-3.42-5.12-4.46-8.06c-0.4-1.12-0.7-2.26-0.91-3.41c-1.47-7.86,1.21-16.28,7.24-21.66
								c1.07-0.95,2.3-1.8,3.6-2.38c3.88-1.76,7.9,0.78,8.17,5.05c0.16,2.59-1,4.65-3.34,5.43c-3.54,1.17-5.44,3.75-6.31,7.16
								c-1.18,4.59-0.62,8.94,2.19,12.89c3.89,5.48,6.79,11.4,8.02,18.06C421.48,267.35,421.99,272.23,421.24,277.12z"/>
						</g>
						<g fill="currentColor" >
							<path d="M413,290.61c-0.12,0.08-0.24,0.17-0.37,0.25h-0.06c-0.24-0.04-0.49-0.08-0.74-0.13
								c-0.67-0.11-1.34-0.22-2-0.37c-2.33-0.55-4.57-1.21-6.74-2.01c-5.63-2.04-10.75-4.88-15.43-8.4c-4.41-3.32-8.44-7.24-12.14-11.66
								c-0.27-0.31-0.48-0.77-0.51-1.18c-0.62-8.31-1.2-16.63-1.78-24.95c-0.33-4.6-0.66-9.2-0.99-13.8c-0.03,0-0.07,0.01-0.1,0.01
								c0.24,12.9,0.48,25.8,0.72,38.7H359.2c0.23-12.31,0.46-24.53,0.69-36.75c-0.68,6.52-1.17,13.05-1.63,19.58
								c-0.4,5.72-0.76,11.44-1.18,17.16c-0.03,0.44-0.28,0.93-0.57,1.28c-3.05,3.67-6.35,6.99-9.94,9.91c-0.5,0.42-1.01,0.81-1.52,1.2
								c-3.25,2.5-6.73,4.68-10.47,6.52c-1.2,0.59-2.43,1.15-3.68,1.67c-3.76,1.55-7.64,2.65-11.81,3.28c0.04-0.55,0.04-0.92,0.1-1.28
								c0.66-4.11,1.33-8.22,1.99-12.33c1.19-7.36,2.39-14.71,3.56-22.07c0.74-4.58,1.47-9.16,2.19-13.75c0.24-1.52,0.72-2.53,2.33-2.82
								c0.61-0.12,1.18-0.45,1.76-0.7c10.37-4.44,19.55-10.73,28.12-17.98c0.38-0.32,0.76-0.55,1.16-0.67c0.35-0.12,0.72-0.17,1.14-0.17
								c3.17,0.05,6.34-0.01,9.5,0.05c0.6,0.01,1.28,0.31,1.77,0.67c1.23,0.91,2.35,1.95,3.55,2.9c6.75,5.31,13.8,10.07,21.51,13.74
								c0.07,0.67,0.17,1.33,0.29,2c0.24,1.32,0.59,2.63,1.03,3.87c1.15,3.25,2.96,5.97,4.72,8.61l0.17,0.25
								c1.53,2.3,2.78,4.5,3.77,6.64c0.86,5.28,1.71,10.56,2.55,15.85c0.28,1.72,0.56,3.45,0.83,5.18c0.31,1.88,0.61,3.77,0.91,5.65
								C412.36,286.57,412.67,288.58,413,290.61z"/>
							<path d="M392.28,296c-11.07-5.99-18.19-14.87-22.07-26.5c-0.74,0-1.47,0-2.39,0c0.34,1.04,0.63,2.02,0.99,2.97
								c2.48,6.62,6.15,12.48,11.21,17.42c0.93,0.9,1.6,1.8,1.62,3.13c0.01,0.7,0.18,1.39,0.32,2.36c-8.45-6.79-13.35-15.26-14.52-25.84
								c-0.23-0.04-0.41-0.08-0.58-0.09c-2.22-0.06-2.23-0.06-2.54,2.12c-1.09,7.54-4.37,14.01-9.55,19.54
								c-1.36,1.45-2.87,2.75-4.45,4.02c0.21-1.92,0.09-3.73,1.73-5.29c5.55-5.28,9.35-11.72,11.78-18.98c0.14-0.42,0.24-0.85,0.36-1.26
								c-0.12-0.07-0.18-0.13-0.24-0.14c-2.03-0.1-2.02-0.1-2.71,1.78c-3.81,10.35-10.39,18.4-19.97,23.93
								c-0.41,0.24-0.83,0.45-1.47,0.79c0.28-1.78,0.48-3.32,0.8-4.84c0.07-0.34,0.57-0.64,0.93-0.87c7.73-5.01,13.99-11.42,18.62-19.41
								c0.23-0.41,0.44-0.83,0.67-1.27c-1.44-0.37-2.46-0.09-3.25,1.13c-1.1,1.68-2.28,3.31-3.51,4.9
								c-6.35,8.15-14.41,14.04-23.99,17.88c-0.26,0.11-0.55,0.17-0.94,0.28c0.12-1.04,0.24-1.98,0.37-3.05
								c-0.75,0.24-1.36,0.39-1.94,0.63c-0.23,0.1-0.51,0.37-0.55,0.6c-0.29,1.71-0.53,3.44-0.84,5.46c2.15-0.81,4.1-1.48,6-2.28
								c1.91-0.8,3.78-1.72,5.79-2.65c-0.37,2.47-0.73,4.85-1.11,7.43c4.04-1.63,7.61-3.75,11.16-6.38c-0.35,2.39-0.66,4.53-1,6.9
								c9.52-6.05,16.1-14.03,19.03-24.9c2.92,10.85,9.51,18.86,19.03,24.9c-0.34-2.34-0.65-4.48-0.94-6.54
								c3.61,2.08,7.17,4.12,10.74,6.17c0.11-0.1,0.22-0.19,0.33-0.29c-0.35-2.39-0.7-4.79-1.04-7.13c3.88,1.63,7.71,3.23,11.81,4.96
								c-0.35-2.15-0.6-3.95-0.97-5.72c-0.06-0.29-0.63-0.52-1-0.69c-0.43-0.19-0.9-0.29-1.46-0.46c0.15,1.05,0.29,1.99,0.45,3.06
								c-0.37-0.1-0.64-0.14-0.89-0.24c-11.06-4.44-20.02-11.5-26.64-21.45c-0.31-0.46-0.7-0.88-0.97-1.36
								c-0.72-1.29-1.81-1.49-3.28-1.13c0.65,1.11,1.25,2.21,1.92,3.26c4.47,7.02,10.24,12.76,17.22,17.27
								c0.76,0.49,1.28,0.98,1.35,1.96C391.78,293.29,392.04,294.5,392.28,296z"/>
						</g>


				</svg>
        </>
    )
}
