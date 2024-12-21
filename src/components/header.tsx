import { useState } from "react";
import { Button } from "./ui/button";
import companyLogo from "@/assets/company-logo.png";
import { Menu } from "lucide-react";
import { imagePath } from "@/constants/imagePath";

const Header = () => {
  // State to track the active list item
  const [activeTab, setActiveTab] = useState("home");

  // Handler for changing active tab
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <header className="mt-6 hidden md:flex md:items-center md:justify-between">
        <img
          src={imagePath?.companyLogo}
          alt="Company Logo"
          className="w-[55px] h-[37.15px]"
        />
        <div className="flex items-center gap-12 font-medium text-sm">
          {["Home", "Blog", "Bowse AC"].map((tab) => (
            <span
              key={tab}
              className={`flex flex-col items-center gap-2 cursor-pointer ${
                activeTab === tab ? "font-semibold" : "font-medium"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
              <span
                className={`h-[3px] w-[19px] rounded-[7px] ${
                  activeTab === tab ? "bg-primary" : ""
                }`}
              ></span>
            </span>
          ))}
        </div>
        <Button className="w-[136px] rounded-xl">Contact Us</Button>
        {/* <nav
          aria-label="Main Navigation"
          className="flex-1 bg-primaryWhite rounded-[20px] p-2 flex justify-between items-center"
        >
          <ul className="flex gap-10 items-center cursor-pointer">
            {["home", "blog", "browse-ac"].map((tab) => (
              <li key={tab}>
                <a
                  href={`#${tab}`}
                  onClick={() => handleTabClick(tab)}
                  className={`w-[135px] h-[41px] text-center rounded-xl p-[10px] text-sm font-semibold leading-5 inline-block transition-colors duration-300 ease-in-out ${
                    activeTab === tab
                      ? "bg-primaryGray text-primaryBlack"
                      : "bg-transparent text-gray-600"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <Button>Contact Us</Button>
        </nav> */}
      </header>
      <header className="sm:hidden flex  mt-5">
        <Menu />
        <div className="flex-1 flex items-center justify-center">
          <img src={companyLogo} alt="logo" className="w-8 h-8" />
        </div>
      </header>
    </>
  );
};

export default Header;
