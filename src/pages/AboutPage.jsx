import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-premium-gradient font-geist">
      {/* Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-rose/20 mb-6 shadow-premium">
              <svg className="w-5 h-5 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-gray">About Us</span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-rose via-purple to-amber bg-clip-text text-transparent">
                Meet Amore
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray max-w-3xl mx-auto leading-relaxed">
              Your intelligent companion for planning the perfect wedding
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 sm:space-y-10">
            {/* Our Mission */}
            <div className="glass-strong rounded-3xl shadow-premium-lg border border-rose/20 p-8 sm:p-12 hover:shadow-premium-lg hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-rose to-purple flex items-center justify-center shadow-premium">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Our Mission</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-rose to-purple rounded-full"></div>
                </div>
              </div>
              <p className="text-gray text-lg sm:text-xl leading-relaxed">
                We believe every couple deserves a stress-free wedding planning experience. Our AI-powered platform combines cutting-edge technology with personalised service to help you create the wedding of your dreams without the overwhelm. We're here to transform wedding planning from overwhelming to extraordinary.
              </p>
            </div>

            {/* What We Do */}
            <div className="glass-strong rounded-3xl shadow-premium-lg border border-rose/20 p-8 sm:p-12 hover:shadow-premium-lg hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple to-amber flex items-center justify-center shadow-premium">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">What We Do</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-purple to-amber rounded-full"></div>
                </div>
              </div>
              <p className="text-gray text-lg sm:text-xl leading-relaxed mb-8">
                Our intelligent wedding planner acts as your personal assistant, available 24/7 to help with every aspect of your wedding planning journey:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: 'Smart Recommendations', desc: 'Personalised suggestions based on your style and budget' },
                  { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Budget Tracking', desc: 'Real-time expense management and cost breakdowns' },
                  { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, title: 'Vendor Network', desc: 'Curated connections with trusted professionals' },
                  { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, title: 'Timeline Management', desc: 'Automated reminders and milestone tracking' }
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl glass border border-rose/10 hover:border-rose/30 transition-all duration-300 group">
                    <div className="text-rose group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="glass-strong rounded-3xl shadow-premium-lg border border-rose/20 p-8 sm:p-12 hover:shadow-premium-lg hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-amber to-rose flex items-center justify-center shadow-premium">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Why Choose Us</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-amber to-rose rounded-full"></div>
                </div>
              </div>
              <p className="text-gray text-lg sm:text-xl leading-relaxed mb-6">
                Planning a wedding shouldn't feel like a full-time job. We've helped thousands of couples turn their vision into reality while staying organised, on budget, and stress-free.
              </p>
              <p className="text-gray text-lg sm:text-xl leading-relaxed">
                Our AI learns your preferences and adapts to your needs, making the entire process feel natural and enjoyable. Whether you're just starting to plan or need help with the final details, we're here to support you every step of the way.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 text-center glass-strong rounded-3xl p-10 sm:p-14 border border-rose/20 shadow-premium-lg">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose via-purple to-amber bg-clip-text text-transparent">
                Ready to Plan and Book?
              </span>
            </h2>
            <p className="text-gray text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of couples who've planned their perfect wedding with Amore AI
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

export default AboutPage;
