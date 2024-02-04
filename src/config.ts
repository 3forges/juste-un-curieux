export const robotsConfig = {
  disableIndexing: false
}
export const youtube = {
  channel_id: `UCRCe4BKXU3gNhwAGwheHYyw`, // Justin Curieux's Channel ID is [UCRCe4BKXU3gNhwAGwheHYyw]
  user_id: `idontknowitsnotusedyetanyway` // but just know that user id and channel id are different
}

export const tests = {
  youtube : {
  channel_id: `UCGymsagsg1lUxDb2qxjK6Lg`, // Test Channel ID is [UCRCe4BKXU3gNhwAGwheHYyw]
  user_id: `Gymsagsg1lUxDb2qxjK6Lg`
  }
}

export const youtube_data_api = {
  THE_YOUTUBE_API_KEY: `${process.env.YOUTUBE_API_KEY}`,
  THE_YOUTUBE_CHANNEL_ID: `${process.env.YOUTUBE_CHANNEL_ID}`
}

export const justin_curieux_channels = {
  histoire_russie: {
    display_name: `Histoire de la Russie`,
    youtube: {
      default_playlist_id: `${process.env.DEFAULT_YOUTUBE_PLAYLIST_ID || 'B96JKl2IEv0'}`,
      channel_id: `${process.env.YOUTUBE_CHANNEL_ID || 'UCRCe4BKXU3gNhwAGwheHYyw'}`
    }
  }
}

