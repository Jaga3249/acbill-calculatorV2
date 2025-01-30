import { useState } from "react";
import { brands } from "../../data";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import ACCapacitySlider from "./ac-capacity-slider";
import { imagePath } from "@/constants/imagePath";
//
import { Label } from "./ui/label";
// import { SearchableSelect } from "./searchable-select";
import usePredictAndRecommend from "@/hooks/use-predict-and-recomend-ac";
import { useAcContext } from "@/context/use-context";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { LeadModal } from "./lead-modal";
import { DrawerDemo } from "./bottom-drawer";
import { useIsMobile } from "@/utils/check-mobile";

const url = import.meta.env.VITE_API_URL;

const AcCalculatorForm = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0); // Selected rating
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedAcType, setSelectedAcType] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  // const [selectTemperature, setSelectTemperature] = useState("");
  // const [selectState, setSelectState] = useState("");
  // const [selectHours, setSelectHours] = useState("");
  const [capacity, setCapacity] = useState<number>(0);
  // const [stateUnitPrice, setStateUnitPrice] = useState<number>(0);
  const { predictRecomenedAc, isContactSubmit } = useAcContext();

  const { fetchPrediction, loading } = usePredictAndRecommend({
    url: url as string,
    data: {
      brand: selectedBrand,
      capacity: capacity,
      starRating: rating,
      type: selectedAcType,
      // temperature: selectTemperature,
      // totalUsagesHour: Number(selectHours),
      // state: selectState,
    },
    setHoverRating,
    setRating,
    setSelectedAcType,
    setSelectedBrand,

    setCapacity,
  });
  const isMobile = useIsMobile();
  const handleRatingClick = (rate: number) => {
    setRating(rate); // Set the clicked rating
  };

  const handleRatingHover = (rate: number) => {
    setHoverRating(rate); // Set the hovered rating
  };
  //
  const handleRatingHoverLeave = () => {
    setHoverRating(0); // Reset hover state on mouse leave
  };
  const handleSelectAcType = (acType: string) => {
    setSelectedAcType((prevType) => (prevType === acType ? "" : acType));
  };
  // const handleReset = () => {
  //   setSelectedBrand("");
  //   setSelectTemperature("");
  //   setSelectState("");
  //   setSelectHours("");
  //   setRating(0);
  //   setHoverRating(0);
  //   setSelectedAcType("");
  //   setCapacity(0);
  // };

  // useEffect(() => {
  //   const unitPrice = electricity_rates.filter(
  //     (item) => item.state === selectState
  //   );
  //   setStateUnitPrice(unitPrice[0]?.unit_price / 100);
  // }, [selectState]);

  // useEffect(() => {
  //   if (predictRecomenedAc && predictRecomenedAc?.length > 0) {
  //     const acComparision = document.getElementById("acComparision");
  //     if (acComparision) {
  //       acComparision.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //       console.log("Scrolled to Comparison Section");
  //     }
  //   }
  // }, [predictRecomenedAc]);

  return (
    <>
      <div className="w-full flex flex-col gap-3 lg:flex-row mt-8">
        {/* left section */}
        <div className="w-[386px] flex flex-col justify-center gap-[11px]">
          <h1 className="text-[#081747] font-semibold text-[29px] leading-[43px]">
            Calculate Your AC’s Energy Costs in Seconds!
          </h1>
          <p className="text-lightGray font-medium text-[20px] leading-[30px] md:max-w-[332px]">
            Take charge of your electricity bill, know exactly what your AC
            costs you.
          </p>
        </div>

        {/* right section */}
        <div className="flex-1 w-full bg-[#081747] p-5 rounded-xl flex flex-col gap-4 sm:gap-6">
          <p className="text-white sm:text-base text-[14px] font-semibold">
            Enter the required data to calculate your AC bill
          </p>
          <div className="flex flex-col sm:flex-row sm:gap-[50px] gap-4 justify-between">
            <div className="flex-1 grid items-center gap-1.5 ">
              <Label htmlFor="brand" className="text-white">
                AC Brand <span className="text-red-700">*</span>
              </Label>
              <Select
                value={selectedBrand}
                onValueChange={(value) => setSelectedBrand(value)}
              >
                <SelectTrigger className="w-full md:w-[325px]">
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {brands?.map((item) => (
                      <SelectItem key={item.label} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 flex flex-col gap-[9px] h-[60px]">
              <Label className="text-white">
                AC Capacity in ton <span className="text-red-700">*</span>
              </Label>
              <ACCapacitySlider setCapacity={setCapacity} capacity={capacity} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-[75px] gap-4 justify-between">
            <div className="flex-1 -mt-2">
              <Label htmlFor="" className="text-white">
                Star Rating <span className="text-red-700">*</span>
              </Label>
              <div className="flex space-x-2 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer text-4xl ${
                      hoverRating >= star || rating >= star
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => handleRatingHover(star)}
                    onMouseLeave={handleRatingHoverLeave}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="29"
                      viewBox="0 0 31 29"
                      fill="none"
                    >
                      <path
                        d="M15.5 0L20.5109 8.60313L30.2414 10.7102L23.6078 18.1344L24.6107 28.0398L15.5 24.025L6.38933 28.0398L7.39224 18.1344L0.758624 10.7102L10.4891 8.60313L15.5 0Z"
                        fill={
                          hoverRating >= star || rating >= star
                            ? "#FDB33B"
                            : "#3F518C"
                        }
                      />
                    </svg>
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[6px] flex-1">
              <Label className="text-white">
                AC Type <span className="text-red-700">*</span>
              </Label>
              <div className="flex gap-[11px] w-full">
                <div
                  className={`flex-1 h-[37px] px-[2px] border cursor-pointer ${
                    selectedAcType === "windows"
                      ? "bg-white"
                      : "border-[#3F518C] border"
                  } rounded-[8px] flex items-center gap-1`}
                  onClick={() => handleSelectAcType("windows")}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center ${
                      selectedAcType === "windows"
                        ? "bg-[#0067F4]"
                        : "bg-[#3F518C]"
                    } py-[3px] px-[1px] rounded-[6px]`}
                  >
                    <img
                      src={
                        selectedAcType === "windows"
                          ? imagePath.darkWindowAc
                          : imagePath.windowAc
                      }
                      alt=""
                      className="h-[13.14px] w-[17.74px]"
                    />
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      selectedAcType === "windows" ? "text-black" : "text-white"
                    }`}
                  >
                    Window
                  </span>
                </div>

                <div
                  className={`flex-1 h-[37px] px-[2px] border cursor-pointer ${
                    selectedAcType === "Split AC"
                      ? "bg-white"
                      : "border-[#3F518C] border"
                  } rounded-[8px] flex items-center gap-1`}
                  onClick={() => handleSelectAcType("Split AC")}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center ${
                      selectedAcType === "Split AC"
                        ? "bg-[#0067F4]"
                        : "bg-[#3F518C]"
                    } py-[3px] px-[1px] rounded-[6px]`}
                  >
                    <img
                      src={
                        selectedAcType === "Split AC"
                          ? imagePath.darksplitAc
                          : imagePath.splitAc
                      }
                      alt=""
                      className="h-[13.14px] w-[17.74px]"
                    />
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      selectedAcType === "Split AC"
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    Split AC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-3">
        <Button
          className="bg-[#0067F4] hover:bg-[#0067F4] p-[11px] sm:w-[134px] w-full h-[44px] rounded-[12px]"
          onClick={() => {
            if (
              predictRecomenedAc &&
              predictRecomenedAc?.length === 1 &&
              !isContactSubmit
            ) {
              setOpen(true);
            } else {
              fetchPrediction();
            }
          }}
          disabled={loading || predictRecomenedAc?.length === 3}
        >
          {loading && <Loader2 className="animate-spin" />}
          Calculate
        </Button>
      </div>
      {predictRecomenedAc && predictRecomenedAc?.length > 0 && (
        <p className=" hidden sm:blocktext-xs font-normal text-gray-900 text-left ">
          * Note: Calculations assume 8 hours of daily usage at 24°C with an
          electricity rate of ₹7 per unit. Actual costs may vary based on usage
          and local rates.
        </p>
      )}
      {isMobile ? (
        <DrawerDemo
          open={open}
          setOpen={setOpen}
          fetchPrediction={fetchPrediction}
        />
      ) : (
        <LeadModal
          open={open}
          setOpen={setOpen}
          fetchPrediction={fetchPrediction}
        />
      )}
    </>
  );
};

export default AcCalculatorForm;
