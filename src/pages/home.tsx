import AcCalculatorForm from "@/components/ac-calculator-form";
import AcComparision from "@/components/ac-comparision";
import AcRecomendation from "@/components/ac-recomendation";
import ACUsageComparison from "@/components/ac-usageComparison";
import BottomCarousel from "@/components/bottom-carosel";
import ContactUs from "@/components/contact-us";
import Faq from "@/components/faq";
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
      {predictRecomenedAc && predictRecomenedAc.length > 0 && (
        <ACUsageComparison
          product={predictRecomenedAc[predictRecomenedAc.length - 1]}
        />
      )}
      {predictRecomenedAc &&
        predictRecomenedAc.length > 0 &&
        predictRecomenedAc[predictRecomenedAc.length - 1].recommendations
          .length > 0 && (
          <AcRecomendation
            products={
              predictRecomenedAc[predictRecomenedAc.length - 1].recommendations
            }
          />
        )}
      <BottomCarousel />
      <Faq />

      <ContactUs />
    </Layout>
  );
};
export default Home;
