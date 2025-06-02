import React from 'react';
import { Shield, ChevronRight, Check } from 'lucide-react';
import { Link } from '../ui/Link';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm font-medium">
              <Shield className="h-4 w-4 mr-2" />
              <span>Top-rated security services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Secure Your Business Before Attackers Strike
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              LowRisk Security provides high-assurance, manual security testing to help businesses identify and fix vulnerabilities before attackers can exploit them.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Link 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-colors"
              >
                Get a Security Assessment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#services" 
                className="border border-gray-600 hover:border-gray-500 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-colors"
              >
                Explore Services
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
              <div className="flex items-center">
                <Check className="text-green-500 h-5 w-5 mr-2" />
                <span className="text-gray-300">Expert security team</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 h-5 w-5 mr-2" />
                <span className="text-gray-300">Manual testing</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 h-5 w-5 mr-2" />
                <span className="text-gray-300">Detailed reporting</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-slate-800 rounded-lg border border-slate-700 shadow-xl overflow-hidden">
                <div className="p-6">
                  <div className="p-4 bg-slate-700 rounded-md mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="ml-2 text-xs text-gray-400">Terminal</div>
                    </div>
                    <div className="font-mono text-sm text-green-400">
                      <div className="mb-1 flex">
                        <span className="text-gray-500 mr-2">$</span>
                        <span className="typing-animation">LowRisk scan --target=example.com</span>
                      </div>
                      <div className="mb-1">Initializing security scan...</div>
                      <div className="mb-1">Scanning web endpoints...</div>
                      <div className="mb-1">Checking authentication mechanisms...</div>
                      <div className="mb-1">Analyzing response headers...</div>
                      <div className="mb-1">Testing for common vulnerabilities...</div>
                      <div className="mb-1 text-red-400">Alert: XSS vulnerability detected!</div>
                      <div className="mb-1 text-red-400">Alert: Insecure cookie settings!</div>
                      <div className="mb-1">Generating detailed report...</div>
                      <div className="text-white">Scan completed. 2 critical vulnerabilities found.</div>
                    </div>
                  </div>

                  <div className="text-white text-center font-medium">
                    Proactive security testing prevents breaches
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;