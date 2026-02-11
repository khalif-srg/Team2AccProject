function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="logo-coral" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F06B5C" />
            <stop offset="100%" stopColor="#F97B6B" />
          </linearGradient>
          <linearGradient id="logo-peach" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4A594" />
            <stop offset="100%" stopColor="#FAD4CC" />
          </linearGradient>
          <linearGradient id="logo-rose" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8836F" />
            <stop offset="100%" stopColor="#F06B5C" />
          </linearGradient>
        </defs>

        {/* Heart shape */}
        <path
          d="M50 88 C50 88, 12 62, 12 38 C12 22, 24 12, 36 12 C44 12, 48 16, 50 22 C52 16, 56 12, 64 12 C76 12, 88 22, 88 38 C88 62, 50 88, 50 88Z"
          fill="url(#logo-coral)"
          opacity="0.9"
        />

        {/* Inner heart highlight */}
        <path
          d="M50 78 C50 78, 22 58, 22 40 C22 28, 30 20, 38 20 C44 20, 47 23, 50 28 C53 23, 56 20, 62 20 C70 20, 78 28, 78 40 C78 58, 50 78, 50 78Z"
          fill="url(#logo-peach)"
          opacity="0.4"
        />

        {/* AI sparkle - top */}
        <path
          d="M50 6 L52 14 L54 6 L52 10 Z"
          fill="#F06B5C"
        />
        <circle cx="50" cy="4" r="2" fill="#F06B5C" />

        {/* AI sparkle - right */}
        <path
          d="M90 30 L84 34 L90 38 L86 34 Z"
          fill="#F97B6B"
        />
        <circle cx="92" cy="34" r="2" fill="#F97B6B" />

        {/* AI sparkle - left */}
        <path
          d="M10 30 L16 34 L10 38 L14 34 Z"
          fill="#F97B6B"
        />
        <circle cx="8" cy="34" r="2" fill="#F97B6B" />

        {/* AI circuit nodes on heart */}
        <circle cx="38" cy="42" r="3" fill="white" opacity="0.9" />
        <circle cx="62" cy="42" r="3" fill="white" opacity="0.9" />
        <circle cx="50" cy="56" r="3.5" fill="white" opacity="0.9" />

        {/* Circuit lines connecting nodes */}
        <line x1="38" y1="42" x2="50" y2="56" stroke="white" strokeWidth="1.5" opacity="0.7" />
        <line x1="62" y1="42" x2="50" y2="56" stroke="white" strokeWidth="1.5" opacity="0.7" />
        <line x1="38" y1="42" x2="62" y2="42" stroke="white" strokeWidth="1.5" opacity="0.7" />

        {/* Center AI dot */}
        <circle cx="50" cy="44" r="2" fill="white" opacity="0.6" />
        <line x1="50" y1="44" x2="38" y2="42" stroke="white" strokeWidth="1" opacity="0.4" />
        <line x1="50" y1="44" x2="62" y2="42" stroke="white" strokeWidth="1" opacity="0.4" />
        <line x1="50" y1="44" x2="50" y2="56" stroke="white" strokeWidth="1" opacity="0.4" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-wedding-coral via-wedding-rose to-wedding-salmon bg-clip-text text-transparent">
          AI Wedding
        </span>
        <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-wedding-salmon/80">
          Planner
        </span>
      </div>
    </div>
  );
}

export default Logo;
