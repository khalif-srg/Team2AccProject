import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import ChatDemo from '@/components/ChatDemo';
import { useEffect, useState } from 'react';

function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-premium-gradient font-geist">
      {/* Sticky Navigation */}
      <Navigation />

      {/* Hero Section - Above the fold */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Value Proposition */}
            <div className="text-center lg:text-left space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border border-rose/20 shadow-premium animate-float">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-rose to-purple"></span>
                </span>
                <span className="text-sm font-semibold bg-gradient-to-r from-rose via-purple to-amber bg-clip-text text-transparent">
                  Join 15,000+ Happy Couples
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1]">
                <span className="block bg-gradient-to-r from-rose via-purple to-amber bg-clip-text text-transparent mb-2">
                  Plan Your Dream
                </span>
                <span className="block text-foreground">
                  Wedding in Minutes
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-gray leading-relaxed max-w-xl mx-auto lg:mx-0">
                AI-powered planning that understands your vision, fits your budget, and saves you 100+ hours
              </p>

              {/* Social Proof */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-rose to-purple flex items-center justify-center text-lg border-2 border-white shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray font-medium">4.9/5 from 2,847 reviews</p>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  asChild 
                  className="group w-full sm:w-auto rounded-3xl bg-gradient-to-r from-rose via-purple to-amber text-white font-bold shadow-premium-lg hover:shadow-premium-lg hover:scale-105 transition-all duration-500 text-xl px-12 py-8 h-auto relative overflow-hidden"
                >
                  <Link to="/chat">
                    <span className="relative z-10 flex items-center gap-3">
                      Plan and Book Now
                      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple via-amber to-rose opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Link>
                </Button>
                <p className="text-sm text-gray-light">✓ Completely free  ✓ No signup required  ✓ Start instantly</p>
              </div>
            </div>

            {/* Right: Interactive Demo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose/20 via-purple/20 to-amber/20 blur-3xl rounded-full animate-pulse-glow"></div>
              <div className="relative h-[600px]">
                <ChatDemo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Streamlined 3 Steps */}
      <section id="how-it-works" data-animate className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose via-purple to-amber bg-clip-text text-transparent">
                Your Wedding, Simplified
              </span>
            </h2>
            <p className="text-xl text-gray">Three simple steps to your perfect day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
                title: 'Chat with AI',
                desc: 'Tell us your vision, budget, and preferences in a natural conversation or just provide an image!',
                time: '2 min'
              },
              {
                step: '2',
                icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: 'Get Your Plan',
                desc: 'Receive a personalised wedding plan with vendors, catering and budget',
                time: '5 min'
              },
              {
                step: '3',
                icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>,
                title: 'Book & Relax',
                desc: 'Let us connect with vendors for you and enjoy stress-free planning',
                time: 'Ongoing'
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                {/* Connector Line */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-rose/30 to-purple/30"></div>
                )}
                
                <div className="glass-strong rounded-3xl p-8 border border-rose/20 hover:border-rose/40 hover:shadow-premium-lg transition-all duration-500 group text-center relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-rose via-purple to-amber flex items-center justify-center text-white font-bold text-xl shadow-premium">
                    {step.step}
                  </div>
                  
                  <div className="flex justify-center text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 mt-4">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-gray mb-4">{step.desc}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose/10 text-rose text-sm font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {step.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              asChild 
              className="rounded-3xl bg-gradient-to-r from-rose via-purple to-amber text-white font-bold shadow-premium-lg hover:scale-105 transition-all duration-500 text-lg px-10 py-6 h-auto"
            >
              <Link to="/chat">Plan and Book Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof - Results */}
      <section data-animate className="py-20 px-4 sm:px-6 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose via-purple to-amber bg-clip-text text-transparent">
                Real Results, Real Weddings
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '15K+', label: 'Weddings Planned', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
              { number: '99%', label: 'Satisfaction Rate', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg> },
              { number: '$8.5K', label: 'Avg. Saved', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
              { number: '120hrs', label: 'Time Saved', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
            ].map((stat, i) => (
              <div key={i} className="glass-strong rounded-3xl p-6 border border-rose/10 hover:border-rose/30 hover:shadow-premium transition-all duration-500 text-center group">
                <div className="text-rose mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-rose via-purple to-amber bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Quick Wins */}
      <section data-animate className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Found our dream venue in 10 minutes!", author: "Sarah & Mike", rating: 5 },
              { quote: "Saved $12,000 on our budget!", author: "Jessica & David", rating: 5 },
              { quote: "Planning was actually fun!", author: "Emily & James", rating: 5 }
            ].map((testimonial, i) => (
              <div key={i} className="glass-strong rounded-3xl p-6 border border-rose/10 hover:shadow-premium transition-all duration-300">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg font-medium text-foreground mb-3">"{testimonial.quote}"</p>
                <p className="text-sm text-gray font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-strong border-t border-rose/10 py-8 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-gray mb-3 font-medium">&copy; 2026 Amore AI Wedding Planner</div>
          <div className="flex justify-center gap-8 text-sm text-gray-light">
            <a href="#" className="hover:text-rose transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-purple transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-amber transition-colors duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
