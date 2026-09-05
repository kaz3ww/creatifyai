import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Creator Toolkit & Influencer Hub | Creatify AI",
  description: "Access Creatify AI's premium suite of AI creator tools. Generate stunning high-res images, use AI style transfer, and build consistent AI influencers using FLUX.2 and GPT Image 2.",
  keywords: [
    "ai creator tools",
    "ai influencer hub",
    "ai image generator",
    "ai image editor",
    "ai style transfer",
    "virtual influencer creator",
    "Creatify AI creator dashboard",
    "generate ai models"
  ].join(", "),
  openGraph: {
    title: "AI Creator Toolkit & Influencer Hub | Creatify AI",
    description: "Access Creatify AI's premium suite of AI creator tools. Generate stunning high-res images, use AI style transfer, and build consistent AI influencers.",
    url: "/tools/creator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Creator Toolkit & Influencer Hub | Creatify AI",
    description: "Access Creatify AI's premium suite of AI creator tools. Generate stunning high-res images, use AI style transfer, and build consistent AI influencers.",
  },
  alternates: {
    canonical: "https://creatifyai.in/tools/creator",
  }
};

export default function CreatorHubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
