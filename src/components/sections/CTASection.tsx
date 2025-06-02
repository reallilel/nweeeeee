import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from '../ui/Link';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Abstract Security Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <g fill="white">
            <circle cx="15%" cy="25%" r="50" />
            <circle cx="75%" cy="80%" r="70" />
            <circle cx="45%" cy="15%" r="30" />
            <circle cx="85%" cy="35%" r="20" />
            <circle cx="25%" cy="65%" r="40" />
          </g>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Shield className="h-5 w-5 mr-2" />
            <span className="font-medium">Proactive Security Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Don't Wait for a Breach to Think About Security
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Our expert team is ready to help you identify vulnerabilities and strengthen your security posture before attackers can exploit them.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="#contact" 
              className="bg-white text-blue-700 hover:bg-blue-50 font-medium px-8 py-3 rounded-lg inline-flex items-center transition-colors"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="#services" 
              className="border border-white/30 hover:bg-white/10 text-white font-medium px-8 py-3 rounded-lg inline-flex items-center transition-colors backdrop-blur-sm"
            >
              Learn About Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;