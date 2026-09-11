import { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "AI Influencer Blog — Guides, Strategies & Creator Tips | Creatify AI",
  description: "Read practical Creatify AI guides on AI influencer creation, monetization strategies, virtual creator growth, brand deals, content calendars, and YouTube Shorts for AI influencers.",
  openGraph: {
    title: "AI Influencer Blog — Guides, Strategies & Creator Tips | Creatify AI",
    description: "Practical guides for building AI influencers, monetizing virtual creators, growing on Instagram, TikTok & YouTube, and scaling your AI media business with Creatify AI.",
    url: "/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    title: "AI Influencer Monetization Strategies 2026: Make $10K+/Month",
    description: "Discover the 6 proven strategies top virtual creators use to earn $10,000+ per month — brand deals, affiliate marketing, digital products, and more.",
    slug: "ai-influencer-monetization-strategies-2026",
    date: "2026-09-10",
    tag: "Monetization",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "How to Create an AI Influencer for TikTok & Make Money (2026 Guide)",
    description: "Learn how to create an AI influencer and make money using the best free AI influencer generator for TikTok and social media.",
    slug: "how-to-create-ai-influencer-tiktok-make-money",
    date: "2026-09-08",
    tag: "Tutorial",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "Best AI Influencer Niches in 2026: Top 10 Profitable Categories",
    description: "Discover the 10 most profitable AI influencer niches ranked by earning potential, brand demand, and competition level.",
    slug: "best-ai-influencer-niches-2026",
    date: "2026-09-09",
    tag: "Strategy",
    tagColor: "bg-violet-100 text-violet-700",
  },
  {
    title: "How to Grow an AI Influencer on Instagram in 2026 (0 to 100K Guide)",
    description: "The complete step-by-step roadmap for growing a virtual AI influencer from zero to 100,000 Instagram followers — with posting schedules and hashtag strategies.",
    slug: "how-to-grow-ai-influencer-instagram-2026",
    date: "2026-09-07",
    tag: "Instagram",
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    title: "Best Virtual Influencer Examples in 2026 (Real Stats & Earnings)",
    description: "Explore the world's most successful virtual influencers — with real follower counts, brand partners, and estimated earnings to inspire your own AI creator journey.",
    slug: "best-virtual-influencer-examples-2026",
    date: "2026-09-06",
    tag: "Case Studies",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    title: "How to Create AI Influencer Videos for YouTube Shorts in 2026",
    description: "Complete guide to creating, posting, and monetizing AI influencer videos on YouTube Shorts — including the 6-step production workflow.",
    slug: "create-ai-influencer-videos-youtube-shorts-2026",
    date: "2026-09-05",
    tag: "Video",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    title: "AI Influencer Brand Deals: How to Land Your First Sponsorship in 2026",
    description: "Cold email templates, rate card, brand hit list, and media kit checklist for landing your first AI influencer brand deal.",
    slug: "ai-influencer-brand-deals-how-to-land-sponsorship-2026",
    date: "2026-09-04",
    tag: "Business",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    title: "AI Influencer Content Calendar Template 2026 (Full 30-Day Plan)",
    description: "A complete 30-day content calendar with posting ideas, caption frameworks, and batch creation workflow for AI influencers on all platforms.",
    slug: "ai-influencer-content-calendar-template-2026",
    date: "2026-09-03",
    tag: "Planning",
    tagColor: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "How to Build a Consistent AI Influencer Persona in 2026",
    description: "The complete character design framework for building a memorable, brand-consistent AI influencer persona — backstory, visual identity, personality, and more.",
    slug: "how-to-build-consistent-ai-influencer-persona-2026",
    date: "2026-09-02",
    tag: "Design",
    tagColor: "bg-cyan-100 text-cyan-700",
  },
  {
    title: "Best Creatify AI Alternative in 2026",
    description: "Looking for a Creatify AI alternative? See why creatifyai.in is the best AI influencer generator — free tier, more models, no limits.",
    slug: "creatifyai-alternative",
    date: "2026-01-01",
    tag: "Comparison",
    tagColor: "bg-slate-100 text-slate-700",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-grow max-w-5xl mx-auto px-4 py-20 w-full">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Creatify AI Blog</h1>
          <p className="text-lg text-slate-600">
            Guides, strategies, and tutorials for building profitable AI influencers.
          </p>
        </div>

        {/* Featured post */}
        <Link
          href={`/blog/${blogPosts[0].slug}`}
          className="block bg-gradient-to-br from-[#0a0f2e] to-[#1736cf] text-white rounded-3xl p-8 md:p-10 mb-10 hover:shadow-2xl hover:scale-[1.01] transition-all group"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-white/80 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            ⭐ Featured
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-blue-200 transition-colors">
            {blogPosts[0].title}
          </h2>
          <p className="text-blue-200 leading-relaxed mb-5 max-w-2xl">{blogPosts[0].description}</p>
          <div className="flex items-center gap-4 text-sm text-blue-300">
            <span>{blogPosts[0].date}</span>
            <span className="px-2 py-0.5 bg-white/10 rounded-full">{blogPosts[0].tag}</span>
          </div>
        </Link>

        {/* All posts grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-400 font-medium">{post.date}</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${post.tagColor}`}>{post.tag}</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#1736cf] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

