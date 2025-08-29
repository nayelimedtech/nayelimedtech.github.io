import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Building2, User, FileText } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  organization: string;
  userType: string;
  primaryChallenge: string;
  message: string;
  newsletter: boolean;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    userType: '',
    primaryChallenge: '',
    message: '',
    newsletter: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const userTypes = [
    { value: 'hospital', label: 'Hospital Administrator' },
    { value: 'clinic', label: 'Clinic Owner/Manager' },
    { value: 'lab', label: 'Laboratory Administrator' },
    { value: 'doctor', label: 'Healthcare Professional' },
    { value: 'patient', label: 'Patient/Individual' },
    { value: 'investor', label: 'Investor/Partner' },
    { value: 'government', label: 'Government/Policy Maker' },
    { value: 'other', label: 'Other' }
  ];

  const challenges = [
    { value: 'patient-management', label: 'Patient Management & Records' },
    { value: 'appointment-scheduling', label: 'Appointment Scheduling' },
    { value: 'billing-payments', label: 'Billing & Payments' },
    { value: 'rural-access', label: 'Rural Healthcare Access' },
    { value: 'data-integration', label: 'System Integration & Data Sharing' },
    { value: 'cost-reduction', label: 'Cost Reduction' },
    { value: 'quality-improvement', label: 'Quality of Care Improvement' },
    { value: 'preventive-care', label: 'Preventive Healthcare' },
    { value: 'other', label: 'Other Challenge' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Contact Form Submission:', {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'Nayeli Medtech Website'
      });

      // Track with Google Analytics (when implemented)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          form_name: 'contact_form',
          user_type: formData.userType,
          primary_challenge: formData.primaryChallenge
        });
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const openWhatsApp = () => {
    const message = `Hi Nayeli Medtech team! I'm interested in learning more about your healthcare platform. I represent: ${formData.userType || 'healthcare organization'}`;
    const whatsappUrl = `https://wa.me/919611373526?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">
                Thank You for Your Interest!
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We've received your message and will get back to you within 24 hours.
                Your input is valuable in shaping India's healthcare future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openWhatsApp}
                  className="btn-primary"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Connect on WhatsApp
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      organization: '',
                      userType: '',
                      primaryChallenge: '',
                      message: '',
                      newsletter: true
                    });
                  }}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Let's Transform Healthcare Together
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            Get in{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from hospitals, clinics, labs, healthcare professionals,
            and early adopters who want to shape the future of healthcare in India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">
                Reach Out to Us
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+91-9611373526</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">amarnath@greyquill.io</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600">Bengaluru, Karnataka, India</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <button
                      onClick={openWhatsApp}
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      Start Chat →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-4">Prefer Instant Communication?</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={openWhatsApp}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </button>
                <a
                  href="mailto:contact@nayelimedtech.com?subject=Healthcare Platform Inquiry&body=Hi Nayeli Medtech team, I'm interested in learning more about your platform."
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Quick Email
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="your.email@domain.com"
                  />
                </div>
              </div>

              {/* Organization */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Building2 className="w-4 h-4 inline mr-1" />
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Hospital, Clinic, Lab, Company name"
                />
              </div>

              {/* User Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  I represent *
                </label>
                <select
                  name="userType"
                  required
                  value={formData.userType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select your role</option>
                  {userTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              {/* Primary Challenge */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What's your biggest healthcare challenge? *
                </label>
                <select
                  name="primaryChallenge"
                  required
                  value={formData.primaryChallenge}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select primary challenge</option>
                  {challenges.map(challenge => (
                    <option key={challenge.value} value={challenge.value}>{challenge.label}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-1" />
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us more about your healthcare needs or how you'd like to get involved..."
                />
              </div>

              {/* Newsletter Signup */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="newsletter"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-600">
                  Yes, I'd like to receive updates about Nayeli Medtech's progress and healthcare insights.
                  You can unsubscribe at any time.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
