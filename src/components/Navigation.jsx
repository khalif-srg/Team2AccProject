import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-sm bg-white/70 border-b border-wedding-blush/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="cursor-pointer">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-3">
          <Button variant="outline" asChild className="rounded-full border-wedding-blush text-gray-700 font-medium hover:bg-wedding-blush/40 hover:text-wedding-coral">
            <Link to="/about">About Us</Link>
          </Button>
          <Button variant="outline" asChild className="rounded-full border-wedding-blush text-gray-700 font-medium hover:bg-wedding-blush/40 hover:text-wedding-coral">
            <Link to="/testimonials">Testimonials</Link>
          </Button>
          <Button asChild className="rounded-full bg-gradient-to-r from-wedding-coral to-wedding-salmon text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
            <Link to="/chat">Start Planning</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-wedding-blush/20 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-wedding-blush/50 bg-white/90 backdrop-blur-sm">
          <nav className="flex flex-col gap-2 px-6 py-4">
            <Button 
              variant="outline" 
              asChild 
              className="w-full rounded-full border-wedding-blush text-gray-700 font-medium hover:bg-wedding-blush/40 hover:text-wedding-coral"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/about">About Us</Link>
            </Button>
            <Button 
              variant="outline" 
              asChild 
              className="w-full rounded-full border-wedding-blush text-gray-700 font-medium hover:bg-wedding-blush/40 hover:text-wedding-coral"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/testimonials">Testimonials</Link>
            </Button>
            <Button 
              asChild 
              className="w-full rounded-full bg-gradient-to-r from-wedding-coral to-wedding-salmon text-white font-medium hover:shadow-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/chat">Start Planning</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navigation;
