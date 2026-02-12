import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import ChatDemo from '@/components/ChatDemo';
import FeaturesTestimonials from '@/components/FeaturesTestimonials';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-wedding-gradient font-geist">
      {/* Header with Logo and Navigation */}
      <header className="backdrop-blur-sm bg-white/70 border-b border-wedding-blush/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Logo />
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

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-start px-6 py-16 pb-32">
        <div className="text-center w-full max-w-7xl">
          {/* Heading */}
          <h1 className="text-6xl font-bold mb-12 text-white leading-tight drop-shadow-md">
            Create Your Dream Wedding!
          </h1>

          {/* CTA Button */}
          <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-wedding-coral via-wedding-rose to-wedding-salmon text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-12 py-4 h-auto">
            <Link to="/chat">Start Planning</Link>
          </Button>

          {/* Chat Demo and Image Upload Side by Side */}
          <div className="mt-16 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px] w-full">
            {/* Animated chat demo */}
            <div className="h-[600px]">
              <ChatDemo />
            </div>

            {/* Features and Testimonials Section */}
            <div className="min-h-[600px]">
              <FeaturesTestimonials />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-sm bg-white/70 border-t border-wedding-blush/50 py-8 text-center">
        <div className="text-gray-600 mb-2">&copy; 2024 Wedding Planner</div>
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-wedding-coral transition-colors">Privacy</a>
          <a href="#" className="hover:text-wedding-salmon transition-colors">Terms</a>
          <a href="#" className="hover:text-wedding-rose transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
