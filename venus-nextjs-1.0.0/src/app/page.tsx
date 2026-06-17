import React from 'react';
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Progresswork from '@/components/Home/WorkProgress';
import Skills from '@/components/Home/Skills'; 
import Projects from '@/components/Home/project'; 
import Contactform from '@/components/Home/Contact';

export const metadata: Metadata = {
  title: "Prince Saini | Portfolio",
};

export default function Home() {
  return (
    <main>
      {/* 1. Home Section */}
      <Hero />
      
      {/* 2. About / Work Progress Section */}
      <Progresswork />
      
      {/* 3. Skills Section */}
      <Skills />
      
      {/* 4. Project Section */}
      <Projects /> 

      {/* 5. Contact Form (Agar ise bhi hatana ho, toh bas neeche waali line delete kar dena) */}
      <Contactform />
    </main>
  );
}