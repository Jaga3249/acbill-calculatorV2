import { Product } from "@/type/type";
import { Button } from "./ui/button";

const AcRecomendation = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex flex-col md:justify-center justify-start md:mt-16 mt-10 md:mx-20">
      {/* <div className=" flex flex-col gap-[16px]"> */}
      {/* top section */}
      <div className="flex md:justify-between items-center mb-4">
        <span className="text-primaryBlack text-base font-medium">
          Our Recommendation as per you need ✨
        </span>
        {/* <span className="text-primaryBlack text-base font-medium">
            See all
          </span> */}
      </div>

      <div className="flex justify-between w-full gap-4 overflow-x-scroll md:overflow-hidden">
        {products.slice(0, 3).map((item: Product, i) => (
          <div
            className="rounded-[12px] min-w-full md:min-w-fit border border-querternaryWhite flex flex-col gap-[11px] pb-3 "
            key={i}
          >
            <div className="h-[169px] flex justify-center items-center">
              <img
                src={item?.Image}
                alt="acImg"
                className="w-[227px] h-[91px] object-cover"
              />
            </div>
            <div className=" flex flex-col mx-3 md:gap-[9px]">
              <div className="flex justify-between items-center">
                <span className="bg-tertiaryGreen py-[6px] px-[12px] rounded-[30px] text-xs text-secondaryGreen font-medium border border-secondaryGreen">
                  {item.tagline}
                </span>
                <span
                  className="py-[6px] px-[12px] bg-senaryGray rounded-[30px]
                   text-primaryBlack  text-xs font-medium"
                >
                  {item.starRating}⭐
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold text-primaryBlack mt-2">
                  ₹{item.price}
                </span>
              </div>
              <p className="text-sm font-semibold text-primaryBlack">
                {item.brand} {item.capacity} Ton {item.type}
              </p>

              <p className="text-septenaryGray text-[12px] leading-[18px] font-medium">
                Estimated Monthly Cost:{" "}
                <span className="text-primaryBlack">
                  ₹{item.estimatedMonthlyCost}
                </span>{" "}
                as per your data
              </p>

              {/*  */}
            </div>
            <div className="px-3">
              <a href={item.ProductLink} target="_blank">
                <Button
                  className="text-sm font-medium text-septenaryWhite w-full"
                  size={"sm"}
                >
                  {item.buttonText}
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};
export default AcRecomendation;
