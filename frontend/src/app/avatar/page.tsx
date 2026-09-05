import { Metadata } from "next";
import { AvatarHubClient } from "@/components/avatar/AvatarHubClient";

export const metadata: Metadata = {
  title: "AI Avatar & Influencer Studio | Creatify AI",
  description: "Manage your consistent AI identities. Create, edit, and scale your virtual influencers directly from the Creatify AI Avatar Studio.",
};

export default function AvatarPage() {
  return <AvatarHubClient />;
}
