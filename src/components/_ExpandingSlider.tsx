import '~/components/ExpandingSlider.module.css'
/**
 * https://codepen.io/rebelchris/pen/oNBLBxV
 */

export interface ExpandingSliderProps {
  thumbnails?: string[]
}

const demoThumbnails = [
  'https://images.unsplash.com/photo-1533468432434-200de3b5d528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
  'https://images.unsplash.com/photo-1586254574632-55e4aaea7793?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1536536982624-06c1776e0ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1502827186494-9f7976a04548?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80',
  'https://images.unsplash.com/photo-1545559054-8f4f9e855781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
]

export const ExpandingSlider = ({ thumbnails = demoThumbnails }: ExpandingSliderProps) => {
    console.log(` > thumbnails: `, thumbnails);
    return (
        <>
            <div class="flex w-full h-full items-center justify-center">
                <div class="flex w-5/6 h-5/6">
                    <div class="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" style="background-image:url('https://images.unsplash.com/photo-1533468432434-200de3b5d528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80')"></div>
                    <div class="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" style="background-image:url('https://images.unsplash.com/photo-1586254574632-55e4aaea7793?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')"></div>
                    <div class="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" style="background-image:url('https://images.unsplash.com/photo-1536536982624-06c1776e0ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')"></div>
                    <div class="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" style="background-image:url('https://images.unsplash.com/photo-1502827186494-9f7976a04548?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80')"></div>
                    <div class="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" style="background-image:url('https://images.unsplash.com/photo-1545559054-8f4f9e855781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')"></div>
                </div>
            </div>
        </>
    )
} 