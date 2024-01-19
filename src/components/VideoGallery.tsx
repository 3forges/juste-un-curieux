import { urls } from "./videosUrls"
import { useState } from "preact/hooks"

export default function VideoGallery() {
  const [pagination, setPagination] = useState<number>(0) 
  const paginationItemsNumber = 4
  const viewurls = urls.slice(pagination,pagination+paginationItemsNumber)
  //const handlePage = (increment: number) => { alert(increment); setPagination(pagination+increment) }
  console.log(pagination)
  return(
    <div class="m-2 w-">
      {/* pagination navigation */}
      <div class="text-white bg-black p-2 rounded-t-lg">
        ■ Gallerie des vidéos: 
        <a onClick={() => {setPagination(pagination-paginationItemsNumber)}}>◄</a> 
        {pagination + 1} / {urls.length} 
        <a onClick={() => {setPagination(pagination+paginationItemsNumber)}}>►</a>
      </div>
      {/* video gallery */}
      <div class="border-black border-2 flex flex-auto flex-wrap sm:flex-col md:flex-row">
      {
        viewurls.map( (url: string) => {
          return (
            <iframe 
              src={`https://www.youtube.com/embed/${url}?si=BUW-Hf9r-yCHLET`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              class="m-1 grow"
              allowFullScreen>
            </iframe>
          )
        }
      )}
      </div>
    </div>
  )
}