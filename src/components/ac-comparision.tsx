import { useAcContext } from "@/context/use-context";
import { ACUsageData } from "@/type/type";
import { CircleX, Plus } from "lucide-react";

const AcComparision = () => {
  const { predictRecomenedAc, setPredictRecomenedAc } = useAcContext();

  const handleRemoveAc = (id: string) => {
    // console.log("id", id);
    setPredictRecomenedAc(
      (prev) => prev && prev.filter((item) => item.id !== id)
    );
  };

  const handleScrollToForm = () => {
    const formElement = document.getElementById("calculatorForm");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="  flex md:justify-center flex-col md:items-center justify-start gap-4 md:mt-10 mt-10"
      id="acComparision"
    >
      <h1 className="text-base font-medium sm:text-center text-start">
        Here’s What Your AC Costs You! 💡
      </h1>
      <div className="flex sm:flex-row  flex-col gap-4 ">
        {predictRecomenedAc &&
          predictRecomenedAc
            .slice(0, 3)
            .map((data: ACUsageData, index: number) => (
              <div
                className=" relative border border-querternaryWhite rounded-[12px] px-3 py-[15px] flex gap-6 flex-col"
                key={index}
              >
                <div className="flex justify-between">
                  <div className="flex  flex-col gap-2">
                    <h1 className="text-primaryBlack text-sm font-semibold">
                      {/* LG 1 Ton split Ac, 5⭐ rating */}
                      {`${data.predictions.brand}  ${data.predictions.capacity}  Ton ${data.predictions.type},  ${data.predictions.starRating}⭐`}
                    </h1>
                    <p className="text-tertiaryGray text-sm font-medium">
                      {/* temperature at 20 - 22 C */}
                      {`Temperature  ${data.predictions.temperature}  C`}
                    </p>
                    <p className="text-tertiaryGray text-sm font-medium">
                      {` Used for ${data.predictions.totalUsagesHour} hr a day`}
                    </p>
                  </div>
                  <div className="flex  flex-col  items-end gap-[1px]">
                    <span className="text-[20px] leading-[39px] font-semibold">
                      {data.predictions.monthlyUnitConsumption}
                    </span>
                    <p className="text-lightGray text-sm font-medium">
                      Units/month
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-1">
                  <h1 className="text-[27px] leading-[51px] font-bold text-center">
                    ₹ {data.predictions.monthlyCost}
                  </h1>
                  <p className="text-sm font-medium">
                    Estimated Cost for 30 Days of Usage
                  </p>
                  <p className="text-sm font-medium text-tertiaryGray text-center">
                    {` ₹${data.predictions.unitPrice} per unit`}
                  </p>
                </div>

                <div className="flex  md:justify-between gap-5">
                  <div className=" bg-quinaryWhite p-3 rounded-[8px] md:w-[174px] w-full flex flex-col justify-start">
                    <h1 className="md:text-[20px] text-sm md:leading-[36px] font-bold">
                      ₹{data.predictions.dailyCost}
                    </h1>
                    <p className="md:text-sm text-xs font-medium text-quinaryGray ">
                      Estimated Cost per day
                    </p>
                  </div>
                  <div className="bg-quinaryWhite md:p-3 p-2 rounded-[8px] md:w-[174px] w-full ">
                    <h1 className="md:text-lg text-sm font-bold ">
                      ₹{data.predictions.yearlyCost}
                    </h1>
                    <p className="md:text-sm text-xs leading-[21px] font-medium text-quinaryGray ">
                      Estimated Cost for a year (*8 months)
                    </p>
                  </div>
                </div>

                <CircleX
                  className="absolute -top-4 -right-2 cursor-pointer text-senaryWhite rounded-full"
                  fill="red"
                  size={30}
                  onClick={() => handleRemoveAc(data?.id)}
                />
              </div>
            ))}
        {predictRecomenedAc && predictRecomenedAc.length < 3 && (
          <div
            className="lg:w-[214px]  md:h-auto border border-querternaryWhite
         p-3 rounded-[12px] flex justify-center items-center flex-col gap-[23px] "
          >
            <span className="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-senaryWhite">
              <span onClick={handleScrollToForm}>
                <Plus />
              </span>
            </span>
            <h2 className="text-xs leading-[18px] font-medium text-quinaryGray">
              Add to compare
            </h2>
          </div>
        )}
      </div>
      {/* <p className="text-sm font-medium text-quinaryGray text-center">
          Note: Annual consumption is calculated based on 8 months of typical AC
          usage during warmer months
        </p> */}
    </div>
  );
};
export default AcComparision;
