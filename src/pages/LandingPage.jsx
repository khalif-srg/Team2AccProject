import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import ChatDemo from '@/components/ChatDemo';
import FeaturesTestimonials from '@/components/FeaturesTestimonials';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-wedding-gradient font-geist">
      {/* Header with Logo and Navigation */}
      <Navigation />

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-start px-4 sm:px-6 py-8 sm:py-16 pb-16 sm:pb-32">
        <div className="text-center w-full max-w-7xl">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-white leading-tight drop-shadow-md px-4">
            Create Your Dream Wedding!
          </h1>

          {/* CTA Button */}
          <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-wedding-coral via-wedding-rose to-wedding-salmon text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 h-auto">
            <Link to="/chat">Start Planning</Link>
          </Button>

          {/* Chat Demo and Features Side by Side */}
          <div className="mt-12 sm:mt-16 mb-12 sm:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 min-h-[500px] sm:min-h-[600px] w-full">
            {/* Animated chat demo */}
            <div className="h-[500px] sm:h-[600px]">
              <ChatDemo />
            </div>

            {/* Features and Testimonials Section */}
            <div className="min-h-[500px] sm:min-h-[600px]">
              <FeaturesTestimonials />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-sm bg-white/70 border-t border-wedding-blush/50 py-8 text-center">
        <div className="text-gray-600 mb-2">&copy; 2026 Wedding Planner</div>
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
