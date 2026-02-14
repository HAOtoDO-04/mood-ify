const MOOD_MAP = {
  positive: [
       'https://soundcloud.com/relaxedmindmusicuniverse/sets/positive-music-for-positive?utm_source=chatgpt.com',
       'https://m.soundcloud.com/academyofpowerfulmusicwithpositiveenergy/sets/feel-confident-relaxing-music?utm_source=chatgpt.com',
       'https://soundcloud.com/positivethinkingworld/sets/positive-thinking-world-happy'
  ],
  calm: [
       'https://soundcloud.com/sound-playlist/sets/30-best-tracks-to-calm-and?utm_source=chatgpt.com',
       'https://soundcloud.com/user-159209928/sets/calm-music',
       'https://soundcloud.com/calmingwaterconsort/sets/calm-energy-and-focus-music'
  ],
  sad: [
       'https://soundcloud.com/idla/sets/sad-songs',
       'https://soundcloud.com/user-251423738/sad-songs-playlist-2020-that?in=yulisa-isidoro%2Fsets%2Fsad',
       'https://soundcloud.com/chilledsad/depression?in=oxpj40el2g1x%2Fsets%2Fme'
  ],
  intense: [
       'https://soundcloud.com/globeats/sets/sad-trap-beats-emotional-piano',
       'https://soundcloud.com/davidsanyabeats/sets/lofitypebeatlo',
       'https://m.soundcloud.com/neomelodies/sets/alpha-waves-for-relaxed-focus'
  ],
  focus: [
       'https://soundcloud.com/relaxdaily/sets/deep-focus-music-studying-concentration-work',
       'https://soundcloud.com/relaxdaily/sets/relaxing-piano-music-calming-study-focus',
       'https://soundcloud.com/relaxdaily/sets/season-3-best-of-music-calm-peaceful-focus'
  ]
};

const MOOD_CATEGORIES = {
    // Mapping every button text from index.html to a category
    '😀 Happy': 'positive', '😄 Joyful': 'positive', '🤩 Excited': 'positive', '😎 Confident': 'positive', '🙌 Motivated': 'positive', '🔥 Energetic': 'positive', '⚡ Hyper': 'positive', '🎯 Focused': 'focus', '😇 Grateful': 'positive',
    '😌 Relaxed': 'calm', '🧘 Peaceful': 'calm', '🌊 Calm': 'calm', '😴 Sleepy': 'focus', '☁️ Dreamy': 'focus', '🍃 Mindful': 'calm', '🌙 Serene': 'calm', '😌 Content': 'calm',
    '😔 Sad': 'sad', '😞 Disappointed': 'sad', '😢 Emotional': 'sad', '💔 Heartbroken': 'sad', '🥀 Lonely': 'sad', '🌧️ Gloomy': 'sad', '😕 Confused': 'sad',
    '😠 Angry': 'intense', '😡 Furious': 'intense', '😤 Frustrated': 'intense', '😒 Annoyed': 'intense', '🔥 Irritated': 'intense', '🌪️ Chaotic': 'intense',
    '😟 Anxious': 'intense', '😰 Stressed': 'intense', '😬 Nervous': 'intense', '🤯 Overwhelmed': 'intense', '🏃 Restless': 'intense',
    '🤔 Thoughtful': 'focus', '🧠 Reflective': 'focus', '✍️ Creative': 'focus', '🎨 Inspired': 'focus', '🌌 Imaginative': 'focus'
};

export default function (req, res) {
    const { mood } = req.query;

    if (!mood) {
        return res.status(400).json({ error: 'Mood parameter is required.' });
    }

    const category = MOOD_CATEGORIES[mood] || 'positive';
    const tracks = MOOD_MAP[category];

    // Shuffle and pick 3
    const shuffled = tracks.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3).map(url => ({
        url,
        title: `${mood} Vibes`,
        description: `Curated ${category} selection for your mood.`
    }));

    res.status(200).json(selected);
};
