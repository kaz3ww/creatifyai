import { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "AI Influencer Blog, AI Avatar Guides & Creator SEO | Creatify AI",
  description: "Read practical Creatify AI guides on AI influencer creation, AI avatar generators, no-watermark AI images, virtual creators, cinematic videos, and creator growth workflows.",
  openGraph: {
    title: "AI Influencer Blog, AI Avatar Guides & Creator SEO | Creatify AI",
    description: "Practical guides for building AI influencers, generating no-watermark images, planning virtual creator content, and scaling AI media workflows with Creatify AI.",
    url: "/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    title: "How to Create an AI Influencer for TikTok & Make Money (2026 Guide)",
    description: "Learn how to create an AI influencer and make money using the best free AI influencer generator for TikTok and social media.",
    slug: "how-to-create-ai-influencer-tiktok-make-money",
    date: "2026-09-08"
  },
  {
    title: "Best Creatify AI Alternative in 2026",
    description: "Looking for an Creatify AI alternative? See why creatifyai.in is the best AI influencer generator — free tier, more models, no limits.",
    slug: "creatifyai-alternative",
    date: "2026-01-01"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-grow max-w-5xl mx-auto px-4 py-20 w-full">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Creatify AI Blog</h1>
        <p className="text-lg text-slate-600 mb-12">Latest guides, tips, and strategies for building virtual creators.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div className="text-sm text-slate-400 font-medium mb-3">{post.date}</div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1736cf] transition-colors">{post.title}</h2>
              <p className="text-slate-600 leading-relaxed text-sm">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
