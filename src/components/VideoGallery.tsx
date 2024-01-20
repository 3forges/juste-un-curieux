import { useState } from "preact/hooks"
import { videos } from "./videosUrls"
import { ArrowBigLeft, ArrowBigRight, StepBack, StepForward } from 'lucide-preact'

const paginationItemsNumber = 5 

export default function VideoGallery() {
  const [pagination, setPagination] = useState<number>(0) 
  const lastVideo = videos.slice(-1)[0]
  const videoList = videos.slice(0,-1).slice(pagination * paginationItemsNumber, (pagination * paginationItemsNumber) + paginationItemsNumber)

  /*
  // ELAPSED CALCULUS
  videoList.map( (item) => {
    const now = Date()
    var newDate = item.date.split("/").reverse()
    //console.log(item.date, " => ", newDate)
  })
  */

  return(
    <div class="grid place-items-center">
      <div class="m-2 max-w-fit min-w-[332px]">
        {/* last published video */}
        <div class="
          text-white bg-black rounded-t-lg 
          p-2 min-w-[332px] 
          grid grid-cols-1 
          place-items-start px-6
        ">
          <div> ■ dernierement: </div>
        </div>
        
        {/* derniere video */}
        <div class="border-black border-2 w-full margin-mx-auto flex flex-col place-content-center">
          <iframe 
            src={`https://www.youtube.com/embed/${lastVideo.url}?si=BUW-Hf9r-yCHLET`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            class="p-4 shrink grow h-[700px]"
            allowFullScreen>
          </iframe>
          <div class="text-xs flex flex-raw mb-12">
            <div class="mx-8">{lastVideo.title}</div>
            <div class="mx-8">{lastVideo.date}</div>
          </div>
        </div>
        {/* pagination navigation */}
        <div class="
          text-white bg-black  
          p-2 min-w-[332px] 
          grid grid-cols-1 
          place-items-center md:place-items-start md:px-6
        ">
          <div class="flex flex-row">
            ■ Gallerie des vidéos: &nbsp;
            { pagination > 0 && 
                  <StepBack class="hover:cursor-pointer translate-y-1" onClick={() => {setPagination(pagination - 1)}} />
              ||  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            }
            page: {pagination + 1} / {Math.ceil((videos.length-1)/paginationItemsNumber)} 
            { pagination < Math.ceil((videos.length-1)/paginationItemsNumber) - 1 &&
                <StepForward class="hover:cursor-pointer translate-y-1" onClick={() => {setPagination(pagination + 1)}} />
            }
          </div>
        </div>
        {/* video gallery */}
        <div class={`
          border-black border-2 
          max-w-fit margin-mx-auto mx-auto min-w-[452px]
          grid place-items-center lg:place-items-stretch grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lgxl:grid-cols-3 
          ${ paginationItemsNumber > 3 && "xxl:grid-cols-4" }
        `}>
        {
          videoList.map( (items) => {
            return (
              <div class="p-4" onMouseDown={ (e) => {
               //alert(e)
              }}>
                <iframe 
                  src={`https://www.youtube.com/embed/${items.url}?si=BUW-Hf9r-yCHLET`} 
                  title={items.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  onMouseDown={ (e) => {
                    e.preventDefault()
                    e.stopImmediatePropagation()
                    e.preventDefault()
                  }}
                  /* style="pointer-events: none" */ 
                  allowFullScreen
                  >
                </iframe>
                <div class="text-xs w-max-[300px] min-w-[300px]">
                  <div class="mx-2 text-xs w-[250px] whitespace-pre-wrap break-words" >{items.title}</div>
                  <div class="mx-2">{items.date}</div>
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