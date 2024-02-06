import {
  youtube,
  tests,
  youtube_data_api,
  all_youtube_channels,
} from "./../../../config";

import axios from "redaxios";
import { autobotLogger as logger  } from './logger';

const loggerMsgPrefix = ` > YouTubeAutoBot > `



export class YouTubeAutoBot {
  // static pi: number = 3.14;
  static CLIENT_TIMEOUT: number = 3000; // in milliseconds
  constructor(
    readonly channel_id: string,
    // readonly google_api_key: string, // the Google APIs key will be read from the configuration, which reads astro build-time environment variables
    private youTubeDataApiClient: any,
  ) {
    this.channel_id = channel_id;
    // this.google_api_key = google_api_key;
    this.youTubeDataApiClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3/",
      // timeout: 3000,
      headers: {
        // 'Accept': 'application/vnd.GitHub.v3+json',
        //'Authorization': 'token <your-token-here> -- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
      },
    });
  }
  /**
   * This method returns an array containing the ongoing Livestream, if it exists, or an empty array, if there is not ongoing livestream.
   * @returns an array containing the ongoing Livestream, if it exists, or an empty array, if there is not ongoing livestream.
   */
  public async getOngoingLiveStream(): Promise<YouTubeVideoInfos[]> {
    // let toReturn = undefined;

    const response: YouTubeDataApiResponse =
      await this.youTubeDataApiClient.get(
        `search?part=snippet&channelId=${this.channel_id}&type=video&eventType=live&key=${youtube_data_api.THE_YOUTUBE_API_KEY}`,
        { timeout: YouTubeAutoBot.CLIENT_TIMEOUT },
      );
    return response.data.items;
  }
  /**
   * This method returns an array containing the Upcoming Livestreams. That array is empty, iff there is no Upcoming livestream.
   * @returns an array containing the Upcoming Livestreams. That array is empty, iff there is no Upcoming livestream.
   */
  public async getUpcomingLiveStreams(): Promise<YouTubeVideoInfos[]> {
    // let toReturn = undefined;

    const response: YouTubeDataApiResponse =
      await this.youTubeDataApiClient.get(
        `search?part=snippet&channelId=${this.channel_id}&type=video&eventType=upcoming&key=${youtube_data_api.THE_YOUTUBE_API_KEY}`,
        { timeout: YouTubeAutoBot.CLIENT_TIMEOUT },
      );
    return response.data.items;
  }
  /**
   * This method returns the detailed informations of a given Upcoming Livestream, provided its videoID. In particular, you can use this method to find out the scheduled start date / time of an upcoming livestream, and its "active live chat id"
   * @param upcomingLivestreamVideoID the video ID of the Upcoming Livestream, for which you want detailed informations
   * @returns the detailed informations of the upcoming livestream, as a (promise of a) {@YouTubeVideoDetailedInfos } Object
   */
  public async getUpcomingLiveStreamDetails(
    upcomingLivestreamVideoID: string,
  ): Promise<YouTubeVideoDetailedInfos> {
    // let toReturn = undefined;
    const response: YouTubeDataApiDetailedResponse =
      await this.youTubeDataApiClient.get(
        `videos?part=liveStreamingDetails&part=status&part=snippet&id=${upcomingLivestreamVideoID}&&channelId=${this.channel_id}&type=video&eventType=upcoming&key=${youtube_data_api.THE_YOUTUBE_API_KEY}`,
        { timeout: YouTubeAutoBot.CLIENT_TIMEOUT },
      );
    return response.data.items[0];
  }
  /**
   * This method checks is there is an ongoing Livestream, and if so, returns the video ID of that livestream video.
   * @returns the video ID of the Ongoing LiveStream, if there is an ongoing livestream, and {undefined} otherwise (if there is no ongoing livestream).
   */
  public async isThereAnOngoingLiveStream(): Promise<boolean> {
    const fetchedOngoingLivestreams = await this.getOngoingLiveStream()
    if (fetchedOngoingLivestreams.length > 1) {
      console.error(` There is an unexpected error, there were more than one ongoing livestream for the channel of ID ${this.channel_id} : `, fetchedOngoingLivestreams)
      throw new Error(` There is an unexpected error, there were more than one ongoing livestream for the channel of ID ${this.channel_id}`)
    }
    return fetchedOngoingLivestreams.length > 0;
  }
  /**
   * This method checks is there is an Upcoming Livestream, and if so, returns the video ID of that livestream video.
   * Note there might be several upcoming videos, in which case this method returns the one pointed by <code>items[0]</code>
   * @returns the video ID of the Upcoming LiveStream, if there is an upcoming livestream, and {undefined} otherwise (if there is no Upcoming livestream).
   */
  public isThereAnUpcomingLiveStream(): string | undefined {
    let toReturn = undefined;
    return toReturn;
  }
}

