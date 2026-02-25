'use client';

import { useEffect } from 'react';
import Header from './components/Header';
import Mast from './components/Mast';
import IntroSection from './components/IntroSection';
import SpecialtySection from './components/SpecialtySection';
import CVTimeline from './components/CVTimeline';
import MoreSection from './components/MoreSection';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    // Trigger load animation
    const timer = setTimeout(() => {
      document.body.classList.remove('loading');
      document.body.classList.add('loaded');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <Mast />

      <main
        style={{ padding: 'var(--vertGap) 0' }}
      >
        <div className="wrap flex flex-col gap-[var(--vertGap)]"
        >
          <IntroSection />

          <SpecialtySection />

          <CVTimeline />

          <MoreSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
