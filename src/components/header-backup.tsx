import { SetStateAction } from "react";
import { Button } from "./ui/button";
import companyLogo from "@/assets/company-logo.png";
import { Menu } from "lucide-react";
import { imagePath } from "@/constants/imagePath";
import { useNavigate, useLocation } from "react-router-dom";

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

  return (
    <>
      <header className="mt-6 hidden md:flex md:items-center md:justify-between">
        <img
          src={imagePath?.companyLogo}
          alt="Company Logo"
          className="w-[55px] h-[37.15px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="flex items-center gap-12 font-medium text-sm">
          {["Home", "Bowse AC"].map((tab) => (
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
        <a href="#contact">
          <Button className="w-[136px] rounded-xl">Contact Us</Button>
        </a>
      </header>
      <header className="md:hidden flex mt-5">
        <Menu
          onClick={() => setIsMenuOpen(true)}
          size={30}
          className="w-8 h-8"
        />
        <div className="flex-1 flex items-center justify-center">
          <img src={companyLogo} alt="logo" className="w-10 h-9" />
        </div>
      </header>
    </>
  );
};

export default Header;
