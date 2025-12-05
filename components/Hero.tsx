import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            I’m a UX leader, product designer, systems thinker, and human-centered strategist.
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl text-gray-600 dark:text-gray-400">
            I transform complex financial ecosystems into simple, empowering customer experiences.
          </h2>
          <p className="mt-8 text-lg text-gray-500 dark:text-gray-400">
            I lead UX at Consorcio and I really love what I do.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            alt="Portrait of Matías Martínez Boylston"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVdXkYjGS1g8RWg0_ArO80WpoV3ROMaaMj8U2ql7zoC4kWHIO6U5MTVxML5efS0ZWF-bWifAmIl8-tIsE4y7Y6UXwKZw4pN6dQDzD8ggkMDnCc8tu6es84WMNmRZ_q4o0eYu-W5Cpk-UkplcaQanPUbI7IsKlNwLf4AXmPztbrRuk5naBS4ywcIp3LYhLsM54YIRExP4Z9zrWGf_BAUCFNsaYeMNFwE9WsCRjjJLcEKyvwHDAdEZjpNmTknsfb34EaTwcum0CuLp5Z"
          />
        </div>
      </div>
      <div className="mt-16 text-base text-gray-600 dark:text-gray-400 max-w-4xl space-y-4">
        <p>
          With 20+ years of experience, I blend business strategy, systems design, and deep user empathy to create value. My expertise lies in financial services—banking, insurance, investments, and pensions—where I have a strong track record aligning design with key business outcomes like adoption, retention, cross-selling, and efficiency.
        </p>
        <p>
          My bilingual (English/Spanish) and multicultural (Chile + U.S.) background allows me to build bridges and foster collaboration across diverse teams.
        </p>
      </div>
    </section>
  );
};

export default Hero;
