import AcCalculatorForm from "@/components/ac-calculator-form";
import AcComparision from "@/components/ac-comparision";
import AcRecomendation from "@/components/ac-recomendation";
import ACUsageComparison from "@/components/ac-usageComparison";
import BottomCarousel from "@/components/bottom-carosel";
import Faq from "@/components/faq";
import { HeroSection } from "@/components/hero-section";
import { MobileHeroSection } from "@/components/mobile-herosection";
import { useAcContext } from "@/context/use-context";
import Layout from "@/layout/layout";
import { useIsMobile } from "@/utils/check-mobile";

const Home = () => {
  const { predictRecomenedAc } = useAcContext();
  const isMobile = useIsMobile();
  return (
    <Layout>
      {isMobile ? <MobileHeroSection /> : <HeroSection />}
      <AcCalculatorForm />

      {predictRecomenedAc && predictRecomenedAc.length > 0 && <AcComparision />}

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
      {predictRecomenedAc && predictRecomenedAc.length > 0 && (
        <ACUsageComparison
          product={predictRecomenedAc[predictRecomenedAc.length - 1]}
        />
      )}
      <BottomCarousel />
      <Faq />

      {/* <ContactUs /> */}
    </Layout>
  );
};
export default Home;
