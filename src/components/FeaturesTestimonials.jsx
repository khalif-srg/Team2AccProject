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
      title: 'Timeline Management',
      description: 'Never miss a deadline with automated reminders and milestone tracking'
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
    <div className="w-full h-[600px] flex items-stretch">
      <div className="w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-wedding-blush/50 flex flex-col overflow-hidden">
        {/* Progress Bar */}
        <div className="h-1 bg-gray-200 shrink-0">
          <div 
            className="h-full bg-gradient-to-r from-wedding-coral to-wedding-salmon"
            style={{ 
              width: `${progress}%`,
              transition: 'none'
            }}
          />
        </div>

        {/* Tab Headers */}
        <div className="flex border-b border-wedding-blush/50 shrink-0">
          <button
            onClick={() => handleTabClick('features')}
            className={`flex-1 py-4 px-6 font-semibold text-lg transition-all duration-200 ${
              activeTab === 'features'
                ? 'bg-gradient-to-r from-wedding-coral to-wedding-salmon text-white'
                : 'text-gray-600 hover:bg-wedding-blush/20'
            }`}
          >
            Features
          </button>
          <button
            onClick={() => handleTabClick('testimonials')}
            className={`flex-1 py-4 px-6 font-semibold text-lg transition-all duration-200 ${
              activeTab === 'testimonials'
                ? 'bg-gradient-to-r from-wedding-coral to-wedding-salmon text-white'
                : 'text-gray-600 hover:bg-wedding-blush/20'
            }`}
          >
            What Couples Say
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/50 border border-wedding-blush/30 hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  <div className="text-wedding-coral mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/50 border border-wedding-blush/30 hover:shadow-lg transition-all duration-200"
                >
                  <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.quote}"</p>
                  <div className="text-sm">
                    <p className="font-semibold text-wedding-coral">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.location}</p>
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
