import AcCalculatorForm from "./components/ac-calculator-form";
import AcComparision from "./components/ac-comparision";
import AcRecomendation from "./components/ac-recomendation";
import ACUsageComparison from "./components/ac-usageComparison";
import BottomCarosel from "./components/bottom-carosel";
import ContactUs from "./components/contact-us";
import Footer from "./components/footer";

import Header from "./components/header";
import { HeroSection } from "./components/hero-section";

const App = () => {
  return (
    <>
      <div className="px-10 font-poppins select-none">
        <Header />
        <HeroSection />
        <AcCalculatorForm />
        <AcComparision />
        <ACUsageComparison />
        <AcRecomendation />
        <BottomCarosel />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};
export default App;
