'use client';

import { useState } from 'react';

interface Problem {
  title: string;
  solution: string;
}

interface ProjectEntry {
  title: string;
  description: string[];
  techStack: string;
  problems?: Problem[];
}

const projectsData: ProjectEntry[] = [
  {
    title: 'Rently',
    description: [
      'Property management platform for small landlords managing 1 to 20 rental units.',
      'Automates rent collection, maintenance requests, and financial reporting through dedicated landlord and tenant portals with real time payment tracking and document management.'
    ],
    techStack: 'Next.js, Nitro, tRPC, PostgreSQL (Neon), Cloudflare Workers, Better Auth.',
    problems: [
      {
        title: 'Edge Database Connectivity on Cloudflare Workers',
        solution: 'Standard PostgreSQL drivers use TCP connections which are not supported by Cloudflare Workers runtime. I implemented Neons HTTP based driver with Drizzle ORM to enable stateless database queries from the edge without connection pooling, while maintaining relational integrity and foreign key constraints.'
      },
      {
        title: 'Dual Portal Authentication System',
        solution: 'Landlords required full account access while tenants needed invite only limited portal access without full registration. I implemented Better Auth for landlords with email verification and OAuth, and a custom JWT session system for tenants with OTP based login and magic link invites, both operating on the same database with isolated session logic.'
      },
      {
        title: 'Real Time Subscription Enforcement',
        solution: 'Feature access needed to be restricted dynamically based on subscription tier limits such as number of units and storage usage. I built a usage based access layer that validates limits before every create operation and caches subscription metadata to reduce repeated database queries.'
      }
    ]
  },
  {
    title: 'Fiscally',
    description: [
      'Client side income tax return filing platform for India.',
      'Provides a guided interface for preparing ITR forms (ITR 1 to ITR 7) with support for multi source data import and reconciliation directly within the browser.'
    ],
    techStack: 'Next.js, IndexedDB, Zod, jsPDF.',
    problems: [
      {
        title: 'Multi Source Data Reconciliation',
        solution: 'Income data imported from Prefill JSON, AIS, and Form 26AS often had conflicting values and inconsistent formatting. I built a reconciliation engine with source priority rules, tolerance based comparisons, and severity classification to automatically resolve mismatches between data sources.'
      },
      {
        title: 'Parsing Form 26AS Text Files',
        solution: 'The Income Tax Portal provides Form 26AS as caret delimited text with multiple inconsistent sections. I implemented a custom parser that detects section markers, handles missing transaction cases, and maps extracted values into a unified internal schema.'
      },
      {
        title: 'Client Side PDF Generation',
        solution: 'Required generation of multi page income computation documents with headers, footers, and tabular tax breakdowns entirely in the browser. Implemented a structured PDF generation layer using jsPDF for professional formatting without server side processing.'
      }
    ]
  },
  {
    title: 'CalcTrust',
    description: [
      'Financial calculator platform with 270 plus programmatic pages for U.S. salary and tax estimation.',
      'Implements federal and state tax calculations with static edge deployment for fast global access.'
    ],
    techStack: 'Next.js, Cloudflare Workers.',
    problems: [
      {
        title: 'Progressive Tax Calculation Accuracy',
        solution: 'Federal and state taxes use marginal bracket systems with deductions and FICA limits. I implemented a tax engine using official IRS bracket data and state tax rules, supporting graduated tax states through marginal rate calculations.'
      },
      {
        title: 'Maintaining 270 Plus Pages Without Duplication',
        solution: 'Instead of manually creating calculator pages, I built a generator system that produces salary breakdown and state specific paycheck pages from centralized data definitions.'
      },
      {
        title: 'Zero Backend Search System',
        solution: 'Implemented a client side search index capable of matching queries such as 50k in Texas or 25 per hour yearly with zero API dependency, using memoized scoring across titles, slugs, and numeric values.'
      }
    ]
  },
  {
    title: 'ReelBrain',
    description: [
      'AI powered backend service for converting long form videos into short, subtitle ready vertical clips.',
      'Processes video input from S3, identifies high value segments, applies active speaker detection, and generates formatted output clips.'
    ],
    techStack: 'FastAPI, WhisperX, FFmpeg, Gemini, Modal.',
    problems: [
      {
        title: 'Active Speaker Focused Clipping',
        solution: 'Extracting relevant moments from long form video required identifying speaking segments and dynamically reframing clips into vertical format. Implemented Active Speaker Detection with OpenCV and FFmpeg to crop around speaking subjects in real time.'
      },
      {
        title: 'Speech Alignment for Subtitle Timing',
        solution: 'Used WhisperX for word level timestamping and alignment to generate subtitle ready clips with accurate speech synchronization.'
      },
      {
        title: 'GPU Based Processing Pipeline',
        solution: 'Deployed the video processing service on Modal with GPU backed runtime and persistent volume caching for model reuse across executions.'
      }
    ]
  },
  {
    title: 'Zaply (In Progress)',
    description: [
      'Browser based design editor for creating social media graphics with AI assisted image generation.'
    ],
    techStack: 'Next.js, Fabric.js, Hono, React Query.',
    problems: [
      {
        title: 'Selection Aware Canvas Editing',
        solution: 'Maintaining UI state across text, shapes, and image objects required centralized selection tracking. Implemented an editor command layer to synchronize tool panels with the active Fabric.js object.'
      },
      {
        title: 'Multi Source Image Handling',
        solution: 'Handled insertion of user uploaded images, Unsplash URLs, and AI generated assets through a unified image pipeline with cross origin support.'
      }
    ]
  },
  {
    title: 'FancyText',
    description: [
      'Unicode based text styling tool with over 100K user visits.',
      'Generates multiple decorated text variants that can be copied and used across games, social profiles, chats, and bios.'
    ],
    techStack: 'HTML, CSS, JavaScript.',
    problems: [
      {
        title: 'Unicode Style Generation',
        solution: 'Implemented transformation maps to convert plain input into styled Unicode variants while preserving unsupported characters.'
      },
      {
        title: 'Real Time Multi Output Rendering',
        solution: 'Optimized generation logic to update dozens of styled outputs instantly from a single input without noticeable UI lag.'
      }
    ]
  }
];

