import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";
import facebook from "@/assets/facebook.png";
import { Copyright } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { imagePath } from "@/constants/imagePath";

const Footer = () => {
  const router = useNavigate();
  return (
    <>
      <div className=" hidden bg-primaryBlack py-[52px] px-[220px]  sm:flex mt-10 sm:justify-between ">
        {/* left side */}
        <div className=" flex flex-col gap-2">
          <div className="flex flex-col gap-3 cursor-pointer">
            <img
              src={imagePath.footerLogo}
              alt="footer logo"
              className="w-[60px] h-[60px]"
              onClick={() => router("/")}
            />
            <span className="text-sm font-normal text-septenaryWhite">
              Follow Us
            </span>
          </div>
          <div className="flex gap-5">
            <a href="https://www.facebook.com/techligator/" target="_blank">
              <img src={facebook} alt="facebook" className="w-5 h-5" />
            </a>
            <a href="  https://www.instagram.com/techligator/" target="_blank">
              <img src={instagram} alt="instagram" className="w-5 h-5" />
            </a>
            {/* <img src={twitter} alt="twitter" className="w-5 h-5" /> */}

            <a
              href=" https://www.linkedin.com/company/techligator/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" className="w-5 h-5" />
            </a>
          </div>
          <div className="flex gap-1 ">
            <span className="text-sm font-normal text-septenaryWhite">
              Copyright
            </span>
            <span className="w-[13px] h-[13px] text-septenaryWhite">@</span>
            <span className="text-sm font-normal text-septenaryWhite">
              Techligtor
            </span>
          </div>
        </div>
        {/* middle side */}
        <div className=" ">
          <ul className="flex flex-col gap-5 h-full cursor-pointer">
            <li
              className="text-sm font-normal text-septenaryWhite"
              onClick={() => router("/")}
            >
              Home
            </li>
            <li
              className="text-sm font-normal text-septenaryWhite"
              onClick={() => router("/blog")}
            >
              Blog
            </li>
            <li
              className="text-sm font-normal text-septenaryWhite "
              onClick={() => router("/browse-ac")}
            >
              Browse AC
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col gap-[18px] cursor-pointer">
            <li className="text-sm font-semibold text-septenaryWhite">
              Other Pages
            </li>
            <li className="text-sm font-semibold text-septenaryWhite">
              <a href="https://techligator.com/" target="_blank">
                {" "}
                Techligtor
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* mobile view */}
      <div className="bg-primaryBlack py-8 px-6 flex flex-col sm:hidden mt-5 ">
        <div className="flex justify-between">
          <img
            src={imagePath.footerLogo}
            alt="footer logo"
            className="w-[60px] h-[60px]"
          />
          <div className="flex flex-col items-end gap-4">
            <span className="text-sm font-normal text-primaryWhite">
              Follow Us
            </span>

            <div className="flex gap-5">
              <a href="https://www.facebook.com/techligator/" target="_blank">
                <img src={facebook} alt="facebook" className="w-5 h-5" />
              </a>
              <a
                href="  https://www.instagram.com/techligator/"
                target="_blank"
              >
                <img src={instagram} alt="instagram" className="w-5 h-5" />
              </a>
              {/* <img src={twitter} alt="twitter" className="w-5 h-5" /> */}

              <a
                href=" https://www.linkedin.com/company/techligator/"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="flex flex-col gap-5">
            <span
              className="text-sm font-normal text-septenaryWhite"
              onClick={() => router("/")}
            >
              Home
            </span>
            <span
              className="text-sm font-normal text-septenaryWhite"
              onClick={() => router("/blog")}
            >
              Blog
            </span>
            <span
              className="text-sm font-normal text-septenaryWhite "
              onClick={() => router("/browse-ac")}
            >
              Browse AC
            </span>
          </div>
          <div className="flex flex-col gap-[18px]">
            <span className="text-sm font-normal text-primaryWhite">
              Other Pages
            </span>
            <span className="text-sm font-normal text-primaryWhite">
              AC ton calculator
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center mt-3">
          <span className="text-sm text-primaryWhite font-normal ">
            Copyright
          </span>
          <Copyright color="white" className="mx-1" size={16} />
          <span className="text-sm text-primaryWhite font-normal ">
            Techligtor
          </span>
        </div>
      </div>
    </>
  );
};
export default Footer;
