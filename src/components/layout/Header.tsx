import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Shield, Users, Smartphone, Globe, LayoutGrid, Boxes, Workflow, ClipboardList } from 'lucide-react';
import { Link } from '../ui/Link';
import AccordionDropdown from '../ui/AccordionDropdown';
import LowRiskLogo from './______-removebg-preview.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutionsCategories = [
    {
      category: 'Data Security',
      icon: <Shield className="h-4 w-4" />,
      items: [
        { name: 'Hardware Security Modules (HSMs)', href: '#hsm' },
        { name: 'File Integrity Monitoring', href: '#fim' },
        { name: 'AD Security and Just-in-Time PAM', href: '#pam' },
        { name: 'Key Management', href: '#key-management' },
        { name: 'Data Loss Prevention (DLP)', href: '#dlp' },
        { name: 'Data Access Governance', href: '#dag' },
        { name: 'Data Classification and Secure Messaging', href: '#dcsm' },
        { name: 'Advanced Email Security', href: '#email-security' },
        { name: 'SEG, SWG and ICAP Gateways', href: '#gateways' },
        { name: 'Data Classification / Discovery', href: '#data-classification' },
        { name: 'Secure Automated Managed File Transfer', href: '#file-transfer' },
        { name: 'Automated Penetration Testing', href: '#auto-pentest' },
        { name: 'Digital Rights Management', href: '#drm' }
      ]
    },
    {
      category: 'People and Identity Security',
      icon: <Users className="h-4 w-4" />,
      items: [
        { name: 'Cyber Skills Development', href: '#cyber-skills' },
        { name: 'Security Awareness', href: '#security-awareness' },
        { name: 'Training Platform', href: '#training' },
        { name: 'Phishing Simulation', href: '#phishing-sim' },
        { name: 'Deception and Internal Threat Intelligence', href: '#deception' }
      ]
    },
    {
      category: 'Device Security',
      icon: <Smartphone className="h-4 w-4" />,
      items: [
        { name: 'Mobile Threat Defense', href: '#mtd' },
        { name: 'Mobile App Security', href: '#mobile-security' },
        { name: 'CASB, SASE, and ZTNA', href: '#casb' },
        { name: 'EDR, EPP, Threat Intelligence', href: '#edr' },
        { name: 'Agentless IoT', href: '#iot' },
        { name: 'OT Device Security', href: '#ot-security' }
      ]
    },
    {
      category: 'Network Security',
      icon: <Globe className="h-4 w-4" />,
      items: [
        { name: 'Secure DNS & DHCP', href: '#dns-dhcp' },
        { name: 'Network Detection and Response', href: '#ndr' },
        { name: 'Zero Trust Remote Access', href: '#ztra' },
        { name: 'IP Address Management', href: '#ipam' }
      ]
    },
    {
      category: 'Workloads and Application Security',
      icon: <LayoutGrid className="h-4 w-4" />,
      items: [
        { name: 'Zero Trust Microsegmentation', href: '#microsegmentation' },
        { name: 'Unified Application Security', href: '#app-security' },
        { name: 'SAST', href: '#sast' },
        { name: 'SCA', href: '#sca' },
        { name: 'IAST', href: '#iast' },
        { name: 'DevSecOps', href: '#devsecops' }
      ]
    },
    {
      category: 'Visibility and Analytics',
      icon: <Shield className="h-4 w-4" />,
      items: [
        { name: 'Secure Segmentation & Connectivity', href: '#segmentation' },
        { name: 'Network Packet Brokers', href: '#packet-brokers' },
        { name: 'Fraud and Threat Hunting', href: '#threat-hunting' },
        { name: 'IT Management', href: '#it-management' },
        { name: 'Remote Monitoring', href: '#monitoring' },
        { name: 'Cyber Risk Modeling', href: '#risk-modeling' }
      ]
    },
    {
      category: 'Security Automation and Orchestration',
      icon: <Workflow className="h-4 w-4" />,
      items: [
        { name: 'SOAR + TIP', href: '#soar' },
        { name: 'aiSIEM / aiXDR', href: '#ai-siem' },
        { name: 'AI-Driven Virtual Analyst', href: '#virtual-analyst' },
        { name: 'Attack Simulation Platform', href: '#attack-sim' },
        { name: 'Predictive Intel + XDR = pXDR', href: '#pxdr' }
      ]
    },
    {
      category: 'Governance and Risk',
      icon: <ClipboardList className="h-4 w-4" />,
      items: [
        { name: 'Risk Assessment', href: '#risk-assessment' },
        { name: 'Compliance Monitoring', href: '#compliance-monitoring' },
        { name: 'Configuration Compliance', href: '#config-compliance' },
        { name: 'Auditing and Monitoring', href: '#auditing' },
        { name: 'Third-party Risk Management', href: '#third-party-risk' },
        { name: 'Continuous Control Monitoring', href: '#control-monitoring' },
        { name: 'Cyber Risk Quantification', href: '#risk-quantification' }
      ]
    }
  ];

  const navItems = [
    { name: 'Home', href: '#home' },
    {
      name: 'Services',
      href: '#services',
      dropdown: [
        { name: 'Web Application Pentesting', href: '#web-pentesting' },
        { name: 'Mobile Application Testing', href: '#mobile-testing' },
        { name: 'Source Code Review', href: '#code-review' },
        { name: 'Red Teaming', href: '#red-teaming' },
        { name: 'Architecture Reviews', href: '#architecture-reviews' },
        { name: 'SOC Assessment', href: '#soc-assessment' },
        { name: 'Compliance Risk Assessment', href: '#compliance' },
      ]
    },
    {
      name: 'Solutions',
      href: '#solutions',
      icon: <Boxes className="h-4 w-4" />,
      dropdown: solutionsCategories
    },
    { name: 'About', href: '#about' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' }
  ];

  const isCategorizedDropdown = (dropdown: any[]): boolean => {
    return dropdown.length > 0 && 'category' in dropdown[0];
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo and Branding */}
          <div className="flex items-center gap-2">
            <img src={LowRiskLogo} alt="LowRisk Security" className="w-10 h-10" />
            <span className="text-white font-bold text-xl">LowRisk Security</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-8 mx-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="text-gray-200 hover:text-white flex items-center gap-1"
                >
                  {item.icon && item.icon}
                  {item.name}
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                    {isCategorizedDropdown(item.dropdown) ? (
                      <AccordionDropdown
                        categories={item.dropdown}
                        className="w-80"
                      />
                    ) : (
                      <div className="bg-slate-800 py-1 rounded-md min-w-[200px]">
                        {item.dropdown.map((dropdownItem: any) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <Link 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-200 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 shadow-lg">
          {navItems.map((item) => (
            <React.Fragment key={item.name}>
              <Link
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-white hover:bg-slate-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  {item.icon && item.icon}
                  <span className="ml-2">{item.name}</span>
                </div>
              </Link>
              {item.dropdown && (
                <div className="pl-4">
                  {isCategorizedDropdown(item.dropdown) ? (
                    <AccordionDropdown
                      categories={item.dropdown}
                      onItemClick={() => setIsOpen(false)}
                    />
                  ) : (
                    <div className="space-y-1">
                      {item.dropdown.map((dropdownItem: any) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Get Started Button for Mobile */}
          <div className="pt-2">
            <Link
              href="#contact"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;