
import { CodeBracketIcon, ShareIcon, CloudArrowDownIcon, MagnifyingGlassIcon, LockClosedIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import FeatureCard from '../components/featureCard';
import Navbar from '@/compo/layout/Navbar';
import Link from "next/link";
import Footer from "@/app/components/footer-sub";
import Subscribe from "@/app/components/subscribe";

export default function FeaturesPage() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-100">
      <Navbar/>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-green-500 bg-clip-text text-transparent">
          CodeBook Features
        </h1>
        <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto">
          Empower your coding workflow with our comprehensive snippet management solution
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<CodeBracketIcon className="h-8 w-8" />}
            title="Code Snippet Management"
            description="Organize your code snippets with tags, categories, and advanced search capabilities."
          />

          <FeatureCard
            icon={<ShareIcon className="h-8 w-8" />}
            title="Collaborative Sharing"
            description="Share snippets with team members or the community with customizable privacy settings."
          />

          <FeatureCard
            icon={<CloudArrowDownIcon className="h-8 w-8" />}
            title="Cloud Sync"
            description="Access your code snippets from anywhere with automatic cloud synchronization."
          />

          <FeatureCard
            icon={<MagnifyingGlassIcon className="h-8 w-8" />}
            title="Smart Search"
            description="Find snippets quickly with full-text search and AI-powered semantic matching."
          />

          <FeatureCard
            icon={<LockClosedIcon className="h-8 w-8" />}
            title="Secure Storage"
            description="Enterprise-grade security with end-to-end encryption for your private code."
          />

          <FeatureCard
            icon={<CommandLineIcon className="h-8 w-8" />}
            title="Multi-Language Support"
            description="Syntax highlighting for 50+ programming languages and markup formats."
          />
        </div>

        {/* Interactive Preview Section */}
        <div className="mt-20 p-8 bg-stone-800 rounded-xl border border-gray-700">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Live Preview</h2>
            <div className="mockup-code text-left bg-stone-900">
              <pre className="px-8 py-6">
                <code className="text-sm language-javascript">
                  {`// Example managed snippet\n`}
                  <span className="text-blue-400">function</span> <span className="text-purple-400">greet</span>() {'{\n'}
                  <span className="text-gray-400 ml-4">console.</span><span className="text-yellow-400">log</span>
                  {'(\'Welcome to CodeBook!\')'}\n{'}'}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">Ready to Boost Your Productivity?</h2>
          <Link href="/sign-in">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
            Get Started for Free
          </button>
          </Link>
        </div>
      </section>
      <Subscribe />
      <footer className="bg-gray-100 dark:bg-black border-t border-gray-300 dark:border-stone-800 relative overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute -top-32 inset-x-0 mx-auto w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl" />

  <div className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12 relative z-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
      {/* Branding Section */}
      <div className="space-y-5">
        <div className="flex items-center gap-1 text-[23px]">
          <span className="font-extrabold text-stone-900 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-emerald-400 dark:text-transparent dark:bg-clip-text">
            {"</"}
          </span>
          <div className="flex gap-1">
            <span className="text-stone-900 dark:text-gray-100 font-bold">Code</span>
            <span className="text-cyan-400 font-bold">Book</span>
          </div>
          <span className="font-extrabold text-stone-900 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-emerald-400 dark:text-transparent dark:bg-clip-text">
            {">"}
          </span>
        </div>

        <p className="text-gray-700 dark:text-stone-400 text-sm leading-relaxed">
          Elevating developer productivity through intelligent code management solutions.
        </p>
        
        {/* Social Icons */}
        <div className="flex space-x-4">
          {["github", "twitter", "linkedin", "discord"].map((platform) => (
            <button
              key={platform}
              className="p-2 rounded-full bg-gray-200 dark:bg-stone-800 hover:bg-gray-300 dark:hover:bg-stone-700 transition-all text-gray-600 dark:text-stone-400 hover:text-cyan-400 flex items-center justify-center"
            >
              <span className="sr-only">{platform}</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                {/* Add appropriate SVG paths for each platform */}
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
  <h3 className="text-gray-900 dark:text-stone-300 font-semibold">Resources</h3>
  <nav className="space-y-2">
    {["feature", "sign-in","blog","about-me"].map((link) => (
      <Link key={link} href={`/${link.toLowerCase()}`} passHref>
        <div className="text-gray-600 dark:text-stone-400 hover:text-emerald-400 text-sm transition-colors flex items-center group">
          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          {link}
        </div>
      </Link>
    ))}
  </nav>
</div>


      {/* Resources */}
      <div className="space-y-4">
  <h3 className="text-gray-900 dark:text-stone-300 font-semibold">Social Links</h3>
  <nav className="space-y-2">
    {["github", "twitter", "linkedin", "discord"].map((link) => (
      <Link key={link} href={`/${link.toLowerCase()}`} passHref>
        <div className="text-gray-600 dark:text-stone-400 hover:text-emerald-400 text-sm transition-colors flex items-center group">
          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          {link}
        </div>
      </Link>
    ))}
  </nav>
</div>

      {/* Newsletter Section */}
     <Footer/>
    </div>

    {/* Bottom Copyright */}
    <div className="border-t border-gray-300 dark:border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0">
      <p className="text-gray-600 dark:text-stone-500 text-sm">
        © {new Date().getFullYear()} Arkit-karmokar. All rights reserved.
      </p>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-600 dark:text-stone-500 hover:text-cyan-400 text-sm transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-600 dark:text-stone-500 hover:text-emerald-400 text-sm transition-colors">
          Terms of Service
        </a>
      </div>
    </div>
  </div>
  </footer>
    </div>
    </>
  );
}