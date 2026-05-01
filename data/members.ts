export type MemberTier = "Observer" | "Contributor" | "Scholar";

export type Member = {
  id: string;
  name: string;
  tier: MemberTier;
  location: string;
  bio: string;
  contributions: { title: string; type: string; date: string }[];
  badges: string[];
  initiatives: string[];
  contributionCount: number;
};

export const members: Member[] = [
  {
    id: "TRQ-1042",
    name: "Amina Qureshi",
    tier: "Scholar",
    location: "Lahore",
    bio: "A historian of manuscript cultures focused on pedagogical transmission in Indo-Muslim seminaries and courtly libraries.",
    contributions: [
      { title: "Annotated source notes on Shah Waliullah", type: "Research dossier", date: "April 2026" },
      { title: "Seminar: Ethics of archival restoration", type: "Lecture", date: "March 2026" },
      { title: "Translation review circle", type: "Editorial session", date: "January 2026" }
    ],
    badges: ["Founding Circle", "Archivist", "Mentor"],
    initiatives: ["Manuscript Annotation Guild", "Reading Majlis"],
    contributionCount: 28
  },
  {
    id: "TRQ-1179",
    name: "Bilal Idrisi",
    tier: "Contributor",
    location: "Fez",
    bio: "Writes on urban memory, sacred architecture, and the moral language of stone in Muslim cities.",
    contributions: [
      { title: "Photo essay on courtyards of Fez", type: "Field notes", date: "April 2026" },
      { title: "Member dispatch: Friday libraries", type: "Essay", date: "February 2026" }
    ],
    badges: ["Field Correspondent", "Builder"],
    initiatives: ["Cities of Memory Atlas"],
    contributionCount: 13
  },
  {
    id: "TRQ-1208",
    name: "Safiya Rahman",
    tier: "Observer",
    location: "Istanbul",
    bio: "A careful reader joining the circle through close study of devotional literature and Ottoman book arts.",
    contributions: [
      { title: "Curated reading reflections", type: "Notebook", date: "March 2026" }
    ],
    badges: ["New Member"],
    initiatives: ["Ottoman Marginalia Group"],
    contributionCount: 4
  },
  {
    id: "TRQ-0991",
    name: "Omar Haddad",
    tier: "Scholar",
    location: "Amman",
    bio: "Researches legal history, waqf institutions, and the civic ecology of medieval learning networks.",
    contributions: [
      { title: "Waqf records reading circle", type: "Workshop", date: "April 2026" },
      { title: "Index of Levantine endowment records", type: "Catalogue", date: "December 2025" }
    ],
    badges: ["Waqf Fellow", "Senior Reader"],
    initiatives: ["Institutional Memory Lab", "Public Law Notebook"],
    contributionCount: 34
  }
];
