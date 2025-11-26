import React from 'react';
import { Heart, Building2, Stethoscope, Microscope, ArrowRight, CheckCircle } from 'lucide-react';

const Platform: React.FC = () => {
  const platformUsers = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Patients",
      subtitle: "Individual Healthcare Management",
      description: "Track health, get reminders, prepare for doctor consultations with AI-powered insights.",
      features: [
        "Personal health timeline",
        "Medication reminders",
        "Appointment scheduling",
        "Health goal tracking",
        "Emergency medical ID"
      ],
      gradient: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-500" />,
      title: "Hospitals",
      subtitle: "Enterprise Healthcare Solutions",
      description: "Digitized workflows, integrated patient data, and streamlined operations at scale.",
      features: [
        "Patient management system",
        "Electronic health records",
        "Resource optimization",
        "Revenue cycle management",
        "Quality analytics"
      ],
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-green-500" />,
      title: "Clinics",
      subtitle: "Streamlined Practice Management",
      description: "Seamless outpatient management with automated workflows and patient engagement tools.",
      features: [
        "Digital patient records",
        "Appointment automation",
        "Prescription management",
        "Billing integration",
        "Telemedicine support"
      ],
      gradient: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: <Microscope className="w-8 h-8 text-purple-500" />,
      title: "Labs",
      subtitle: "Connected Diagnostic Network",
      description: "Connected diagnostics and reports with real-time result sharing and quality assurance.",
      features: [
        "Digital report generation",
        "Real-time result sharing",
        "Quality control systems",
        "Inventory management",
        "Accreditation tracking"
      ],
      gradient: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50"
    }
  ];

  return (
    <section id="platform" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            Unified Healthcare Ecosystem
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            One Platform for{' '}
            <span className="text-[#1269CC]">
              Everyone
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A single, integrated platform designed for everyone in the healthcare ecosystem.
            From individual patients to large hospital networks, we connect them all.
          </p>
        </div>

        {/* Platform Users Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {platformUsers.map((user, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${user.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 bg-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {user.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900">
                    {user.title}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {user.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {user.description}
              </p>

              <div className="space-y-3 mb-6">
                {user.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${user.gradient} text-white rounded-lg font-semibold group-hover:scale-105 transition-transform duration-300`}>
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>

        {/* Integration Showcase */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-4">
              Seamless Integration Across All Touchpoints
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform ensures that data flows seamlessly between all healthcare stakeholders,
              creating a unified experience for better health outcomes.
            </p>
          </div>

          {/* Integration Diagram */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {platformUsers.map((user, index) => (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${user.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {user.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900">{user.title}</h4>
                </div>
              ))}
            </div>

            {/* Connection Lines */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 800 200">
                <defs>
                  <linearGradient id="integrationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#22c55e" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <path
                  d="M100,100 L300,100 M300,100 L500,100 M500,100 L700,100"
                  stroke="url(#integrationGradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="10,5"
                  className="animate-pulse"
                />
                <path
                  d="M100,100 Q400,50 700,100"
                  stroke="url(#integrationGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse delay-1000"
                />
              </svg>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-primary-50 rounded-2xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-700 font-semibold">Data Synchronization</div>
            </div>
            <div className="text-center p-6 bg-secondary-50 rounded-2xl">
              <div className="text-3xl font-bold text-secondary-600 mb-2">Real-time</div>
              <div className="text-gray-700 font-semibold">Information Sharing</div>
            </div>
            <div className="text-center p-6 bg-accent-50 rounded-2xl">
              <div className="text-3xl font-bold text-accent-600 mb-2">Secure</div>
              <div className="text-gray-700 font-semibold">Aadhaar Integration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
