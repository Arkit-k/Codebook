"use client"
import React, { useState, } from 'react';
import Image from "next/image";
import Navbar from '@/compo/layout/Navbar';
import Subscribe from "@/app/components/subscribe"
import Link from "next/link"
import Footer from "@/app/components/footer-sub"
import {  ArrowRight, Bookmark, MessageSquare, TrendingUp,  Trophy, Github, Twitter } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  readTime: string;
  publishedAt: string;
  imageUrl: string;
  featured: boolean;
  comments: number;
  bookmarks: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mastering Code Snippets: Best Practices for Organization",
    excerpt: "Learn how to effectively organize and manage your code snippets for maximum productivity and reusability.",
    content: "Full article content here...",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
      role: "Senior Developer"
    },
    category: "Best Practices",
    readTime: "5 min read",
    publishedAt: "2024-03-15",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    featured: true,
    comments: 24,
    bookmarks: 156
  },
  {
    id: 2,
    title: "10 Essential VS Code Snippets Every Developer Should Know",
    excerpt: "Boost your coding efficiency with these must-have VS Code snippets that will streamline your workflow.",
    content: "Full article content here...",
    author: {
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
      role: "Developer Advocate"
    },
    category: "Productivity",
    readTime: "8 min read",
    publishedAt: "2024-03-14",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    featured: true,
    comments: 18,
    bookmarks: 203
  },
  {
    id: 3,
    title: "Creating Reusable React Component Snippets",
    excerpt: "A comprehensive guide to creating and sharing reusable React component snippets with your team.",
    content: "Full article content here...",
    author: {
      name: "Alex Turner",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
      role: "Frontend Lead"
    },
    category: "React",
    readTime: "6 min read",
    publishedAt: "2024-03-13",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    featured: false,
    comments: 12,
    bookmarks: 89
  }
];

const categories = [
  "All Posts",
  "Best Practices",
  "Productivity",
  "React",
  "TypeScript",
  "Python",
  "DevOps"
];

const topContributors = [
  {
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    contributions: 156,
    github: "sarahchen",
    twitter: "sarahchen_dev"
  },
  {
    name: "Mike Johnson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
    contributions: 142,
    github: "mikej",
    twitter: "mikej_codes"
  },
  {
    name: "Alex Turner",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
    contributions: 128,
    github: "alexturner",
    twitter: "alexturner_dev"
  }
];

const trendingTopics = [
  { name: "React Hooks", count: 2453 },
  { name: "TypeScript Tips", count: 1832 },
  { name: "VS Code Extensions", count: 1654 },
  { name: "Git Workflows", count: 1427 },
  { name: "Docker", count: 1289 }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
      return (
        <>  
        <div className="bg-gray-200 dark:bg-black">
          <Navbar/>        
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-900 dark:text-white mb-4">
            CodeBook Blog
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400">
            Insights, tutorials, and best practices for code snippet management
          </p>
        </div>

        {/* Trending Topics Section */}
        <section className="mb-12 bg-white dark:bg-stone-800 rounded-xl p-6 shadow-md">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
            <h2 className="text-2xl font-bold text-stone-900 dark:text-white">Trending Topics</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {trendingTopics.map((topic) => (
              <div key={topic.name} className="bg-gray-50 dark:bg-stone-700 rounded-lg p-4">
                <h3 className="font-medium text-stone-900 dark:text-white mb-1">{topic.name}</h3>
                <p className="text-sm text-stone-500 dark:text-stone-400">{topic.count} snippets</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-cyan-600 text-white'
                    : 'bg-white dark:bg-stone-800 text-gray-700 dark:text-cyan-300 hover:bg-gray-100 dark:hover:bg-stone-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => post.featured).map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-stone-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-600 text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-stone-900 dark:text-white">
                      {post.author.name}
                    </p>
                    <p className="text-sm text-stone-500 dark:text-gray-400">
                      {post.author.role}
                    </p>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-stone-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-stone-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-stone-500 dark:text-stone-400">
                      <MessageSquare className="h-5 w-5 mr-1" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Bookmark className="h-5 w-5 mr-1" />
                      <span>{post.bookmarks}</span>
                    </div>
                  </div>
                  <button className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium flex items-center">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Top Contributors Section */}
        <section className="mb-12 bg-white dark:bg-stone-800 rounded-xl p-6 shadow-md">
          <div className="flex items-center mb-6">
            <Trophy className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mr-2" />
            <h2 className="text-2xl font-bold text-stone-900 dark:text-white">Top Contributors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topContributors.map((contributor) => (
              <div key={contributor.name} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-stone-700 rounded-lg">
                <Image
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-stone-900 dark:text-white">{contributor.name}</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{contributor.contributions} contributions</p>
                  <div className="flex space-x-2 mt-2">
                    <a href={`https://github.com/${contributor.github}`} className="text-cyan-500 hover:text-stone-700 dark:hover:text-cyan-300">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href={`https://twitter.com/${contributor.twitter}`} className="text-cyan-500 hover:text-stone-700 dark:hover:text-cyan-300">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        {/* Newsletter Section */}
        
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
    {["feature", "Support", "blog" , "about-me"].map((link) => (
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
        © {new Date().getFullYear()} arkit-karmokar. All rights reserved.
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
      </main>
      </div>
    </>
  );
}

export default App;