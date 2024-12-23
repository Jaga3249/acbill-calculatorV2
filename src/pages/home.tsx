import AcCalculatorForm from "@/components/ac-calculator-form";
import AcComparision from "@/components/ac-comparision";
import AcRecomendation from "@/components/ac-recomendation";
import BottomCarousel from "@/components/bottom-carosel";
import ContactUs from "@/components/contact-us";
import { HeroSection } from "@/components/hero-section";
import { useAcContext } from "@/context/use-context";
import Layout from "@/layout/layout";

const Home = () => {
  const { predictRecomenedAc } = useAcContext();
  return (
    <Layout>
      <HeroSection />
      <AcCalculatorForm />
      {predictRecomenedAc && predictRecomenedAc.length > 0 && <AcComparision />}
      <AcRecomendation />
      <BottomCarousel />
      <ContactUs />
    </Layout>
  );
};
export default Home;
