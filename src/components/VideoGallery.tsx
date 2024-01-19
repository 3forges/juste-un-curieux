import { urls } from "./videosUrls"
import { useState } from "preact/hooks"

export default function VideoGallery() {
  const [pagination, setPagination] = useState<number>(0) 
  const paginationItemsNumber = 4
  const viewurls = urls.slice(pagination,pagination+paginationItemsNumber)
  //const handlePage = (increment: number) => { alert(increment); setPagination(pagination+increment) }
  console.log(pagination)
  return(
    <div class="m-2">
      <div class="text-white bg-black w-auto p-2 rounded-t-lg">
      ■ Gallerie des vidéos: 
      <a onClick={async () => {setPagination(pagination-paginationItemsNumber)}}>◄</a> 
      {pagination + 1} / {urls.length} 
      <a onClick={async () => {setPagination(pagination+paginationItemsNumber)}}>►</a>
      </div>
      <div class="flex flex-row flex-auto p-1 gap-x-4 border-black border-2">
      {
        viewurls.map( (url: string) => {
          // return <a href={`https://www.youtube.com/watch?v=${url}`}>{url}</a>
          return (
            <iframe 
              src={`https://www.youtube.com/embed/${url}?si=BUW-Hf9r-yCHLET`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          )
        }
      )}
      </div>
    </div>
  )
}