import AcCalculatorForm from "./components/ac-calculator-form";

import Header from "./components/header";
import { HeroSection } from "./components/hero-section";

const App = () => {
  return (
    <div className="px-10 font-poppins select-none">
      <Header />
      <HeroSection />
      <AcCalculatorForm />
    </div>
  );
};
export default App;
