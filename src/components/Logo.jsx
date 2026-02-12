function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <svg
          width="48"
          height="48"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="relative z-10"
        >
          <defs>
            <linearGradient id="logo-gradient-main" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B9D" />
              <stop offset="50%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#FCD34D" />
            </linearGradient>
            <linearGradient id="logo-gradient-inner" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB3CA" />
              <stop offset="100%" stopColor="#D4A5FF" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Outer decorative ring */}
          <circle 
            cx="50" 
            cy="50" 
            r="42" 
            stroke="url(#logo-gradient-main)" 
            strokeWidth="1.5" 
            fill="none" 
            opacity="0.2"
          >
            <animate 
              attributeName="r" 
              values="42;44;42" 
              dur="4s" 
              repeatCount="indefinite" 
            />
            <animate 
              attributeName="opacity" 
              values="0.2;0.3;0.2" 
              dur="4s" 
              repeatCount="indefinite" 
            />
          </circle>
          
          {/* Main heart shape */}
          <path
            d="M50 78 C50 78, 22 58, 22 38 C22 26, 30 18, 38 18 C44 18, 47 21, 50 27 C53 21, 56 18, 62 18 C70 18, 78 26, 78 38 C78 58, 50 78, 50 78Z"
            fill="url(#logo-gradient-main)"
            filter="url(#glow)"
          />

          {/* Inner heart highlight */}
          <path
            d="M50 70 C50 70, 28 54, 28 38 C28 29, 34 23, 40 23 C45 23, 48 25, 50 30 C52 25, 55 23, 60 23 C66 23, 72 29, 72 38 C72 54, 50 70, 50 70Z"
            fill="url(#logo-gradient-inner)"
            opacity="0.4"
          />

          {/* AI Neural nodes */}
          <circle cx="40" cy="42" r="2.5" fill="white" opacity="0.95">
            <animate attributeName="opacity" values="0.95;0.6;0.95" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="42" r="2.5" fill="white" opacity="0.95">
            <animate attributeName="opacity" values="0.95;0.6;0.95" dur="3s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="50" cy="54" r="3" fill="white" opacity="0.95">
            <animate attributeName="opacity" values="0.95;0.6;0.95" dur="3s" repeatCount="indefinite" begin="1s" />
          </circle>

          {/* Neural connections */}
          <line x1="40" y1="42" x2="50" y2="54" stroke="white" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
          <line x1="60" y1="42" x2="50" y2="54" stroke="white" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
          <line x1="40" y1="42" x2="60" y2="42" stroke="white" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />

          {/* Sparkle decorations */}
          <g opacity="0.8">
            <path d="M50 12 L51 16 L50 20 L49 16 Z" fill="#FF6B9D">
              <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M84 36 L88 37 L84 38 L80 37 Z" fill="#C084FC">
              <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </path>
            <path d="M16 36 L20 37 L16 38 L12 37 Z" fill="#FCD34D">
              <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" begin="1s" />
            </path>
          </g>
        </svg>
        
        {/* Glow effect behind logo */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose/20 via-purple/20 to-amber/20 blur-xl rounded-full -z-10 animate-pulse-glow"></div>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-rose via-purple to-amber bg-clip-text text-transparent">
          Amore
        </span>
        <span className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-gray-light">
          AI WEDDING
        </span>
      </div>
    </div>
  );
}

export default Logo;
