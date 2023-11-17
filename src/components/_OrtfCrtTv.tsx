// const tailwindCssAnimated = `animate-wiggle-more animate-twice animate-duration-[1250ms] animate-ease-in-out`  
// const tailwindCssAnimated = `animate-wiggle animate-twice animate-duration-[1250ms] animate-ease-in-out`  
// const tailwindCssAnimated = `animate-rotate-y animate-twice animate-duration-[1250ms] animate-ease-in-out`  
//const tailwindCssAnimated = `animate-jump-in animate-once animate-duration-[1250ms] animate-ease-in-out`  
// const tailwindCssAnimated = `animate-none`
const tailwindCssAnimated = ``
// animate-rotate-y
import { Image } from 'astro:assets'
import styles from '~/components/OrtfCrtTv.module.css';
import arcTriomphe from "../assets/ortf/ArcdeTriomphe-1.jpg"


export interface OrtfCrtTvProps {

}

export default function OrtfCrtTv () {

    return (<div class={`${tailwindCssAnimated} relative grid justify-items-center items-center bg-black`}>
        {// <!-- CRT DISPLAY -->
        }
        <Image src={arcTriomphe} alt="Arc de Triomphe, Paris" class="rounded-[50px] filter grayscale blur-[2px] z-1 p-5"/>
        
        {/*
        <img src="/ArcdeTriomphe-1.jpg"
            width={'75%'}
            height={'80%'}
            alt="Arc de Triomphe, Paris"
            class="rounded-[50px] filter grayscale blur-[2px] z-1 p-5"
        />
        */}
        {// <!-- CRT BARS -->
        }
        <div 
            class="absolute z-2 rounded-[50px] opacity-10 min-w-[100%] min-h-full bg-gradient-to-b from-white to-black bg-[length:5px_5px] m-5"
        ></div>
    </div>)
}