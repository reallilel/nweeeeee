import React from 'react';
import { Book, FileText, Calendar, ArrowRight } from 'lucide-react';
import { Link } from '../ui/Link';

interface ResourceItem {
  id: number;
  type: 'blog' | 'whitepaper' | 'webinar';
  title: string;
  description: string;
  date: string;
  link: string;
}

const resources: ResourceItem[] = [
  {
    id: 1,
    type: 'blog',
    title: 'Top 10 API Security Vulnerabilities and How to Prevent Them',
    description: 'APIs are becoming critical components of modern applications. Learn how to secure them against common threats.',
    date: 'May 15, 2025',
    link: '#'
  },
  {
    id: 2,
    type: 'whitepaper',
    title: 'Building Secure Mobile Applications: A Comprehensive Guide',
    description: 'This whitepaper covers essential mobile security considerations for iOS and Android applications.',
    date: 'April 22, 2025',
    link: '#'
  },
  {
    id: 3,
    type: 'webinar',
    title: 'Effective Security Testing in a DevOps Environment',
    description: 'Join our experts as they discuss strategies for integrating security testing into fast-paced development cycles.',
    date: 'June 10, 2025',
    link: '#'
  },
  {
    id: 4,
    type: 'blog',
    title: 'Understanding and Mitigating Supply Chain Attacks',
    description: 'Supply chain attacks are on the rise. Learn how to protect your organization from this growing threat.',
    date: 'May 5, 2025',
    link: '#'
  }
];

const typeIcons = {
  blog: <Book className="h-5 w-5" />,
  whitepaper: <FileText className="h-5 w-5" />,
  webinar: <Calendar className="h-5 w-5" />
};

const ResourcesSection: React.FC = () => {
  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Security Resources
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay informed with our latest insights, whitepapers, and webinars on security best practices and emerging threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {resources.map((resource) => (
            <div 
              key={resource.id} 
              className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                  {typeIcons[resource.type]}
                  <span className="ml-2 capitalize">{resource.type}</span>
                </span>
                <span className="ml-auto text-sm text-slate-500">{resource.date}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{resource.title}</h3>
              <p className="text-slate-600 mb-4">{resource.description}</p>
              
              <Link 
                href={resource.link} 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Read more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="#" 
            className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-lg inline-flex items-center transition-colors"
          >
            View All Resources
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;