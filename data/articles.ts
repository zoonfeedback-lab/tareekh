export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
  heroNote: string;
  body: string[];
  relatedSlugs: string[];
};

export const articles: Article[] = [
  {
    slug: "ink-and-sovereignty-in-the-madrasa",
    title: "Ink and Sovereignty in the Madrasa",
    category: "Education",
    excerpt:
      "How institutions of learning preserved legal reasoning, civic memory, and an ethics of transmission long after empires dimmed.",
    readingTime: "9 min read",
    publishedAt: "April 14, 2026",
    author: {
      name: "Maryam Siddiqi",
      role: "Editor of Historical Method"
    },
    heroNote:
      "A study of the madrasa as both intellectual workshop and moral architecture.",
    body: [
      "When modern observers speak of the madrasa, they often reduce it to a building or a curriculum. The historical madrasa was more than either. It was a disciplined environment in which juristic argument, literary cultivation, and public responsibility matured together.",
      "In the manuscript record, one repeatedly finds ownership notes, marginal corrections, and certificates of audition. These traces reveal not only what was taught, but how knowledge moved: aloud, in company, under supervision, and with reverence for chains of transmission.",
      "The significance of these institutions lies partly in their refusal to isolate knowledge from character. The student was not merely a collector of facts. He or she was expected to embody restraint, patience, and fidelity to inherited meanings while still exercising judgment.",
      "To revisit this legacy today is not to romanticize the past. It is to ask what forms of learning produce durable civilizations, and what kinds of institutions can still teach a people to think beyond the urgency of the hour."
    ],
    relatedSlugs: [
      "cities-that-remember-through-stone",
      "the-ethics-of-retrieving-lost-archives"
    ]
  },
  {
    slug: "cities-that-remember-through-stone",
    title: "Cities That Remember Through Stone",
    category: "Architecture",
    excerpt:
      "A meditation on domes, courtyards, and inscriptions as civic memory carried by material form.",
    readingTime: "7 min read",
    publishedAt: "March 29, 2026",
    author: {
      name: "Hamza Faruqi",
      role: "Resident Essayist"
    },
    heroNote:
      "Built forms outlast slogans; the city often archives what the age forgets.",
    body: [
      "Islamic architecture is often admired for ornament, but its deeper achievement is moral ordering. A courtyard teaches proportion; a colonnade teaches sequence; a dome directs the eye upward without denying the weight of stone below.",
      "The built environment once instructed the ordinary believer as much as the scholar. One learned rhythm from the geometry of prayer halls and humility from thresholds that compressed the body before opening into light.",
      "These structures do not merely preserve a style. They preserve habits of perception. They tell a community how to gather, how to move, and how to dignify both silence and encounter.",
      "When preservation fails, more is lost than a monument. We lose a public grammar of beauty that once made transcendence legible in everyday life."
    ],
    relatedSlugs: [
      "ink-and-sovereignty-in-the-madrasa",
      "the-moon-over-cordoba-and-modern-memory"
    ]
  },
  {
    slug: "the-ethics-of-retrieving-lost-archives",
    title: "The Ethics of Retrieving Lost Archives",
    category: "Methodology",
    excerpt:
      "What it means to restore manuscripts, testimonies, and civilizational memory without turning them into decorative artifacts.",
    readingTime: "11 min read",
    publishedAt: "February 9, 2026",
    author: {
      name: "Yusuf Rahmani",
      role: "Research Director"
    },
    heroNote:
      "Recovery without interpretation is storage; interpretation without ethics is extraction.",
    body: [
      "There is a temptation in digital preservation to treat recovery as an end in itself. Scan the folio, catalogue the codex, circulate the image, and call the task complete. Yet archives are not healed by visibility alone.",
      "A manuscript detached from language, context, and pedagogy risks becoming a relic for aesthetic consumption. The ethical archivist refuses this flattening. He restores not only the object, but the conditions through which the object once meant something to a living tradition.",
      "This requires disciplines that are slower than the market of attention rewards. Translation must be accountable. Metadata must not smuggle in ideological assumptions. Public presentation must invite study rather than spectacle.",
      "Tareekh exists in this tension. We want memory to travel, but we also want it to arrive intact enough to command seriousness."
    ],
    relatedSlugs: [
      "ink-and-sovereignty-in-the-madrasa",
      "the-moon-over-cordoba-and-modern-memory"
    ]
  },
  {
    slug: "the-moon-over-cordoba-and-modern-memory",
    title: "The Moon Over Cordoba and Modern Memory",
    category: "Civilization",
    excerpt:
      "On longing, fragmentation, and the temptation to remember al-Andalus as symbol instead of responsibility.",
    readingTime: "8 min read",
    publishedAt: "January 18, 2026",
    author: {
      name: "Layla Nizami",
      role: "Contributing Scholar"
    },
    heroNote:
      "What survives in memory can either mature a people or console them into passivity.",
    body: [
      "Cordoba persists in Muslim memory because it joins refinement with grief. It represents an age of radiance, but also a warning that brilliance without continuity is vulnerable to dispersal.",
      "Modern invocations of al-Andalus often hover between pride and sentimentality. Both are insufficient. A civilization is not honored by repeating its names; it is honored by rebuilding the habits that once made those names possible.",
      "To remember Cordoba responsibly is to study its institutions, disciplines, and public ethics. Its libraries, courts, and homes formed a fabric of life that cannot be reduced to picturesque nostalgia.",
      "The moon over Cordoba remains beautiful. Yet beauty becomes truly instructive only when it disciplines desire into work."
    ],
    relatedSlugs: [
      "cities-that-remember-through-stone",
      "the-ethics-of-retrieving-lost-archives"
    ]
  }
];

export const featuredArticles = articles.slice(0, 3);
