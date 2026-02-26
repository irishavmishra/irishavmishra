'use client';

import { useState } from 'react';

interface ProjectEntry {
  title: string;
  tagline: string;
  description: string[];
  techStack: string;
  links: { label: string; url: string }[];
  technicalDetails?: {
    title: string;
    problem: string;
    solution: string;
    result: string;
  }[];
}

const projectsData: ProjectEntry[] = [
  {
    title: 'Rently',
    tagline: 'Property management app for small landlords.',
    description: [
      'Landlords add properties, manage tenants, create leases, and track rent payments. Tenants get a separate portal to view lease details and submit maintenance requests.'
    ],
    techStack: 'Next.js, Nitro, tRPC, PostgreSQL (Neon), Cloudflare Workers, Better Auth',
    links: [
      { label: 'Live →', url: 'https://rently.property' }
    ],
    technicalDetails: [
      {
        title: 'Edge Database Connectivity',
        problem: 'Standard PostgreSQL drivers do not work on Cloudflare Workers because they need TCP connections.',
        solution: 'Used Neon\'s HTTP driver with Drizzle ORM for stateless database queries from the edge.',
        result: 'App runs globally on edge servers with full database access.'
      },
      {
        title: 'Dual Authentication System',
        problem: 'Landlords need full accounts. Tenants need invite-only limited access without registration.',
        solution: 'Built two auth flows. Better Auth with OAuth for landlords. Custom JWT with OTP and magic links for tenants. Both share the same database with isolated sessions.',
        result: 'Two different user types, one clean system.'
      },
      {
        title: 'Subscription Enforcement',
        problem: 'Features needed to be restricted based on subscription plan like number of units and storage limit.',
        solution: 'Built a usage checker that validates limits before every create action. Cached subscription data to reduce database calls.',
        result: 'Users automatically blocked when they hit plan limits. Upgrade flow built in.'
      }
    ]
  },
  {
    title: 'Fiscally',
    tagline: 'Income tax return filing platform for India.',
    description: [
      'Users prepare ITR forms (ITR-1 to ITR-7) directly in the browser. Imports data from multiple government sources, matches and reconciles conflicts, calculates tax, and generates PDF for filing.',
      'Built with a Chartered Accountant to make sure tax rules are accurate.'
    ],
    techStack: 'Next.js, IndexedDB, Zod, jsPDF',
    links: [
      { label: 'Live →', url: 'https://fiscally.online' }
    ],
    technicalDetails: [
      {
        title: 'Multi Source Data Reconciliation',
        problem: 'Income data from three government sources often had different values for the same item.',
        solution: 'Built a reconciliation engine with source priority rules and tolerance based comparisons to automatically resolve mismatches.',
        result: 'Users see clean merged data instead of confusing conflicts.'
      },
      {
        title: 'Form 26AS Parser',
        problem: 'Government provides Form 26AS as a messy text file with inconsistent formatting.',
        solution: 'Built a custom parser that detects section markers, handles missing data, and converts everything into a clean internal format.',
        result: 'Users import Form 26AS in one click.'
      },
      {
        title: 'Browser PDF Generation',
        problem: 'Needed professional multi-page tax documents with headers, footers, and tables without a server.',
        solution: 'Used jsPDF to generate formatted PDFs entirely in the browser.',
        result: 'Users download their tax computation document instantly.'
      }
    ]
  },
  {
    title: 'CalcTrust',
    tagline: 'Financial calculator platform for U.S. salary and tax estimation. 100K+ visits.',
    description: [
      '270+ calculator pages covering salary breakdowns and paycheck estimations for all 50 U.S. states. Uses official IRS bracket data and state tax rules.',
      'Deployed on edge servers for fast global access.'
    ],
    techStack: 'Next.js, Cloudflare Workers',
    links: [
      { label: 'Live →', url: 'https://calctrust.com' }
    ],
    technicalDetails: [
      {
        title: 'Tax Calculation Engine',
        problem: 'U.S. taxes use marginal brackets with different rules per state.',
        solution: 'Implemented tax engine using official IRS data and state rules with support for graduated rate calculations.',
        result: 'Accurate tax breakdowns for all 50 states.'
      },
      {
        title: '270+ Pages Without Duplication',
        problem: 'Creating 270 pages manually would be unmaintainable.',
        solution: 'Built a generator that produces pages from centralized data definitions. Change data once, all pages update.',
        result: '270+ pages maintained from one source.'
      },
      {
        title: 'Zero Backend Search',
        problem: 'Needed search across all pages without a server or API.',
        solution: 'Built client side search index that matches queries like "50k in Texas" or "25 per hour yearly" using scored matching.',
        result: 'Instant search with zero server cost.'
      }
    ]
  },
  {
    title: 'ReelBrain',
    tagline: 'AI service that converts long videos into short vertical clips with subtitles.',
    description: [
      'Upload a long video. AI identifies the best moments, detects the active speaker, crops to vertical format, adds word-level subtitles, and outputs ready-to-post short clips.'
    ],
    techStack: 'FastAPI, WhisperX, FFmpeg, Gemini, Modal',
    links: [
      { label: 'GitHub →', url: 'https://github.com/irishavmishra/reelbrain' }
    ],
    technicalDetails: [
      {
        title: 'Active Speaker Clipping',
        problem: 'Long videos have multiple speakers and dead moments. Need to find and crop the best parts.',
        solution: 'Used speaker detection with OpenCV and FFmpeg to identify speaking segments and dynamically crop to vertical format around the active speaker.',
        result: 'Output clips are focused and ready for social media posting.'
      },
      {
        title: 'Subtitle Timing',
        problem: 'Subtitles need to match speech exactly at the word level.',
        solution: 'Used WhisperX for word level timestamps and alignment.',
        result: 'Subtitles appear and disappear exactly when each word is spoken.'
      },
      {
        title: 'GPU Processing',
        problem: 'Video processing is heavy and slow on normal servers.',
        solution: 'Deployed on Modal with GPU runtime and persistent caching for AI models.',
        result: 'Fast processing without managing servers.'
      }
    ]
  },
  {
    title: 'FancyText',
    tagline: 'Unicode text styling tool. 100K+ user visits.',
    description: [
      'Type normal text. Get dozens of styled versions using Unicode characters. Copy and paste anywhere - social media, games, bios, chats.'
    ],
    techStack: 'HTML, CSS, JavaScript',
    links: [
      { label: 'Live →', url: 'https://fancytext-gen.vercel.app/' }
    ],
    technicalDetails: []
  }
];

