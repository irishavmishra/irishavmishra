'use client';

import { useEffect, useRef, useState } from 'react';

const workingStyleItems = [
  { emoji: '🚀', text: 'Shipping over planning' },
  { emoji: '👥', text: 'Small teams over large companies' },
  { emoji: '⚙️', text: 'Automation over manual work' },
  { emoji: '📝', text: 'Documentation over guesswork' },
  { emoji: '🔄', text: 'Iteration over perfection' },
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
        I work best in small teams where I own the full project - frontend, backend, database, deployment.
      </p>

      <p className="mb-4">
        I have worked with non-technical people. Fiscally was built with a Chartered Accountant who had zero tech background. I understood his requirements and turned them into working software.
      </p>

      <p className="mb-4">
        I focus on shipping working software, not planning forever.
      </p>

      <div className="lightning py-4"
        style={{ paddingBlockStart: '1em', paddingBlockEnd: '1.25em' }}
      >
        <ul className="stack list">
          {workingStyleItems.map((item, index) => (
            <li key={index} className="text-[var(--size-s)] leading-[1.4]">
              <span className="emoji mr-2">{item.emoji}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 lg:mt-24"
        style={{ paddingBlockStart: '1em', paddingBlockEnd: '1.25em' }}
      >
        <h2 className="margin-sml mb-[var(--cvGap)]">Hire Me</h2>

        <p className="mb-4">
          I am available now. Zero notice period.
        </p>

        <p className="mb-4">
          <strong className="font-semibold">What I do:</strong>
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Build full stack web applications</li>
          <li>Frontend with React, Next.js, TypeScript</li>
          <li>Backend with Node.js, PostgreSQL, REST APIs</li>
          <li>Authentication, role based access, deployment</li>
          <li>Work with clients and non-technical people</li>
        </ul>

        <p className="mb-4">
          <strong className="font-semibold">Available for:</strong>
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Full time roles</li>
          <li>Freelance and contract projects</li>
          <li>Agency work</li>
        </ul>

        <p className="mb-2">
          <strong className="font-semibold">Location:</strong> Bhopal, India
        </p>
        <p className="mb-6">
          <strong className="font-semibold">Open to:</strong> Remote work and relocation
        </p>

        <p className="mb-2">
          <strong className="font-semibold">Email:</strong>{' '}
          <a href="mailto:onlyrishavmishra@gmail.com" className="rgbsplit">onlyrishavmishra@gmail.com</a>
        </p>
        <p className="mb-2">
          <strong className="font-semibold">Phone:</strong> +91 7047420892
        </p>
        <p className="mb-2">
          <strong className="font-semibold">LinkedIn:</strong>{' '}
          <a href="https://linkedin.com/in/irishavmishra" target="_blank" rel="noopener noreferrer" className="rgbsplit">linkedin.com/in/irishavmishra</a>
        </p>
        <p className="mb-2">
          <strong className="font-semibold">GitHub:</strong>{' '}
          <a href="https://github.com/irishavmishra" target="_blank" rel="noopener noreferrer" className="rgbsplit">github.com/irishavmishra</a>
        </p>
        <p className="mb-6">
          <strong className="font-semibold">Portfolio:</strong>{' '}
          <a href="https://rishav.online" target="_blank" rel="noopener noreferrer" className="rgbsplit">rishav.online</a>
        </p>
      </div>
    </section>
  );
}
