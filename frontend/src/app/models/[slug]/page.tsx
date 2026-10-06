import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer/Footer";
import { getContentData, getAllContentSlugs } from "@/lib/markdown";
import { CheckCircle2, AlertTriangle, Play, Sparkles, ChevronRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

const BASE = process.env.NEXT_PUBLIC_APP_URL || "https://www.creatifyai.in";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const postData = await getContentData("models", resolvedParams.slug);

  if (!postData) {
    return { title: "Model Not Found" };
  }

  return {
    title: `${postData.frontmatter.title} Model — Capabilities & Prompts | Creatify AI`,
    description: postData.frontmatter.description,
    alternates: { canonical: `${BASE}/models/${resolvedParams.slug}` },
    openGraph: {
      title: `${postData.frontmatter.title} Model — Capabilities & Prompts | Creatify AI`,
      description: postData.frontmatter.description,
      url: `${BASE}/models/${resolvedParams.slug}`,
      siteName: "Creatify AI",
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllContentSlugs("models");
  return slugs.map((slug) => ({
    slug: slug.params.slug,
  }));
}

export default async function ModelPage({ params }: Props) {
  const resolvedParams = await params;
  const postData = await getContentData("models", resolvedParams.slug);

  if (!postData) {
    notFound();
  }

  const { title, description, type, provider, tag } = postData.frontmatter;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a0f2e] via-[#0d1540] to-[#1736cf]/60 text-white py-20 px-4 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <nav className="text-sm text-blue-300 mb-8 flex items-center gap-2 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/tools/creator" className="hover:text-white transition-colors">Models</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{title}</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-bold tracking-wider uppercase">
              {type}
            </div>
            {tag && (
              <div className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> {tag}
              </div>
            )}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
            {title}
          </h1>
          
          <p className="text-xl text-blue-100/80 mb-10 leading-relaxed max-w-3xl">
            {description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/tools/creator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a0f2e] font-black rounded-2xl hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
            >
              <Play className="w-5 h-5 fill-current" /> Try {title} Free
            </Link>
            <div className="text-sm text-blue-200 font-medium px-4 py-2 bg-white/5 rounded-xl border border-white/10">
              Provider: <span className="text-white">{provider}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full flex-grow">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
          <article 
            className="prose prose-slate prose-lg max-w-none 
              prose-headings:font-black prose-headings:text-slate-900 
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:border-b prose-h2:pb-4 prose-h2:border-slate-100
              prose-a:text-[#1736cf] prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-[#1736cf] prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-slate-700
              prose-li:marker:text-[#1736cf]
              prose-strong:text-slate-900"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
