import React from 'react';
import { PROJECTS } from '../constants';

const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-gray-200 dark:border-gray-800">
      <h3 className="text-sm font-bold tracking-widest uppercase text-center text-gray-500 dark:text-gray-400">
        Featured Projects
      </h3>
      <div className="mt-12 space-y-20">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={project.id} className="grid md:grid-cols-2 gap-10 items-center">
              {/* Text Column */}
              <div className={isEven ? "order-2 md:order-1" : "order-2 md:order-2"}>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h4>
                <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-block mt-4 text-primary font-semibold hover:underline"
                >
                  View Case Study →
                </a>
              </div>
              
              {/* Image Column */}
              <div className={isEven ? "order-1 md:order-2" : "order-1 md:order-1"}>
                {project.imageUrl && (
                  <img
                    alt={`Preview of ${project.title}`}
                    className="rounded-lg shadow-xl w-full h-auto object-cover hover:shadow-2xl transition-shadow duration-300"
                    src={project.imageUrl}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;
