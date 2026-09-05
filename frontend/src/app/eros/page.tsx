import type { Metadata } from "next";
import ErosClient from "./ErosClient";

export const metadata: Metadata = {
  title: "Eros — FLUX 2 Pro Image Studio",
  description:
    "Generate stunning, photorealistic AI images with FLUX 2 Pro from Black Forest Labs. Eros is Creatify AI's premium image generation studio — cinematic, fantasy, portraits and more.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Eros — FLUX 2 Pro Image Studio | Creatify AI",
    description:
      "The most powerful AI image generator powered by FLUX 2 Pro. Create cinematic portraits, fantasy landscapes, and photorealistic visuals in seconds.",
    siteName: "Creatify AI",
    type: "website",
    url: "https://www.creatifyai.in/eros",
  },
};

export default function ErosPage() {
  return <ErosClient />;
}
