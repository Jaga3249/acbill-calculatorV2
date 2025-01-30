import { imagePath } from "@/constants/imagePath";

const Footer = () => {
  return (
    <div
      className="bg-white flex justify-center items-center py-6 mt-7"
      id="footer"
    >
      <div className="flex flex-col items-center justify-start gap-4 ">
        <img
          src={imagePath.footerLogo}
          alt="footerLogo"
          className="sm:h-[47px] h-[42px] sm:w-[146px] w-[133px]"
        />
        <span className="text-sm leading-[21px]">Follow Us</span>
        <div className="flex  items-center gap-5 ">
          <a
            href="https://www.facebook.com/techligator/"
            target="_blank"
            className="cursor-pointer"
          >
            {" "}
            <img
              src={imagePath.facebook}
              alt=""
              className="h-[20px] w-[20px]"
            />
          </a>

          <a
            href="https://www.instagram.com/techligator/"
            target="_blank"
            className="cursor-pointer"
          >
            {" "}
            <img
              src={imagePath.instagram}
              alt=""
              className="h-[20px] w-[20px]"
            />
          </a>
          {/* <img src={imagePath.twitter} alt="" className="h-[20px] w-[20px]" /> */}

          <a
            href=" https://www.linkedin.com/company/techligator/"
            target="_blank"
            className="cursor-pointer"
          >
            {" "}
            <img
              src={imagePath.linkedin}
              alt=""
              className="h-[20px] w-[20px]"
            />
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm leading-[21px]">Contact Us:</span>
          <a href="tel:+918260684075" className="text-sm leading-[21px] ">
            +91 8260684075
          </a>

          <a
            href="mailto:techligator@gmail.com"
            className="text-sm leading-[21px]"
          >
            techligator@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm leading-[21px]">Copyright</span>
          <span>@</span>
          <span className="text-sm leading-[21px]">AcBill Calculator</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
