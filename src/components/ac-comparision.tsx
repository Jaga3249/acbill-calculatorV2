import { Plus } from "lucide-react";

const AcComparision = () => {
  return (
    <div className=" flex md:justify-center md:flex-col md:items-center justify-start md:gap-4 md:mt-16">
      <h1 className="text-base font-medium text-center">
        Here’s What Your AC Costs You! 💡
      </h1>
      <div className="flex sm:flex-row flex-col gap-4 ">
        <div className="border border-querternaryWhite rounded-[12px] p-3 flex gap-6 flex-col">
          <div className="flex justify-between">
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
            <div className="flex  flex-col  items-end gap-[1px]">
              <span className="text-[26px] leading-[39px] font-semibold">
                54
              </span>
              <p className="text-lightGray text-sm font-medium">Units/month</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <h1 className="text-[34px] leading-[51px] font-bold text-center">
              ₹123
            </h1>
            <p className="text-sm font-medium">
              Estimated Cost for 30 Days of Usage
            </p>
            <p className="text-sm font-medium text-tertiaryGray text-center">
              ₹5.3 per unit
            </p>
          </div>

          <div className="flex sm:gap-4 md:gap-4">
            <div className=" bg-quinaryWhite md:p-3 md:rounded-[8px]">
              <h1 className="text-[24px] leading-[36px] font-bold">₹123</h1>
              <p className="text-sm font-medium text-quinaryGray w-[140px]">
                Estimated Cost per day
              </p>
            </div>
            <div className="bg-quinaryWhite p-3 rounded-[8px] w-[150px] sm:w-full">
              <h1 className="text-2xl font-bold ">₹123</h1>
              <p className="text-sm font-medium text-quinaryGray w-[140px]">
                Estimated Cost for a year (*8 months)
              </p>
            </div>
          </div>
        </div>
        <div className="border border-querternaryWhite rounded-[12px] p-3 flex gap-6 flex-col">
          <div className="flex justify-between">
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
            <div className="flex  flex-col  items-end gap-[1px]">
              <span className="text-[26px] leading-[39px] font-semibold">
                54
              </span>
              <p className="text-lightGray text-sm font-medium">Units/month</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <h1 className="text-[34px] leading-[51px] font-bold text-center">
              ₹123
            </h1>
            <p className="text-sm font-medium">
              Estimated Cost for 30 Days of Usage
            </p>
            <p className="text-sm font-medium text-tertiaryGray text-center">
              ₹5.3 per unit
            </p>
          </div>

          <div className="flex sm:gap-4 md:gap-4">
            <div className=" bg-quinaryWhite md:p-3 md:rounded-[8px]">
              <h1 className="text-[24px] leading-[36px] font-bold">₹123</h1>
              <p className="text-sm font-medium text-quinaryGray w-[140px]">
                Estimated Cost per day
              </p>
            </div>
            <div className="bg-quinaryWhite p-3 rounded-[8px] w-[150px] sm:w-full">
              <h1 className="text-2xl font-bold ">₹123</h1>
              <p className="text-sm font-medium text-quinaryGray w-[140px]">
                Estimated Cost for a year (*8 months)
              </p>
            </div>
          </div>
        </div>

        <div
          className="w-[214px] border border-querternaryWhite
         p-3 rounded-[12px] flex justify-center items-center flex-col gap-[23px]"
        >
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
  );
};
export default AcComparision;
