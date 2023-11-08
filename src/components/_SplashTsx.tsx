
import OrtfCrtTv from "~/components/OrtfCrtTv";
// import { TwitchPlayer } from "~/components/TwitchPlayer"; // <TwitchPlayer client:only="preact"/>
import { TwitchPlayerX } from "~/components/TwitchPlayerX";
// import GitHubCorner from "./github-corner.astro";
import GitHubCorner from "~/components/GithubCorner";

export default function SplashTsx () {
return (
<section class="relative h-full bg-black">
  {// <GitHubCorner client:only="preact" />
  }
  <GitHubCorner />
  <div class="relative grid h-full place-items-center sm:grid-cols-1">
    <OrtfCrtTv />
    {//<!-- // <TwitchPlayerX client:load /> -->
    }
    {// </div><TwitchPlayerX channel="Justin_Curieux" client:only="preact" />
    }
    <TwitchPlayerX channel="Justin_Curieux" />
  </div>
</section>
)
}