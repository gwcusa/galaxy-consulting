interface LogoProps {
  className?: string;
  iconSize?: number;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export default function Logo({
  className = '',
  iconSize = 40,
  showText = true,
  variant = 'light',
}: LogoProps) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#0A1628';
  const subColor = variant === 'light' ? '#C0C8D8' : '#1E3A5F';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Icon: Galaxy orbit rings + star core */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Galaxy Consulting logo icon"
      >
        {/* Outer orbit ring */}
        <ellipse
          cx="40" cy="40" rx="36" ry="16"
          stroke="#4A90D9" strokeWidth="1.5"
          strokeDasharray="4 2"
          opacity="0.6"
          transform="rotate(-25 40 40)"
        />
        {/* Middle orbit ring */}
        <ellipse
          cx="40" cy="40" rx="26" ry="11"
          stroke="#C0C8D8" strokeWidth="1.2"
          opacity="0.5"
          transform="rotate(20 40 40)"
        />
        {/* Inner orbit ring */}
        <ellipse
          cx="40" cy="40" rx="16" ry="7"
          stroke="#4A90D9" strokeWidth="1"
          opacity="0.7"
          transform="rotate(-10 40 40)"
        />

        {/* Star/planet core */}
        <circle cx="40" cy="40" r="7" fill="#2E6DB4" />
        <circle cx="40" cy="40" r="4.5" fill="#4A90D9" />
        <circle cx="40" cy="40" r="2" fill="#FFFFFF" opacity="0.9" />

        {/* Orbiting dot — outer ring */}
        <circle
          cx="40" cy="40" r="3"
          fill="#C0C8D8"
          transform="rotate(-25 40 40) translate(36 0)"
        />
        {/* Orbiting dot — middle ring */}
        <circle
          cx="40" cy="40" r="2.5"
          fill="#4A90D9"
          transform="rotate(20 40 40) translate(-26 0)"
        />

        {/* Accent stars */}
        <circle cx="14" cy="18" r="1.2" fill="#C0C8D8" opacity="0.8" />
        <circle cx="66" cy="62" r="1" fill="#4A90D9" opacity="0.7" />
        <circle cx="70" cy="22" r="0.8" fill="#FFFFFF" opacity="0.5" />
        <circle cx="10" cy="58" r="0.8" fill="#FFFFFF" opacity="0.4" />
        <circle cx="58" cy="12" r="1" fill="#C0C8D8" opacity="0.6" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-bold tracking-widest uppercase text-sm"
            style={{ color: textColor, fontFamily: 'var(--font-barlow)', letterSpacing: '0.15em' }}
          >
            Galaxy Consulting
          </span>
          <span
            className="text-xs tracking-wider uppercase mt-0.5"
            style={{ color: subColor, fontFamily: 'var(--font-inter)', letterSpacing: '0.2em', fontSize: '0.65rem' }}
          >
            LLC &nbsp;·&nbsp; Our Mission Is Your Success
          </span>
        </div>
      )}
    </div>
  );
}
