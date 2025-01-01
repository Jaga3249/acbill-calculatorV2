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
    }
  };

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
            {["Home", "FAQs", "Browse AC", "Blogs"].map((tab) => (
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
