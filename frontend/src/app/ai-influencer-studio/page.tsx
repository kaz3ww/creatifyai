import { Metadata } from "next";
import ExploreClient from "@/components/tools/ExploreClient";

const BASE = "https://www.creatifyai.in";

export const metadata: Metadata = {
  title: "AI Influencer Studio — Browse Viral AI Creator Templates & Generate Yours | Creatify AI",
  description:
    "Explore thousands of stunning AI influencers made by the Creatify AI community. Get inspired, copy prompts, remix styles & generate your own photorealistic virtual creator in seconds. Free to browse.",
  keywords:
    "AI influencer studio, AI influencer gallery, virtual influencer templates, AI model creator, AI influencer generator, create AI influencer, photorealistic AI models, AI persona creator, Creatify AI studio, browse AI influencers, AI influencer inspiration",
  alternates: {
    canonical: `${BASE}/ai-influencer-studio`,
  },
  openGraph: {
    title: "AI Influencer Studio — Browse Viral AI Creator Templates | Creatify AI",
    description:
      "Explore thousands of photorealistic AI influencers. Copy prompts, remix styles & generate your own virtual creator in seconds.",
    url: `${BASE}/ai-influencer-studio`,
    siteName: "Creatify AI",
    type: "website",
    images: [{ url: `${BASE}/creatifyailogo.png`, width: 512, height: 512, alt: "AI Influencer Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Influencer Studio — Thousands of AI Creator Templates | Creatify AI",
    description: "Browse, copy & remix stunning AI influencer prompts. Generate your own virtual creator in seconds.",
    images: [`${BASE}/creatifyailogo.png`],
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
