import { PageHero } from "@/components/ui/page-hero";
import { MembersClient } from "@/components/members-client";

export default function MembersPage() {
  return (
    <div>
      <PageHero
        eyebrow="The reading circle"
        title="Members"
        subtitle="A directory of readers, contributors, and scholars laboring together in the preservation of memory."
      />
      <MembersClient />
    </div>
  );
}
