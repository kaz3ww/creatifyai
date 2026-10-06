import { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import { getSortedContentData } from "@/lib/markdown";

const BASE = process.env.NEXT_PUBLIC_APP_URL || "https://www.creatifyai.in";

export const metadata: Metadata = {
  title: "AI Influencer Blog — Guides, Strategies & Creator Tips | Creatify AI",
  description: "Read practical Creatify AI guides on AI influencer creation, monetization strategies, virtual creator growth, brand deals, content calendars, and YouTube Shorts for AI influencers.",
  openGraph: {
    title: "AI Influencer Blog — Guides, Strategies & Creator Tips | Creatify AI",
    description: "Practical guides for building AI influencers, monetizing virtual creators, growing on Instagram, TikTok & YouTube, and scaling your AI media business with Creatify AI.",
    url: `${BASE}/blog`,
  },
  alternates: {
    canonical: `${BASE}/blog`,
  },
};

export default function BlogPage() {
  const blogPosts = getSortedContentData("blog");

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-grow max-w-5xl mx-auto px-4 py-20 w-full">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Creatify AI Blog</h1>
          <p className="text-lg text-slate-600">
            Guides, strategies, and tutorials for building profitable AI influencers.
          </p>
        </div>

        {blogPosts.length > 0 && (
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="block bg-gradient-to-br from-[#0a0f2e] to-[#1736cf] text-white rounded-3xl p-8 md:p-10 mb-10 hover:shadow-2xl hover:scale-[1.01] transition-all group"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-white/80 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
              ⭐ Featured
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-blue-200 transition-colors">
              {blogPosts[0].frontmatter.title}
            </h2>
            <p className="text-blue-200 leading-relaxed mb-5 max-w-2xl">{blogPosts[0].frontmatter.description}</p>
            <div className="flex items-center gap-4 text-sm text-blue-300">
              <span>{blogPosts[0].frontmatter.date}</span>
              <span className={`px-2 py-0.5 rounded-full ${blogPosts[0].frontmatter.tagColor || "bg-white/10"}`}>
                {blogPosts[0].frontmatter.tag}
              </span>
            </div>
          </Link>
        )}

        {/* All posts grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-400 font-medium">{post.frontmatter.date}</span>
                {post.frontmatter.tag && (
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${post.frontmatter.tagColor || "bg-blue-100 text-blue-700"}`}>
                    {post.frontmatter.tag}
                  </span>
                )}
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#1736cf] transition-colors leading-snug">
                {post.frontmatter.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">{post.frontmatter.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
