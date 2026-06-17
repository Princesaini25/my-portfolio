'use client';
import React, { useEffect, useRef } from 'react';

export const ScrollAnimation = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        
        if (entry.isIntersecting) {
          // 1. Jab element screen par aaye, toh use turant dikhao smoothly
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        } else {
          // 2. FIXED: Jab user links par click karke top par jaye, toh animation chupke se reset ho jaye
          if (entry.boundingClientRect.top > 0) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px)';
          }
        }
      });
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        opacity: 0, 
        transform: 'translateY(40px)', 
        transition: 'opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};