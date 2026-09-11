import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.creatifyai.in';
  const now = new Date();

  // 1. Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    // ── Core pages ────────────────────────────────────────────────────────────
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/explore`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/help`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // ── Tools ─────────────────────────────────────────────────────────────────
    { url: `${baseUrl}/tools/creator`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/tools/creator/ai-influencer`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/tools/creator/image-generator`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/tools/creator/text-to-image`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/tools/creator/gpt-image`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/tools/creator/kling-video`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/tools/creator/motion-control`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/tools/creator/image-editor`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/tools/creator/instagram-autodm`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/tools/creator/asciikit`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/tools/image-gen`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },

    // ── Avatar ────────────────────────────────────────────────────────────────
    { url: `${baseUrl}/avatar`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/avatar/templates`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },

    // ── SEO Landing Pages ─────────────────────────────────────────────────────
    { url: `${baseUrl}/ai-influencer-generator`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ai-influencer-studio`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/ai-influencer-maker`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/ai-female-influencer-generator`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/ai-male-influencer-generator`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/ai-fashion-influencer-generator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ai-fitness-influencer-generator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ai-instagram-influencer-generator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/realistic-ai-influencer-generator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/free-ai-influencer-generator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/virtual-influencer-creator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // ── Legal & Policy pages ──────────────────────────────────────────────────
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/acceptable-use`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/copyright`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/grievance-redressal`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/report-abuse`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/ai-safety`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/adult-content`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // 2. Dynamic Blog Pages
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const blogDir = path.join(process.cwd(), 'src/app/blog');
    const entries = fs.readdirSync(blogDir, { withFileTypes: true });
    
    // Find all directories inside /blog that have a page.tsx
    const blogSlugs = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .filter((slug) => fs.existsSync(path.join(blogDir, slug, 'page.tsx')) || fs.existsSync(path.join(blogDir, slug, 'page.jsx')));

    blogPages = blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75, // Standard priority for all blog posts
    }));
  } catch (error) {
    console.error('Error generating dynamic blog sitemap:', error);
    // Fallback to empty array if directory read fails
  }

  return [...staticPages, ...blogPages];
}
