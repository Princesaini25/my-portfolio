'use client';
import React, { useEffect, useRef } from 'react';

export const ScrollAnimation = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-show');
          } else {
            entry.target.classList.remove('animate-show');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} opacity-0`}
      style={{
        transition: 'all 0.6s ease-out',
        transform: 'translateY(30px)',
      }}
    >
      {children}
    </div>
  );
};