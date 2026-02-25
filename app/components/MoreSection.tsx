'use client';

import { useEffect, useRef, useState } from 'react';

const lightningRoundItems = [
  { emoji: '🚀', text: 'Shipping over extended planning cycles.' },
  { emoji: '👥', text: 'Small teams over large orgs.' },
  { emoji: '⚙️', text: 'Automation over manual workflows.' },
  { emoji: '📝', text: 'Documentation over tribal knowledge.' },
  { emoji: '🔄', text: 'Iteration over perfection.' },
];

export default function MoreSection() {
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
      className={`push drift left onscroll ${isVisible ? 'shown' : ''}`}
      data-section="more"
    >
      <h2 className="margin-sml mb-[var(--cvGap)]">Working Style</h2>

      <p className="mb-4">
        I work best in small teams where I can take ownership of building and shipping software end to end.
      </p>

      <p className="mb-4">
        Focused on solving operational problems through full stack and AI based systems.
      </p>

      <p className="mb-4">
        Comfortable contributing across frontend, backend, and deployment.
      </p>

      <p className="mb-4">
        Open to collaborating with startups, agencies, and remote product teams.
      </p>
      
      <div className="lightning py-4"
        style={{ paddingBlockStart: '1em', paddingBlockEnd: '1.25em' }}
      >
        <p className="mb-4">
          <strong className="tag">
            Quick Preferences <span className="emoji invert">⚡️</span>
          </strong>
        </p>
        
        <ul className="stack list">
          {lightningRoundItems.map((item, index) => (
            <li key={index} className="text-[var(--size-s)] leading-[1.4]">
              <span className="emoji mr-2">{item.emoji}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="availability py-4"
        style={{ paddingBlockStart: '1em', paddingBlockEnd: '1.25em' }}
      >
        <h3 className="text-[var(--size-s)] font-semibold uppercase tracking-wider mb-4 opacity-60">
          Availability
        </h3>

        <p className="mb-4">
          Open to collaborating with startups, agencies, and product teams on building full stack or AI based applications.
        </p>

        <p className="mb-4">
          Available for freelance, contract, or full time roles.
        </p>
      </div>
    </section>
  );
}
