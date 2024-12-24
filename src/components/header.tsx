import { SetStateAction } from "react";
import { Button } from "./ui/button";
import companyLogo from "@/assets/company-logo.png";
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

  // Determine active tab based on the current path
  const activeTab = (() => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/blog":
        return "Blog";
      case "/browse-ac":
        return "Bowse AC";
      default:
        return "";
    }
  })();

  // Handler for changing active tab
  const handleTabClick = (tab: string) => {
    if (tab === "Home") {
      navigate("/");
    } else if (tab === "Blog") {
      navigate("/blog");
    } else if (tab === "Bowse AC") {
      navigate("/browse-ac");
    }
  };
  const tabs = ["Home", "Bowse AC"];
  return (
    <>
      <header className="mt-6 hidden md:flex md:items-center w-full">
        <img
          src={imagePath?.companyLogo}
          alt="Company Logo"
          className="w-[55px] h-[37.15px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        {/* <div className="bg-[#F3F3F3] flex-1 flex items-center justify-between ml-8 p-2 rounded-[20px]">
          <div className="flex items-center font-medium text-sm">
            {["Home", "Bowse AC"].map((tab) => (
              <span
                key={tab}
                className={`flex flex-col items-center gap-2 cursor-pointer w-[136px] ${
                  activeTab === tab
                    ? "font-semibold bg-[#CDCDCD] rounded-xl p-[10px]"
                    : "font-medium"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </span>
            ))}
          </div>
          <a href="#contact">
            <Button className="w-[136px] rounded-xl">Contact Us</Button>
          </a>
        </div> */}
        <div className="bg-[#F3F3F3] flex-1 flex items-center justify-between ml-8 p-2 rounded-[20px] relative">
          <div className="flex items-center font-medium text-sm relative w-full">
            {tabs.map((tab) => (
              <div key={tab} className="relative">
                <span
                  className={`flex flex-col items-center gap-2 cursor-pointer w-[136px] p-[10px] ${
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
          <img src={companyLogo} alt="logo" className="w-12 h-9" />
        </div>
      </header>
    </>
  );
};

export default Header;
