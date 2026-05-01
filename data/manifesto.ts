export type ManifestoChapter = {
  id: string;
  chapter: string;
  title: string;
  quote: string;
  content: string[];
};

export const manifestoChapters: ManifestoChapter[] = [
  {
    id: "prologue",
    chapter: "I",
    title: "The Duty of Memory",
    quote: "A civilization begins to vanish when it can no longer narrate itself without borrowing another tongue.",
    content: [
      "Tareekh begins with a simple conviction: memory is not a luxury for stable societies, but a necessity for wounded ones. We live amid inherited fragments, and fragments without interpretation become either nostalgia or noise.",
      "Our task is not merely to gather artifacts of Islamic heritage, but to restore the conditions in which they become legible again. Texts require languages, languages require teachers, and teachers require communities willing to listen slowly.",
      "For this reason, we refuse the modern habit of treating history as an accessory to identity. History is formative. It disciplines desire, measures decline, and teaches a people what sort of continuity remains possible."
    ]
  },
  {
    id: "method",
    chapter: "II",
    title: "Against Decorative Retrieval",
    quote: "Preservation without moral seriousness produces museums of grief rather than houses of learning.",
    content: [
      "The archive can become a theater. Images circulate, pages glow on screens, and objects acquire prestige merely by surviving. We reject this decorative mode. Retrieval must culminate in study, judgment, and renewed stewardship.",
      "That means our editorial instinct is deliberately unfashionable. We privilege patience over virality, commentary over slogan, and context over instant recognition. We would rather illuminate one difficult text responsibly than advertise a hundred artifacts badly.",
      "In this spirit, our platform behaves less like a feed and more like a reading room. It invites return, annotation, and discussion rooted in inherited standards."
    ]
  },
  {
    id: "people",
    chapter: "III",
    title: "The Brotherhood of Readers",
    quote: "No manuscript is revived by a platform alone; it is revived when readers become custodians of one another.",
    content: [
      "Scholarship is never merely solitary. Even the private reader inherits the labor of copyists, commentators, librarians, and teachers. Tareekh therefore understands membership not as access to content, but as enlistment into a shared ethic of attention.",
      "Some members observe, some contribute, and some teach. Each role matters. The observer protects the atmosphere of seriousness, the contributor expands the record, and the scholar tests claims against tradition and method.",
      "We build not an audience, but a circle. The distinction matters because audiences consume, while circles preserve."
    ]
  },
  {
    id: "future",
    chapter: "IV",
    title: "A Future Old Enough to Inherit",
    quote: "Renewal is not a refusal of the present; it is the patient ordering of the present by truths older than itself.",
    content: [
      "The future we seek is not antiquarian imitation. We do not wish to costume ourselves in the past. We wish to inherit from it with enough integrity to think and build again.",
      "This requires contemporary craft: disciplined writing, responsible digital curation, and institutions able to survive mood and trend. It also requires courage, because inheritance always demands limits as well as inspiration.",
      "Tareekh exists for those who believe Islamic heritage is not finished speaking. Its speech, however, must be met by people willing to become worthy listeners."
    ]
  }
];
