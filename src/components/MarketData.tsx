import React from 'react';
import { TrendingUp, Users, IndianRupee, Smartphone, MapPin, Clock } from 'lucide-react';

const MarketData: React.FC = () => {
  const marketStats = [
    {
      icon: <IndianRupee className="w-8 h-8 text-green-500" />,
      value: "₹110 Trillion",
      label: "Healthcare Market Size",
      description: "India's healthcare market by 2027",
      growth: "+22% CAGR"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      value: "1.42B",
      label: "Total Addressable Market",
      description: "Indians with Aadhaar identity (99%+ coverage)",
      growth: "Universal Coverage"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      value: "806M+",
      label: "Digital Users",
      description: "Internet users; 659M smartphone users",
      growth: "+7-8% Annually"
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-500" />,
      value: "65-67%",
      label: "Rural Population",
      description: "Growing access through Ayushman Arogya Mandirs",
      growth: "Rapidly Expanding"
    }
  ];

  const opportunityAreas = [
    {
      title: "Digital Health Adoption (Professionals)",
      current: "76%",
      currentWidth: "76%",
      potential: "95%",
      potentialWidth: "95%",
      description: "Healthcare professionals using Digital Health Records",
      source: "Invest India Digital Health Report 2023"
    },
    {
      title: "Telemedicine Expansion",
      current: "340M+",
      currentWidth: "68%", // 340M out of ~500M potential
      potential: "500M+",
      potentialWidth: "100%",
      description: "Consultations via eSanjeevani; rapidly expanding rural reach",
      source: "Ministry of Health & Family Welfare"
    },
    {
      title: "Electronic Health Records",
      current: "35%",
      currentWidth: "35%",
      potential: "90%",
      potentialWidth: "90%",
      description: "Large hospitals with EMR systems; 25% urban facilities",
      source: "LogicLoom EMR India Report 2024"
    },
    {
      title: "Preventive Healthcare Programs",
      current: "2L+",
      currentWidth: "33%", // 2L out of 6L target
      potential: "6L+",
      potentialWidth: "100%",
      description: "Ayushman Arogya Mandirs providing preventive care",
      source: "PIB Press Release 2024"
    }
  ];

  const keyTrends = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: "Growing Healthcare Spending",
      description: "Healthcare sector CAGR of 17.5% over the past decade"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      title: "Mobile-First Adoption",
      description: "83% of all users mobile; >85% of new internet users are mobile-first"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: "Post-COVID Health Awareness",
      description: "Major surge in digital health tools and preventive healthcare adoption"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Market Opportunity & Data
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            The{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ₹110 Trillion
            </span>{' '}
            Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            India's healthcare transformation represents one of the world's largest market opportunities.
            We're positioned to capture this massive growth with our India-first approach.
          </p>
        </div>

        {/* Market Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {marketStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gray-50 rounded-xl">
                  {stat.icon}
                </div>
                <div className="text-right">
                  <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded">
                    {stat.growth}
                  </span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-900 font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* References for Market Statistics */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm italic">
            Sources: Medical Buyer 2025 (₹110T market), DataReportal India 2025 (digital users), UIDAI 2025 (Aadhaar data)
          </p>
        </div>

        {/* Opportunity Analysis */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 text-center mb-12">
            Current Progress & Future Targets in Digital Health
          </h3>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Based on latest government data and industry reports, India's digital health transformation
            is accelerating rapidly across multiple dimensions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunityAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">{area.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{area.description}</p>

                {/* Progress Bar */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Current</span>
                    <span className="font-semibold text-blue-600">{area.current}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: (area as any).currentWidth }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Target</span>
                    <span className="font-semibold text-green-600">{area.potential}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: (area as any).potentialWidth }}
                    ></div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 italic">
                      Source: {(area as any).source}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Trends */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-6">
              Key Market Trends Driving Growth
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Rural healthcare access is rapidly expanding through government initiatives like Ayushman Arogya Mandirs and eSanjeevani,
              with over 178,000 operational centers and 131,000+ telemedicine-enabled facilities nationwide.
            </p>

            <div className="space-y-6">
              {keyTrends.map((trend, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-xl">
                    {trend.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      {trend.title}
                    </h4>
                    <p className="text-gray-600">
                      {trend.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-lg">
              <h4 className="font-bold text-xl text-gray-900 mb-6 text-center">
                Healthcare Market & Investment Flow
              </h4>
              <p className="text-gray-600 text-sm text-center mb-4">
                India's healthcare market projected at $638B (~₹53T) by 2025
              </p>

              {/* Investment Visualization */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                  <span className="font-semibold text-gray-700">Total Market Size (2025)</span>
                  <span className="text-blue-600 font-bold">₹53T</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                  <span className="font-semibold text-gray-700">Government Investment</span>
                  <span className="text-green-600 font-bold">₹2.2T+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                  <span className="font-semibold text-gray-700">Private Investment</span>
                  <span className="text-purple-600 font-bold">₹4.1T+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                  <span className="font-semibold text-gray-700">Digital Health Segment</span>
                  <span className="text-orange-600 font-bold">₹890B+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Advantage */}
        <div className="bg-[#1269CC] rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-6">
              Our Competitive Advantage
            </h3>
            <p className="text-primary-100 text-lg mb-8 max-w-3xl mx-auto">
              While others focus on urban markets, we're building for all of India -
              creating the infrastructure for universal healthcare access.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">First Mover</div>
                <div className="text-primary-100">Aadhaar-integrated healthcare platform</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">Scale Ready</div>
                <div className="text-primary-100">Built for 1.4 billion users from day one</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">India-First</div>
                <div className="text-primary-100">Designed for Indian healthcare ecosystem</div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sources & References */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="font-heading font-bold text-2xl text-gray-900 text-center mb-8">
            Data Sources & References
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Digital Health Adoption</h4>
                <p className="text-gray-600">Invest India Digital Health Report 2023 - 76% of healthcare professionals use Digital Health Records</p>
                <a href="https://www.indembassyisrael.gov.in/pdf/Invest_India_Digital_Health_2_V4.pdf" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">View Source →</a>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Healthcare Market Growth</h4>
                <p className="text-gray-600">₹110 trillion market size by 2027; 22% CAGR with strong digital health expansion</p>
                <a href="https://medicalbuyer.co.in/indian-healthcare-industry-poised-to-hit-rs-110-trillion-by-2027/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">View Source →</a>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Telemedicine Growth</h4>
                <p className="text-gray-600">eSanjeevani platform data - 340+ million consultations conducted nationwide</p>
                <a href="https://www.investindia.gov.in/team-india-blogs/how-remote-healthcare-has-transformed-industry" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">View Source →</a>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Electronic Health Records</h4>
                <p className="text-gray-600">LogicLoom EMR India Report 2024 - 35% of large hospitals, 25% urban facilities have EMR systems</p>
                <a href="https://logicloom.in/electronic-medical-records-in-india-current-state-challenges-and-future-prospects/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">View Source →</a>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Aadhaar & Digital Penetration</h4>
                <p className="text-gray-600">1.42B Aadhaar holders (99%+ coverage); 806M internet users, 659M smartphone users</p>
                <a href="https://datareportal.com/reports/digital-2025-india" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">View Source →</a>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Rural Healthcare Infrastructure</h4>
                <p className="text-gray-600">178,000+ Ayushman Arogya Mandirs operational; 131,000+ telemedicine-enabled (July 2025)</p>
                <a href="https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2094604" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">View Source →</a>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-xs">
              All statistics reflect the latest available data as of 2024-2025. Market projections are based on government targets and industry analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketData;
