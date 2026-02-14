$urls = @(
    "https://soundcloud.com/user-798609202/sets/light-positive-piano-music",
    "https://soundcloud.com/lofigirl/sets/lofi-hip-hop-music",
    "https://soundcloud.com/emotional-tracks/sets/heartbroken-vibes",
    "https://soundcloud.com/rock-anthems/sets/heavy-rock-pumping",
    "https://soundcloud.com/creative-flow/sets/focus-and-creativity",
    "https://soundcloud.com/nocopyrightsounds/sets/ncs-best-of-all-time",
    "https://soundcloud.com/monstercat/sets/monstercat-best-of-2023",
    "https://soundcloud.com/dreamy-vibes/sets/dreamy-lofi",
    "https://soundcloud.com/sadclown/sets/sad-piano-melodies",
    "https://soundcloud.com/techno-dark-side/sets/dark-techno-mix",
    "https://soundcloud.com/deep-focus-beats/sets/study-music-2024"
)

foreach ($url in $urls) {
    try {
        $response = Invoke-WebRequest -Uri $url -Method Head -ErrorAction Stop
        Write-Output "$url : $($response.StatusCode)"
    } catch {
        Write-Output "$url : FAILED ($($_.Exception.Message))"
    }
}
