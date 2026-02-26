import { FaEnvelope, FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function IntroSection() {
  return (
    <section className="push" data-section="intro">
      <p className="mb-4">
        I build web applications using React, Node.js, and PostgreSQL.
      </p>

      <p className="mb-4">
        6 projects shipped. 100K+ user visits. Available now.
      </p>

      <p className="mb-4">
        Based in Bhopal. Open to remote and relocation.
      </p>

      <p className="flex flex-wrap gap-4 items-center">
        <a
          className="rgbsplit noline flex items-center gap-1"
          href="mailto:onlyrishavmishra@gmail.com"
        >
          <FaEnvelope className="opacity-70 text-[1.1em] mt-[-2px]" />
          Email
        </a>
        <a
          className="rgbsplit noline flex items-center gap-1"
          href="https://www.linkedin.com/in/irishavmishra/"
          target="_blank"
          rel="me noopener noreferrer"
        >
          <FaLinkedin className="opacity-70 text-[1.1em] mt-[-2px]" />
          LinkedIn
        </a>
        <a
          className="rgbsplit noline flex items-center gap-1"
          href="https://github.com/irishavmishra"
          target="_blank"
          rel="me noopener noreferrer"
        >
          <FaGithub className="opacity-70 text-[1.1em] mt-[-2px]" />
          GitHub
        </a>
        <a
          className="rgbsplit noline flex items-center gap-1"
          href="https://x.com/irishavmishra"
          target="_blank"
          rel="me noopener noreferrer"
        >
          <FaXTwitter className="opacity-70 text-[1.1em] mt-[-2px]" />
          X (Twitter)
        </a>
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
