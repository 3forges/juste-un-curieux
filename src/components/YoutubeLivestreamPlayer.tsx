import { useState } from 'preact/compat'
import { TwitchPlayer } from "./TwitchPlayer"; // <TwitchPlayer client:only="preact"/>
import { PlayLiveButton } from '~/components/PlayLiveButton'
// import { TikTokPlayer } from "~/components/TikTokPlayer"; // <TwitchPlayer client:only="preact"/>

// Inspired by https://upmostly.com/tutorials/calling-a-react-component-on-button-click
const twitchChannelName = 'Justin_Curieux';

export interface YoutubeLivestreamPlayerProps {
    youtube_channel_id: string;
}

export function YoutubeLivestreamPlayer({ youtube_channel_id }: YoutubeLivestreamPlayerProps) {

    return (
        <>
            <div class="absolute grid p-10 xs:p-10 sm:p-10 md:p-20 md:mb-10 lg:p-10 xl:p-40 justify-items-center items-center min-w-[80%] min-h-[50%]" style="opacity: 1; z-index:5;" >

                <div class="relative min-w-full flex flex-col place-content-center">
                    <iframe
                        src={`https://www.youtube.com/embed/live_stream?channel=${youtube_channel_id}`}
                        title="YouTube Livestream Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        class="w-full aspect-video"
                        allowFullScreen>
                    </iframe>
                    {
                        // <div class="text-xs flex flex-raw mb-12">
                        //  <div class="mx-8">{lastVideo.title}</div>
                        //  <div class="mx-8">( Il y a {lastVideo.elapsed} )</div>
                        // </div>
                    }
                </div>

            </div>
        </>
    )
}

export interface YoutubePlaylistProps {
    playlist_id: string;
    title?: string;
    allowfullscreen?: boolean
}
export function YoutubePlaylist({ playlist_id, title = `YouTube Playlist`, allowfullscreen = true }: YoutubePlaylistProps) {
    return (
        <>

            <div class="absolute grid p-10 xs:p-10 sm:p-10 md:p-20 md:mb-10 lg:p-10 xl:p-40 justify-items-center items-center min-w-[80%] min-h-[50%]" style="opacity: 1; z-index:5;" >

                <div class="relative min-w-full flex flex-col place-content-center">
                    <iframe
                        src={`https://www.youtube.com/embed/${playlist_id}`}
                        title={title}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        class="w-full aspect-video"
                        allowFullScreen={allowfullscreen}
                    >

                    </iframe>
                </div>

            </div>
        </>
    )
}