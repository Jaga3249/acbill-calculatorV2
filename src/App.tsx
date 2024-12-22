import { useEffect, useState } from "react";
import AcCalculatorForm from "./components/ac-calculator-form";
import AcComparision from "./components/ac-comparision";
import BottomCarousel from "./components/bottom-carosel";
import ContactUs from "./components/contact-us";
import Footer from "./components/footer";
import Header from "./components/header";
import { HeroSection } from "./components/hero-section";
import { imagePath } from "./constants/imagePath";
import { X } from "lucide-react";
import ACUsageComparison from "./components/ac-usageComparison";
import toast from "react-hot-toast";
import { ACUsageData } from "./type/type";
import { useAcContext } from "./context/use-context";

const App = () => {
  const [IsMEnuOpen, setIsMenuOpen] = useState(false);
  const { predictRecomenedAc } = useAcContext();

  console.log("predictRecomenedAc", predictRecomenedAc);
  return (
    <>
      <div className="font-poppins select-none w-screen h-auto md:px-10 px-4  overflow-hidden">
        <Header setIsMenuOpen={setIsMenuOpen} />
        <HeroSection />
        <AcCalculatorForm />
        {predictRecomenedAc && predictRecomenedAc.length > 0 && (
          <AcComparision predictRecomenedAc={predictRecomenedAc} />
        )}
        {/* <ACUsageComparison /> */}
        {/* <AcRecomendation /> */}
        <BottomCarousel />
        <ContactUs />
      </div>
      <Footer />

      {IsMEnuOpen && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-10"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar menu */}
          <span className="md:hidden sm:hidden bg-septenaryWhite fixed top-0 w-[273px] h-screen rounded-tr-[20px] rounded-br-[20px] p-8 z-20">
            <div className="flex flex-col gap-[52px]">
              <img
                src={imagePath?.companyLogo}
                alt="company logo"
                className="w-[55px] h-[37px]"
              />
              <div className="flex flex-col gap-[40px]">
                <span className="text-sm font-semibold text-primaryBlack">
                  Home
                </span>
                <span className="text-sm font-semibold text-primaryBlack">
                  Blogs
                </span>
                <span className="text-sm font-semibold text-primaryBlack">
                  Browse AC
                </span>
              </div>
            </div>
            <X
              className="absolute top-4 right-4"
              size={30}
              onClick={() => setIsMenuOpen(false)}
            />
          </span>
        </>
      )}
    </>
  );
};
export default App;
