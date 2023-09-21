import { useState } from 'preact/compat'
import { TwitchPlayer } from "~/components/TwitchPlayer"; // <TwitchPlayer client:only="preact"/>
import { PlayLiveButton } from '~/components/PlayLiveButton'
import { TikTokPlayer } from "~/components/TikTokPlayer"; // <TwitchPlayer client:only="preact"/>

// RxJS v6+
import { timer } from 'rxjs';
/*
    timer takes a second argument, how often to emit subsequent values
    in this case we will emit first value after 1 second and subsequent
    values every 2 seconds after
*/
const source = timer(1000, 2000);

// Inspired by https://upmostly.com/tutorials/calling-a-react-component-on-button-click
const twitchChannelName = 'Justin_Curieux';

export interface TwitchPlayerXProps {
    channel: string;
}

export function TwitchPlayerX(props: TwitchPlayerXProps) {

    // const [components, setComponents] = useState<string[]>(['justinastucieux']);
    const [displayButton, setDisplayButton] = useState<boolean>(true);
    
    const [onAir, setOnAir] = useState<boolean>(false);


    //output: 0,1,2,3,4,5......
    // const subscribe = source.subscribe(val => console.log(val));
    const subscribe = source.subscribe(val => {
        // console.log(`Call number # ${val} - Here I should call the Twitch API to find out if yes or no, a live is on.`)
        let areWeOnAirNow: boolean = false;
        /**
         * Calling setOnAir() wil change the state of 
         * the React Component, therefore will trigger a Render
         */
        setOnAir(areWeOnAirNow)
        /**
         * TODO: apply an exponential backoff, using : 
         * https://www.npmjs.com/package/backoff-rxjs
         * https://indepth.dev/posts/1260/power-of-rxjs-when-using-exponential-backoff
         */
    });


    /**
     *  This method will add the Twitch Player when playme is clicked
     */
    function addComponent() {
        // setComponents([...components, `${twitchChannelName}`])
        setDisplayButton(false)
    }
    
    return (
        <>
            
            
                {// <div id="twitch-embed" class= "absolute grid justify-items-center items-center min-w-[80%] min-h-[50%]" style="opacity: 0.3; z-index:5;"></div>
                }
                        {
                            displayButton?<PlayLiveButton onClick={addComponent} description="" altText="Play Me Baby!" social_icon='mdi:twitch'/> :<></>
                        }   
                        {
                        }      
                        {
                            // displayButton?<></>:<TwitchPlayer channel={props.channel}/>
                        }
                        {
                            displayButton?<></>:<TikTokPlayer channel={props.channel}/>
                        }
            
        </>
    )
}