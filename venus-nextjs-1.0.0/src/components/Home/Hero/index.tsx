'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative min-h-[80vh] flex items-center pt-24 pb-16 md:pb-24 bg-section dark:bg-darklight transition-colors duration-300'>
      {/* 'container' ab config se control ho raha hai */}
      {/* xl:max-w-[1200px] 2xl:max-w-[1400px] PC par layout ko bada dikhayega */}
      <div className='container xl:max-w-[1200px] 2xl:max-w-[1400px] grid grid-cols-12 gap-8 lg:gap-16 items-center relative z-10'>
        
        {/* Left Side: Text */}
        <div
          className='col-span-12 md:col-span-6 space-y-6'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          
          <h1 className='text-5xl lg:text-7xl xl:text-8xl font-extrabold text-[#0F172A] dark:text-white leading-[1.1]'>
            Prince Saini
          </h1>
          
          <h2 className='text-2xl lg:text-3xl xl:text-4xl text-[#0077B5] font-extrabold uppercase tracking-wide'>
            Data Analyst
          </h2>
          
          <p className='text-sm lg:text-base xl:text-lg text-[#475569] dark:text-white/80 font-medium leading-relaxed max-w-lg'>
            Transforming complex datasets into clear, actionable insights that empower businesses to optimize their performance, uncover market trends, and make strategic, data-driven decisions.
          </p>
          
          <div className='flex flex-wrap items-center gap-4 pt-2'>
            <a href='#projects' className='py-3 px-8 bg-[#0077B5] text-white font-semibold rounded-md hover:bg-[#006297] transition duration-300'>
              View Projects
            </a>
            <a 
              href="/resume.pdf" 
              download="Prince_Saini_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className='py-3 px-8 bg-transparent text-[#0077B5] border-2 border-[#0077B5] font-semibold rounded-md hover:bg-[#E0F2FE] dark:hover:bg-slate-800 transition duration-300'
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end">
          <Image
            src={getImgPath('/images/hero/hero-image.jpg')}
            alt='Prince Saini'
            width={500}
            height={500}
            quality={100}
            className="rounded-2xl w-full max-w-[320px] lg:max-w-[450px] xl:max-w-[550px] shadow-2xl" 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero