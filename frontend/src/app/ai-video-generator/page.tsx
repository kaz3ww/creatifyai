import { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "AI Video Generator – Create Cinematic AI Videos from Text | Creatify AI",
  description: "Generate breathtaking, photorealistic AI videos from text or images instantly. Featuring Kling, Veo, and Seedance models. No watermark. Start creating for free.",
  keywords: "AI video generator, text to video AI, image to video AI, create AI video, free AI video generator, Kling AI, Veo AI, Seedance AI video",
  alternates: { canonical: "/ai-video-generator" },
  openGraph: {
    title: "AI Video Generator – Create Cinematic AI Videos from Text",
    description: "Generate breathtaking, photorealistic AI videos from text or images instantly. No watermark. Start creating for free.",
    url: "/ai-video-generator",
  },
};

export default function AIVideoGeneratorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO SECTION ── */}
      <section className="bg-gradient-to-br from-[#0a0a1a] via-[#10102b] to-[#1a103c] text-white py-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/20 border border-violet-500/40 text-violet-300 text-sm font-semibold rounded-full mb-6 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            🎬 The #1 AI Video Generator
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
            Turn Words Into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Cinematic Videos
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-4 font-medium">Create photorealistic, high-motion AI videos in seconds.</p>
          <p className="text-slate-400 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
            Harness the power of world-class AI video models like Kling, Veo, and Seedance. Generate marketing videos, social media reels, and cinematic shorts directly from text or images. No watermarks. No editing skills required.
          </p>
          <Link href="/tools/creator/kling-video" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-black rounded-2xl transition-all hover:scale-105 shadow-[0_10px_40px_rgba(139,92,246,0.4)] text-lg">
            🎬 Generate AI Video Now
          </Link>
          <p className="mt-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">Free credits on signup &bull; No credit card required</p>
        </div>
      </section>

      {/* ── FEATURES SECTION ── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 text-center">Master Studio-Quality Video Creation</h2>
          <p className="text-center text-slate-500 mb-14 max-w-2xl mx-auto">Stop paying for expensive stock footage. Generate exactly what you need with unprecedented creative control.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon:"📝", title:"Text-to-Video AI", desc:"Describe your scene, camera angle, and lighting. Our AI generates a full-motion video matching your exact prompt." },
              { icon:"🖼️", title:"Image-to-Video AI", desc:"Upload a static image or a generated AI influencer, and watch it come to life with realistic, physics-based motion." },
              { icon:"🎥", title:"Cinematic Camera Control", desc:"Pan, zoom, tilt, and track. Command the AI camera just like a real-world Hollywood director." },
              { icon:"⚡", title:"Ultra-Fast Rendering", desc:"Get your videos generated in minutes. No more waiting hours for complex renders." },
              { icon:"📱", title:"Social Media Ready", desc:"Generate videos in 16:9 for YouTube, 9:16 for TikTok/Reels, or 1:1 for Instagram grids." },
              { icon:"🧠", title:"State-of-the-Art Models", desc:"Access multiple top-tier video generation engines (Kling, Veo, Seedance) all in one platform." },
            ].map((f) => (
              <div key={f.title} className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-violet-300 hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">{f.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS SECTION ── */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black mb-12 text-center">How to Use the AI Video Generator</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {[
              { step: "1", title: "Write a Prompt or Upload an Image", desc: "Type a descriptive prompt like 'A cinematic drone shot over a neon-lit cyberpunk city at night' or upload a base image to animate." },
              { step: "2", title: "Select Your Video Model", desc: "Choose between Kling for ultra-realism, Veo for speed and cinematic motion, or Seedance for dynamic character movement." },
              { step: "3", title: "Generate and Download", desc: "Click generate. Within seconds to minutes, your high-definition video is ready to download and share without watermarks." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-violet-500 text-white font-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg shadow-violet-500/50">
                  {step.step}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section className="py-12 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { href:"/tools/creator", label:"All AI Tools" },
            { href:"/ai-influencer-generator", label:"AI Influencer Generator" },
            { href:"/ai-fitness-influencer-generator", label:"AI Fitness Influencer" },
            { href:"/ai-fashion-influencer-generator", label:"AI Fashion Influencer" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="text-center py-3 px-4 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:text-violet-600 hover:border-violet-200 hover:shadow-md transition-all">
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── FAQ SECTION (AEO/GEO Optimized) ── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Learn More
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is an AI video generator?", a: "An AI video generator is a tool that uses artificial intelligence to automatically create video content from text descriptions (Text-to-Video) or static pictures (Image-to-Video). It understands prompts and generates realistic motion, lighting, and camera angles." },
              { q: "Is the AI video generator free?", a: "Creatify AI provides free credits upon signup, allowing you to test the AI video generator for free. You can upgrade to a premium plan for higher resolution, longer videos, and access to premium models like Kling Pro." },
              { q: "Can I use the AI-generated videos commercially?", a: "Yes, videos generated on Creatify AI's paid plans can be used commercially for marketing campaigns, YouTube channels, TikTok reels, and advertisements. Always check the specific model terms for trademark usage." },
              { q: "What is the best AI video generator?", a: "The best AI video generator depends on your needs. For extreme cinematic realism, Kling is highly rated. For fast, dynamic shots, Google's Veo architecture is excellent. Creatify AI integrates all these top-tier models into one platform." },
              { q: "Can I make an AI influencer video?", a: "Yes. You can generate a consistent AI influencer image first, and then use our Image-to-Video feature with motion prompts to make your virtual influencer walk, talk, or perform actions." }
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-24 px-4 bg-gradient-to-br from-violet-900 to-indigo-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Start Generating AI Videos Today</h2>
          <p className="text-violet-200 text-lg mb-10">Join thousands of creators, marketers, and filmmakers using Creatify AI.</p>
          <Link href="/tools/creator/kling-video" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-violet-900 font-black rounded-2xl hover:scale-105 transition-all shadow-2xl text-lg">
            🎬 Try it for Free →
          </Link>
        </div>
      </section>

      {/* ── STRUCTURED DATA (Schema.org) ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", 
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is an AI video generator?", "acceptedAnswer": { "@type": "Answer", "text": "An AI video generator is a tool that uses artificial intelligence to automatically create video content from text descriptions (Text-to-Video) or static pictures (Image-to-Video). It understands prompts and generates realistic motion, lighting, and camera angles." } },
          { "@type": "Question", "name": "Is the AI video generator free?", "acceptedAnswer": { "@type": "Answer", "text": "Creatify AI provides free credits upon signup, allowing you to test the AI video generator for free. You can upgrade to a premium plan for higher resolution, longer videos, and access to premium models like Kling Pro." } },
          { "@type": "Question", "name": "Can I use the AI-generated videos commercially?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, videos generated on Creatify AI's paid plans can be used commercially for marketing campaigns, YouTube channels, TikTok reels, and advertisements." } },
          { "@type": "Question", "name": "What is the best AI video generator?", "acceptedAnswer": { "@type": "Answer", "text": "The best AI video generator depends on your needs. For extreme cinematic realism, Kling is highly rated. For fast, dynamic shots, Google's Veo architecture is excellent. Creatify AI integrates all these top-tier models into one platform." } }
        ]
      }) }} />

      <Footer />
    </div>
  );
}
