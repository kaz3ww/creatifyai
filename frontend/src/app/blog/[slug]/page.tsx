import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer/Footer";
import { getContentData, getAllContentSlugs } from "@/lib/markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

const BASE = process.env.NEXT_PUBLIC_APP_URL || "https://www.creatifyai.in";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const postData = await getContentData("blog", resolvedParams.slug);

  if (!postData) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${postData.frontmatter.title} | Creatify AI`,
    description: postData.frontmatter.description,
    alternates: { canonical: `${BASE}/blog/${resolvedParams.slug}` },
    openGraph: {
      title: postData.frontmatter.title,
      description: postData.frontmatter.description,
      url: `${BASE}/blog/${resolvedParams.slug}`,
      siteName: "Creatify AI",
      type: "article",
      images: [{ url: `${BASE}/logo.png`, width: 512, height: 512, alt: postData.frontmatter.title }],
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllContentSlugs("blog");
  return slugs.map((slug) => ({
    slug: slug.params.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const postData = await getContentData("blog", resolvedParams.slug);

  if (!postData) {
    notFound();
  }

  const { title, description, date, author, tag, tagColor } = postData.frontmatter;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    url: `${BASE}/blog/${resolvedParams.slug}`,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Person", name: author || "Creatify AI Team" },
    publisher: {
      "@type": "Organization",
      name: "Creatify AI",
      logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
    },
    image: `${BASE}/logo.png`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${resolvedParams.slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: `${BASE}/blog/${resolvedParams.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0a0f2e] via-[#0d1540] to-[#1736cf]/40 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-blue-300 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white truncate">{title}</span>
            </nav>
            {tag && (
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 border text-xs font-bold rounded-full mb-5 uppercase tracking-wider ${tagColor || 'bg-blue-500/20 border-blue-400/30 text-blue-300'}`}>
                {tag}
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl">
              {description}
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>By {author || "Creatify AI Team"}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <article 
            className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-a:text-[#1736cf]"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />
          
          {/* Related Links */}
          <section className="mt-16 pt-10 border-t border-slate-200">
            <h2 className="text-xl font-black text-slate-900 mb-6">Read More</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                href="/ai-influencer-generator"
                className="text-center py-4 px-4 bg-slate-50 hover:bg-[#1736cf]/5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#1736cf] transition-all"
              >
                AI Influencer Generator
              </Link>
              <Link
                href="/tools/creator"
                className="text-center py-4 px-4 bg-slate-50 hover:bg-[#1736cf]/5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#1736cf] transition-all"
              >
                Creator Studio
              </Link>
              <Link
                href="/blog"
                className="text-center py-4 px-4 bg-slate-50 hover:bg-[#1736cf]/5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#1736cf] transition-all"
              >
                All Blog Posts
              </Link>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
