import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-wedding-gradient font-geist">
      {/* Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white leading-tight drop-shadow-md">
              About Us
            </h1>
            <p className="text-lg sm:text-xl text-white/90 drop-shadow px-4">
              Making wedding planning effortless with AI-powered assistance
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 sm:space-y-8">
            {/* Our Mission */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-wedding-blush/50 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                We believe every couple deserves a stress-free wedding planning experience. Our AI-powered platform combines cutting-edge technology with personalized service to help you create the wedding of your dreams without the overwhelm.
              </p>
            </div>

            {/* What We Do */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-wedding-blush/50 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">What We Do</h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                Our intelligent wedding planner acts as your personal assistant, available 24/7 to help with every aspect of your wedding planning journey:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-wedding-coral shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg">Personalized recommendations based on your style and budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-wedding-coral shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg">Smart budget tracking and expense management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-wedding-coral shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg">Curated vendor connections and verified reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-wedding-coral shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg">Timeline management with automated reminders</span>
                </li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-wedding-blush/50 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Why Choose Us</h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                Planning a wedding shouldn't feel like a full-time job. We've helped thousands of couples turn their vision into reality while staying organized, on budget, and stress-free. Our AI learns your preferences and adapts to your needs, making the entire process feel natural and enjoyable.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Whether you're just starting to plan or need help with the final details, we're here to support you every step of the way.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 text-center px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 drop-shadow-md">
              Ready to Start Planning?
            </h2>
            <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-wedding-coral via-wedding-rose to-wedding-salmon text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 h-auto">
              <Link to="/chat">Get Started Now</Link>
            </Button>
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

export default AboutPage;
