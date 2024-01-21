import { useState } from "preact/hooks"
import { videos } from "./videosUrls"
import { ArrowBigLeft, ArrowBigRight, StepBack, StepForward } from 'lucide-preact'

const paginationItemsNumber = 5 

export default function VideoGallery() {
  const [pagination, setPagination] = useState<number>(0) 
  // ELAPSED CALCULUS
  videos.map( (item, index) => {
    const now = new Date().getTime()
    var newDate = new Date(item.date.split('/').reverse().join('/')).getTime()
    
    const elapsedTest = (now - newDate) / 1000 / 3600 / 24
    if (elapsedTest < 0) {
      videos[index].elapsed = Math.floor(elapsedTest) + " heures"
    }
    else if (elapsedTest < 31) {
      videos[index].elapsed = Math.floor(elapsedTest) + " jours"
    }
    else if (elapsedTest < 365) {
      videos[index].elapsed = Math.floor(elapsedTest/30.5) + " mois"
    }
    console.log(item.date, " => ", videos[index].elapsed)
  })
  const videoList = videos.slice(0,-1).slice(pagination * paginationItemsNumber, (pagination * paginationItemsNumber) + paginationItemsNumber)
  const lastVideo = videos.slice(-1)[0]
  
  const [playingVideo, setPlayingVideo] = useState(lastVideo)
  // const elapsed: any = []

  return(
    <div class="grid place-items-center">
      <div class="m-2 max-w-fit min-w-[332px]">
        {/* derniere video || playingVideo */}
        <div class="
          text-white bg-black rounded-t-lg 
          p-2 min-w-[332px] h-[46px] 
          grid grid-cols-1 
          place-items-start px-6
        "></div>        
        <div class="border-black border-2 w-full margin-mx-auto flex flex-col place-content-center">
          <iframe 
            src={`https://www.youtube.com/embed/${playingVideo.url}?si=BUW-Hf9r-yCHLET&rel=0`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            class="p-4 shrink grow h-[700px]"
            allowFullScreen>
          </iframe>
          <div class="text-xs flex flex-raw mb-12">
            <div class="mx-8">{playingVideo.title}</div>
            <div class="mx-8">{playingVideo.elapsed}</div>
          </div>
        </div>
        {/* pagination navigation */}
        <div class="
          text-white bg-black  
          p-2 min-w-[332px] 
          grid grid-cols-1 
          place-items-end md:px-6
        ">
          <div class="flex flex-row">
            { pagination > 0 
              && <StepBack class="hover:cursor-pointer translate-y-1" onClick={() => {setPagination(pagination - 1)}} />
            }
            {pagination + 1} / {Math.ceil((videos.length-1)/paginationItemsNumber)} 
            { pagination < Math.ceil((videos.length-1)/paginationItemsNumber) - 1 
              && <StepForward class="hover:cursor-pointer translate-y-1" onClick={() => {setPagination(pagination + 1)}} />
              || <span class="px-[12px]"></span>
            }
          </div>
        </div>
        {/* video gallery */}
        <div class={`
          border-black border-2 rounded-b-lg 
          max-w-fit margin-mx-auto mx-auto min-w-[452px]
          grid place-items-center lg:place-items-stretch grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lgxl:grid-cols-3 
          ${ paginationItemsNumber > 3 && "xxl:grid-cols-4" }
        `}>
        {
          videoList.map( (item, index) => {
            return (
              <div class="m-4 hover:cursor-pointer" onMouseDown={ () => {
               setPlayingVideo(item)
              }}>
                <iframe 
                  src={`https://www.youtube.com/embed/${item.url}?si=BUW-Hf9r-yCHLET&rel=0`} 
                  title={item.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  style="pointer-events: none"
                  allowFullScreen
                  class=""
                  >
                </iframe>
                <div class="text-xs w-max-[300px] min-w-[300px] mt-2">
                  <div class="mx-2 text-xs w-[250px] whitespace-pre-wrap break-words" >{item.title}</div>
                  <div class="mx-2">il y a {videoList[index].elapsed}</div>
                </div>
              </div>
            )
          }
        )}
        </div>
      </div>
    </div>
  )
}