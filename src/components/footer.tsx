import footerlogo from "@/assets/footer-logo.png";
import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";
import twitter from "@/assets/twitter.png";
import facebook from "@/assets/facebook.png";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className=" hidden bg-primaryBlack py-[52px] px-[200px]  sm:flex mt-10 ">
        {/* left side */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex flex-col gap-3">
            <img
              src={footerlogo}
              alt="footer logo"
              className="w-[47px] h-[32px]"
            />
            <span className="text-sm font-normal text-septenaryWhite">
              Follow Us
            </span>
          </div>
          <div className="flex gap-5">
            <img src={facebook} alt="facebook" className="w-5 h-5" />
            <img src={instagram} alt="instagram" className="w-5 h-5" />
            <img src={twitter} alt="twitter" className="w-5 h-5" />
            <img src={linkedin} alt="linkedin" className="w-5 h-5" />
          </div>
          <div className="flex gap-1 ">
            <span className="text-sm font-normal text-septenaryWhite">
              Copyright
            </span>
            <span className="w-[13px] h-[13px] text-septenaryWhite">@</span>
            <span className="text-sm font-normal text-septenaryWhite">
              Company name
            </span>
          </div>
        </div>
        {/* middle side */}
        <div className="flex-1">
          <ul className="flex flex-col gap-5 h-full">
            <li className="text-sm font-normal text-septenaryWhite">Home</li>
            <li className="text-sm font-normal text-septenaryWhite">Blog</li>
            <li className="text-sm font-normal text-septenaryWhite">
              Browse AC
            </li>
          </ul>
        </div>
        <div className="flex-1 ">
          <ul className="flex flex-col gap-[18px]">
            <li className="text-sm font-semibold text-septenaryWhite">
              Other Pages
            </li>
            <li className="text-sm font-semibold text-septenaryWhite">
              AC ton calculator
            </li>
          </ul>
        </div>
      </div>
      {/* mobile view */}
      <div className="bg-primaryBlack py-8 px-6 flex flex-col sm:hidden mt-5 ">
        <div className="flex justify-between">
          <img
            src={footerlogo}
            alt="footer logo"
            className="w-[47px] h-[32px]"
          />
          <div className="flex flex-col items-end gap-4">
            <span className="text-sm font-normal text-primaryWhite">
              Follow Us
            </span>

            <div className="flex gap-5">
              <img src={facebook} alt="facebook" className="w-5 h-5" />
              <img src={instagram} alt="instagram" className="w-5 h-5" />
              <img src={twitter} alt="twitter" className="w-5 h-5" />
              <img src={linkedin} alt="linkedin" className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="flex flex-col gap-5">
            <span className="text-sm font-normal text-primaryWhite">Home</span>
            <span className="text-sm font-normal text-primaryWhite">Blog</span>
            <span className="text-sm font-normal text-primaryWhite">
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
        <div className="flex justify-center mt-3">
          <span className="text-sm text-primaryWhite font-normal ">
            Copyright
          </span>
          <Copyright color="white" />
          <span className="text-sm text-primaryWhite font-normal ">
            Company name
          </span>
        </div>
      </div>
    </>
  );
};
export default Footer;
