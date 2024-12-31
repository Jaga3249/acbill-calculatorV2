import { SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { imagePath } from "@/constants/imagePath";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

type HeaderProps = {
  setIsMenuOpen: React.Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setIsMenuOpen }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (location.pathname === "/") return "Home";
    if (location.pathname.includes("/blog")) return "Blogs";
    if (location.pathname === "/browse-ac") return "Browse AC";
    return location.hash === "#FAQs" ? "FAQs" : "";
  });

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Update active tab immediately
    if (tab === "Home") {
      navigate("/");
    } else if (tab === "Blogs") {
      navigate("/blog");
    } else if (tab === "Browse AC") {
      navigate("/browse-ac");
    } else if (tab === "FAQs") {
      // Scroll to FAQs section without changing the route history
      const faqsSection = document.getElementById("FAQs");
      if (faqsSection) {
        faqsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const tabs =
    location.pathname === "/"
      ? ["Home", "Browse AC", "FAQs", "Blogs"]
      : ["Home", "Browse AC", "Blogs"];

  return (
    <>
      <header className="mt-6 hidden md:flex md:items-center w-full">
        <img
          src={imagePath?.companyLogo}
          alt="Company Logo"
          className="w-[55px] h-[37.15px] cursor-pointer"
          onClick={() => {
            setActiveTab("Home");
            navigate("/");
          }}
        />
        <div className="bg-[#F3F3F3] flex-1 flex items-center justify-between ml-8 p-2 rounded-[20px] relative">
          <div className="flex items-center font-medium text-sm relative w-full">
            {tabs.map((tab) => (
              <div key={tab} className="relative">
                <span
                  className={`flex flex-col items-center gap-2 cursor-pointer w-[136px] p-[12px] ${
                    activeTab === tab ? "font-semibold" : "font-medium"
                  } z-10 relative`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </span>
                {activeTab === tab && (
                  <motion.div
                    className="absolute inset-0 bg-[#CDCDCD] rounded-xl"
                    layoutId="activeTabBackground"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.div>
                )}
              </div>
            ))}
          </div>
          <a href="#contact">
            <Button
              className="w-[136px] rounded-xl"
              onClick={() => {
                setActiveTab("Contact");
                navigate("/");
              }}
            >
              Contact Us
            </Button>
          </a>
        </div>
      </header>
      <header className="md:hidden flex mt-5">
        <Menu
          onClick={() => setIsMenuOpen(true)}
          size={30}
          className="w-8 h-8"
        />
        <div className="flex-1 flex items-center justify-center">
          <img src={imagePath?.companyLogo} alt="logo" className="w-12 h-9" />
        </div>
      </header>
    </>
  );
};

export default Header;
