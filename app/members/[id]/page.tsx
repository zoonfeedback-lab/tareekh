import { notFound } from "next/navigation";
import { members } from "@/data/members";
import { MemberProfileClient } from "@/components/member-profile-client";

type Props = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return members.map((member) => ({ id: member.id }));
}

export default function MemberProfilePage({ params }: Props) {
  const member = members.find((entry) => entry.id === params.id);

  if (!member) {
    notFound();
  }

  return <MemberProfileClient member={member} />;
}
