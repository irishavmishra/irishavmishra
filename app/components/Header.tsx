'use client';

import { useEffect, useState, useRef } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) return;
      
      rafRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY !== lastScrollY.current) {
          setScrolled(currentScrollY > 50);
          lastScrollY.current = currentScrollY;
        }
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <header 
      className="fixed left-0 right-0 z-[200] transition-all duration-500 ease-out"
      style={{ 
        top: scrolled ? '12px' : '2rem',
      }}
    >
      <div className="wrap flex justify-center">
        <span 
          className="me noline inline-block font-bold text-[1.75rem] relative select-none"
          role="button"
        >
          <span 
            className="nav-text inline-flex items-center transition-all duration-500 ease-out"
            style={{
              fontFamily: '"Satoshi", system-ui, -apple-system, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              padding: scrolled ? '0.5rem 1rem' : '0',
              borderRadius: scrolled ? '100px' : '0',
              backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
              backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
              WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
              boxShadow: scrolled 
                ? '0 4px 24px -2px rgba(0, 0, 0, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.3)'
                : 'none',
              border: scrolled ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid transparent',
            }}
          >
            RISHAV&nbsp;<span className="crest">MISHRA</span>
          </span>
        </span>
      </div>
    </header>
  );
}
