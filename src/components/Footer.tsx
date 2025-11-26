import React from 'react';
import { Heart, Linkedin, Twitter, Youtube, Mail, MapPin, Phone, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: 'For Patients', href: '#platform' },
      { label: 'For Hospitals', href: '#platform' },
      { label: 'For Clinics', href: '#platform' },
      { label: 'For Labs', href: '#platform' }
    ],
    company: [
      { label: 'Our Vision', onClick: () => scrollToSection('vision') },
      { label: 'Market Opportunity', onClick: () => scrollToSection('market-data') },
      { label: 'Why Choose Us', onClick: () => scrollToSection('usp') },
      { label: 'Contact Us', onClick: () => scrollToSection('contact') }
    ],
    resources: [
      { label: 'Healthcare Insights', href: '#' },
      { label: 'Aadhaar Integration', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#1269CC] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-lg leading-tight">
                  Nayeli
                </span>
                <span className="font-heading font-semibold text-primary-400 text-sm leading-tight">
                  Medtech
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming healthcare for 1.4 billion Indians through innovative technology
              and Aadhaar-integrated solutions.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open('https://linkedin.com/company/nayelimedtech', '_blank')}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open('https://twitter.com/nayelimedtech', '_blank')}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open('https://youtube.com/@nayelimedtech', '_blank')}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('platform')}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.onClick}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">amarnath@greyquill.io</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">+91-9611373526</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">Bengaluru, Karnataka, India</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Aadhaar Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Heart className="w-4 h-4" />
                <span>Made in India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Nayeli Medtech. All rights reserved.
            </div>

            {/* Quick Links */}
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => alert('Privacy Policy - Coming Soon')}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => alert('Terms of Service - Coming Soon')}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => alert('Security Information - Coming Soon')}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Security
              </button>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 italic">
              "Building the future of healthcare technology for every Indian, everywhere."
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-2 md:space-y-0">
            <div>
              Healthcare as essential as toothpaste for 1.4B+ Indians
            </div>
            <div className="flex items-center space-x-4">
              <span>🇮🇳 Proudly Indian</span>
              <span>•</span>
              <span>Digital India Initiative</span>
              <span>•</span>
              <span>Healthcare for All</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
