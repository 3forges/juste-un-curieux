# Juste (un) Curieux

Bienvenue!

## How the project was spawned

```bash

npm create astro@latest -- --template mhyfritz/astro-landing-page

pnpm dlx create astro@latest -- --template mhyfritz/astro-landing-page
```

## Tailwind animated

* https://github.com/new-data-services/tailwindcss-animated#readme

## YouTube API

```bash
export YOUTUBE_API_KEY="your google apis API KEY"
export YOUTUBE_CHANNEL_ID="UCGymsagsg1lUxDb2qxjK6Lg"
export DEFAULT_YOUTUBE_PLAYLIST_ID="B96JKl2IEv0"

curl https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&eventType=live&key=${YOUTUBE_API_KEY} | jq .

```

After creating the API Key to hit the googleapis, and use YouTube Data API, then you will have an explicit 403 error mesage explaining you need to acivate the Youtube Data API before being allowed to use it:

```bash
$ curl -X GET "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&eventType=live&key=${YOUTUBE_API_KEY}" | jq .
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1571    0  1571    0     0    979      0 --:--:--  0:00:01 --:--:--   978
{
  "error": {
    "code": 403,
    "message": "YouTube Data API v3 has not been used in project 1080266325902 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=1080266325902 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.",
    "errors": [
      {
        "message": "YouTube Data API v3 has not been used in project 1080266325902 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=1080266325902 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.",
        "domain": "usageLimits",
        "reason": "accessNotConfigured",
        "extendedHelp": "https://console.developers.google.com"
      }
    ],
    "status": "PERMISSION_DENIED",
    "details": [
      {
        "@type": "type.googleapis.com/google.rpc.Help",
        "links": [
          {
            "description": "Google developers console API activation",
            "url": "https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=1080266325902"
          }
        ]
      },
      {
        "@type": "type.googleapis.com/google.rpc.ErrorInfo",
        "reason": "SERVICE_DISABLED",
        "domain": "googleapis.com",
        "metadata": {
          "service": "youtube.googleapis.com",
          "consumer": "projects/1080266325902"
        }
      }
    ]
  }
}

```

And after activating it, here is the results you're goona have:

* zero items in results when no live is ongoing:

```bash
Utilisateur@Utilisateur-PC MINGW64 ~
$ curl -X GET "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&eventType=live&key=${YOUTUBE_API_KEY}" | jq .
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   189    0   189    0     0    194      0 --:--:-- --:--:-- --:--:--   194
{
  "kind": "youtube#searchListResponse",
  "etag": "VHzDuFtzzzFSHtie6VKNX_MT6tQ",
  "regionCode": "FR",
  "pageInfo": {
    "totalResults": 0,
    "resultsPerPage": 0
  },
  "items": []
}

```

* And the result when the live is indeed ongoing:

```bash

```

[![Activating the YouTube Data API](./docs/youtube/googleapis_youtube_data_api_has_to_be_activated_before.PNG)](https://console.cloud.google.com/apis/library/youtube.googleapis.com)

[![Activating the YouTube Data API](./docs/youtube/googleapis_youtube_data_api_has_to_be_activated.PNG)](https://console.cloud.google.com/apis/library/youtube.googleapis.com)
