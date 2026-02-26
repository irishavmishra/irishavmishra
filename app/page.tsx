import Header from './components/Header';
import Mast from './components/Mast';
import IntroSection from './components/IntroSection';
import SpecialtySection from './components/SpecialtySection';
import CVTimeline from './components/CVTimeline';
import MoreSection from './components/MoreSection';
import Footer from './components/Footer';
import LoadTrigger from './components/LoadTrigger';

export default function Home() {
  return (
    <div className="min-h-screen">
      <LoadTrigger />
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
