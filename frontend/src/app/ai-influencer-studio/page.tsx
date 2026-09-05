import { Metadata } from "next";
import ExploreClient from "@/components/tools/ExploreClient";

const BASE = "https://www.creatifyai.in";

export const metadata: Metadata = {
  title: "AI Influencer Studio — Browse & Create AI Influencers | Creatify AI",
  description:
    "Explore trending AI influencers created by the Creatify AI community. Browse photorealistic virtual models, copy generation prompts, and create your own AI influencer in seconds.",
  keywords:
    "AI influencer studio, virtual influencer gallery, AI model creator, AI influencer generator, create AI influencer, photorealistic virtual models, AI persona creator, Creatify AI studio",
  alternates: {
    canonical: `${BASE}/ai-influencer-studio`,
  },
  openGraph: {
    title: "AI Influencer Studio — Trending AI Influencers | Creatify AI",
    description:
      "Browse photorealistic AI influencers, copy prompts, and generate your own virtual personas using advanced AI models on Creatify AI.",
    url: `${BASE}/ai-influencer-studio`,
    siteName: "Creatify AI",
    type: "website",
    images: [
      {
        url: `${BASE}/Creatify AIlogo.png`,
        width: 512,
        height: 512,
        alt: "Creatify AI AI Influencer Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Influencer Studio | Creatify AI",
    description:
      "Browse and create photorealistic AI influencers. No limits, no watermarks.",
    images: [`${BASE}/Creatify AIlogo.png`],
  },
};

// JSON-LD structured data for rich results
const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AI Influencer Studio",
  description:
    "A curated gallery of photorealistic AI influencers created with Creatify AI's advanced AI generation platform.",
  url: `${BASE}/ai-influencer-studio`,
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: "Creatify AI",
    url: BASE,
  },
  about: {
    "@type": "Thing",
    name: "AI Influencer Generation",
  },
};

export default function AIInfluencerStudioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <ExploreClient />
    </>
  );
}
