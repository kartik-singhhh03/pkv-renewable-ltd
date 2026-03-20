import Navbar from '../components/Navbar';
import HeroSection from '../components/sections/HeroSection';
import TrustBar from '../components/sections/TrustBar';
import ServicesSection from '../components/sections/ServicesSection';
import SubsidyPromoSection from '../components/sections/SubsidyPromoSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import StatsSection from '../components/sections/StatsSection';
import CalculatorSection from '../components/sections/CalculatorSection';
import ProcessSection from '../components/sections/ProcessSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import FaqSection from '../components/sections/FaqSection';
import CtaSection from '../components/sections/CtaSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/sections/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileActionBar from '../components/MobileActionBar';

export default function Index() {
  return (
    <div className="overflow-x-hidden bg-[#FAFDFA]">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <SubsidyPromoSection />
      <WhyUsSection />
      <StatsSection />
      <CalculatorSection />
      <ProcessSection />
      <ProjectsSection />
      <FaqSection />
      <CtaSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </div>
  );
}
