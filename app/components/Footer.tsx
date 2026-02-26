import { FaEnvelope, FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

        <nav aria-label="Social links" className="flex flex-1 gap-6 justify-end whitespace-nowrap items-center"
        >
          <a
            className="rgbsplit noline flex items-center gap-2"
            href="mailto:onlyrishavmishra@gmail.com"
            aria-label="Email Rishav Mishra"
          >
            <FaEnvelope className="opacity-70 text-[1.1em] mt-[-2px]" />
            Email
          </a>
          <a
            className="rgbsplit noline flex items-center gap-2"
            href="https://www.linkedin.com/in/irishavmishra"
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="Rishav Mishra on LinkedIn"
          >
            <FaLinkedin className="opacity-70 text-[1.1em] mt-[-2px]" />
            LinkedIn
          </a>
          <a
            className="rgbsplit noline flex items-center gap-2"
            href="https://github.com/irishavmishra"
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="Rishav Mishra on GitHub"
          >
            <FaGithub className="opacity-70 text-[1.1em] mt-[-2px]" />
            GitHub
          </a>
          <a
            className="rgbsplit noline flex items-center gap-2"
            href="https://x.com/irishavmishra"
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="Rishav Mishra on X (Twitter)"
          >
            <FaXTwitter className="opacity-70 text-[1.1em] mt-[-2px]" />
            X (Twitter)
          </a>
        </nav>
      </div>
    </footer>
  );
}
