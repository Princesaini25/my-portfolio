"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderLink({ item }: { item: any }) {
  const path = usePathname();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    // Scroll hone par active section track karega
    const handleScroll = () => {
      setActiveHash(window.location.hash);
    };
    
    // Page load hone par hash check karega
    setActiveHash(window.location.hash);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Condition: 
  // 1. Home('/') ke liye tab active jab hash khali ho
  // 2. Sections ke liye tab active jab hash link se match ho
  const isActive = item.href === '/' 
    ? (path === '/' && activeHash === '') 
    : activeHash === item.href.replace('/', '');

  return (
    <Link 
      href={item.href} 
      className={`text-base py-2 font-medium transition-colors duration-300 ${
        isActive ? 'text-primary font-bold' : 'text-black dark:text-white hover:text-primary'
      }`}
    >
      {item.label}
    </Link>
  );
}