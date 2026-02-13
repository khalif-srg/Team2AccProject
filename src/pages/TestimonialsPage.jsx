import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

function TestimonialsPage() {
  const testimonials = [
    {
      quote: "This app made planning our wedding so much easier! The AI suggestions were spot-on and saved us countless hours of research.",
      author: "Sarah & Michael",
      location: "Melbourne, VIC",
      details: "We were overwhelmed with all the decisions we had to make, but the AI planner helped us narrow down our options based on our style and budget. The timeline feature kept us on track throughout the entire process.",
      rating: 5,
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    },
    {
      quote: "We stayed under budget thanks to the expense tracking feature. Highly recommend to any couple planning their big day!",
      author: "Jessica & David",
      location: "Melbourne, VIC",
      details: "The budget tracker was a game-changer. We could see exactly where our money was going and got alerts when we were approaching our limits. It took so much stress out of the planning process.",
      rating: 5,
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    },
    {
      quote: "The vendor recommendations were incredible. We found our dream photographer and venue through this platform.",
      author: "Emily & James",
      location: "Melbourne, VIC",
      details: "We were struggling to find vendors that matched our vision and budget. The curated vendor network connected us with amazing professionals who understood exactly what we wanted.",
      rating: 5,
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-premium-gradient font-geist">
      {/* Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-rose/20 mb-6 shadow-premium">
              <svg className="w-5 h-5 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm font-semibold text-gray">Testimonials</span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-rose via-purple to-amber bg-clip-text text-transparent">
                Love Stories
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray max-w-3xl mx-auto leading-relaxed">
              Real couples, real weddings, real happiness
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="space-y-8 sm:space-y-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-strong rounded-3xl shadow-premium-lg border border-rose/20 p-8 sm:p-12 hover:shadow-premium-lg hover:scale-[1.01] transition-all duration-500"
              >
                {/* Rating Stars */}
                <div className="flex gap-1.5 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-amber drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <div className="flex items-start gap-6 mb-8">
                  {/* Avatar */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-rose via-purple to-amber flex items-center justify-center shadow-premium shrink-0">
                    <div className="text-white">
                      {testimonial.icon}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="flex-1">
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 text-rose/20 mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-2xl sm:text-3xl text-foreground font-medium italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-gray text-lg leading-relaxed">
                      {testimonial.details}
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="border-t border-rose/10 pt-6 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-lg bg-gradient-to-r from-rose via-purple to-amber bg-clip-text text-transparent">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-light flex items-center gap-2 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <svg className="w-10 h-10 text-rose/20" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 sm:mt-20 glass-strong rounded-3xl p-10 sm:p-12 border border-rose/20 shadow-premium-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 bg-gradient-to-r from-rose via-purple to-amber bg-clip-text text-transparent">
              Join Our Happy Couples
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { number: '15K+', label: 'Happy Couples', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
                { number: '99%', label: 'Would Recommend', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg> },
                { number: '4.9/5', label: 'Average Rating', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg> },
                { number: '50+', label: 'Countries', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-rose mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rose via-purple to-amber bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 text-center glass-strong rounded-3xl p-10 sm:p-14 border border-rose/20 shadow-premium-lg">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose via-purple to-amber bg-clip-text text-transparent">
                Start Your Love Story
              </span>
            </h2>
            <p className="text-gray text-lg mb-8 max-w-2xl mx-auto">
              Let Amore AI help you plan the wedding of your dreams
            </p>
            <Button 
              size="lg" 
              asChild 
              className="rounded-3xl bg-gradient-to-r from-rose via-purple to-amber text-white font-semibold shadow-premium-lg hover:shadow-premium-lg hover:scale-105 transition-all duration-500 text-lg px-12 py-7 h-auto"
            >
              <Link to="/chat">
                <span className="flex items-center gap-3">
                  Plan and Book Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 glass-strong border-t border-rose/10 py-10 text-center mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-gray mb-3 font-medium">&copy; 2026 Amore AI Wedding Planner</div>
          <div className="flex justify-center gap-8 text-sm text-gray-light mb-6">
            <a href="#" className="hover:text-rose transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-purple transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-amber transition-colors duration-300">Contact</a>
          </div>
          <p className="text-xs text-gray-lighter">
            Made with ❤️ for couples planning their special day
          </p>
        </div>
      </footer>
    </div>
  );
}

export default TestimonialsPage;
