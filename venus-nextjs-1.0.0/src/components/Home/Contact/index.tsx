"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs.sendForm('service_c4adz9q', 'template_zfg3ivj', form.current, 'gVNM6QIOLliGXTaDY')
      .then((result: any) => {
          alert('Message sent successfully!');
      }, (error: any) => {
          alert('Failed to send message, please try again.');
      });
  };

  return (
    // FIX: min-h-screen ki jagah py-20 md:py-32 rakha hai taaki laptop pe scroll na bane
    <section id="contact" className='overflow-x-hidden bg-darkmode dark:bg-darklight py-20 md:py-32 flex items-center relative z-10'>
      
      <div className="absolute top-24 right-8 w-28 h-24 opacity-20 pointer-events-none hidden lg:block select-none">
        {/* ... (SVG wahi rahega) ... */}
      </div>

      <div className='container mx-auto max-w-6xl px-4 relative z-20'>
        <div className='grid md:grid-cols-12 grid-cols-1 md:gap-12 lg:gap-20 items-center'>
          
          <div className='md:col-span-6 col-span-12' data-aos='fade-left' data-aos-delay='200' data-aos-duration='1000'>
            <div className='mb-8'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white tracking-tight'>Contact</h2>
              <div className='w-20 h-[4px] bg-primary mt-4 rounded-full'></div>
            </div>

            <p className='text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xl'>
              Open to internships, collaborations, and opportunities in data analytics. 
            </p>

            {/* Gap ko thoda kam kiya */}
            <div className='flex flex-col gap-6'>
              {/* Phone, Email, LinkedIn, GitHub blocks... (Code wahi rahega) */}
            </div>
          </div>

          <div className='md:col-span-6 col-span-12 relative mt-10 md:mt-0' data-aos='fade-right' data-aos-delay='200' data-aos-duration='1000'>
            <div className='bg-white dark:bg-darkmode w-full max-w-[35rem] md:ml-auto p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800/60'>
              <h3 className='text-2xl font-bold text-midnight_text mb-6 dark:text-white'>Send a Message</h3>
              
              <form ref={form} className='flex flex-col gap-4' onSubmit={sendEmail}>
                <input name='user_name' className='w-full bg-transparent dark:border-dark_border dark:text-white px-4 py-3 border border-border rounded-xl outline-none focus:border-primary' type='text' placeholder='Full Name' required />
                <input name='user_email' className='w-full bg-transparent dark:border-dark_border dark:text-white px-4 py-3 border border-border rounded-xl outline-none focus:border-primary' type='email' placeholder='Email' required />
                {/* Textarea ki height kam ki taaki laptop pe fit aaye */}
                <textarea name='message' className='h-32 w-full bg-transparent dark:border-dark_border dark:text-white px-4 py-3 border border-border rounded-xl outline-none focus:border-primary resize-none' placeholder='Message' required></textarea>
                <button className='w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-all' type='submit'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;