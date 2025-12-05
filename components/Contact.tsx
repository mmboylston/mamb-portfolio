import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 text-center border-t border-gray-200 dark:border-gray-800">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
        Let's Connect
      </h3>
      <p className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
        Have a project in mind, want to discuss UX leadership, or just want to say hi? Feel free to reach out via email or connect with me on LinkedIn.
      </p>
      <div className="mt-8 flex justify-center items-center space-x-6">
        <a 
          className="text-primary hover:underline font-semibold" 
          href="mailto:matias.martinez.b@email.com"
        >
          matias.martinez.b@email.com
        </a>
        <a 
          className="text-primary hover:underline font-semibold" 
          href="https://linkedin.com/in/yourprofile" 
          rel="noopener noreferrer" 
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
