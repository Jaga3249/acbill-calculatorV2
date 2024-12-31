import { useState, useEffect } from "react";
import { Product } from "@/type/type";
import { Button } from "./ui/button";
import acImage from "@/assets/ac-image.png";

const AcRecomendation = ({ products }: { products: Product[] }) => {
  const [showAll, setShowAll] = useState(false); // State to toggle "See all"
  const [isMobile, setIsMobile] = useState(false); // State to check if screen is mobile

  // Handle screen resize to detect if it's mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust for mobile (less than md breakpoint)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSeeAllClick = () => {
    setShowAll((prev) => !prev); // Toggle state on click
  };

  return (
    <div className="flex flex-col md:justify-center justify-start md:mt-16 mt-6 md:mx-28">
      {/* Top section */}
      <div className="flex md:justify-between items-center mb-4">
        <div className="flex items-center justify-between w-full">
          <span className="text-primaryBlack sm:text-base text-[15px] font-medium">
            Our Recommendation as per your need ✨
          </span>

          {!isMobile && (
            <span
              className="text-primaryBlack md:text-base sm:text-sm text-xs font-medium cursor-pointer hover:underline hover:text-primaryBlue transition-colors"
              onClick={handleSeeAllClick}
            >
              {showAll ? "Show less" : "See all"} {/* Toggle text */}
            </span>
          )}
        </div>
      </div>

      <div className="flex justify-between w-full gap-4 overflow-x-scroll md:overflow-hidden md:grid grid-cols-3">
        {products
          .slice(0, isMobile ? products.length : showAll ? 6 : 3)
          .map((item: Product, i) => (
            <div
              className="rounded-[12px] min-w-[80%] md:min-w-fit border border-querternaryWhite flex flex-col gap-[11px]"
              key={i}
            >
              <div className="h-[169px] flex justify-center items-center">
                <img src={acImage} alt="acImg" className="w-[227px] h-[91px]" />
              </div>
              <div className="flex flex-col rounded-bl-md rounded-br-md p-3 gap-[6px] bg-quinaryWhite">
                <div className="flex justify-between items-center">
                  <span className="sm:bg-tertiaryGreen bg-[#C6C6C6] py-[6px] px-[12px] rounded-[30px] text-xs sm:text-secondaryGreen text-primaryBlack  font-medium border sm:border-secondaryGreen">
                    {item.tagline}
                  </span>
                  <span
                    className="py-[6px] px-[12px] bg-senaryGray rounded-[30px]
                     text-primaryBlack text-xs font-medium border border-primaryBlack"
                  >
                    {item.starRating}⭐
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-semibold text-primaryBlack">
                    ₹{item?.price}
                  </span>
                  <span className="text-xs font-medium text-primaryBlack line-through">
                    ₹{item?.OrginalPrice}
                  </span>
                </div>
                <p className="text-sm font-semibold text-primaryBlack">
                  {item.brand} {item.capacity} Ton {item.type}
                </p>
                <p className="text-septenaryGray text-[12px] leading-[18px] font-medium">
                  No-cost EMI available at <span>{item.buttonText}.</span>
                </p>

                <p className="text-septenaryGray text-[12px] leading-[18px] font-medium">
                  Estimated Monthly Cost:{" "}
                  <span className="text-primaryBlack font-extrabold text-sm">
                    ₹{item.estimatedMonthlyCost}
                  </span>{" "}
                  as per your data
                </p>
                <div className="">
                  <a href={item.ProductLink} target="_blank">
                    <Button
                      className="text-sm font-medium text-septenaryWhite w-full"
                      size={"sm"}
                    >
                      View at {item.buttonText}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AcRecomendation;
