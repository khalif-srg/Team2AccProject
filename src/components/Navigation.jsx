import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

function Navigation() {
  return (
    <header className="backdrop-blur-sm bg-white/70 border-b border-wedding-blush/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="cursor-pointer">
          <Logo />
        </Link>
        <nav className="flex gap-3">
          <Button variant="outline" asChild className="rounded-full border-wedding-blush text-gray-700 font-medium hover:bg-wedding-blush/40 hover:text-wedding-coral">
            <a href="#how-it-works">How it works</a>
          </Button>
          <Button variant="outline" asChild className="rounded-full border-wedding-blush text-gray-700 font-medium hover:bg-wedding-blush/40 hover:text-wedding-coral">
            <Link to="/testimonials">Testimonials</Link>
          </Button>
          <Button asChild className="rounded-full bg-gradient-to-r from-wedding-coral to-wedding-salmon text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
            <Link to="/chat">Start Planning</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
