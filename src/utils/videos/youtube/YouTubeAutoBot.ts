import {
  youtube,
  youtube_data_api,
  all_youtube_channels,
} from "./../../../config";

import axios from "redaxios";
// import { autobotLogger as logger } from "./logger";

const loggerMsgPrefix = ` > YouTubeAutoBot > `;

export class YouTubeAutoBot {
  // static pi: number = 3.14;
  static CLIENT_TIMEOUT: number = 3000; // in milliseconds
  private youTubeDataApiClient: any;
  constructor(
    readonly channel_id: string,
    // readonly google_api_key: string, // the Google APIs key will be read from the configuration, which reads astro build-time environment variables
  ) {
    this.channel_id = channel_id;
    // this.google_api_key = google_api_key;
    this.youTubeDataApiClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
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
    console.log(`[getOngoingLiveStream()] - start `);
    const response: YouTubeDataApiResponse =
      await this.youTubeDataApiClient.get(
        `search?part=snippet&channelId=${this.channel_id}&type=video&eventType=live&key=${youtube_data_api.THE_YOUTUBE_API_KEY}`,
        { timeout: YouTubeAutoBot.CLIENT_TIMEOUT },
      );
    console.log(
      `[getOngoingLiveStream()] - response.data : `,
      response.data,
    );
    console.log(
      `[getOngoingLiveStream()] - response.status : `,
      response.status,
    );
    console.log(
      `[getOngoingLiveStream()] - response.statusText : `,
      response.statusText,
    );
    console.log(
      `[getOngoingLiveStream()] - response.headers : `,
      response.headers
    );
    console.log(
      `[getOngoingLiveStream()] - response.config : `,
      response.config
    );
    /*
    */
    return response.data.items;
  }
  /**
   * This method returns an array containing the Upcoming Livestreams. That array is empty, iff there is no Upcoming livestream.
   * @returns an array containing the Upcoming Livestreams. That array is empty, iff there is no Upcoming livestream.
   */
  public async getUpcomingLiveStreams(): Promise<YouTubeUpcomingVideoDetailedInfos[]> {
    // let toReturn = undefined;

    const response: YouTubeDataApiUpcomingVideoDetailedResponse =
      await this.youTubeDataApiClient.get(
        `search?part=snippet&channelId=${this.channel_id}&type=video&eventType=upcoming&key=${youtube_data_api.THE_YOUTUBE_API_KEY}`,
        { timeout: YouTubeAutoBot.CLIENT_TIMEOUT },
      );
    return response.data.items;
  }
  /**
   * Returns the detailed infos of the default upcoming livestream. The default livestream is the one of index zero, in the 'items' array returned by YouTube Data API, when searching for upocming videos.
   * @returns The DetailedInformations of the default Upcoming Livestream, if it exists
   */
  public async getDefaultUpcomingLiveStreamDetails(): Promise<YouTubeVideoDetailedInfos> {
    // let toReturn = undefined;

    const upcomingLiveStreams: YouTubeUpcomingVideoDetailedInfos[] =
      await this.getUpcomingLiveStreams();
    console.log(` [getDefaultUpcomingLiveStreamDetails()] - upcomingLiveStreams : `, upcomingLiveStreams)
    if (upcomingLiveStreams.length > 0) {
      console.log(` [getDefaultUpcomingLiveStreamDetails()] - upcomingLiveStreams[0] : `, upcomingLiveStreams[0])
      console.log(` [getDefaultUpcomingLiveStreamDetails()] - upcomingLiveStreams[0].id.videoId : `, upcomingLiveStreams[0].id.videoId)
      const detailedInfos: YouTubeVideoDetailedInfos = await this.getUpcomingLiveStreamDetails(upcomingLiveStreams[0].id.videoId)
      console.log(` [getDefaultUpcomingLiveStreamDetails()] - upcomingLiveStreams - detailedInfos : `, detailedInfos)
      return detailedInfos;

    } else {
      console.error(
        `There are no upcoming livestream for the channel of ID ${this.channel_id} : `,
        upcomingLiveStreams
      );
      throw new Error(
        `There are no upcoming livestream for the channel of ID ${this.channel_id} : `
      );
    }
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
   * This method checks if there is an Ongoing Livestream, and if so, returns the video ID of that livestream video.
   * @returns false is there is no Ongoing LiveStream, true if there is an Ongoing livestream.
   */
  public async isThereAnOngoingLiveStream(): Promise<boolean> {
    console.log(`[isThereAnOngoingLiveStream()] - start `);
    const fetchedOngoingLivestreams = await this.getOngoingLiveStream();
    console.log(
      `[isThereAnOngoingLiveStream] - fetchedOngoingLivestreams : `,
      fetchedOngoingLivestreams,
    );
    if (fetchedOngoingLivestreams.length > 1) {
      console.error(
        ` There is an unexpected error, there were more than one ongoing livestream for the channel of ID ${this.channel_id} : `,
        fetchedOngoingLivestreams,
      );
      throw new Error(
        ` There is an unexpected error, there were more than one ongoing livestream for the channel of ID ${this.channel_id}`,
      );
    }
    return fetchedOngoingLivestreams.length > 0;
  }
  
  /**
   * This method checks if there is an Upcoming Livestream, and if so, returns the video ID of that livestream video.
   * @returns false is there is no Upcoming LiveStream, true if there is an Upcoming livestream.
   */
  public async isThereAnUpcomingLiveStream(): Promise<boolean> {
    console.log(`[isThereAnUpcomingLiveStream()] - start `);
    const fetchedUpcomingLivestreams = await this.getUpcomingLiveStreams();
    console.log(
      `[isThereAnUpcomingLiveStream] - fetchedUpcomingLivestreams : `,
      fetchedUpcomingLivestreams,
    );
    return fetchedUpcomingLivestreams.length > 0;
  }
}

export interface YouTubeDataApiResponse {
  data: {
    items: YouTubeVideoInfos[];
  };
  status: string;
  statusText: string;
  headers: any;
  config: any;
}
export interface YouTubeDataApiDetailedResponse {
  data: {
    items: YouTubeVideoDetailedInfos[];
  };
  status: string;
  statusText: string;
  headers: any;
  config: any;
}
export interface YouTubeDataApiUpcomingVideoDetailedResponse {
  data: {
    items: YouTubeUpcomingVideoDetailedInfos[];
  };
  status: string;
  statusText: string;
  headers: any;
  config: any;
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
//id: { kind: 'youtube#video', videoId: 'CJqx95lhnh8' },
export interface YouTubeUpcomingVideoDetailedInfos {
  kind: string;
  etag: string;
  id: { 
    kind: string; 
    videoId: string;
  };
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

/*
logger.info(`info.message` || "Calling YouTube Data API endpoint", {
  youtubeApiEndpoint: `api endpoint path`,
  invokedMethod: `Example mehod could be [getOngoingLiveStream(): Promise<YouTubeVideoInfos[]>]`,
  apiResponse: {
    httpStatusCode: 200,
    httpStatusMessage: `OK`,
    rawResponse: { ...exampleYouTubeVideo },
  },
  message: `my message`,
});
*/
