'use client'
import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Progresswork = () => {
  return (
    // Yahan bhi exact wahi 'bg-section' aur 'dark:bg-darklight' class hai taaki 100% match kare
    <section
      className='scroll-mt-[120px] py-20 bg-section dark:bg-darklight transition-colors duration-300'
      id='about'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 items-center gap-12'>
          
          {/* ================= LEFT SIDE: ONLY DP ================= */}
          <div className='md:col-span-5 flex flex-col items-center justify-center'>
            <div className='relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0077B5] shadow-xl shrink-0 bg-white'>
              <Image
                src={getImgPath('/images/work-progress/progress-work.jpg')} 
                alt='Prince Saini - Data Analyst'
                fill
                style={{ objectFit: 'contain' }}
                quality={100}
              />
            </div>
          </div>

          {/* ================= RIGHT SIDE: ONLY YOUR ABOUT ME TEXT ================= */}
          <div
            className='md:col-span-7 space-y-6'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            
            <div className='relative'>
              <h2 className='text-5xl font-extrabold tracking-tight z-10 relative text-[#0F172A] dark:text-white'>
                About Me
              </h2>
              <span className='absolute left-0 top-1 text-6xl font-black opacity-5 dark:opacity-10 select-none uppercase tracking-widest text-slate-500'>
                About
              </span>
            </div>

            <div className='text-base leading-relaxed font-medium text-[#475569] dark:text-white/80 text-justify pt-4 space-y-5'>
              <p>
                I am a Data Analyst currently pursuing a B.Com at Jaypee University. I have hands-on experience in SQL, Python, Power BI, and Excel, with a strong interest in data analysis and problem-solving.
              </p>
              
              <p>
                Through various projects and practical work, I have developed skills in data cleaning, analysis, visualization, and dashboard creation. I enjoy transforming raw data into meaningful insights that help businesses make informed decisions and improve performance.
              </p>
              
              <p>
                With a combination of business knowledge and technical expertise, I am committed to using data to solve real-world problems and deliver valuable business insights.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Progresswork