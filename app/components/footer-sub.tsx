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
      <div className="space-y-6">
      <h3 className="text-gray-900 dark:text-stone-300 font-semibold">Stay Updated</h3>
    <form onSubmit={handleSubmit}>
    <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-stone-800 border border-gray-300 dark:border-stone-700 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-stone-500 transition-all outline-none text-sm"
            onChange={handleEmailChange}
          />
      <button
          type="submit" disabled={isLoading}
          className={`w-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-white dark:text-stone-900 font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
      {message && <p>{message}</p>}
    </form>
    <p className="text-xs text-gray-600 dark:text-stone-500">
          Join 10,000+ developers staying ahead
        </p>
    </div>
    );
  }