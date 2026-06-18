'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'

const Hero = () => {
  return (
    // Section wahi rahega, hum sirf container ki width control karenge
    <section className='relative min-h-screen md:min-h-[calc(100vh-70px)] flex items-center pt-24 pb-16 md:pb-24 bg-section dark:bg-darklight transition-colors duration-300'>
      
      {/* Container mein humne 'mx-auto' aur 'w-full' fix kiya hai */}
      {/* Laptop ke liye max-width ko 'max-w-[1024px]' ya 'max-w-5xl' rakha hai */}
      <div className='container mx-auto w-full px-4 lg:max-w-[1280px] xl:max-w-[1400px] grid grid-cols-12 gap-4 relative z-10'>
        
        {/* Left Side: Text Section */}
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          
          <h1 className='text-[#0F172A] dark:text-white font-extrabold text-5xl md:text-7xl'>
            Prince Saini
          </h1>
          
          <h2 className='text-[#0077B5] text-2xl md:text-4xl font-extrabold uppercase'>
            Data Analyst
          </h2>
          
          <p className='text-[#475569] dark:text-white/80 text-sm md:text-lg font-medium leading-relaxed max-w-lg'>
            Transforming complex datasets into clear, actionable insights that empower businesses to optimize their performance and make strategic, data-driven decisions.
          </p>
          
          <div className='flex flex-wrap items-center gap-4 mt-2'>
            <a href='#projects' className='py-3 px-8 bg-[#0077B5] text-white font-semibold rounded-md'>View Projects</a>
            <a href="/resume.pdf" className='py-3 px-8 border-2 border-[#0077B5] text-[#0077B5] font-semibold rounded-md'>Download Resume</a>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="md:col-span-6 col-span-12 flex items-center justify-center relative">
          <Image
            src={getImgPath('/images/hero/hero-image.jpg')}
            alt='Prince Saini'
            width={500}
            height={500}
            className="rounded-2xl w-full max-w-[300px] md:max-w-[450px] shadow-2xl" 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero