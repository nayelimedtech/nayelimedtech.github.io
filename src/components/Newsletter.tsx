import React, { useState } from 'react';
import { Mail, Bell, CheckCircle, ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter Subscription:', {
        email,
        timestamp: new Date().toISOString(),
        source: 'Nayeli Medtech Website',
        type: 'newsletter_signup'
      });

      // Track with Google Analytics (when implemented)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'newsletter_signup', {
          email: email,
          source: 'website_footer'
        });
      }

      setIsSubmitting(false);
      setIsSubscribed(true);
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <section className="section-padding bg-[#1269CC]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-heading font-bold text-3xl mb-4">
              Welcome to Our Healthcare Revolution!
            </h2>
            <p className="text-primary-100 text-lg mb-6">
              Thank you for joining our mission to transform healthcare in India.
              You'll receive exclusive updates on our progress and insights into the future of healthcare technology.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block">
              <span className="text-sm">📧 Confirmation sent to: {email}</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-[#1269CC]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              <Bell className="w-4 h-4 mr-2" />
              Stay Updated on Our Progress
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Join the Healthcare{' '}
              <span className="text-yellow-300">
                Revolution
              </span>
            </h2>
            <p className="text-xl text-primary-100 leading-relaxed">
              Be the first to know about our platform launch, get exclusive healthcare insights,
              and join a community of innovators transforming India's healthcare future.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Early Access</h3>
              <p className="text-primary-100 text-sm">
                Get priority access to our platform before public launch
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Exclusive Insights</h3>
              <p className="text-primary-100 text-sm">
                Healthcare trends, market data, and technology insights
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Shape the Future</h3>
              <p className="text-primary-100 text-sm">
                Influence platform features through surveys and feedback
              </p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400 transition-all placeholder-gray-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-primary-100 text-sm mt-4">
                Join 10,000+ healthcare professionals already on our waitlist.
                No spam, unsubscribe anytime.
              </p>
            </form>
          </div>

          {/* Social Proof */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-80">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">10K+</div>
              <div className="text-primary-200 text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-primary-200 text-sm">Healthcare Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-primary-200 text-sm">Cities Interested</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-primary-200 text-sm">Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
