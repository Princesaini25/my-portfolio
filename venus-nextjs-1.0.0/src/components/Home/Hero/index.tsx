'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'

const Hero = () => {
  return (
    // Yahan direct 'bg-section' aur 'dark:bg-darklight' class laga di hai bina kisi condition ke
    <section className='relative min-h-screen md:min-h-[calc(100vh-70px)] flex items-center pt-24 pb-16 md:pb-24 bg-section dark:bg-darklight transition-colors duration-300'>
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10 w-full'>
        
        {/* Left Side: Text Section */}
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          
          <h1 className='text-[#0F172A] dark:text-white font-extrabold text-6xl md:text-7xl md:leading-[1.1]'>
            Prince Saini
          </h1>
          
          <h2 className='text-[#0077B5] text-3xl md:text-4xl font-extrabold uppercase tracking-wide'>
            Data Analyst
          </h2>
          
          <p className='text-[#475569] dark:text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-md text-left'>
            Transforming complex datasets into clear, actionable insights that empower businesses to optimize their performance, uncover market trends, and make strategic, data-driven decisions.
          </p>
          
          <div className='flex flex-wrap items-center gap-4 mt-2 w-full'>
            <a href='#projects' className='py-3 px-8 bg-[#0077B5] text-white font-semibold rounded-md hover:bg-[#006297] transition duration-300 text-center'>
              View Projects
            </a>
            <a 
              href="/resume.pdf" 
              download="Prince_Saini_Resume.pdf"
              className='py-3 px-8 bg-transparent text-[#0077B5] border-2 border-[#0077B5] font-semibold rounded-md hover:bg-[#E0F2FE] dark:hover:bg-slate-800 transition duration-300 text-center'
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side: Image Only */}
        <div className="md:col-span-6 col-span-12 flex items-center justify-center relative">
          <Image
            src={getImgPath('/images/hero/hero-image.jpg')}
            alt='hero-image'
            width={350}
            height={150}
            quality={100}
            style={{ width: '100%', height: 'auto' }}
            className="rounded-2xl" 
          />
        </div>
      </div>
    </section>
  )
}

export default Her