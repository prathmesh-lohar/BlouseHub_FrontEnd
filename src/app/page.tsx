import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import DesignCatalog from "@/components/DesignCatalog";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ComingSoonPopup from "@/components/ComingSoonPopup";

export default function Home() {
  return (
    <>
      <ComingSoonPopup />
      <TopBanner />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <DesignCatalog />
        <WhyChooseUs />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
