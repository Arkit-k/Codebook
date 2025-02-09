import {Badge} from "@/compo/ui/badge";
import Link from "next/link";
import Dashboard from "./public/dashboard-ui.png"
import {ArrowRightIcon} from "@radix-ui/react-icons";
import {Button} from "@/compo/ui/button";
import Image from "next/image";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/compo/ui/card";
import {features} from "@/data/features";
import Subscribe from "@/app/components/subscribe"


import Navbar from "@/compo/layout/Navbar";

export default function Home() {
    return (
        <>
        <Navbar />
        <div className="border-b border-border">
  <main className="container mx-auto">
    <div className="relative mx-auto w-full max-w-4xl mt-16 md:mt-24 pt-4 md:pt-0 text-center">
      <div className="justify-center hidden md:flex">
        <div
          className="flex flex-row items-center justify-center gap-5 p-1 text-xs bg-card/60 backdrop-blur-lg rounded-md border border-border"
        >
          <Badge className="font-semibold">New</Badge>
          <h5>Announce your new feature here</h5>
          <Link href="/" className="flex flex-row items-center">
            View all features
            <ArrowRightIcon className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </div>
      <h1 className="md:text-7xl my-4 font-extrabold text-4xl md:leading-tight">
        Create perfect projects with this landing page!
      </h1>
      <p className="mx-auto my-4 text-sm w-full max-w-xl text-center font-medium leading-relaxed tracking-wide">
        This is a landing page template that you can use to create a beautiful website. It is designed
        to be easy to use and customize. You can use this template to create a landing page for your app, product,
        or service. It is built with Next.js, Tailwind CSS, and TypeScript.
      </p>
      <div className="flex flex-row justify-center items-center space-x-4 my-8">
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>

      <div className="absolute top-0 -z-10 max-h-full max-w-screen-lg w-full h-full blur-2xl">
        <div className="absolute top-24 left-24 w-56 h-56 bg-violet-600 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl"></div>
        <div className="absolute hidden md:block bottom-2 right-1/4 w-56 h-56 bg-sky-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-1000 filter blur-3xl"></div>
        <div className="absolute hidden md:block bottom-1/4 left-1/3 w-56 h-56 bg-pink-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-500 filter blur-3xl"></div>
      </div>
    </div>

   {/* For Desktop */}
<div className="max-w-4xl mx-auto mt-12 hidden md:block">
  <Image
    className="w-full mt-12"
    src={Dashboard}
    alt="Dashboard ui design"
    priority
    width={1200}
    height={800}
  />
</div>

{/* For Mobile with Extra Margin */}
<div className="max-w-4xl mx-auto mt-20 md:hidden">
  <Image
    className="w-full"
    src={Dashboard}
    alt="Dashboard ui design"
    priority
    width={1200}
    height={800}
  />
</div>

  </main>
</div>


            {/* features */}

            <section
                className="border-b border-border bg-gradient-to-b from-background to-transparent via-background via-90% relative">
                <div className="container mx-auto text-center">
                    <div className="my-24">
                        <h5 className="text-cyan-400">
                            WHY CHOOSE US
                        </h5>
                        <h2 className="text-4xl font-extrabold my-4">
                            Build better websites with us
                        </h2>

                        <p className="mx-auto my-4 text-sm w-full max-w-md bg-transparent text-center font-medium leading-relaxed tracking-wide text-muted-foreground">
                            Show off your features or services in a beautiful way. This section is perfect for
                            showcasing
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 mt-12">
                            {features.map((feature) => (
                                <Card key={feature.title} className="max-w-lg mx-auto">
                                    <CardHeader>
                                        <div
                                            className="w-16 h-16 text-primary-foreground flex justify-center items-center border border-border rounded-xl bg-primary mx-auto">
                                            {feature.icon}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle className="text-cyan-400">{feature.title}</CardTitle>
                                        <CardDescription className="mt-4">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="absolute top-0 -z-10 max-h-full w-full h-full blur-2xl">
                    <div
                        className="absolute bottom-0 left-0 w-1/2 h-56 bg-violet-600 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl">
                    </div>
                    <div
                        className="absolute bottom-0 right-0 w-1/2 h-56 bg-sky-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-1000 filter blur-3xl"></div>
                </div>
            </section>

            {/* benift */}

            <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 py-16 md:py-24 relative overflow-hidden transition-colors duration-300">
  {/* Decorative geometric elements */}
  <div className="absolute -top-32 -left-32 w-64 h-64 bg-stone-300 dark:bg-stone-700 rounded-full opacity-20 blur-3xl" />
  <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-stone-300 dark:bg-stone-700 rounded-full opacity-20 blur-3xl" />

  <div className="max-w-6xl mx-auto relative z-10">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Side - Headings */}
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Unlock Efficiency: <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Save & Reuse
          </span>
        </h1>
        <p className="text-lg md:text-xl text-stone-700 dark:text-stone-300 leading-relaxed">
          Our code snippet saver allows you to store and organize your code snippets for quick access. 
          Streamline your workflow and enhance productivity by reusing.
        </p>
      </div>

      {/* Right Side - Feature Boxes */}
      <div className="space-y-8">
        <FeatureCard
          title="Time Savings"
          content="Reduce repetitive coding tasks and focus on what truly matters—building great software."
          decoration="▲"
        />
        <FeatureCard
          title="Organized Access"
          content="Keep your code snippets neatly organized for quick retrieval whenever you need."
          decoration="◆"
        />
      </div>
    </div>
  </div>
</section>


   {/* subscribe */}
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
        <h3 className="text-gray-900 dark:text-stone-300 font-semibold">Quick Links</h3>
        <nav className="space-y-2">
          {["Features", "Documentation", "Pricing", "Status"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-600 dark:text-stone-400 hover:text-cyan-400 text-sm transition-colors flex items-center group"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Resources */}
      <div className="space-y-4">
        <h3 className="text-gray-900 dark:text-stone-300 font-semibold">Resources</h3>
        <nav className="space-y-2">
          {["Blog", "Tutorials", "API Reference", "Support"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-600 dark:text-stone-400 hover:text-emerald-400 text-sm transition-colors flex items-center group"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Newsletter Section */}
      <div className="space-y-6">
        <h3 className="text-gray-900 dark:text-stone-300 font-semibold">Stay Updated</h3>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-stone-800 border border-gray-300 dark:border-stone-700 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-stone-500 transition-all outline-none text-sm"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-white dark:text-stone-900 font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            Subscribe Now
          </button>
        </form>
        <p className="text-xs text-gray-600 dark:text-stone-500">
          Join 10,000+ developers staying ahead
        </p>
      </div>
    </div>

    {/* Bottom Copyright */}
    <div className="border-t border-gray-300 dark:border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0">
      <p className="text-gray-600 dark:text-stone-500 text-sm">
        © {new Date().getFullYear()} CodeSnippets. All rights reserved.
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
        </>
    );
}

function FeatureCard({ title, content, decoration }: { title: string; content: string; decoration: string }) {
  return (
    <div className="relative bg-black backdrop-blur-sm p-8 rounded-2xl border border-stone-700/50 hover:border-cyan-400/30 transition-all">
      <div className="absolute -top-6 -right-6 text-9xl opacity-10 transform rotate-12">
        {decoration}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-cyan-400">{title}</h3>
      <p className="text-stone-300 leading-relaxed">{content}</p>
      
      {/* Animated hover effect line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}