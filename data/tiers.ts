import type { MemberTier } from "./members";

export type Tier = {
  name: MemberTier;
  subtitle: string;
  priceNote: string;
  perks: string[];
  emphasis: string;
};

export const tiers: Tier[] = [
  {
    name: "Observer",
    subtitle: "For readers entering the circle with seriousness and curiosity.",
    priceNote: "Reading access",
    perks: [
      "Access to selected essays and reading notes",
      "Quarterly public dossier download",
      "Invitation to open salons and reflections",
      "Application pathway into contribution tracks"
    ],
    emphasis: "Best for careful newcomers"
  },
  {
    name: "Contributor",
    subtitle: "For researchers, writers, and field documentarians adding to the archive.",
    priceNote: "Participation tier",
    perks: [
      "Everything in Observer",
      "Member directory access",
      "Submission privileges for essays and notes",
      "Working circles for annotation and editorial review",
      "Recognition badges for initiatives and milestones"
    ],
    emphasis: "Best for active builders"
  },
  {
    name: "Scholar",
    subtitle: "For senior readers guiding method, interpretation, and institutional continuity.",
    priceNote: "Stewardship tier",
    perks: [
      "Everything in Contributor",
      "Private colloquia and seminar archives",
      "Profile highlights across key initiatives",
      "Editorial stewardship for themed dossiers",
      "Mentorship visibility within the member circle"
    ],
    emphasis: "Best for custodians and mentors"
  }
];
