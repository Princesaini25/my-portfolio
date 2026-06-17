'use client';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Browser ki auto-scroll band karo
    window.history.scrollRestoration = 'manual';

    // 2. Refresh par top par jao
    window.scrollTo(0, 0);

    // 3. Button visibility logic
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[999] h-10 w-10 flex items-center justify-center rounded-md bg-[#102C46] text-white shadow-md transition hover:bg-dark"
          aria-label="scroll to top"
        >
          <span className="h-3 w-3 rotate-45 border-t border-l border-white"></span>
        </button>
      )}
    </>
  );
}