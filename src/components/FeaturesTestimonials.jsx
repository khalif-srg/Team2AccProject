import { useState, useEffect } from 'react';

function FeaturesTestimonials() {
  const [activeTab, setActiveTab] = useState('features');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 7000; // 7 seconds
    let startTime = Date.now();
    let animationFrame;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    const tabInterval = setInterval(() => {
      setActiveTab(prev => prev === 'features' ? 'testimonials' : 'features');
      startTime = Date.now();
      setProgress(0);
    }, duration);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearInterval(tabInterval);
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setProgress(0);
  };

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI-Powered Planning',
      description: 'Get personalized recommendations and smart suggestions tailored to your style and budget'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Budget Tracking',
      description: 'Stay on top of expenses with real-time budget tracking and cost breakdowns'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Vendor Network',
      description: 'Access our curated network of trusted vendors and read verified reviews'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Vendor Outreach',
      description: 'We email and contact vendors for you - venues, catering, and more'
    }
  ];

  const testimonials = [
    {
      quote: "This app made planning our wedding so much easier! The AI suggestions were spot-on and saved us countless hours of research.",
      author: "Sarah & Michael",
      location: "San Francisco, CA"
    },
    {
      quote: "We stayed under budget thanks to the expense tracking feature. Highly recommend to any couple planning their big day!",
      author: "Jessica & David",
      location: "Austin, TX"
    },
    {
      quote: "The vendor recommendations were incredible. We found our dream photographer and venue through this platform.",
      author: "Emily & James",
      location: "New York, NY"
    }
  ];

  return (
    <div className="w-full h-[550px] sm:h-[650px] flex items-stretch">
      <div className="w-full glass-strong rounded-3xl shadow-premium-lg border border-rose/20 flex flex-col overflow-hidden hover:shadow-premium-lg transition-all duration-500">
        {/* Premium Progress Bar */}
        <div className="h-1.5 bg-rose/10 shrink-0 relative overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-rose via-purple to-amber relative"
            style={{ 
              width: `${progress}%`,
              transition: 'none'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Tab Headers */}
        <div className="flex border-b border-rose/10 shrink-0">
          <button
            onClick={() => handleTabClick('features')}
            className={`flex-1 py-4 sm:py-5 px-4 sm:px-6 font-bold text-base sm:text-lg transition-all duration-300 ${
              activeTab === 'features'
                ? 'bg-gradient-to-r from-rose via-purple to-amber text-white shadow-premium'
                : 'text-gray hover:bg-rose/5 hover:text-foreground'
            }`}
          >
            Features
          </button>
          <button
            onClick={() => handleTabClick('testimonials')}
            className={`flex-1 py-4 sm:py-5 px-4 sm:px-6 font-bold text-base sm:text-lg transition-all duration-300 ${
              activeTab === 'testimonials'
                ? 'bg-gradient-to-r from-rose via-purple to-amber text-white shadow-premium'
                : 'text-gray hover:bg-rose/5 hover:text-foreground'
            }`}
          >
            <span className="hidden sm:inline">Love Stories</span>
            <span className="sm:hidden">Stories</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8">
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 rounded-2xl glass border border-rose/10 hover:border-rose/30 hover:shadow-premium hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-rose mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2.5">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-5 sm:space-y-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 rounded-2xl glass border border-rose/10 hover:border-rose/30 hover:shadow-premium transition-all duration-300"
                >
                  <p className="text-foreground italic mb-4 text-base sm:text-lg leading-relaxed font-medium">"{testimonial.quote}"</p>
                  <div className="text-sm border-t border-rose/10 pt-4">
                    <p className="font-bold bg-gradient-to-r from-rose via-purple to-amber bg-clip-text text-transparent">{testimonial.author}</p>
                    <p className="text-gray-light">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturesTestimonials;
