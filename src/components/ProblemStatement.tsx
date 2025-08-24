import React from 'react';
import { AlertTriangle, Clock, MapPin, Users, TrendingDown, IndianRupee } from 'lucide-react';

const ProblemStatement: React.FC = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Long Wait Times",
      description: "Patients wait hours for basic consultations, with average wait times of 3-4 hours in government hospitals.",
      stat: "4+ hours average wait"
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-500" />,
      title: "Limited Access",
      description: "Rural India lacks adequate healthcare infrastructure, with only 1 doctor per 1,400 people.",
      stat: "1:1,400 doctor ratio"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Fragmented Systems",
      description: "Hospitals, clinics, and labs operate in silos, making it difficult to track patient history and treatment.",
      stat: "90% systems disconnected"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-purple-500" />,
      title: "Poor Health Outcomes",
      description: "Preventable diseases go undiagnosed due to lack of regular health monitoring and predictive care.",
      stat: "60% preventable diseases"
    },
    {
      icon: <IndianRupee className="w-8 h-8 text-green-500" />,
      title: "High Out-of-Pocket Costs",
      description: "Indians spend 70% of healthcare costs from personal savings, leading to financial distress.",
      stat: "70% out-of-pocket spending"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      title: "Data Inefficiency",
      description: "Medical records are paper-based or locked in incompatible systems, hindering quality care.",
      stat: "85% paper-based records"
    }
  ];

  return (
    <section id="problem" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Critical Healthcare Challenges in India
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            The Healthcare Crisis We're{' '}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Solving
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            India's healthcare system faces unprecedented challenges. With 1.4 billion people and limited infrastructure,
            we need revolutionary solutions that work at scale.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-gray-50 rounded-xl">
                  {problem.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{problem.stat}</div>
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Statistics */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              The Scale of the Challenge
            </h3>
            <p className="text-primary-100 text-lg">
              These numbers represent millions of lives that could be improved with better healthcare technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">1.4B+</div>
              <div className="text-primary-100 text-sm">Population to Serve</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">65-67%</div>
              <div className="text-primary-100 text-sm">Lives in Rural Areas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">₹110T</div>
              <div className="text-primary-100 text-sm">Healthcare Market by 2027</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">25%</div>
              <div className="text-primary-100 text-sm">Digitally Connected</div>
            </div>
          </div>
        </div>

        {/* Solution Teaser */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-lg font-semibold mb-6">
            <span>But there's hope...</span>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What if we could connect every Indian to quality healthcare through their Aadhaar ID?
            What if healthcare became as accessible as using a smartphone?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
