import { urls } from "./videosUrls"

export default function VideoGallery() {
  return(
    <>
      {
        urls.map( (url: string) => {
          // return <a href={`https://www.youtube.com/watch?v=${url}`}>{url}</a>
          return (
            <iframe width="560" height="315" 
              src={`https://www.youtube.com/embed/${url}?si=BUW-Hf9r-yCHLET`} 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          )
        }
      )}
    </>
  )
}