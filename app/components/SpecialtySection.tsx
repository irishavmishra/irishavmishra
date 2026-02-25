'use client';

import { useEffect, useRef, useState } from 'react';

export default function SpecialtySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`pull drift left onscroll max-w-[930px] ${isVisible ? 'shown' : ''}`}
      data-section="specialty"
    >
      <h2 className="font-bold">I build end to end applications that replace manual business workflows with scalable digital processes.</h2>
    </section>
  );
}
