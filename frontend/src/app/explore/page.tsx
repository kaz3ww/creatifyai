import { Metadata } from "next";
import ExploreClient from "@/components/tools/ExploreClient";

export const metadata: Metadata = {
  title: "Community - Trending AI Influencers | Creatify AI",
  description: "Discover trending AI influencers and create your own on Creatify AI's Community feed.",
  openGraph: {
    title: "Community - Trending AI Influencers | Creatify AI",
    description: "Discover trending AI influencers and create your own on Creatify AI's Community feed.",
    url: "/explore",
  },
  alternates: {
    canonical: "/explore",
  },
};

export default function ExplorePage() {
  return <ExploreClient />;
}
