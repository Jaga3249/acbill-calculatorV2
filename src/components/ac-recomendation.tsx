interface Product {
  price: number;
  originalPrice: number;
  name: string;
  description: string;
  savingsPerYear: number;
  estimatedMonthlyCost: number;
  rating: number;
  imgUrl: string;
}
import acImg from "@/assets/acImg.png";
import { Button } from "./ui/button";

const products: Product[] = [
  {
    price: 12000,
    originalPrice: 18900,
    name: "Samsung 1 Ton Split AC",
    description: "Saves up to ₹1200/year on energy bills.",
    savingsPerYear: 1200,
    estimatedMonthlyCost: 450,
    rating: 5,
    imgUrl: acImg,
  },
  {
    imgUrl: acImg,
    price: 12000,
    originalPrice: 18900,
    name: "Samsung 1 Ton Split AC",
    description: "Saves up to ₹1200/year on energy bills.",
    savingsPerYear: 1200,
    estimatedMonthlyCost: 450,
    rating: 5,
  },
  {
    price: 12000,
    originalPrice: 18900,
    name: "Samsung 1 Ton Split AC",
    description: "Saves up to ₹1200/year on energy bills.",
    savingsPerYear: 1200,
    estimatedMonthlyCost: 450,
    rating: 5,
    imgUrl: acImg,
  },
];

const AcRecomendation = () => {
  return (
    <div className="flex justify-center md:mt-16 ">
      <div className=" flex flex-col gap-[16px]">
        {/* top section */}
        <div className="flex justify-between items-center">
          <span className="text-primaryBlack text-base font-medium">
            Smart Picks for Cool Comfort & Energy Savings ❄️
          </span>
          <span className="text-primaryBlack text-base font-medium">
            See all
          </span>
        </div>

        <div className="flex justify-between w-[1030px]">
          {products.map((item: Product, i) => (
            <div
              className="w-[316px] rounded-[12px]  border border-querternaryWhite flex flex-col gap-[11px] pb-3 "
              key={i}
            >
              <div className="h-[169px] flex justify-center items-center">
                <img
                  src={item?.imgUrl}
                  alt="acImg"
                  className="w-[227px] h-[91px]"
                />
              </div>
              <div className=" flex flex-col mx-3 md:gap-[9px]">
                <div className="flex justify-between items-center">
                  <span className="bg-tertiaryGreen py-[6px] px-[12px] rounded-[30px] text-xs text-secondaryGreen font-medium border border-secondaryGreen">
                    Energy Saver
                  </span>
                  <span
                    className="py-[6px] px-[12px] bg-senaryGray rounded-[30px]
                   text-primaryBlack  text-xs font-medium"
                  >
                    5⭐
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-semibold text-primaryBlack">
                    ₹{item.price}
                  </span>
                </div>
                <p className="text-sm font-semibold text-primaryBlack">
                  {item.name}
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
                <Button
                  className="text-sm font-medium text-septenaryWhite w-full"
                  size={"sm"}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AcRecomendation;
