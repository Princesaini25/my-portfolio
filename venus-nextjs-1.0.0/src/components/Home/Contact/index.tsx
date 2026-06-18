"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // TypeScript errors ko theek karne ke liye proper types add kiye hain
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm('service_c4adz9q', 'template_zfg3ivj', form.current, 'gVNM6QIOLliGXTaDY')
      .then((result: any) => {
          alert('Message sent successfully!');
          console.log(result.text);
      }, (error: any) => {
          alert('Failed to send message, please try again.');
          console.log(error.text);
      });
  };

  return (
    // Yahan id="contact" wese hi hai header navigation ke liye
    <section id="contact" className='overflow-x-hidden bg-darkmode dark:bg-darklight py-28 md:py-40 min-h-screen flex items-center relative z-10'>
      
      {/* Decorative Accent 1: Wavy Lines (Top Right) */}
      <div className="absolute top-24 right-8 w-28 h-24 opacity-20 pointer-events-none hidden lg:block select-none">
        <svg width="120" height="90" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="text-blue-400" strokeWidth="1.5">
          <path d="M0 10C25 10 25 20 50 20C75 20 75 10 100 10" strokeDasharray="4 4"/>
          <path d="M0 25C25 25 25 35 50 35C75 35 75 25 100 25" strokeDasharray="4 4"/>
          <path d="M0 40C25 40 25 50 50 50C75 50 75 40 100 40" strokeDasharray="4 4"/>
          <path d="M0 55C25 55 25 65 50 65C75 65 75 55 100 55" strokeDasharray="4 4"/>
        </svg>
      </div>

      {/* Decorative Accent 2: Soft Glowing Circle */}
      <div className="absolute bottom-1/4 left-12 w-72 h-72 opacity-10 pointer-events-none hidden md:block select-none blur-3xl bg-blue-500 rounded-full"></div>

      <div className='container mx-auto max-w-6xl px-4 relative z-20'>
        <div className='grid md:grid-cols-12 grid-cols-1 md:gap-12 lg:gap-20 items-center'>
          
          {/* Left Side: Contact Information */}
          <div
            className='md:col-span-6 col-span-12'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            
            <div className='mb-8'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white tracking-tight'>
                Contact
              </h2>
              <div className='w-20 h-[4px] bg-primary mt-4 rounded-full'></div>
            </div>

            <p className='text-white/70 text-sm sm:text-base leading-relaxed mb-12 max-w-xl'>
              Open to internships, collaborations, and opportunities in data analytics. 
              Let’s connect and explore how data-driven insights can support better 
              decisions and meaningful outcomes.
            </p>

            <div className='flex flex-col gap-8'>
              {/* Phone */}
              <div className='flex items-center gap-5 group'>
                {/* Ab link sirf logo par kaam karega */}
                <a href="tel:+918267020564" className='shrink-0'>
                  <div className='w-14 h-14 rounded-full bg-slate-900/90 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.25)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                </a>
                <div>
                  <span className='text-white/50 text-[11px] block font-semibold uppercase tracking-wider'>
                    Phone
                  </span>
                  {/* Text ko normal span bana diya taaki easily copy ho sake */}
                  <span className='text-white text-base sm:text-lg font-semibold mt-0.5 block'>
                    +91 8267020564
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-center gap-5 group'>
                {/* Ab link sirf logo par kaam karega */}
                <a href="mailto:princesaini.asr@gmail.com" className='shrink-0'>
                  <div className='w-14 h-14 rounded-full bg-slate-900/90 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.25)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                </a>
                <div>
                  <span className='text-white/50 text-[11px] block font-semibold uppercase tracking-wider'>
                    Email
                  </span>
                  {/* Text ko normal span bana diya taaki easily copy ho sake */}
                  <span className='text-white text-base sm:text-lg font-semibold mt-0.5 block'>
                    princesaini.asr@gmail.com
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className='flex items-center gap-5 group'>
                {/* Ab link sirf logo par kaam karega */}
                <a href="https://www.linkedin.com/in/prince-saini12/" target="_blank" rel="noopener noreferrer" className='shrink-0'>
                  <div className='w-14 h-14 rounded-full bg-slate-900/90 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.25)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                </a>
                <div>
                  <span className='text-white/50 text-[11px] block font-semibold uppercase tracking-wider'>LinkedIn</span>
                  {/* Text ko normal span bana diya taaki easily copy ho sake */}
                  <span className='text-white text-base sm:text-lg font-semibold mt-0.5 block'>
                    linkedin.com/in/prince-saini12/
                  </span>
                </div>
              </div>

              {/* GitHub */}
              <div className='flex items-center gap-5 group'>
                {/* Ab link sirf logo par kaam karega */}
                <a href="https://github.com/Princesaini25" target="_blank" rel="noopener noreferrer" className='shrink-0'>
                  <div className='w-14 h-14 rounded-full bg-slate-900/90 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.25)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </div>
                </a>
                <div>
                  <span className='text-white/50 text-[11px] block font-semibold uppercase tracking-wider'>GitHub</span>
                  {/* Text ko normal span bana diya taaki easily copy ho sake */}
                  <span className='text-white text-base sm:text-lg font-semibold mt-0.5 block'>
                    github.com/Princesaini25
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div
            className='md:col-span-6 col-span-12 relative'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'>
            
            <div className='bg-white dark:bg-darkmode w-full max-w-[35rem] md:ml-auto p-8 sm:p-12 rounded-3xl shadow-2xl relative z-10 border border-gray-100 dark:border-gray-800/60'>
              <h3 className='text-2xl sm:text-3xl font-bold text-midnight_text mb-8 dark:text-white tracking-tight'>
                Send a Message
              </h3>
              
              <form ref={form} className='flex flex-col gap-6' onSubmit={sendEmail}>
                <div className='w-full'>
                  <input
                    name='user_name'
                    className='text-midnight_text w-full text-base transition-all bg-transparent dark:border-dark_border dark:text-white px-5 py-4 border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey/70 rounded-xl outline-none'
                    type='text'
                    placeholder='Full Name'
                    required
                  />
                </div>

                <div className='w-full'>
                  <input
                    name='user_email'
                    className='text-midnight_text w-full text-base transition-all bg-transparent dark:border-dark_border dark:text-white px-5 py-4 border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey/70 rounded-xl outline-none'
                    type='email'
                    placeholder='Email'
                    required
                  />
                </div>

                <div className='w-full'>
                  <textarea
                    name='message'
                    className='text-midnight_text h-[12rem] w-full text-base transition-all bg-transparent dark:border-dark_border dark:text-white px-5 py-4 border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey/70 rounded-xl outline-none resize-none'
                    placeholder='Message'
                    required
                  ></textarea>
                </div>

                <div className='w-full pt-4'>
                  <button
                    className='w-full bg-primary hover:bg-blue-700 text-white font-semibold text-base py-4 rounded-xl transition-all shadow-xl shadow-primary/20 hover:shadow-2xl active:scale-[0.99]'
                    type='submit'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;