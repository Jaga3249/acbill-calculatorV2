import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { imagePath } from "@/constants/imagePath";

import { X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<string>(() => {
    switch (location.pathname) {
      case "/":
        return location.hash === "#FAQs" ? "FAQs" : "Home";
      case "/blog":
        return "Blogs";
      case "/browse-ac":
        return "Browse AC";
      default:
        return "";
    }
  });

  const handleTabClick = (tab: string) => {
    if (tab === "FAQs") {
      navigate("/#FAQs");
      setActiveTab(tab);
      setIsMenuOpen(false);

      setTimeout(() => {
        const faqsSection = document.getElementById("FAQs");
        if (faqsSection) {
          faqsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      setActiveTab(tab);
      if (tab === "Home") {
        navigate("/");
      } else if (tab === "Blogs") {
        navigate("/blog");
      } else if (tab === "Browse AC") {
        navigate("/browse-ac");
      }
      setIsMenuOpen(false);
    }
  };
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const footerSection = document.getElementById("footer");
      if (footerSection) {
        window.scrollTo({ top: footerSection.offsetTop, behavior: "smooth" });
      }
    }, 300);
  };
  return (
    <>
      <div className="font-poppins h-auto w-full  px-3 sm:max-w-[1144px] sm:mx-auto ">
        <Header setIsMenuOpen={setIsMenuOpen} />
        {children}
      </div>
      <Footer />
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-10"
            onClick={() => setIsMenuOpen(false)}
          />
          <span
            className={`md:hidden sm:hidden bg-septenaryWhite fixed top-0 w-[273px] h-screen rounded-tr-[20px] rounded-br-[20px] p-8 z-20 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col justify-between h-full ">
              <div className="flex flex-col gap-[52px]">
                <img
                  src={imagePath?.headerLogo}
                  alt="company logo"
                  className="w-[93px] h-[30px]"
                />
                <div className="flex flex-col gap-[40px]">
                  {["Home", "Browse AC"].map((tab) => (
                    <span
                      key={tab}
                      className={`flex items-center gap-1 cursor-pointer ${
                        activeTab === tab ? "font-semibold" : "font-medium"
                      }`}
                      onClick={() => handleTabClick(tab)}
                    >
                      <span
                        className={`h-6 w-[2px] text-sm font-semibold text-primaryBlack ${
                          activeTab === tab ? "bg-primary" : ""
                        }`}
                      ></span>
                      {tab}
                    </span>
                  ))}
                </div>
              </div>
              <a href="#footer" onClick={handleContactClick}>
                <Button className="text-white w-[134px] h-[44px] bg-[#0067F4] rounded-[12px] p-[9px]">
                  Contact Us
                </Button>
              </a>
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

export default Layout;
