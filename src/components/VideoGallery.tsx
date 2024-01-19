import { urls } from "./videosUrls"
import { useState } from "preact/hooks"

export default function VideoGallery() {
  const [pagination, setPagination] = useState<number>(0) 
  const paginationItemsNumber = 6
  const paginationGrid = 4
  const viewurls = urls.slice(pagination * paginationItemsNumber, (pagination * paginationItemsNumber) + paginationItemsNumber)

  const handlePage = () => {
    
  }

  console.log(pagination)
  return(
    <div class="grid place-items-center">
    <div class="m-2 max-w-fit min-w-[332px]">
      
      {/* pagination navigation */}
      <div class="text-white bg-black rounded-t-lg 
                  p-2 min-w-[332px] 
                  grid grid-cols-1 
                  place-items-center md:place-items-start md:px-6">
        <div>
        ■ Gallerie des vidéos: 
        { pagination > 0 && 
        <a class="hover:cursor-pointer" 
          onClick={() => {setPagination(pagination - 1)}}>◄</a> 
          || <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        }
        page: {pagination + 1} / {Math.ceil(urls.length/paginationItemsNumber)} 
        { pagination < Math.ceil(urls.length/paginationItemsNumber) - 1 &&
        <a  class="hover:cursor-pointer" 
            onClick={() => {setPagination(pagination + 1)}}>►</a>
        }
        </div>
      </div>

      {/* video gallery */}
      <div class="border-black border-2 
        max-w-fit margin-mx-auto place-content-center 
        grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lgxl:grid-cols-3 xxl:grid-cols-4"
      >
      <script>
        const thisframe = []
      </script>
      {
        viewurls.map( (url: string, index: number) => {
          return (
            <div>
              <iframe 
                id={`frame${index}`}
                src={`https://www.youtube.com/embed/${url}?si=BUW-Hf9r-yCHLET`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                class="p-4"
                allowFullScreen>
              </iframe>
              <script type="text/javascript">
                {`thisframe[thisframe.length] = document.getElementById('frame'+${index})`}
                console.log(thisframe[thisframe.length-1])
              </script>
            </div>
          )
        }
      )}
      </div>
    </div>
    </div>
  )
}