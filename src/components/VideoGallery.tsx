import { urls } from "./videosUrls"
import { useState } from "preact/hooks"

export default function VideoGallery() {
  const [pagination, setPagination] = useState<number>(0) 
  const paginationItemsNumber = 3
  const viewurls = urls.slice(pagination,pagination+paginationItemsNumber)

  console.log(pagination)
  return(
    <div class="grid place-items-center">
    <div class="max-w-fit">
      {/* pagination navigation */}
      <div class="m-2 text-white bg-black p-2 rounded-t-lg max-w-fit">
        ■ Gallerie des vidéos: 
        <a onClick={() => {setPagination(pagination-paginationItemsNumber)}}>◄</a> 
        {pagination + 1} / {urls.length} 
        <a onClick={() => {setPagination(pagination+paginationItemsNumber)}}>►</a>
      </div>
      {/* video gallery */}
      <div class="border-black border-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lgxl:grid-cols-2 xxl:grid-cols-3 max-w-fit p-4 margin-mx-auto place-content-center">
      {/* <div class="border-black border-2 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"> */}
      {
        viewurls.map( (url: string) => {
          return (
            <div class="p-4 border-black border-2">
            <iframe 
              src={`https://www.youtube.com/embed/${url}?si=BUW-Hf9r-yCHLET`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              class="grow"
              allowFullScreen>
            </iframe>
            </div>
          )
        }
      )}
      </div>
    </div>
    </div>
  )
}

