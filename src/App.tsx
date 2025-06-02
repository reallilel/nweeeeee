import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import SolutionsSection from './components/sections/SolutionsSection';
import AboutSection from './components/sections/AboutSection';
import ResourcesSection from './components/sections/ResourcesSection';
import ContactSection from './components/sections/ContactSection';
import CTASection from './components/sections/CTASection';

function App() {
  React.useEffect(() => {
    // Update the document title
    document.title = 'LowRisk Security - Offensive Security Services';
    
    // Find and update meta description if it exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'LowRisk Security provides high-assurance, manual security testing to help businesses identify and fix vulnerabilities before attackers can exploit them.');
    }
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <AboutSection />
      <ResourcesSection />
      <CTASection />
      <ContactSection />
    </Layout>
  );
}

export default App;