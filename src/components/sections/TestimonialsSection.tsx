import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CTO',
    company: 'TechFront Solutions',
    content: 'LowRisk Security\'s penetration testing identified critical vulnerabilities our previous scans had missed. Their detailed reports and remediation advice were invaluable in improving our security posture.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Head of Engineering',
    company: 'DataStream Inc.',
    content: 'The source code review conducted by LowRisk Security was thorough and insightful. They not only found security issues but also provided guidance that helped our development team improve their secure coding practices.',
    rating: 5
  },
  {
    id: 3,
    name: 'Jennifer Williams',
    position: 'CISO',
    company: 'Fintech Innovations',
    content: 'As a financial services company, security is paramount. LowRisk Security\'s red team assessment challenged our assumptions and helped us strengthen our detection and response capabilities.',
    rating: 5
  },
  {
    id: 4,
    name: 'David Rodriguez',
    position: 'VP of Product',
    company: 'HealthConnect',
    content: 'Working with LowRisk Security gave us confidence in our product\'s security. Their mobile application testing was comprehensive and their team was responsive and professional throughout the process.',
    rating: 4
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our clients have to say about our security services and the impact we've made on their businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-slate-700 opacity-50" />
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} 
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-300 mb-6 relative z-10">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;