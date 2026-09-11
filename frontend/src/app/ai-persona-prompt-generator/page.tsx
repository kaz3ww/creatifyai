"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import { Copy, Check, Sparkles } from "lucide-react";

export default function AIPersonaPromptGenerator() {
  const [copied, setCopied] = useState(false);

  // Form State
  const [gender, setGender] = useState("female");
  const [age, setAge] = useState("20s");
  const [ethnicity, setEthnicity] = useState("mixed race");
  const [hair, setHair] = useState("long wavy brunette hair");
  const [outfit, setOutfit] = useState("casual streetwear");
  const [setting, setSetting] = useState("cozy indoor cafe");
  const [lighting, setLighting] = useState("golden hour lighting");
  const [camera, setCamera] = useState("shot on 35mm lens, photorealistic");

  // Options
  const options = {
    gender: ["female", "male", "androgynous"],
    age: ["teens", "20s", "30s", "40s", "50s"],
    ethnicity: ["caucasian", "asian", "black", "hispanic", "mixed race", "nordic", "mediterranean"],
    hair: ["long wavy brunette hair", "short blonde bob", "curly red hair", "buzz cut", "messy black hair", "silver hair"],
    outfit: ["casual streetwear", "high fashion editorial", "gym activewear", "business suit", "vintage 90s aesthetic", "cyberpunk techwear"],
    setting: ["cozy indoor cafe", "neon-lit city streets at night", "luxury hotel balcony", "sunny beach resort", "minimalist white studio", "nature trail"],
    lighting: ["golden hour lighting", "cinematic studio lighting", "neon cyberpunk glow", "soft diffused daylight", "harsh flash photography"],
    camera: ["shot on 35mm lens, DSLR", "shot on iPhone 14 Pro, candid", "polaroid film, vintage", "85mm portrait lens, blurred background", "GoPro wide angle lens"],
  };

  const generatePrompt = () => {
    return `A photorealistic portrait of a ${age} ${ethnicity} ${gender} with ${hair}, wearing ${outfit}. They are standing in a ${setting}. The lighting is ${lighting}. ${camera}. 8k resolution, ultra-detailed, highly realistic.`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatePrompt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Head>
        <title>Free AI Persona Prompt Generator | Creatify AI</title>
        <meta name="description" content="Use our free AI Persona Prompt Generator to create perfect prompts for Midjourney, FLUX, and Stable Diffusion. Build photorealistic AI influencers instantly." />
        <link rel="canonical" href="https://www.creatifyai.in/ai-persona-prompt-generator" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/20 border border-indigo-500/40 text-indigo-200 text-sm font-semibold rounded-full mb-6">
            ✨ Free SEO Tool
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">AI Persona Prompt Generator</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop guessing your AI image prompts. Build the perfect photorealistic AI influencer prompt for Midjourney, FLUX, or Creatify AI in seconds.
          </p>
        </div>
      </section>

      {/* Main Tool Area */}
      <section className="py-12 px-4 -mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8">
          
          {/* Controls (Left) */}
          <div className="md:col-span-7 bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" /> Configure Your Persona
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Gender & Age */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500">
                  {options.gender.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Age Group</label>
                <select value={age} onChange={(e) => setAge(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500">
                  {options.age.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              {/* Ethnicity & Hair */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Ethnicity</label>
                <select value={ethnicity} onChange={(e) => setEthnicity(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500">
                  {options.ethnicity.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Hair Style</label>
                <select value={hair} onChange={(e) => setHair(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500">
                  {options.hair.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              {/* Outfit & Setting */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Outfit</label>
                <select value={outfit} onChange={(e) => setOutfit(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500">
                  {options.outfit.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Setting</label>
                <select value={setting} onChange={(e) => setSetting(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500">
                  {options.setting.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              {/* Lighting & Camera */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Lighting</label>
                <select value={lighting} onChange={(e) => setLighting(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500">
                  {options.lighting.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Camera / Angle</label>
                <select value={camera} onChange={(e) => setCamera(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500">
                  {options.camera.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Output (Right) */}
          <div className="md:col-span-5">
            <div className="bg-slate-900 rounded-2xl shadow-xl p-6 sm:p-8 sticky top-6">
              <h2 className="text-xl font-bold text-white mb-4">Your Generated Prompt</h2>
              <div className="bg-slate-800 rounded-xl p-5 mb-6 border border-slate-700">
                <p className="text-slate-300 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                  {generatePrompt()}
                </p>
              </div>

              <button 
                onClick={handleCopy}
                className="w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-white transition-all bg-indigo-600 hover:bg-indigo-500 hover:scale-[1.02]"
              >
                {copied ? <><Check className="w-5 h-5" /> Copied!</> : <><Copy className="w-5 h-5" /> Copy Prompt</>}
              </button>

              <div className="mt-6 pt-6 border-t border-slate-800 text-center">
                <p className="text-slate-400 text-sm mb-4">Want to generate this image immediately without leaving the site?</p>
                <Link href="/tools/creator" className="inline-block w-full py-3 rounded-xl border border-indigo-500/50 text-indigo-400 font-bold hover:bg-indigo-500/10 transition-colors">
                  Open AI Generator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto prose prose-slate lg:prose-lg">
          <h2>Why Use an AI Persona Prompt Generator?</h2>
          <p>
            Writing the perfect prompt for AI image generators like Midjourney, Stable Diffusion, or FLUX can be tedious. A single missing keyword can ruin the lighting, the aesthetic, or the realism of your character. Our free AI persona prompt builder eliminates the guesswork by structuring the prompt with professional photography terminology and optimal token ordering.
          </p>
          <h3>How to Create a Consistent AI Influencer</h3>
          <p>
            To build a virtual influencer that looks the same across multiple images, you must lock in their core DNA. Use this tool to define their exact ethnicity, age, and hair style. Once you have your core prompt, simply swap out the <strong>Outfit</strong> and <strong>Setting</strong> variables to generate new content for your influencer&apos;s Instagram or TikTok!
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "AI Persona Prompt Generator",
        "operatingSystem": "Web",
        "applicationCategory": "UtilitiesApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "A free interactive tool to build optimized prompts for generating AI influencers and photorealistic characters using AI image generators."
      }) }} />

      <Footer />
    </div>
  );
}
