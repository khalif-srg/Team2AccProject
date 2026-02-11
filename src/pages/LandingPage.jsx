import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-blue-50 to-cyan-50">
      {/* Header with Logo and Navigation */}
      <header className="backdrop-blur-sm bg-white/70 border-b border-pink-100/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            LOGO
          </div>
          <nav className="flex gap-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              How it works
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-cyan-500 transition-colors font-medium">
              Testimonials
            </a>
            <Link to="/chat" className="text-gray-700 hover:text-purple-500 transition-colors font-medium">
              Start Planning
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="text-center max-w-5xl w-full">
          {/* Slogan with gradient */}
          <h1 className="text-6xl font-bold mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            "Plan Your Perfect Day"
          </h1>
          
          {/* CTA Button with gradient */}
          <Link 
            to="/chat"
            className="inline-block px-10 py-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            Start Planning
          </Link>

          {/* Image placeholder with gradient */}
          <div className="mt-16 mb-20 bg-gradient-to-br from-pink-200 via-purple-200 to-cyan-200 rounded-3xl p-16 shadow-xl">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-12 text-gray-400 text-lg">
              Hero Image
            </div>
          </div>

          {/* Features Section with gradient cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-12 min-h-[250px] flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl mb-6"></div>
              <span className="text-gray-800 text-xl font-semibold">Feature 1</span>
              <p className="text-gray-600 mt-3 text-sm">Discover amazing planning tools</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl p-12 min-h-[250px] flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl mb-6"></div>
              <span className="text-gray-800 text-xl font-semibold">Feature 2</span>
              <p className="text-gray-600 mt-3 text-sm">Seamless wedding coordination</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with gradient accent */}
      <footer className="backdrop-blur-sm bg-white/70 border-t border-pink-100/50 py-8 text-center">
        <div className="text-gray-600 mb-2">© 2024 Wedding Planner</div>
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-pink-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-cyan-500 transition-colors">Terms</a>
          <a href="#" className="hover:text-purple-500 transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
