'use client';

import { useEffect, useRef } from 'react';

export default function Mast() {
  const mastRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const handleScroll = () => {
      if (rafRef.current !== null) return;

      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const rate = scrollY * 0.15;
        bg.style.transform = `translate3d(0, ${rate}px, 0)`;
        rafRef.current = null;
      });
    };

    // Use CSS scroll-driven animation for smoother effect if supported
    if (CSS.supports('animation-timeline', 'scroll()')) {
      const style = bg.style as CSSStyleDeclaration & {
        animationTimeline?: string;
        animationRange?: string;
      };
      style.animation = 'parallax 1s linear';
      style.animationTimeline = 'scroll()';
      style.animationRange = '0% 100%';

      // Add keyframes via style tag
      const keyframesStyle = document.createElement('style');
      keyframesStyle.textContent = `
        @keyframes parallax {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(0, 100px, 0); }
        }
      `;
      document.head.appendChild(keyframesStyle);

      return () => {
        document.head.removeChild(keyframesStyle);
      };
    } else {
      // Fallback to JS for older browsers
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
        }
      };
    }
  }, []);

  return (
    <section className="mast-contain" ref={mastRef}>
      <div
        className="mast mx-auto overflow-hidden relative"
        style={{
          maxWidth: 'var(--outerBreakpoint)',
          paddingTop: 'var(--headerHeight)'
        }}
      >
        {/* Background Image with Parallax */}
        <div
          ref={bgRef}
          className="absolute inset-0 right-[-2%] bg-no-repeat z-[1] will-change-transform"
          style={{
            backgroundImage: 'url(/rishav-mishra.webp)',
            backgroundPosition: 'right 42%',
            backgroundSize: 'auto clamp(165%, 84vw, 200%)',
            transform: 'translate3d(0, 0, 0)',
            transition: 'transform 0.1s linear'
          }}
        />

        {/* Gradient overlay for text readability on mobile */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none md:hidden"
          style={{
            background: 'linear-gradient(to right, var(--color-bg) 40%, transparent 85%)'
          }}
        />

        {/* Bottom Line */}
        <div
          className="absolute bottom-0 h-[1px] z-[2] opacity-100"
          style={{
            left: 'calc(var(--outerPad) + clamp(0px, calc((100% - var(--innerBreakpoint)) / 2), calc(var(--outerBreakpoint) - var(--innerBreakpoint))))',
            right: 0,
            background: 'var(--color-bevel)',
            mixBlendMode: 'overlay'
          }}
        />

        {/* Content */}
        <div className="wrap">
          <h1
            className="drift right relative z-[3] opacity-0"
            style={{
              fontFamily: '"Satoshi", system-ui, -apple-system, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              padding: 'calc(var(--vertGapLarge) - var(--size-l)) 30% var(--vertGapLarge) 0',
              animation: 'fadeIn 0.8s ease-out 0.3s forwards'
            }}
          >
            I build software that simplify and automate real world business operations using <br /> <code className="tracking-[-0.08em] font-normal">Full Stack</code> and&nbsp;AI.
          </h1>
        </div>
      </div>

      <style jsx>{`
        code {
          font-family: 'JetBrains Mono', 'SF Mono', monospace;
          font-weight: 400;
        }
        
        code:after {
          content: "()";
          letter-spacing: -0.14em;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @media screen and (max-width: 768px) {
          .mast {
            min-height: 100lvh;
          }
          
          .mast .wrap {
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: calc(100lvh - var(--headerHeight));
          }
          
          h1 {
            margin-block-start: -1.2em;
            max-width: 300px;
            padding-block: 0;
            padding-inline-end: 0;
            position: relative;
          }
          
          h1:after {
            animation: arrowDrift 0.84s ease-in-out infinite alternate;
            content: "\\2193";
            font-family: var(--font-arrow);
            font-size: var(--size-m);
            left: 0;
            position: absolute;
            top: calc(100% + 1em);
          }
          
          @keyframes arrowDrift {
            0% { transform: translateY(0); }
            to { transform: translateY(0.5em); }
          }
        }
        
        @media screen and (max-width: 930px) {
          .mast > div:first-child {
            right: -7% !important;
          }
        }
        
        @media screen and (max-width: 840px) {
          .mast > div:first-child {
            right: -12% !important;
          }
        }

        @media screen and (max-width: 480px) {
          h1 {
            max-width: 260px;
            font-size: clamp(1.6rem, 6.5vw, 2.2rem);
          }
          
          .mast > div:first-child {
            right: -18% !important;
            background-size: auto 160% !important;
          }
        }
      `}</style>
    </section>
  );
}
