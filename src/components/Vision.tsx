import React from 'react';
import { Target, Globe, Shield, Zap } from 'lucide-react';

const Vision: React.FC = () => {
  const visionPoints = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "100% Population Reach",
      description: "Every Aadhaar holder in India will have access to our healthcare platform"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Essential as Toothpaste",
      description: "Healthcare becomes a daily necessity, not a luxury or emergency response"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Instant Connectivity",
      description: "Seamless integration between patients, doctors, hospitals, clinics, and labs"
    }
  ];

  return (
    <section id="vision" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Our Vision for India's Healthcare
            </div>

            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
              Transforming{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                1.4 Billion Lives
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We envision a future where every Indian, from bustling metros to remote villages,
              has instant access to quality healthcare through their Aadhaar identity.
              Healthcare will become as essential and accessible as daily necessities.
            </p>

            <div className="space-y-6 mb-8">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-xl">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Aadhaar Integration Highlight */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-gray-900">
                    Aadhaar-Powered Healthcare
                  </h3>
                  <p className="text-orange-700 text-sm">
                    Unique to India's Digital Infrastructure
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Leveraging India's robust Aadhaar ecosystem, we'll create the world's largest
                integrated healthcare network. One identity, complete health history,
                accessible anywhere in the country.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* India Map Illustration */}
            <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 shadow-2xl">
              {/* Simulated India Map */}
              <div className="relative w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl overflow-hidden">
                {/* Map Shape (simplified India outline) */}
                <div className="absolute inset-4 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl">
                  {/* Healthcare Access Points */}
                  <div className="absolute top-8 left-12 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-16 right-16 w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-20 left-20 w-4 h-4 bg-red-500 rounded-full animate-pulse delay-600"></div>
                  <div className="absolute bottom-12 right-12 w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-900"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-500 rounded-full animate-pulse delay-1200"></div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
                    <defs>
                      <radialGradient id="connectionGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="150" cy="150" r="100" fill="url(#connectionGlow)" className="animate-pulse" />
                    <path
                      d="M50,80 Q150,150 250,120 M80,240 Q150,150 220,220 M80,120 Q150,150 220,80"
                      stroke="#22c55e"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-pulse opacity-60"
                    />
                  </svg>

                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">N</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">1.4B+</div>
                  <div className="text-xs text-gray-600">Connected Users</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-600">24/7</div>
                  <div className="text-xs text-gray-600">Healthcare Access</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-gradient-to-br from-accent-400 to-orange-400 rounded-full animate-bounce delay-1000 opacity-80"></div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-6">
              Our Mission
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-primary-100">
              "To create a healthcare ecosystem where technology serves humanity,
              where distance doesn't determine health outcomes, and where every Indian
              has the power to live their healthiest life."
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <span className="text-lg font-semibold">Healthcare as a Basic Right</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
