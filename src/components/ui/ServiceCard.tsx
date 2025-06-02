import React from 'react';
import { DivideIcon as LucideIcon, ArrowRight, Check } from 'lucide-react';
import { Link } from './Link';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  highlights: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  Icon,
  highlights
}) => {
  return (
    <div id={id} className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      <div className="p-6">
        <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-sm text-slate-700">{highlight}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          href="#contact" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;