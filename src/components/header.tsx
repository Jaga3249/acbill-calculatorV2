import { SetStateAction, useState } from "react";
// import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { imagePath } from "@/constants/imagePath";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type HeaderProps = {
  setIsMenuOpen: React.Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setIsMenuOpen }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [activeTab, setActiveTab] = useState<string>(() => {
  //   switch (location.pathname) {
  //     case "/":
  //       return location.hash === "#FAQs" ? "FAQs" : "Home";
  //     case "/blog":
  //       return "Blogs";
  //     case "/browse-ac":
  //       return "Browse AC";
  //     default:
  //       return "";
  //   }
  // });

  const [activeTab, setActiveTab] = useState(() => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/browse-ac":
        return "Browse AC";
    }
  });

  const tabs = ["Home", "Browse AC"];
  const handleTabClick = (tab: string) => {
    if (tab === "Home") {
      setActiveTab(tab);
      navigate("/");
    } else if (tab === "Browse AC") {
      setActiveTab(tab);
      navigate("/browse-ac");
    }
  };
  const handleScrollToForm = () => {
    const footerSection = document.getElementById("footer");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header className="mt-2 hidden md:flex md:items-center md:justify-between w-full">
        <img
          src={imagePath?.headerLogo}
          alt="Company Logo"
          className="w-[144.08px] h-[50.3px] cursor-pointer"
          onClick={() => {
            setActiveTab("Home");
            navigate("/");
          }}
        />
        {/* <div className="bg-[#F3F3F3] flex-1 flex items-center justify-between ml-8 p-2 rounded-[20px] relative">
          <div className="flex items-center font-medium text-sm relative w-full">
            {["Home", "FAQs", "Browse AC"].map((tab) => (
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
        </div> */}
        <div className="flex gap-16">
          {tabs.map((item, i) => (
            <div
              className={`flex flex-col gap-2 cursor-pointer `}
              key={i}
              onClick={() => handleTabClick(item)}
            >
              <span
                className={cn(
                  activeTab === item
                    ? "font-semibold text-sm"
                    : "font-medium text-sm"
                )}
              >
                {item}
              </span>
              <span
                className={`h-[4px] w-[50%] rounded-full transition-all self-center ${
                  activeTab === item ? "bg-blue-500" : "bg-transparent"
                }`}
              ></span>
            </div>
          ))}
        </div>
        <span onClick={handleScrollToForm}>
          {" "}
          <Button className="bg-[#0067F4] hover:bg-[#0067F4] p-[11px] w-[134px] h-[44px] rounded-[12px]">
            Contact Us
          </Button>
        </span>
      </header>
      {/* mobile view */}
      <header className="md:hidden flex mt-5">
        <Menu
          onClick={() => setIsMenuOpen(true)}
          size={30}
          className="w-8 h-8"
        />
        <div className="flex-1 flex items-center justify-center">
          <img
            src={imagePath?.headerLogo}
            alt="logo"
            className="w-[93.11px] h-[30px]"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