const INITIAL_PROJECTS = 3;

export default function CVTimeline() {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, INITIAL_PROJECTS);

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev => {
      const isCurrentlyExpanded = prev.includes(index);
      if (isCurrentlyExpanded) {
        return prev.filter(i => i !== index);
      }
      return [...prev, index];
    });
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  const handleMasterToggle = (checked: boolean) => {
    if (checked) {
      // Get indices of all visible projects that have technical details
      const indicesWithDetails = visibleProjects
        .map((p, i) => p.technicalDetails && p.technicalDetails.length > 0 ? i : -1)
        .filter(i => i !== -1);
      setExpandedIndices(indicesWithDetails);
    } else {
      setExpandedIndices([]);
    }
  };

  const isAllExpanded = expandedIndices.length > 0 && expandedIndices.length === visibleProjects.filter(p => p.technicalDetails && p.technicalDetails.length > 0).length;

  return (
    <section className="cv-timeline pb-24" data-section="cv">
      <div className="lg:ml-[var(--centerMargin)] lg:pl-0 pl-[32px] sm:pl-[48px] pr-4 sm:pr-6 lg:pr-0">

        <p className="cv-intro text-[1.25rem] md:text-[1.5rem] leading-[1.6] font-normal mb-16 lg:mb-24 opacity-80 max-w-4xl tracking-tight text-[var(--color-fill)]">
          Here are the projects I have built and shipped.
        </p>

        {/* Master Toggle Button */}
        <label className="option-toggle flex items-center justify-start gap-4 cursor-pointer select-none font-medium mb-16 lg:mb-24"
          style={{
            '--switchH': '2.6rem',
            '--switchW': '5.7rem',
            '--inset': '0.1rem',
            '--knobSize': 'calc(2.6rem - 0.2rem)',
            '--radius': '1.3rem',
            '--speed': '0.24s'
          } as React.CSSProperties}
        >
          <span className={`label transition-colors duration-[var(--speed)] ${!isAllExpanded ? 'text-[var(--color-fill)]' : 'text-[var(--color-fill-light)] opacity-60'}`}>
            Simple
          </span>
          <div className="toggle relative cursor-pointer">
            <input
              type="checkbox"
              className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              checked={isAllExpanded}
              onChange={(e) => handleMasterToggle(e.target.checked)}
            />
            <div className="switch relative block transition-all duration-[var(--speed)]"
              style={{
                background: 'var(--color-fill-light)',
                borderRadius: 'var(--radius)',
                boxShadow: 'inset 0 0 2.6rem 2.6rem color-mix(in srgb,currentColor,transparent 93%), inset 0 0.125rem 0.4rem color-mix(in srgb,currentColor,transparent 69%), inset 0 calc(var(--knobSize) / 3) 0.4rem color-mix(in srgb,currentColor,transparent 84%), 0 -0.1rem 0.1rem color-mix(in srgb,currentColor,transparent 81%), 0 0.1rem 0.1rem #ffffffbf',
                height: 'var(--switchH)',
                width: 'var(--switchW)'
              }}
            >
              <div
                className="absolute top-[var(--inset)] w-[var(--knobSize)] h-[var(--knobSize)] rounded-full transition-all duration-[var(--speed)]"
                style={{
                  left: isAllExpanded ? 'calc(var(--switchW) - var(--knobSize) - var(--inset))' : 'var(--inset)',
                  backgroundColor: 'color-mix(in srgb,currentColor,var(--color-bg) 93%)',
                  boxShadow: 'inset 0 0.1rem 0.1rem #ffffffbf, inset 0 -0.1rem 0.1rem color-mix(in srgb,currentColor,transparent 81%), 0 0.2rem 0.2rem color-mix(in srgb,currentColor,transparent 62%), 0 0.4rem 0.4rem color-mix(in srgb,currentColor,transparent 62%)'
                }}
              />
            </div>
          </div>
          <span className={`label transition-colors duration-[var(--speed)] ${isAllExpanded ? 'text-[var(--color-fill)]' : 'text-[var(--color-fill-light)] opacity-60'}`}>
            Detailed
          </span>
        </label>

        <ol className="cv cv-timeline-list flex flex-col relative w-full pt-4">

          {visibleProjects.map((project, index) => {
            const isExpanded = expandedIndices.includes(index);
            const isFirst = index === 0;
            const isLast = index === visibleProjects.length - 1;

            return (
              <li key={index} className="cv-item relative w-full mb-12 lg:mb-16">

                <div className={`
                  timeline-node absolute top-[38px]
                  left-[-18px] sm:left-[-24px] lg:left-[calc(var(--innerPad)*-0.5)] 
                  w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] 
                  border-[2px] border-[var(--color-fill)] bg-[var(--color-bg)] 
                  rounded-full -translate-x-1/2 z-30 
                  transition-all duration-300
                  ${isExpanded ? 'shadow-[0_0_12px_var(--color-fill)] border-[var(--color-fill)]' : 'border-[var(--color-fill)]/70'}
                `} />

                {!isLast && (
                  <div className="absolute w-[1px] bg-[var(--color-fill)] opacity-[0.25] z-10
                    left-[-18px] sm:left-[-24px] lg:left-[calc(var(--innerPad)*-0.5)]
                    top-[45px] h-[calc(100%+48px)] lg:h-[calc(100%+64px)] -translate-x-1/2" />
                )}

                <div className="project-item max-w-4xl relative">
                  <div className="project-card transition-all duration-300 overflow-hidden relative">

                    <div className="px-0 pt-6 md:pt-8 pb-3 md:pb-4">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <h3 className="text-xl md:text-[1.5rem] font-semibold text-[var(--color-fill)] m-0 leading-tight">
                          {project.title}
                        </h3>
                        {project.links && project.links.length > 0 && (
                          <a
                            href={project.links[0].url}
                            target={project.links[0].url.startsWith('http') ? '_blank' : undefined}
                            rel={project.links[0].url.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="rgbsplit font-medium text-[0.9rem] md:text-[0.95rem]"
                          >
                            {project.links[0].label}
                          </a>
                        )}
                      </div>
                      <p className="text-[0.95rem] md:text-[1.05rem] leading-[1.5] text-[var(--color-fill)] opacity-70 mt-2">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="px-0 pb-6 md:pb-8 pt-0">
                      <div className="flex flex-col gap-4 md:gap-5">
                        {project.description.map((desc, i) => (
                          <p key={i} className="text-base md:text-[1.05rem] leading-[1.6] text-[var(--color-fill)] opacity-90 m-0">
                            {desc}
                          </p>
                        ))}

                        {project.techStack && (
                          <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed text-[var(--color-fill)] m-0 mt-2">
                            <strong className="font-medium mix-blend-multiply opacity-90">Tech Stack</strong>{' '}
                            <span className="opacity-70 mx-1">→</span>{' '}
                            <span className="opacity-90">{project.techStack}</span>
                          </p>
                        )}
                      </div>

                      {project.technicalDetails && project.technicalDetails.length > 0 && (
                        <div className="mt-8">
                          <button
                            onClick={() => toggleExpand(index)}
                            className="text-[0.9rem] md:text-[0.95rem] font-medium text-[var(--color-fill)] opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2 group cursor-pointer"
                          >
                            {isExpanded ? 'View Less' : 'View Technical Details'}
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} group-hover:translate-y-[1px]`}
                            >
                              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>

                          <div
                            className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                          >
                            <div className="overflow-hidden">
                              <div className="pt-8 border-t border-[var(--color-fill)]/10">
                                <div className="flex flex-col gap-8 md:gap-10">
                                  {project.technicalDetails.map((detail, i) => (
                                    <div key={i} className="problem-item">
                                      <h4 className="text-[1rem] md:text-[1.1rem] font-semibold text-[var(--color-fill)] mb-3">
                                        {detail.title}
                                      </h4>
                                      <div className="space-y-2">
                                        <p className="text-[0.95rem] md:text-[1rem] leading-[1.6] text-[var(--color-fill)] opacity-75 m-0">
                                          <strong className="opacity-60">Problem:</strong> {detail.problem}
                                        </p>
                                        <p className="text-[0.95rem] md:text-[1rem] leading-[1.6] text-[var(--color-fill)] opacity-75 m-0">
                                          <strong className="opacity-60">Solution:</strong> {detail.solution}
                                        </p>
                                        <p className="text-[0.95rem] md:text-[1rem] leading-[1.6] text-[var(--color-fill)] opacity-75 m-0">
                                          <strong className="opacity-60">Result:</strong> {detail.result}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {!showAll && projectsData.length > INITIAL_PROJECTS && (
          <div className="mt-8 lg:mt-12 flex justify-start">
            <button
              onClick={handleViewAll}
              className="group flex items-center gap-3 text-[var(--color-fill)] opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <span className="text-[1rem] md:text-[1.1rem] font-medium">View All Projects</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--color-fill)]/30 group-hover:border-[var(--color-fill)]/60 group-hover:bg-[var(--color-fill)]/5 transition-all duration-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-y-[2px]"
                >
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
