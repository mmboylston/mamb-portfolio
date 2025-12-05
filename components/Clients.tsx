import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-gray-200 dark:border-gray-800">
      <p className="text-center text-gray-500 dark:text-gray-400 max-w-3xl mx-auto px-4">
        Over the last decade, I’ve shaped user-centered digital experiences across financial services, empowering customers and elevating design maturity inside large organizations.
      </p>
      <div className="mt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 px-4">
        {CLIENTS.map((client) => (
          <img
            key={client.name}
            alt={`${client.name} logo`}
            className="h-8 filter grayscale hover:grayscale-0 transition-all duration-300 dark:invert dark:hover:invert-0 opacity-70 hover:opacity-100"
            src={client.logoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
