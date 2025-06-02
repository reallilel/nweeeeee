import React, { useState } from 'react';
import { 
  Shield, 
  Users, 
  Smartphone, 
  Globe, 
  LayoutGrid,
  LineChart,
  ClipboardList,
  ArrowRight,
  Bot,
  Workflow,
  Brain,
  Target,
  Zap
} from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import { Link } from '../ui/Link';

const solutionsData = [
  {
    id: 'data-security',
    title: 'Data Security',
    description: 'Comprehensive data protection solutions including encryption, access control, and data loss prevention.',
    icon: Shield,
    highlights: [
      'Hardware Security Modules (HSMs)',
      'File Integrity Monitoring',
      'Data Loss Prevention (DLP)',
      'Advanced Email Security'
    ],
    details: [
      'End-to-end encryption for sensitive data',
      'Real-time file monitoring and alerting',
      'Data classification and tagging',
      'Email threat protection and filtering'
    ]
  },
  {
    id: 'identity-security',
    title: 'People and Identity Security',
    description: "Protect your organization's identities and enhance security awareness through comprehensive training.",
    icon: Users,
    highlights: [
      'Security Awareness Training',
      'Phishing Simulation',
      'Internal Threat Intelligence',
      'Cyber Skills Development'
    ],
    details: [
      'Interactive security training modules',
      'Customized phishing campaigns',
      'Behavioral analytics and monitoring',
      'Gamified learning experiences'
    ]
  },
  {
    id: 'device-security',
    title: 'Device Security',
    description: 'Secure all endpoints and devices with advanced threat protection and management solutions.',
    icon: Smartphone,
    highlights: [
      'Mobile Threat Defense',
      'Mobile App Security',
      'EDR & EPP Solutions',
      'IoT Security'
    ],
    details: [
      'Real-time threat detection and response',
      'Application containerization',
      'Device health monitoring',
      'Zero-trust device access'
    ]
  },
  {
    id: 'network-security',
    title: 'Network Security',
    description: 'Protect your network infrastructure with advanced security solutions and monitoring.',
    icon: Globe,
    highlights: [
      'Secure DNS & DHCP',
      'Network Detection and Response',
      'Zero Trust Remote Access',
      'IP Address Management'
    ],
    details: [
      'DNS security and filtering',
      'Network traffic analysis',
      'VPN and remote access security',
      'Network segmentation'
    ]
  },
  {
    id: 'application-security',
    title: 'Application Security',
    description: 'Secure your applications from development through deployment with comprehensive security measures.',
    icon: LayoutGrid,
    highlights: [
      'Zero Trust Microsegmentation',
      'SAST & DAST Testing',
      'DevSecOps Integration',
      'API Security'
    ],
    details: [
      'Continuous security testing',
      'Secure code analysis',
      'Container security',
      'API authentication and authorization'
    ]
  },
  {
    id: 'analytics-security',
    title: 'Security Analytics',
    description: 'Gain deep insights into your security posture with advanced analytics and monitoring.',
    icon: LineChart,
    highlights: [
      'Security Information Management',
      'Threat Intelligence Platform',
      'Security Orchestration',
      'Incident Response'
    ],
    details: [
      'Real-time security monitoring',
      'Threat hunting capabilities',
      'Automated incident triage',
      'Security metrics and reporting'
    ]
  },
  {
    id: 'governance-risk',
    title: 'Governance and Risk',
    description: 'Manage security compliance and risk with comprehensive assessment and monitoring tools.',
    icon: ClipboardList,
    highlights: [
      'Risk Assessment',
      'Compliance Monitoring',
      'Third-party Risk Management',
      'Security Policy Management'
    ],
    details: [
      'Automated compliance reporting',
      'Risk scoring and prioritization',
      'Vendor security assessment',
      'Policy enforcement automation'
    ]
  },
  {
    id: 'security-automation',
    title: 'Security Automation and Orchestration',
    description: 'Streamline and automate security operations with advanced SOAR capabilities and AI-driven analysis.',
    icon: Bot,
    highlights: [
      'SOAR Platform Integration',
      'AI-Powered Security Analytics',
      'Automated Incident Response',
      'Threat Intelligence Automation'
    ],
    details: [
      {
        title: 'SOAR + TIP Integration',
        icon: Workflow,
        description: 'Seamlessly integrate security orchestration with threat intelligence platforms for automated response workflows.',
        features: [
          'Automated playbook execution',
          'Cross-platform integration',
          'Custom workflow builder',
          'Real-time threat feed integration'
        ]
      },
      {
        title: 'AI-Driven Security Analysis',
        icon: Brain,
        description: 'Leverage artificial intelligence for advanced threat detection and automated security analysis.',
        features: [
          'Machine learning-based detection',
          'Behavioral analytics',
          'Anomaly detection',
          'Predictive threat analysis'
        ]
      },
      {
        title: 'Attack Simulation Platform',
        icon: Target,
        description: 'Test and validate security controls through automated attack simulations and red team exercises.',
        features: [
          'Automated penetration testing',
          'Breach and attack simulation',
          'Security control validation',
          'Continuous security assessment'
        ]
      },
      {
        title: 'Predictive Security Intelligence',
        icon: Zap,
        description: 'Anticipate and prevent threats using advanced predictive analytics and threat intelligence.',
        features: [
          'Threat prediction modeling',
          'Risk-based alerting',
          'Automated threat hunting',
          'Intelligence-driven response'
        ]
      }
    ]
  }
];

const SolutionsSection: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setSelectedSolution(selectedSolution === id ? null : id);
  };

  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Security Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive security solutions designed to protect your organization across all dimensions of the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((solution) => (
            <div key={solution.id} className="relative">
              <div
                className={`cursor-pointer transition-all duration-300 ${
                  selectedSolution === solution.id ? 'scale-105 shadow-lg' : ''
                }`}
                onClick={() => handleCardClick(solution.id)}
              >
                <ServiceCard
                  id={solution.id}
                  title={solution.title}
                  description={solution.description}
                  Icon={solution.icon}
                  highlights={solution.highlights}
                />
              </div>
              
              {selectedSolution === solution.id && 'details' in solution && Array.isArray(solution.details) && (
                <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-lg shadow-xl z-10 p-6 border border-slate-200">
                  <h4 className="font-semibold text-lg mb-4">Additional Features:</h4>
                  <ul className="space-y-2">
                    {solution.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-slate-700">
                        <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedSolution === solution.id && 'details' in solution && !Array.isArray(solution.details) && (
                <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-lg shadow-xl z-10 border border-slate-200">
                  <div className="max-h-96 overflow-y-auto p-6">
                    {solution.details.map((detail, index) => (
                      <div key={index} className="mb-8 last:mb-0">
                        <div className="flex items-center mb-3">
                          <detail.icon className="h-6 w-6 text-blue-600 mr-3" />
                          <h4 className="font-semibold text-lg">{detail.title}</h4>
                        </div>
                        <p className="text-slate-600 mb-4">{detail.description}</p>
                        <ul className="space-y-2">
                          {detail.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center text-slate-700">
                              <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="#contact" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Explore Our Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;