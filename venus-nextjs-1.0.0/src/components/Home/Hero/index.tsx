'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'

const Hero = () => {
  return (
    // min-h-[70vh] laptop ke liye perfect hai, md:min-h-[80vh] PC ke liye
    <section className='relative min-h-[70vh] md:min-h-[80vh] flex items-center pt-20 pb-16 bg-section dark:bg-darklight transition-colors duration-300'>
      
      {/* Container ko max-w-7xl kiya hai taaki 24-inch screen par ye zyada achhe se phail sake */}
      <div className='container mx-auto max-w-7xl px-6 md:px-12 w-full'>
        
        {/* Grid ki jagah Flex use kiya hai taaki alignment control mein rahe */}
        <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
          
          {/* Left Side: Text Section */}
          <div
            className='w-full md:w-1/2 space-y-6 flex flex-col items-start justify-center'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'>
            
            <h1 className='text-[#0F172A] dark:text-white font-extrabold text-5xl lg:text-7xl leading-tight'>
              Prince Saini
            </h1>
            
            <h2 className='text-[#0077B5] text-2xl lg:text-4xl font-extrabold uppercase tracking-wide'>
              Data Analyst
            </h2>
            
            <p className='text-[#475569] dark:text-white/80 text-base lg:text-lg font-medium leading-relaxed max-w-lg text-left'>
              Transforming complex datasets into clear, actionable insights that empower businesses to optimize their performance, uncover market trends, and make strategic, data-driven decisions.
            </p>
            
            <div className='flex flex-wrap items-center gap-4 pt-2'>
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
          <div className="w-full md:w-5/12 flex justify-center md:justify-end">
            <Image
              src={getImgPath('/images/hero/hero-image.jpg')}
              alt='hero-image'
              width={450}
              height={450}
              priority
              className="rounded-2xl w-full max-w-[320px] md:max-w-[450px] h-auto object-cover shadow-2xl" 
            />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero