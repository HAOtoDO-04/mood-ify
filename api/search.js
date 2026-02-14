const MOOD_MAP = {
    // Happy, Joyful, Excited, Energetic, Hyper, Motivated, Confident, Grateful
    positive: [
        'https://soundcloud.com/discover/sets/charts-top-50:all-music',
        'https://soundcloud.com/user-391301931/sets/upbeat-happy-instrumentals',
        'https://soundcloud.com/happy-music-mix/sets/happy-music-mix',
        'https://soundcloud.com/nocopyrightsounds/sets/ncs-the-best-of-2023',
        'https://soundcloud.com/monstercat/sets/monstercat-best-of-2023'
    ],
    // Relaxed, Peaceful, Calm, Mindful, Serene, Content, Relaxed
    calm: [
        'https://soundcloud.com/lofigirl/sets/lofi-hip-hop-music',
        'https://soundcloud.com/chilledcow/sets/lofi-hip-hop-radio-beats-to',
        'https://soundcloud.com/dreamy-vibes/sets/dreamy-lofi',
        'https://soundcloud.com/ambient-music-garden/sets/peaceful-ambient',
        'https://soundcloud.com/mindful-sounds/sets/meditation-and-mindfulness'
    ],
    // Sad, Disappointed, Emotional, Heartbroken, Lonely, Gloomy, Melancholy
    sad: [
        'https://soundcloud.com/discover/sets/personalized-tracks:user-971708453:melancholy-morning',
        'https://soundcloud.com/sadclown/sets/sad-piano-melodies',
        'https://soundcloud.com/emotional-tracks/sets/heartbroken-vibes',
        'https://soundcloud.com/stay-sad/sets/lonely-nights',
        'https://soundcloud.com/rainy-days-music/sets/gloomy-afternoon'
    ],
    // Angry, Furious, Frustrated, Irritated, Annoyed, Intense, Chaotic
    intense: [
        'https://soundcloud.com/rock-anthems/sets/heavy-rock-pumping',
        'https://soundcloud.com/techno-dark-side/sets/dark-techno-mix',
        'https://soundcloud.com/aggressive-beats/sets/furious-intensity',
        'https://soundcloud.com/metal-tracks/sets/aggressive-metal',
        'https://soundcloud.com/chaotic-energy/sets/breakcore-mayhem'
    ],
    // Thoughtful, Reflective, Creative, Inspired, Imaginative, Focused, Dreamy, Sleepy
    focus: [
        'https://soundcloud.com/creative-flow/sets/focus-and-creativity',
        'https://soundcloud.com/deep-focus-beats/sets/study-music-2024',
        'https://soundcloud.com/minimal-beats/sets/minimalist-productivity',
        'https://soundcloud.com/classical-focus/sets/classical-for-work',
        'https://soundcloud.com/sleepy-vibes/sets/deep-sleep-ambient'
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
