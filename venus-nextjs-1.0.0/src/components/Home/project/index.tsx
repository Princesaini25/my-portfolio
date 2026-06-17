'use client';
import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';

// Data ke andar 'projectLink' add kar diya hai aapke real links ke liye
const projectData = [
  {
    title: "Telecom Customer Churn Analysis",
    domain: "Customer Churn Analysis",
    description: "Analyzed telecom customer data to uncover churn patterns and identify key factors impacting customer retention.",
    image: "/images/portfolio/telecome.jpg", 
    toolIcon: "vscode-icons:file-type-python",
    projectLink: "https://github.com/Princesaini25/telecom-customer-churn-eda", // <-- Yahan apna real link dalo
    class: "md:mt-0"
  },
  {
    title: "Zomato Restaurant Data Analysis",
    domain: "Food & Restaurant Analytics | EDA",
    description: "Performed exploratory data analysis on 6,900+ restaurant records to uncover customer behavior, pricing trends, and business insights through data-driven visualizations.",
    image: "/images/portfolio/Zomato.jpg", 
    toolIcon: "vscode-icons:file-type-python",
    projectLink: "https://github.com/Princesaini25/zomato-eda-analysis", // <-- Yahan apna real link dalo
    class: "md:mt-0" 
  },
  {
    title: "Netflix SQL Analysis",
    domain: " Data Analytics | SQL Project",
    description: "Performed SQL-based analysis on Netflix data to generate business insights related to content trends, audience ratings, genre popularity, and global distribution.",
    image: "/images/portfolio/netflix.jpg", 
    toolIcon: "logos:postgresql",
    projectLink: "https://github.com/Princesaini25/netflix_sql_project", // <-- Yahan apna real link dalo
    class: "md:mt-0"
  }
];

const Projects = () => {
  return (
    <section id="projects" className='bg-[#F8FAFC] dark:bg-darklight pt-4 pb-16 md:pt-6 md:pb-24'>
      <div className='container mx-auto max-w-6xl px-4'>
        
        <h1 className='sm:text-4xl text-[28px] font-bold text-midnight_text text-center pb-16 dark:text-white' data-aos='fade-up' data-aos-delay='300' data-aos-duration='1000'>
          My Projects
        </h1>

        {/* Grid se 'items-start' hata diya taaki size barabar ho sake */}
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
          {projectData.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 150}`} 
              data-aos-duration='1000'
              // ANIMATION SAME: Sirf 'h-full' add kiya hai size barabar karne ke liye, baki classes exact aapki hain
              className={`bg-white dark:bg-darkmode p-5 shadow-md border border-gray-100 dark:border-gray-800 rounded-2xl flex flex-col justify-between gap-4 transition-all duration-300 hover:shadow-xl h-full ${item.class}`}>
              
              {/* Project Image */}
              <div className='w-full h-52 relative overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center'>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className='object-cover hover:scale-105 transition-transform duration-300'
                  sizes="(max-w-7xl) 33vw"
                />
              </div>
              
              {/* Content */}
              <div className='flex flex-col gap-2 flex-grow'>
                <h3 className='text-lg font-bold text-midnight_text dark:text-white line-clamp-2 min-h-[56px] leading-snug'>
                  {item.title}
                </h3>
                
                <p className='text-xs font-medium text-gray-500 dark:text-white/60'>
                  Domain/Function: <span className='text-blue-600 dark:text-blue-400'>{item.domain}</span>
                </p>
                
                <p className='text-xs text-gray-600 dark:text-white/70 line-clamp-3 mt-1 leading-relaxed'>
                  {item.description}
                </p>
              </div>
              
              {/* Bottom Actions Row */}
              <div className='mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center'>
                {/* Ab ye direct naye tab me aapka real project link kholega */}
                <Link 
                  href={item.projectLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='border border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors'>
                  See My Work
                </Link>
                
                {/* Dynamic Tools Icon (Excel / PowerBI) */}
                <Icon icon={item.toolIcon} className="w-6 h-6" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;