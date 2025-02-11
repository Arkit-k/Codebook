// components/FeatureCard.tsx

import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-stone-800 rounded-xl hover:bg-stone-700 transition-colors duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="p-4 bg-stone-700 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-stone-400">{description}</p>
      </div>
    </div>
  );
}