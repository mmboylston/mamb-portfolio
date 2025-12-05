import React from 'react';
import { ADDITIONAL_CASE_STUDIES } from '../constants';

const AdditionalCaseStudies: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-gray-200 dark:border-gray-800">
      <h3 className="text-sm font-bold tracking-widest uppercase text-center text-gray-500 dark:text-gray-400">
        Additional Case Studies
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-center">
        {ADDITIONAL_CASE_STUDIES.map((study, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {study.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdditionalCaseStudies;
