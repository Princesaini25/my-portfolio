'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative min-h-[70vh] md:min-h-[80vh] flex items-center pt-20 pb-16 bg-section dark:bg-darklight transition-colors duration-300'>
      
      {/* Container hamesha center rahega */}
      <div className='container mx-auto max-w-6xl px-6 md:px-12 w-full'>
        
        {/* Alignment ka asli magic yahan hai */}
        <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
          
          {/* Left Side: Text Section - Laptop par center dikhega, PC par left */}
          <div
            className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'>
            
            <h1 className='text-[#0F172A] dark:text-white font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-tight'>
              Prince Saini
            </h1>
            
            <h2 className='text-[#0077B5] text-xl sm:text-2xl lg:text-4xl font-extrabold uppercase tracking-wide'>
              Data Analyst
            </h2>
            
            <p className='text-[#475569] dark:text-white/80 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-lg'>
              Transforming complex datasets into clear, actionable insights that empower businesses to optimize their performance, uncover market trends, and make strategic, data-driven decisions.
            </p>
            
            <div className='flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2'>
              <a href='#projects' className='py-3 px-8 bg-[#0077B5] text-white font-semibold rounded-md hover:bg-[#006297] transition duration-300'>
                View Projects
              </a>
              <a 
                href="/resume.pdf" 
                download="Prince_Saini_Resume.pdf"
                className='py-3 px-8 bg-transparent text-[#0077B5] border-2 border-[#0077B5] font-semibold rounded-md hover:bg-[#E0F2FE] dark:hover:bg-slate-800 transition duration-300'
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side: Image Section */}
          <div className="w-full md:w-5/12 flex justify-center">
            <Image
              src={getImgPath('/images/hero/hero-image.jpg')}
              alt='hero-image'
              width={400}
              height={400}
              priority
              className="rounded-2xl w-full max-w-[280px] md:max-w-[400px] h-auto object-cover shadow-2xl" 
            />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero