import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Code, 
  ShieldAlert, 
  LayoutGrid, 
  LineChart, 
  ClipboardCheck 
} from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const servicesData = [
  {
    id: 'web-pentesting',
    title: 'Web Application Penetration Testing',
    description: 'Comprehensive assessment of your web applications for security vulnerabilities using a combination of automated tools and manual testing techniques.',
    icon: Globe,
    highlights: [
      'OWASP Top 10 vulnerability testing',
      'Authentication and session management',
      'Business logic flaws identification',
      'Detailed remediation guidance'
    ]
  },
  {
    id: 'mobile-testing',
    title: 'Mobile Application Testing',
    description: 'In-depth security analysis of iOS and Android applications to identify vulnerabilities in the app, its communications, and server-side components.',
    icon: Smartphone,
    highlights: [
      'Static and dynamic code analysis',
      'API security assessment',
      'Secure storage evaluation',
      'Runtime manipulation defense testing'
    ]
  },
  {
    id: 'code-review',
    title: 'Source Code Review',
    description: 'Systematic examination of source code to identify security vulnerabilities, coding errors, and deviations from best practices before deployment.',
    icon: Code,
    highlights: [
      'Manual and tool-assisted code review',
      'Secure coding standards compliance',
      'Security control validation',
      'Developer workshops and training'
    ]
  },
  {
    id: 'red-teaming',
    title: 'Red Teaming',
    description: 'Simulated, targeted attacks that test your organization\'s detection and response capabilities across multiple attack vectors.',
    icon: ShieldAlert,
    highlights: [
      'Social engineering campaigns',
      'Physical security assessment',
      'Advanced persistent threat simulation',
      'Security control bypass methods'
    ]
  },
  {
    id: 'architecture-reviews',
    title: 'Architecture and Configuration Reviews',
    description: 'Evaluation of system architecture designs and configurations to identify security weaknesses before implementation.',
    icon: LayoutGrid,
    highlights: [
      'Security architecture assessment',
      'Cloud security configuration review',
      'Network segmentation analysis',
      'Infrastructure hardening recommendations'
    ]
  },
  {
    id: 'soc-assessment',
    title: 'SOC Assessment & Development',
    description: 'Comprehensive evaluation and enhancement of your Security Operations Center capabilities, processes, and technologies.',
    icon: LineChart,
    highlights: [
      'Security monitoring capability assessment',
      'Incident response process evaluation',
      'SIEM optimization and tuning',
      'SOC maturity roadmap development'
    ]
  },
  {
    id: 'compliance',
    title: 'Compliance Risk Assessment',
    description: 'Evaluation of security controls against regulatory requirements and industry standards to ensure compliance and reduce risk.',
    icon: ClipboardCheck,
    highlights: [
      'Gap analysis against standards (ISO, NIST, etc.)',
      'Regulatory compliance assessment',
      'Control effectiveness evaluation',
      'Remediation planning and prioritization'
    ]
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Security Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide high-assurance, manual security testing to help businesses identify and fix vulnerabilities before attackers can exploit them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              Icon={service.icon}
              highlights={service.highlights}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;