export interface YouTubeDataApiResponse {
  data: {
    items: YouTubeVideoInfos[];
  };
}
export interface YouTubeDataApiDetailedResponse {
  data: {
    items: YouTubeVideoDetailedInfos[];
  };
}
export interface YouTubeVideoInfos {
  kind: string;
  etag: string;
  id: string;
  snippet?: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      standard: {
        url: string;
        width: number;
        height: number;
      };
      maxres: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    categoryId: string;
    liveBroadcastContent: string; // "upcoming" | "live"
    localized: {
      title: string;
      description: string;
    };
  };
  status?: {
    uploadStatus: string; // "uploaded" |
    privacyStatus: string; // "public" | "private"
    license: string; // "youtube" | "creativecommons"
    embeddable: boolean;
    publicStatsViewable: boolean;
    madeForKids: boolean;
  };
  liveStreamingDetails?: {
    scheduledStartTime: string; // "2024-02-05T19:00:00Z"
    activeLiveChatId: string;
  };
}

export interface YouTubeVideoDetailedInfos {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string; // {Year}-{Month}-{Day}T{Hours}:{Minutes}:{Seconds}Z
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      standard: {
        url: string;
        width: number;
        height: number;
      };
      maxres: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    categoryId: string;
    liveBroadcastContent: string; // "upcoming" | "live"
    localized: {
      title: string;
      description: string;
    };
  };
  status: {
    uploadStatus: string; // "uploaded" |
    privacyStatus: string; // "public" | "private"
    license: string; // "youtube" | "creativecommons"
    embeddable: boolean;
    publicStatsViewable: boolean;
    madeForKids: boolean;
  };
  liveStreamingDetails: {
    scheduledStartTime: string; // {Year}-{Month}-{Day}T{Hours}:{Minutes}:{Seconds}Z // "2024-02-05T19:00:00Z"
    activeLiveChatId: string;
  };
}

export const exampleYouTubeVideo = {
  kind: "youtube#video",
  etag: "GG6r2sAPFd074jXI9qn51wTCV1o",
  id: "-bS3fde8tp0",
  snippet: {
    publishedAt: "2024-02-05T16:58:04Z", // {Year}-{Month}-{Day}T{Hours}:{Minutes}:{Seconds}Z
    channelId: "UCGymsagsg1lUxDb2qxjK6Lg",
    title: "test de fonctionnalités",
    description:
      "Je vais planifier un live sur youtube, afin de vérifier que mon composant preact récupère bien le flux de live lorsqu'il commence",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/-bS3fde8tp0/default_live.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/-bS3fde8tp0/mqdefault_live.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/-bS3fde8tp0/hqdefault_live.jpg",
        width: 480,
        height: 360,
      },
      standard: {
        url: "https://i.ytimg.com/vi/-bS3fde8tp0/sddefault_live.jpg",
        width: 640,
        height: 480,
      },
      maxres: {
        url: "https://i.ytimg.com/vi/-bS3fde8tp0/maxresdefault_live.jpg",
        width: 1280,
        height: 720,
      },
    },
    channelTitle: "Jean-Baptiste Lasselle",
    categoryId: "22",
    liveBroadcastContent: "upcoming",
    localized: {
      title: "test de fonctionnalités",
      description:
        "Je vais planifier un live sur youtube, afin de vérifier que mon composant preact récupère bien le flux de live lorsqu'il commence",
    },
  },
  status: {
    uploadStatus: "uploaded",
    privacyStatus: "public",
    license: "youtube",
    embeddable: true,
    publicStatsViewable: true,
    madeForKids: true,
  },
  liveStreamingDetails: {
    scheduledStartTime: "2024-02-05T19:00:00Z", // {Year}-{Month}-{Day}T{Hours}:{Minutes}:{Seconds}Z
    activeLiveChatId:
      "Cg0KCy1iUzNmZGU4dHAwKicKGFVDR3ltc2Fnc2cxbFV4RGIycXhqSzZMZxILLWJTM2ZkZTh0cDA",
  },
};

logger.info(`info.message` || 'Calling YouTube Data API endpoint', {
  youtubeApiEndpoint: `api endpoint path`,
  invokedMethod: `Example mehod could be [getOngoingLiveStream(): Promise<YouTubeVideoInfos[]>]`,
  apiResponse: {
    httpStatusCode: 200,
    httpStatusMessage: `OK`,
    rawResponse: {...exampleYouTubeVideo}
  },
  message: `my message`
});