import React from 'react';
import { Shield, Check, Award, Users, Clock, Zap } from 'lucide-react';
import { Link } from '../ui/Link';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              <Shield className="h-4 w-4 mr-2" />
              <span>About LowRisk Security</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Building Secure, Resilient Applications
            </h2>
            
            <p className="text-lg text-slate-700 mb-6">
              At LowRisk Security, we specialize in offensive security services that help businesses identify and remediate vulnerabilities before attackers can exploit them.
            </p>
            
            <p className="text-lg text-slate-700 mb-8">
              Our team of expert security professionals combines deep technical knowledge with practical experience to deliver high-quality, actionable security insights that make a real difference to your organization's security posture.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Certified Experts</h3>
                  <p className="text-slate-600 text-sm">Our team holds advanced industry certifications and has years of hands-on experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Client-Focused</h3>
                  <p className="text-slate-600 text-sm">We work closely with your team to understand your specific security needs and business context.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Timely Delivery</h3>
                  <p className="text-slate-600 text-sm">We understand that security is time-sensitive and deliver our findings promptly.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Actionable Results</h3>
                  <p className="text-slate-600 text-sm">Our reports include clear, specific remediation steps prioritized by risk.</p>
                </div>
              </div>
            </div>
            
            <Link 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg inline-flex items-center transition-colors"
            >
              Work With Us
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-20"></div>
            <div className="relative bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                  <p className="text-slate-700">Client satisfaction rate based on post-project surveys</p>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-slate-700">Security assessments completed across industries</p>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <p className="text-slate-700">Years of combined security experience on our team</p>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                  <p className="text-slate-700">Of clients become long-term security partners</p>
                </div>
              </div>
              
              <div className="bg-blue-600 py-4 px-6">
                <div className="flex items-center justify-between text-white">
                  <p className="font-medium">Our security approach works</p>
                  <span className="text-sm">Verified results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;