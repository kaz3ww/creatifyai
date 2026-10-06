# Creatify AI - SEO Handoff & Operations Manual

## 1. What Was Built
- **Markdown Content System:** Blog posts and Model overview pages are now powered by a Markdown architecture located in `frontend/src/content/blog` and `frontend/src/content/models`.
- **Dynamic Routing:** 
  - `src/app/blog/[slug]/page.tsx` dynamically renders any `.md` file placed in the `blog` content directory.
  - `src/app/models/[slug]/page.tsx` dynamically renders any `.md` file placed in the `models` content directory.
- **Automated Sitemap:** `sitemap.ts` now automatically reads the `.md` files to generate indexable URLs for search engines.
- **Seeded Content:** 
  - Rewrote the "TikTok AI Influencer" guide to be more helpful and less keyword-stuffed.
  - Created Model pages for `kling-video` and `wan-2.7-image-pro`.

## 2. How to Add New Content

### Adding a New Blog Article
1. Create a new file in `frontend/src/content/blog/` (e.g. `how-to-grow-instagram.md`).
2. Add the Frontmatter at the top of the file:
```markdown
---
title: "Your High-CTR Title Here"
description: "A short, compelling meta description."
date: "2026-10-15"
author: "Creatify AI Team"
tag: "Growth"
tagColor: "bg-pink-100 text-pink-700"
---
```
3. Write your content in standard Markdown below the frontmatter.
4. Commit and deploy. The new article will automatically appear on the `/blog` hub and in the XML sitemap.

### Adding a New Model Page
1. Create a new file in `frontend/src/content/models/` (e.g. `qwen-image-plus.md`).
2. Add the Frontmatter:
```markdown
---
title: "Qwen Image Plus"
description: "Advanced multimodal vision-language model."
modelId: "qwen-image-plus"
type: "Image Generation"
provider: "Alibaba"
tag: "Vision"
---
```
3. Write the capabilities, strengths, weaknesses, and prompt examples in Markdown.

## 3. Placeholders & Real Data Needed From You
* **Real generated examples for Models:** The seeded model pages (`kling-video.md` and `wan-2-7-image.md`) have an HTML comment `<!-- TODO: Add real generated video examples -->`. You should add actual image/video outputs from your platform to prove authority.
* **Author Bios:** Currently defaulting to "Creatify AI Team". If you have real authors (e.g. Akash Rana), create a dedicated author system or simply use their name in the frontmatter.

## 4. Manual Steps Required
1. **Search Console:** Submit the updated `https://www.creatifyai.in/sitemap.xml` in Google Search Console once deployed.
2. **GA4 / Tag Manager:** The scripts are already in `layout.tsx`. Ensure your G-HVL4GHQ10K property is receiving data in real-time.
3. **Internal Linking Cleanup:** Review the 25 old hardcoded blog folders in `src/app/blog/`. Migrate the ones you want to keep into Markdown files in `src/content/blog/` and delete the old folders.

## 5. 12-Month Editorial Calendar Strategy
- **70% Evergreen Educational:** Focus on "How to make a consistent AI face", "How to monetize AI influencers on TikTok", "AI influencer setup guides".
- **20% Commercial Comparison:** "Creatify AI vs Midjourney for Influencers", "Best AI Video Generators 2026". (Be honest about strengths/weaknesses).
- **10% Timely Model Updates:** When Wan 3.0 or Kling 2.0 drops, publish a benchmark post on how it affects virtual influencer generation.

## 6. Ongoing GSC Review Checklist (Monthly)
- [ ] **High-Impression / Low-CTR:** Find pages getting seen but not clicked. Rewrite the `title` and `description` in the markdown frontmatter.
- [ ] **Positions 4–20:** Identify pages stuck on page 2 or bottom of page 1. Add more depth, internal links, or generated examples to push them to the top 3.
- [ ] **Declining Pages:** If a page loses traffic, update it with new information and bump the `date` in the frontmatter.
