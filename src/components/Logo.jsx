function Logo({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <svg
          width="120"
          height="48"
          viewBox="0 0 240 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="relative z-10"
        >
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>

          {/* A */}
          <path
            d="M 20 75 L 40 25 L 60 75 L 52 75 L 48 62 L 32 62 L 28 75 Z M 35 55 L 45 55 L 40 38 Z"
            fill="url(#logo-gradient)"
          />
          
          {/* M */}
          <path
            d="M 70 75 L 70 30 L 85 60 L 95 30 L 95 75 L 88 75 L 88 45 L 80 70 L 90 70 L 82 45 L 82 75 Z"
            fill="url(#logo-gradient)"
          />
          
          {/* O with heart inside */}
          <circle cx="120" cy="52.5" r="17.5" stroke="url(#logo-gradient)" strokeWidth="5" fill="none"/>
          
          {/* Small heart in O */}
          <path
            d="M 120 58 C 120 58, 115 54, 115 51 C 115 49, 116.5 47.5, 118 47.5 C 119 47.5, 119.5 48, 120 49.5 C 120.5 48, 121 47.5, 122 47.5 C 123.5 47.5, 125 49, 125 51 C 125 54, 120 58, 120 58 Z"
            fill="url(#logo-gradient)"
            opacity="0.95"
          />
          
          {/* R */}
          <path
            d="M 150 75 L 150 30 L 170 30 C 177 30, 182 35, 182 42 C 182 48, 178 52, 172 53 L 183 75 L 174 75 L 164 54 L 157 54 L 157 75 Z M 157 37 L 157 47 L 169 47 C 173 47, 175 45, 175 42 C 175 39, 173 37, 169 37 Z"
            fill="url(#logo-gradient)"
          />
          
          {/* E */}
          <path
            d="M 193 75 L 193 30 L 223 30 L 223 37 L 200 37 L 200 48 L 220 48 L 220 55 L 200 55 L 200 68 L 223 68 L 223 75 Z"
            fill="url(#logo-gradient)"
          />
        </svg>
        
        {/* Subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose/20 via-purple/20 to-amber/20 blur-lg rounded-full -z-10"></div>
      </div>
    </div>
  );
}

export default Logo;