const INITIAL_PROJECTS = 3;

export default function CVTimeline() {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const [isDetailed, setIsDetailed] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, INITIAL_PROJECTS);

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev => {
      const isCurrentlyExpanded = prev.includes(index);
      const newIndices = isCurrentlyExpanded
        ? prev.filter(i => i !== index)
        : [...prev, index];

      if (newIndices.length === projectsData.length) {
        setIsDetailed(true);
      } else if (newIndices.length === 0) {
        setIsDetailed(false);
      }
      return newIndices;
    });
  };

  const handleMasterToggle = (checked: boolean) => {
    setIsDetailed(checked);
    if (checked) {
      setExpandedIndices(projectsData.map((_, i) => i));
    } else {
      setExpandedIndices([]);
    }
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  return (
    <section className="cv-timeline pb-24" data-section="cv">
      {/* Container restricted and aligned as original simple list */}
      <div className="lg:ml-[var(--centerMargin)] lg:pl-0 pl-[48px] pr-6 lg:pr-0">

        <p className="cv-intro text-[1.25rem] md:text-[1.5rem] leading-[1.6] font-normal mb-16 lg:mb-24 opacity-80 max-w-4xl tracking-tight text-[var(--color-fill)]">
          I have built over the last few years, focused on automating operational workflows for individuals and small businesses.
        </p>

        {/* Master Presentational Toggle Button */}
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
          <span className={`label transition-colors duration-[var(--speed)] ${!isDetailed ? 'text-[var(--color-fill)]' : 'text-[var(--color-fill-light)] opacity-60'}`}>
            Simple
          </span>
          <div className="toggle relative cursor-pointer">
            <input
              type="checkbox"
              className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              checked={isDetailed}
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
                  left: isDetailed ? 'calc(var(--switchW) - var(--knobSize) - var(--inset))' : 'var(--inset)',
                  backgroundColor: 'color-mix(in srgb,currentColor,var(--color-bg) 93%)',
                  boxShadow: 'inset 0 0.1rem 0.1rem #ffffffbf, inset 0 -0.1rem 0.1rem color-mix(in srgb,currentColor,transparent 81%), 0 0.2rem 0.2rem color-mix(in srgb,currentColor,transparent 62%), 0 0.4rem 0.4rem color-mix(in srgb,currentColor,transparent 62%)'
                }}
              />
            </div>
          </div>
          <span className={`label transition-colors duration-[var(--speed)] ${isDetailed ? 'text-[var(--color-fill)]' : 'text-[var(--color-fill-light)] opacity-60'}`}>
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

                {/* Timeline Dot on vertical line */}
                <div className={`
                  timeline-node absolute top-[38px]
                  left-[-24px] lg:left-[calc(var(--innerPad)*-0.5)] 
                  w-[14px] h-[14px] 
                  border-[2px] border-[var(--color-fill)] bg-[var(--color-bg)] 
                  rounded-full -translate-x-1/2 z-30 
                  transition-all duration-300
                  ${isExpanded ? 'shadow-[0_0_12px_var(--color-fill)] border-[var(--color-fill)]' : 'border-[var(--color-fill)]/70'}
                `} />

                {/* Timeline Line Segment perfectly connecting to the next item */}
                {!isLast && (
                  <div className="absolute w-[1px] bg-[var(--color-fill)] opacity-[0.25] z-10
                    left-[-24px] lg:left-[calc(var(--innerPad)*-0.5)]
                    top-[45px] h-[calc(100%+48px)] lg:h-[calc(100%+64px)] -translate-x-1/2" />
                )}

                {/* Project Box (max-w matching original) */}
                <div className="project-item max-w-4xl relative">
                  <div className="project-card transition-all duration-300 overflow-hidden relative">

                    {/* Box Header */}
                    <div className="px-0 pt-6 md:pt-8 pb-3 md:pb-4">
                      <h3 className="text-xl md:text-[1.5rem] font-semibold text-[var(--color-fill)] m-0 leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Box Content */}
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
                            <span className="opacity-70 mx-1">&rarr;</span>{' '}
                            <span className="opacity-90">{project.techStack}</span>
                          </p>
                        )}
                      </div>

                      {/* Expandable Problems Section */}
                      {project.problems && project.problems.length > 0 && (
                        <div className="mt-8">
                          <button
                            onClick={() => toggleExpand(index)}
                            className="text-[0.9rem] md:text-[0.95rem] font-medium text-[var(--color-fill)] opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2 group cursor-pointer"
                          >
                            {isExpanded ? 'View Less' : 'View More'}
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
                                <h4 className="text-[0.75rem] md:text-[0.875rem] font-semibold uppercase tracking-wider text-[var(--color-fill)] opacity-60 mb-6">
                                  Technical Challenges Addressed
                                </h4>
                                <div className="flex flex-col gap-5 md:gap-6">
                                  {project.problems.map((problem, i) => (
                                    <div key={i} className="problem-item">
                                      <h5 className="text-[1rem] md:text-[1.05rem] font-medium text-[var(--color-fill)] opacity-95 mb-1 md:mb-2 flex items-start gap-2">
                                        <span className="opacity-40 mt-[2px] md:mt-[4px]">•</span>
                                        {problem.title}
                                      </h5>
                                      <p className="text-[0.95rem] md:text-[1rem] leading-[1.6] pl-[16px] md:pl-[20px] text-[var(--color-fill)] opacity-75 m-0">
                                        {problem.solution}
                                      </p>
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

        {/* View All Button */}
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
