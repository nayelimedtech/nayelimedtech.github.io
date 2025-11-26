import React from 'react';
import { ArrowRight, Heart, Users, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-primary-300 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Secure • Aadhaar Integrated • India-First
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
              Modern Medical Technology for{' '}
              <span className="text-primary-600">
                Everyone
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Integrating healthcare experiences seamlessly – patients, hospitals, clinics, and labs in one unified platform.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center space-x-2 text-gray-700">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="font-medium">1.4B+ Indians</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Universal Access</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="font-medium">Aadhaar Secure</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary group"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('vision')}
                className="btn-secondary"
              >
                Learn More
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Designed for India's healthcare ecosystem</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">100%</div>
                  <div className="text-xs text-gray-600">Population Reach</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-600">24/7</div>
                  <div className="text-xs text-gray-600">Healthcare Access</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">AI</div>
                  <div className="text-xs text-gray-600">Powered Insights</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl">
              {/* Healthcare Illustration */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Patients</h3>
                  <p className="text-sm text-gray-600">Easy health tracking & consultations</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hospitals</h3>
                  <p className="text-sm text-gray-600">Integrated workflows & data</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Clinics</h3>
                  <p className="text-sm text-gray-600">Seamless patient management</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Labs</h3>
                  <p className="text-sm text-gray-600">Connected diagnostics</p>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100,75 Q200,150 300,75 M100,225 Q200,150 300,225"
                    stroke="url(#connectionGradient)"
                    strokeWidth="3"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
