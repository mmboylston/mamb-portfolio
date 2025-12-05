import React from 'react';
import { SPEAKING_ENGAGEMENTS } from '../constants';

const Speaking: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-gray-200 dark:border-gray-800">
      <h3 className="text-sm font-bold tracking-widest uppercase text-center text-gray-500 dark:text-gray-400">
        Speaking & Teaching
      </h3>
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
        {SPEAKING_ENGAGEMENTS.map((engagement, index) => (
          <div key={index} className="text-center">
            <h4 className="font-bold text-lg text-gray-900 dark:text-white">
              {engagement.title}
            </h4>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              {engagement.organization}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speaking;
