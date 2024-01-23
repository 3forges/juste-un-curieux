import React from "preact/compat";
import { Cross, CrossIcon, XCircle, X } from 'lucide-preact' // ./node_modules/lucide-preact/dist/lucide-preact.d.ts
/**
 * Striatum Sébastien Bohler - X
 **/
export interface VideoModalState {
  showModal: boolean
  videoUrl: string
}
export interface VideoModalProps {
  modalVideoState: VideoModalState
  setModalVideoState: Function
}
export default function VideoModal(props: VideoModalProps) {
  // const [showModal, setShowModalState] = React.useState(showModalState);
  return (
    <>

      {props.modalVideoState.showModal ? (
        <>
          <div
            className="w-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none">
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={() => props.setModalVideoState({
                    ...props.modalVideoState,
                    showModal: false,
                  })}
                >
                  <span className="text-black opacity-7 h-6 w-6 text-xl block bg-transparent py-0 m-2 rounded-full">
                    <X class={`m-1`} />
                  </span>
                </button>
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">


                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>

                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div class="w-full margin-mx-auto flex flex-col place-content-center rounded-xl">
                    <div class="place-items-center">

                      
                        <iframe
                          src={`https://www.youtube.com/embed/${props.modalVideoState.videoUrl}?si=BUW-Hf9r-yCHLET&rel=0`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          class="w-full"
                          allowFullScreen>
                        </iframe>
                        <div class="text-xs flex flex-raw mb-12">

                          {
                            //<div class="mx-8">{playingVideo.title}</div>
                            //<div class="mx-8">( il y as {playingVideo.elapsed} )</div>
                          }
                        </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setModalVideoState({
                      ...props.modalVideoState,
                      showModal: false,
                    })}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setModalVideoState({
                      ...props.modalVideoState,
                      showModal: false,
                    })}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}