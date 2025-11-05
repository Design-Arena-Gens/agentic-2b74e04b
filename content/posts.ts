export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  heroImage?: string;
  body: string[];
  highlight?: {
    quote: string;
    source: string;
  };
  timeline?: {
    year: number;
    headline: string;
    description: string;
  }[];
};

export const posts: Post[] = [
  {
    slug: "echoes-of-the-seer",
    title: "Echoes of the Seer: Mapping Baba Vanga's Timelines",
    excerpt:
      "A layered interpretation of Baba Vanga's most whispered prophecies, tracing ripple effects into the world we are building today.",
    publishedAt: "2024-04-12",
    readingTime: "8 min read",
    category: "Prophetic Cartography",
    heroImage: "/images/celestial-map.jpg",
    body: [
      "The legend of Baba Vanga is not a straight road but a spiral staircase—each turn revealing new perspectives on the same, familiar sky. To interpret her prophecies is to acknowledge how folklore, intuition, and collective fears merge into stories we can touch.",
      "In recent years, researchers and storytellers alike have re-contextualized her words through the lens of systemic change. Climate anxieties, geopolitical fractures, and even the quiet revolution of inner technology all map onto her visions. At the heart of the legend is a question: do prophecies describe the future, or do they nudge us toward creating it?",
      "Looking at scattered transcripts, one thread becomes clear. Baba Vanga described the future less as a series of isolated events and more as a conversation between humanity and the planet. Her imagery evokes tides, winds, and light—forces that shift slowly before cresting all at once."
    ],
    highlight: {
      quote:
        "The future whispers to those who stand still long enough to hear the wind change.",
      source: "Folkloric translation attributed to Baba Vanga's circle",
    },
    timeline: [
      {
        year: 2025,
        headline: "The Year of Synthesis",
        description:
          "Grassroots climate cooperatives merge with smart-city councils, aligning resource distribution with community weather hubs.",
      },
      {
        year: 2032,
        headline: "Dream Cartographers Rise",
        description:
          "Neuro-imagery networks translate collective dreams into public data murals, blending science with the metaphysical.",
      },
      {
        year: 2040,
        headline: "When Water Remembers",
        description:
          "Regenerative ocean farming unlocks microbial communication that inspires a new era of planetary stewardship.",
      },
    ],
  },
  {
    slug: "oracle-of-climate",
    title: "Oracle of Climate: Listening to the Planet Like Baba Vanga",
    excerpt:
      "A meditation on intuitive environmentalism, drawing parallels between Baba Vanga's natural sensitivity and modern eco-rituals.",
    publishedAt: "2024-03-02",
    readingTime: "6 min read",
    category: "Earth Whispering",
    body: [
      "Before data dashboards and AI weather models, there were listeners. Baba Vanga embodied an intuitive synchrony with the living world—she felt storms before thunder spoke, sensed drought long before the riverbed cracked.",
      "Today, climatologists and Indigenous knowledge keepers increasingly collaborate. Their union mirrors Vanga's gift: combining rigorous observation with embodied awareness. The future of climate action may depend on our ability to translate measurements into meaning.",
      "We experiment with rituals that invite attention. Dawn listening circles. Forest acoustic walks. Ceremonies that consider the atmosphere not as backdrop but as a breathing elder. Through these practices we rebuild the human sensorium that Baba Vanga never lost."
    ],
    highlight: {
      quote:
        "Science tells us what the world is doing. Vision tells us why it matters.",
      source: "Field journal of a Bulgarian ecologist, 2023",
    },
  },
  {
    slug: "prophecy-of-code",
    title: "Prophecy of Code: Divining Futures With Algorithms",
    excerpt:
      "Exploring how machine learning mirrors the prophetic process—pattern recognition, intuitive leaps, and ethical responsibility.",
    publishedAt: "2024-01-18",
    readingTime: "7 min read",
    category: "Techno Mysticism",
    body: [
      "If Baba Vanga lived in our century, her monastery might have been filled with humming GPUs instead of beeswax candles. Prophecy and prediction share a spine: they both surface patterns hidden from immediate sight.",
      "Modern algorithms ingest petabytes of human and environmental rhythms. But without context, outputs are brittle. Baba Vanga's legacy reminds technologists that predictions breathe only when tethered to wisdom, empathy, and accountability.",
      "We are experimenting with 'oracular AI'—systems trained on oral histories, environmental data, and speculative fiction. These models do not promise certainty; they invite careful dialogue. Each generated scenario becomes a mirror reflecting our collective desires and fears."
    ],
  },
];
