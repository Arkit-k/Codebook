"use client"

import { useState, FormEvent, ChangeEvent } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Subscription failed. Please try again.');
      }
    } catch {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (




<section className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white px-4 py-16 md:py-24 relative overflow-hidden">
{/* Background Effects */}
<div className="max-w-6xl mx-auto relative z-10 mt-20 md:mt-32">
  <div className="bg-white dark:bg-stone-800/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-300 dark:border-stone-700/50 relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-400/10 dark:bg-cyan-400/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-400/10 rounded-full blur-3xl" />

    <div className="text-center relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Boost Your Coding Workflow
      </h2>
      <p className="text-gray-700 dark:text-stone-300 mb-8 max-w-xl mx-auto text-lg md:text-xl">
        Get early access to premium features and coding productivity tips
      </p>

      {/* Email Subscription Form */}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto md:max-w-2xl">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="flex-1 px-6 py-4 rounded-full bg-gray-200 dark:bg-stone-900/80 border border-gray-400 dark:border-stone-700 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-stone-500 transition-all outline-none"
        />
        <button
          type="submit" disabled={isLoading}
          className={`px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-white dark:text-stone-900 font-semibold hover:from-cyan-300 hover:to-emerald-300 transform hover:scale-[1.02] transition-all ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
        
      </form>
      {message && (
        <p className={`mt-4 text-sm ${
          message.includes('Thank you') ? 'text-green-600' : 'text-red-600'
        }`}>
          {message}
        </p>
      )}
      <p className="text-sm text-gray-600 dark:text-stone-500 mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  </div>
</div>
</section>

  )
}