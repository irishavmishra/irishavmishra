export default function IntroSection() {
  return (
    <section className="push" data-section="intro">
      <p className="mb-4">
        Currently, I am building{' '}
        <a
          className="brilliant relative inline-block font-medium mx-[0.075em]"
          href="#"
        >
          [<span>Rently</span>]
        </a>
        , a property management platform for small to medium landlords, focused on automating rent collection, maintenance requests, and financial reporting through dedicated landlord and tenant portals with real time payment tracking and document management.
      </p>

      <p>
        Reach me via{' '}
        <a
          className="rgbsplit"
          href="mailto:onlyrishavmishra@gmail.com"
        >
          Email
        </a>
        {' '},{' '}
        <a
          className="rgbsplit"
          href="https://www.linkedin.com/in/irishavmishra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {' '}and{' '}
        <a
          className="rgbsplit"
          href="https://x.com/irishavmishra"
          target="_blank"
          rel="noopener noreferrer"
        >
          X(Twitter)
        </a>.
      </p>

      <style jsx>{`
        a.brilliant {
          margin-inline-end: 0.125em;
        }
        
        a.brilliant:not(.noline):before {
          height: 2px;
          left: 0.62ch;
          width: calc(100% - 1.24ch);
        }
        
        a.brilliant:after {
          background: #35ff92;
          content: "";
          height: 100%;
          position: absolute;
          left: -0.24ch;
          right: -0.24ch;
          top: 0;
          transform: scaleX(0);
          transform-origin: center right;
          transition: transform var(--linkLineSpeed) var(--linkLineSlide);
          z-index: -1;
        }
        
        a.brilliant:hover:after {
          transform: scaleX(1);
          transform-origin: center left;
          transition: transform var(--doubleTime) var(--secondStepStart) ease;
        }
        
        @media screen and (max-width: 768px) {
          a.brilliant:before {
            display: none;
          }
          
          a.brilliant:after {
            transform: scaleX(1);
            transform-origin: center left;
            transition: transform var(--doubleTime) var(--secondStepStart) ease;
          }
        }
      `}</style>
    </section>
  );
}
