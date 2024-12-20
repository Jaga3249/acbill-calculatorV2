import { Plus } from "lucide-react";

const AcComparision = () => {
  return (
    <div className=" flex sm:justify-center justify-start border-2 border-red-500">
      <div className="mt-10 flex flex-col gap-5">
        <h1 className="text-base font-medium text-center">
          Here’s What Your AC Costs You! 💡
        </h1>
        <div className="flex sm:flex-row flex-col gap-4 border-2">
          <div className="sm:w-[388px]   border border-querternaryWhite rounded-[12px] p-3 flex gap-6 flex-col">
            <div className="flex  flex-col gap-2">
              <h1 className="text-primaryBlack text-sm font-semibold">
                LG 1 Ton split Ac, 5⭐ rating
              </h1>
              <p className="text-tertiaryGray text-sm font-medium">
                temperature at 20 - 22 C
              </p>
              <p className="text-tertiaryGray text-sm font-medium">
                Used for 7hr a day
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[34px] leading-[51px] font-bold text-center mb-3">
                ₹123
              </h1>
              <p className="text-sm font-medium">
                Estimated Cost for 30 Days of Usage
              </p>
              <p className="text-sm font-medium text-tertiaryGray text-center">
                ₹5.3 per unit
              </p>
            </div>

            <div className="flex sm:gap-4 gap-2 ">
              <div className=" bg-quinaryWhite p-3 rounded-[8px] w-[150px] sm:w-full ">
                <h1 className="text-2xl font-bold mb-2">₹123</h1>
                <p className="text-sm font-medium text-quinaryGray w-[140px]">
                  Estimated Cost per day
                </p>
              </div>
              <div className="bg-quinaryWhite p-3 rounded-[8px] w-[150px] sm:w-full">
                <h1 className="text-2xl font-bold mb-2">₹123</h1>
                <p className="text-sm font-medium text-quinaryGray max-w-[140px]">
                  Estimated Cost for a year (*8 months)
                </p>
              </div>
            </div>
          </div>

          <div className="sm:w-[388px] border border-querternaryWhite rounded-[12px] p-3 flex gap-6 flex-col">
            <div className="flex  flex-col gap-2">
              <h1 className="text-primaryBlack text-sm font-semibold">
                LG 1 Ton split Ac, 5⭐ rating
              </h1>
              <p className="text-tertiaryGray text-sm font-medium">
                temperature at 20 - 22 C
              </p>
              <p className="text-tertiaryGray text-sm font-medium">
                Used for 7hr a day
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[34px] leading-[51px] font-bold text-center mb-3">
                ₹123
              </h1>
              <p className="text-sm font-medium">
                Estimated Cost for 30 Days of Usage
              </p>
              <p className="text-sm font-medium text-tertiaryGray text-center">
                ₹5.3 per unit
              </p>
            </div>

            <div className="flex sm:gap-4 gap-2 ">
              <div className=" bg-quinaryWhite p-3 rounded-[8px] w-[150px] sm:w-full ">
                <h1 className="text-2xl font-bold mb-2">₹123</h1>
                <p className="text-sm font-medium text-quinaryGray w-[140px]">
                  Estimated Cost per day
                </p>
              </div>
              <div className="bg-quinaryWhite p-3 rounded-[8px] w-[150px] sm:w-full">
                <h1 className="text-2xl font-bold mb-2">₹123</h1>
                <p className="text-sm font-medium text-quinaryGray max-w-[140px]">
                  Estimated Cost for a year (*8 months)
                </p>
              </div>
            </div>
          </div>

          <div className="sm:w-[214px] sm:h-[352px] h-[137px] border border-querternaryWhite p-3 rounded-[12px] flex justify-center items-center flex-col gap-5">
            <span className="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-senaryWhite">
              <Plus />
            </span>
            <h2 className="text-xs leading-[18px] font-medium text-quinaryGray">
              Add to compare
            </h2>
          </div>
        </div>
        {/* <p className="text-sm font-medium text-quinaryGray text-center">
          Note: Annual consumption is calculated based on 8 months of typical AC
          usage during warmer months
        </p> */}
      </div>
    </div>
  );
};
export default AcComparision;
