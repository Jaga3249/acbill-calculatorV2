import ACCapacitySlider from "./components/ac-capacity-slider";
import AcComparision from "./components/ac-comparision";
import AcSelectionForm from "./components/ac-selection-form";
import ACUsageComparison from "./components/ac-usageComparison";
import BottomCarosel from "./components/bottom-carosel";
import ContactUs from "./components/contact-us";
import SliderWithLabels from "./components/custom-slider";
import Footer from "./components/footer";
import Header from "./components/header";
import { HeroSection } from "./components/hero-section";

import ProductCard from "./components/product-card";

const App = () => {
  return (
    <div className="px-10 font-poppins select-none">
      <Header />
      <HeroSection />
      <AcSelectionForm />
    </div>
  );
};
export default App;
