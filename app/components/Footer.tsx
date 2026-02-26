'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(2026);
  }, []);

  return (
    <footer
      className="group"
      style={{ paddingBlockEnd: 'var(--innerPad)' }}
    >
      <div className="wrap flex items-baseline pt-8 relative"
      >
        {/* Top Line */}
        <div
          className="absolute top-0 h-[1px]"
          style={{
            left: 'var(--outerPad)',
            right: 'var(--outerPad)',
            background: 'var(--color-fill)',
            mixBlendMode: 'overlay'
          }}
        />

        <p className="text-[var(--size-s)] flex-shrink-0 whitespace-nowrap"
        >
          &copy; {currentYear} Rishav Mishra{' '}
          <span className="hello inline-block"
            style={{
              transformOrigin: '69% 73%',
              animationFillMode: 'forwards'
            }}
          >
            👋
          </span>
        </p>

        <ul className="flex flex-1 gap-6 justify-end whitespace-nowrap"
        >
          <li>
            <a
              className="rgbsplit noline"
              href="mailto:onlyrishavmishra@gmail.com"
            >
              Email
            </a>
          </li>
          <li>
            <a
              className="rgbsplit noline"
              href="https://linkedin.com/in/irishavmishra"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="rgbsplit noline"
              href="https://github.com/irishavmishra"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="rgbsplit noline"
              href="https://x.com/irishavmishra"
              target="_blank"
              rel="noopener noreferrer"
            >
              X (Twitter)
            </a>
          </li>
        </ul>
      </div>
      
      <style jsx>{`
        .hello {
          transform: rotate(17deg) scale(1);
          transition: transform 0.24s ease-out;
        }
        
        footer:hover .hello {
          animation: waveHello 1.34s ease-in-out forwards;
        }
        
        footer:not(:hover) .hello {
          animation: waveHelloReverse 0.24s var(--linkBtnBounce) forwards;
        }
        
        @keyframes waveHello {
          0% { transform: rotate(17deg) scale(1); }
          15% { transform: translateX(0.34em) translateY(0.125em) rotate(17deg) scale(1.69); }
          25% { transform: translateX(0.34em) translateY(0.125em) rotate(26deg) scale(1.69); }
          35% { transform: translateX(0.34em) translateY(0.125em) rotate(5deg) scale(1.69); }
          45% { transform: translateX(0.34em) translateY(0.125em) rotate(38deg) scale(1.69); }
          55% { transform: translateX(0.34em) translateY(0.125em) rotate(8deg) scale(1.69); }
          65% { transform: translateX(0.34em) translateY(0.125em) rotate(34deg) scale(1.69); }
          75% { transform: translateX(0.34em) translateY(0.125em) rotate(17deg) scale(1.69); }
          to { transform: translateX(0.34em) translateY(0.125em) rotate(17deg) scale(1.69); }
        }
        
        @keyframes waveHelloReverse {
          0% { transform: translateX(0.34em) translateY(0.125em) rotate(17deg) scale(1.69); }
          to { transform: rotate(17deg) scale(1); }
        }
        
        @media screen and (max-width: 768px) {
          footer {
            padding-block-end: calc(var(--innerPad) / 2);
          }

          footer .wrap {
            flex-direction: column-reverse;
            gap: 1em;
            align-items: center;
            text-align: center;
          }

          footer .wrap p {
            text-align: center;
          }

          footer .wrap ul {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
