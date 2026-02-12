import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="glass-strong sticky top-0 z-50 shadow-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-lg">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              asChild 
              className={`rounded-2xl font-medium transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-gradient-to-r from-rose/10 to-purple/10 text-rose shadow-sm' 
                  : 'text-gray hover:bg-rose/5 hover:text-foreground'
              }`}
            >
              <Link to="/about">About</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className={`rounded-2xl font-medium transition-all duration-300 ${
                isActive('/testimonials') 
                  ? 'bg-gradient-to-r from-rose/10 to-purple/10 text-rose shadow-sm' 
                  : 'text-gray hover:bg-rose/5 hover:text-foreground'
              }`}
            >
              <Link to="/testimonials">Stories</Link>
            </Button>
            <Button 
              asChild 
              className="ml-2 rounded-2xl bg-gradient-to-r from-rose via-purple to-amber text-white font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all duration-300"
            >
              <Link to="/chat">
                <span className="flex items-center gap-2">
                  Plan and Book
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-2xl hover:bg-rose/5 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-rose/10 bg-white/95 backdrop-blur-xl dark:bg-gray-900/95">
          <nav className="flex flex-col gap-2 px-4 py-4">
            <div className="mb-2">
              <ThemeToggle />
            </div>
            <Button 
              variant="ghost" 
              asChild 
              className={`w-full justify-start rounded-2xl font-medium transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-gradient-to-r from-rose/10 to-purple/10 text-rose' 
                  : 'text-gray hover:bg-rose/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/about">About</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className={`w-full justify-start rounded-2xl font-medium transition-all duration-300 ${
                isActive('/testimonials') 
                  ? 'bg-gradient-to-r from-rose/10 to-purple/10 text-rose' 
                  : 'text-gray hover:bg-rose/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/testimonials">Stories</Link>
            </Button>
            <Button 
              asChild 
              className="w-full rounded-2xl bg-gradient-to-r from-rose via-purple to-amber text-white font-semibold shadow-premium transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/chat">
                <span className="flex items-center gap-2">
                  Plan and Book
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navigation;
