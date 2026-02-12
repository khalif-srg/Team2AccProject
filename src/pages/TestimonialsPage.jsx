import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

function TestimonialsPage() {
  const testimonials = [
    {
      quote: "This app made planning our wedding so much easier! The AI suggestions were spot-on and saved us countless hours of research.",
      author: "Sarah & Michael",
      location: "San Francisco, CA",
      details: "We were overwhelmed with all the decisions we had to make, but the AI planner helped us narrow down our options based on our style and budget. The timeline feature kept us on track throughout the entire process."
    },
    {
      quote: "We stayed under budget thanks to the expense tracking feature. Highly recommend to any couple planning their big day!",
      author: "Jessica & David",
      location: "Austin, TX",
      details: "The budget tracker was a game-changer. We could see exactly where our money was going and got alerts when we were approaching our limits. It took so much stress out of the planning process."
    },
    {
      quote: "The vendor recommendations were incredible. We found our dream photographer and venue through this platform.",
      author: "Emily & James",
      location: "New York, NY",
      details: "We were struggling to find vendors that matched our vision and budget. The curated vendor network connected us with amazing professionals who understood exactly what we wanted."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-wedding-gradient font-geist">
      {/* Header */}
      <header className="backdrop-blur-sm bg-white/70 border-b border-wedding-blush/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Logo />
          <nav className="flex gap-3">
            <Button variant="outline" asChild className="rounded-full border-wedding-blush text-gray-700 font-medium hover:bg-wedding-blush/40 hover:text-wedding-coral">
              <Link to="/">Home</Link>
            </Button>
            <Button asChild className="rounded-full bg-gradient-to-r from-wedding-coral to-wedding-salmon text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
              <Link to="/chat">Start Planning</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-white leading-tight drop-shadow-md">
              What Couples Are Saying
            </h1>
            <p className="text-xl text-white/90 drop-shadow">
              Real stories from couples who planned their dream weddings with us
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-wedding-blush/50 p-8 hover:shadow-xl transition-all duration-200"
              >
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-wedding-coral/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-2xl text-gray-800 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {testimonial.details}
                  </p>
                </div>
                <div className="border-t border-wedding-blush/30 pt-4">
                  <p className="font-bold text-lg text-wedding-coral">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-md">
              Ready to Plan Your Dream Wedding?
            </h2>
            <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-wedding-coral via-wedding-rose to-wedding-salmon text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-12 py-4 h-auto">
              <Link to="/chat">Get Started Now</Link>
            </Button>
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

export default TestimonialsPage;
