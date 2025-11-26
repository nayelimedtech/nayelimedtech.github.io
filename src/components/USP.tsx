import React from 'react';
import { Sparkles, Zap, Brain, Shield, Users, Globe } from 'lucide-react';

const USP: React.FC = () => {
  const usps = [
    {
      icon: <Sparkles className="w-8 h-8 text-blue-500" />,
      title: "Best-in-class User Experience",
      description: "Intuitive design that works for everyone - from tech-savvy millennials to first-time smartphone users.",
      features: ["Multi-language support", "Voice interactions", "Simple navigation", "Offline capabilities"],
      color: "blue"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: "Seamless Health Tracking",
      description: "Effortless health monitoring with automated data collection and intelligent insights for better outcomes.",
      features: ["Automatic sync", "Wearable integration", "Family health tracking", "Progress analytics"],
      color: "green"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "Predictive Consultations",
      description: "AI-powered health predictions that help prevent diseases before they become critical conditions.",
      features: ["Early warning system", "Personalized recommendations", "Risk assessment", "Smart scheduling"],
      color: "purple"
    }
  ];

  const additionalUSPs = [
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Aadhaar-Secure Infrastructure",
      description: "Built on India's trusted digital identity system"
    },
    {
      icon: <Users className="w-6 h-6 text-pink-500" />,
      title: "Community Health Networks",
      description: "Connect with local healthcare providers and peers"
    },
    {
      icon: <Globe className="w-6 h-6 text-teal-500" />,
      title: "Rural-Urban Bridge",
      description: "Equal healthcare access regardless of location"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'from-blue-50 to-indigo-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        accent: 'bg-blue-100'
      },
      green: {
        bg: 'from-green-50 to-emerald-50',
        border: 'border-green-200',
        text: 'text-green-600',
        accent: 'bg-green-100'
      },
      purple: {
        bg: 'from-purple-50 to-violet-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        accent: 'bg-purple-100'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="usp" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            What Makes Us Different
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            Why Choose{' '}
            <span className="text-[#3b82f6]">
              Nayeli Medtech?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another healthcare app. We're building the future of healthcare
            technology with India's unique needs and infrastructure at the core.
          </p>
        </div>

        {/* Main USPs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {usps.map((usp, index) => {
            const colors = getColorClasses(usp.color);
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                <div className={`inline-flex p-4 ${colors.accent} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {usp.icon}
                </div>

                <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">
                  {usp.title}
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {usp.description}
                </p>

                <div className="space-y-2">
                  {usp.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 ${colors.text.replace('text-', 'bg-')} rounded-full`}></div>
                      <span className="text-gray-600 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional USPs */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="font-heading font-bold text-2xl text-gray-900 text-center mb-8">
            Built for India's Digital Healthcare Future
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalUSPs.map((usp, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {usp.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900">{usp.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-[#3b82f680] rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Traditional Healthcare vs. Nayeli Medtech
            </h3>
            <p className="text-primary-100 text-lg">
              See how we're revolutionizing healthcare delivery in India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-4 text-red-200">Traditional Healthcare</h4>
              <ul className="space-y-3 text-primary-100">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Fragmented systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Paper-based records</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Uneven rural-urban access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Reactive treatment only</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>High out-of-pocket costs</span>
                </li>
              </ul>
            </div>

            {/* Nayeli Medtech */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-4 text-green-200">Nayeli Medtech</h4>
              <ul className="space-y-3 text-primary-100">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Unified ecosystem</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Digital-first approach</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Universal Aadhaar access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Predictive & preventive care</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Affordable, transparent pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="font-heading font-bold text-2xl text-gray-900 mb-4">
            Ready to Transform Healthcare?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join us in creating a healthcare system that truly serves every Indian,
            from bustling cities to remote villages.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Get Involved Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default USP;
