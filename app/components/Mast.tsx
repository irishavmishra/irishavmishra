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
        <div className="wrap flex flex-col justify-center h-full relative z-[3]">
          <h1
            className="drift right relative opacity-0"
            style={{
              fontFamily: '"Satoshi", system-ui, -apple-system, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              padding: 'calc(var(--vertGapLarge) - var(--size-l)) 30% var(--vertGapLarge) 0',
              animation: 'fadeIn 0.8s ease-out 0.3s forwards'
            }}
          >
            I build software that simplify and automate real world business operations using <br className="hidden md:block" /> <code className="tracking-[-0.08em] font-normal">Full Stack</code> and&nbsp;AI.
          </h1>
          <div className="mobile-arrow block md:hidden mt-8 text-[32px] font-normal opacity-50 relative z-[3] animate-bounce">
            ↓
          </div>
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
          .mast-contain {
            height: 100svh;
            min-height: 600px;
          }

          .mast {
            height: 100% !important;
            min-height: 100% !important;
            padding-top: var(--headerHeight) !important;
            display: flex;
            align-items: center;
          }

          .mast > div:first-child { /* Background image */
            position: absolute !important;
            top: 0;
            left: 20%;
            right: -20% !important;
            bottom: 0;
            width: auto;
            height: 100% !important;
            background-position: center !important;
            background-size: cover !important;
            z-index: 1;
            /* Fade on left for text readability */
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 80%);
            mask-image: linear-gradient(to right, transparent 0%, black 80%);
          }

          .mast .wrap {
            position: relative;
            width: 100%;
            height: 100%;
            padding: 0 var(--outerPad);
            z-index: 3;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }

          h1 {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0;
            background: none;
            font-size: clamp(2.2rem, 9vw, 3.5rem) !important;
            line-height: 1.1 !important;
            letter-spacing: -0.04em !important;
          }
          
          h1:after {
            display: none;
          }
          
          code:after {
            font-size: 0.7em;
          }
          
          .mobile-arrow {
            display: block !important;
            margin-top: 5vh !important;
          }
        }
        
        @media screen and (max-width: 930px) and (min-width: 769px) {
          .mast > div:first-child {
            right: -2% !important;
          }
        }

        @media screen and (max-width: 840px) and (min-width: 769px) {
          .mast > div:first-child {
            right: -4% !important;
          }
        }

        @media screen and (max-width: 480px) {
          .mast > div:first-child {
            left: 10%;
            right: -40% !important;
            /* Even more fade on smaller screens */
            -webkit-mask-image: linear-gradient(to right, transparent 15%, black 85%);
            mask-image: linear-gradient(to right, transparent 15%, black 85%);
          }

          h1 {
            font-size: clamp(2.2rem, 11vw, 2.8rem) !important;
            max-width: 95% !important;
          }
        }
      `}</style>
    </section>
  );
}
