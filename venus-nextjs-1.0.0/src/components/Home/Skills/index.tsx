'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const tools = [
  { name: 'Excel', src: '/images/svgs/Excel.png' },
  { name: 'Power BI', src: '/images/svgs/Power Bi.png' },
  { name: 'SQL', src: '/images/svgs/SQL.png' },
  { name: 'Python', src: '/images/svgs/python.png' },
  { name: 'NumPy', src: '/images/svgs/numpy.png' },
  { name: 'Pandas', src: '/images/svgs/pandas.png' },
  { name: 'Matplotlib', src: '/images/svgs/matplotlib.png' },
  { name: 'Seaborn', src: '/images/svgs/Seaborn.png' },
  { name: 'Git', src: '/images/svgs/Git.png' },
  { name: 'GitHub', src: '/images/svgs/Github.png' },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const bounding = entry.boundingClientRect;

          if (entry.isIntersecting) {
            // Jab up se down scroll karke element screen par aayega, animation chalao
            element.classList.remove('opacity-0', 'translate-y-10');
            element.classList.add('opacity-100', 'translate-y-0');
          } else {
            // MAGIC LOGIC: Agar user scroll karke WAPAS UPAR (Home) chala gaya 
            // (yaani element screen ke neeche chala gaya relative to viewport top),
            // tabhi hum class remove karenge taaki dubara niche aane par animation ho.
            if (bounding.top > 0) {
              element.classList.remove('opacity-100', 'translate-y-0');
              element.classList.add('opacity-0', 'translate-y-10');
            }
            // Agar user niche scroll kar raha hai aur element upar chup raha hai, 
            // toh hum class REMOVE NAHI KARENGE (down se up scroll par no-reset).
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // thoda gap taaki scrolling natural lage
      }
    );

    const animatedElements = containerRef.current?.querySelectorAll('.scroll-item');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className='py-20 bg-section dark:bg-darklight overflow-hidden' id='skills'>
      <div ref={containerRef} className='container mx-auto max-w-6xl px-4'>
        
        {/* Title */}
        <div className='scroll-item opacity-0 translate-y-10 transition-all duration-1000 ease-out text-center mb-12'>
          <h2 className='text-5xl font-extrabold text-[#0F172A] dark:text-white'>Skills</h2>
        </div>
        
        {/* Grid */}
        <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
          {tools.map((tool, index) => (
            <div 
              key={index}
              className='scroll-item opacity-0 translate-y-10 transition-all duration-700 ease-out flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-2 hover:shadow-md transition-transform duration-300'
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              <div className='w-12 h-12 mb-4 relative'>
                <Image src={tool.src} alt={tool.name} width={48} height={48} className='object-contain' />
              </div>
              <span className='font-semibold text-slate-700 dark:text-slate-200'>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;