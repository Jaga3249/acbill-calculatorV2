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
import { Modal } from "./modal";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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

  return (
    <section
      className="flex items-center  md:mt-[2%] mt-[5%] flex-col md:gap-9 gap-7 "
      id="calculatorForm"
    >
      <h1 className="text-primaryBlacktext-base font-medium md:text-center text-start select-text ">
        Your Guide to Smarter AC Choices 🌟 Calculate your AC consumption and
        save on your bills today!
      </h1>
      <div className=" hidden   lg:gap-[66px] md:gap-20 md:flex">
        <div className=" flex flex-col gap-5">
          <div className="grid  items-center gap-1.5 ">
            <Label htmlFor="brand">
              Ac Brand <span className="text-red-700">*</span>
            </Label>
            <Select
              value={selectedBrand}
              onValueChange={(value) => setSelectedBrand(value)}
            >
              <SelectTrigger className="md:w-[352px] w-full">
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

          <div className="-mt-2">
            <Label htmlFor="">
              Star Rating<span className="text-red-700">*</span>
            </Label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`cursor-pointer text-4xl flex  ${
                    hoverRating >= star || rating >= star
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => handleRatingHover(star)}
                  onMouseLeave={handleRatingHoverLeave}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          {/* <div className="grid w-[352px] items-center gap-1.5">
            <Label htmlFor="temperature">
              Temperature Preference <span className="text-red-700">*</span>
            </Label>
          
            <Select
              value={selectTemperature}
              onValueChange={(value) => setSelectTemperature(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select temperature" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {temperature_preferences.map((item: Option) => (
                    <SelectItem key={item.label} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div> */}

          {/* <div className="grid w-[352px] items-center gap-1.5">
            <Label htmlFor="state">
              {" "}
              Choose your State <span className="text-red-700">*</span>
            </Label>
            <SearchableSelect
              options={electricity_states}
              placeholder="Select state"
              selectedValue={selectState}
              onSelect={setSelectState}
            />
            {selectState && (
              <p className="text-xs font-medium">
                {`  *Cost per unit is ₹${stateUnitPrice} in your state`}
              </p>
            )}
          </div> */}
        </div>

        <div className=" flex flex-col  gap-5">
          <div className="flex flex-col gap-[9px] h-[60px]  ">
            <Label>
              AC Capacity in ton <span className="text-red-700">*</span>
            </Label>
            <ACCapacitySlider setCapacity={setCapacity} capacity={capacity} />
          </div>
          <div className="flex flex-col gap-[6px] -mt-1">
            <Label>
              Ac Type<span className="text-red-700">*</span>
            </Label>
            <div className="flex gap-[11px]">
              <div
                className={`w-[127px] h-[37px] px-[2px] border cursor-pointer  ${
                  selectedAcType === "Split AC"
                    ? " border-quaternaryBlack"
                    : "border-secondaryWhite "
                } rounded-[8px] flex items-center gap-1`}
                onClick={() => handleSelectAcType("Split AC")}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center py-[3px] px-[1px]
                    ${
                      selectedAcType === "Split AC"
                        ? " bg-primaryBlack"
                        : "bg-senaryWhite"
                    }  rounded-[6px]`}
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
                <span className="text-sm font-medium text-tertiaryBlack">
                  Split AC
                </span>
              </div>
              <div
                className={`w-[127px] h-[37px] px-[2px] border cursor-pointer  ${
                  selectedAcType === "windows"
                    ? " border-quaternaryBlack"
                    : "border-secondaryWhite "
                } rounded-[8px] flex items-center gap-1`}
                onClick={() => handleSelectAcType("windows")}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center
                 ${
                   selectedAcType === "windows"
                     ? " bg-primaryBlack"
                     : "bg-senaryWhite"
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
                <span className="text-sm font-medium text-tertiaryBlack">
                  Window
                </span>
              </div>
            </div>
          </div>
          {/* <div className="grid w-[352px] items-center gap-1.5">
            <Label htmlFor="hours">
              Hours of usage per day <span className="text-red-700">*</span>
            </Label>
            
            {
              <Select
                value={selectHours}
                onValueChange={(value) => setSelectHours(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select hour" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {hours?.map((item) => (
                      <SelectItem key={item.label} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            }
          </div> */}
        </div>
      </div>

      {/* mobile view */}
      <div className="md:hidden flex flex-col w-full">
        <div className="flex flex-col gap-5  w-full">
          <div className="flex flex-col gap-[6px] w-full">
            <Label htmlFor="brand">
              Brand <span className="text-red-700">*</span>
            </Label>
            <Select
              value={selectedBrand}
              onValueChange={(value) => setSelectedBrand(value)}
            >
              <SelectTrigger className=" w-full">
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
          <div className="flex flex-col gap-[6px] w-full">
            <Label>
              AC Capacity in ton <span className="text-red-700">*</span>
            </Label>
            <ACCapacitySlider setCapacity={setCapacity} capacity={capacity} />
          </div>
          <div className="w-full">
            <Label>
              Star Rating <span className="text-red-700">*</span>
            </Label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`cursor-pointer text-4xl flex ${
                    hoverRating >= star || rating >= star
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => handleRatingHover(star)}
                  onMouseLeave={handleRatingHoverLeave}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[6px] -mt-1">
            <Label>
              Ac Type<span className="text-red-700">*</span>
            </Label>
            <div className="flex gap-[11px]">
              <div
                className={`w-[127px] h-[37px] px-[2px] border cursor-pointer  ${
                  selectedAcType === "Split AC"
                    ? " border-quaternaryBlack"
                    : "border-secondaryWhite "
                } rounded-[8px] flex items-center gap-1`}
                onClick={() => handleSelectAcType("Split AC")}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center py-[3px] px-[1px]
                    ${
                      selectedAcType === "Split AC"
                        ? " bg-primaryBlack"
                        : "bg-senaryWhite"
                    }  rounded-[6px]`}
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
                <span className="text-sm font-medium text-tertiaryBlack">
                  Split AC
                </span>
              </div>
              <div
                className={`w-[127px] h-[37px] px-[2px] border cursor-pointer  ${
                  selectedAcType === "windows"
                    ? " border-quaternaryBlack"
                    : "border-secondaryWhite "
                } rounded-[8px] flex items-center gap-1`}
                onClick={() => handleSelectAcType("windows")}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center
                 ${
                   selectedAcType === "windows"
                     ? " bg-primaryBlack"
                     : "bg-senaryWhite"
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
                <span className="text-sm font-medium text-tertiaryBlack">
                  Window
                </span>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col gap-[6px] w-full">
            <Label htmlFor="temperature">
              Temperature Preference <span className="text-red-700">*</span>
            </Label>
            <Select
              value={selectTemperature}
              onValueChange={(value) => setSelectTemperature(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select temperature" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {temperature_preferences.map((item: Option) => (
                    <SelectItem key={item.label} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div> */}
          {/* <div className="flex flex-col gap-[6px] w-full">
            
            <Label htmlFor="hours">
              Hours of usage per day <span className="text-red-700">*</span>
            </Label>
            {
              <Select
                value={selectHours}
                onValueChange={(value) => setSelectHours(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select hour" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {hours?.map((item) => (
                      <SelectItem key={item.label} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            }
          </div> */}
          {/* <div className="flex flex-col gap-[6px] w-full">
            <Label htmlFor="state">
              {" "}
              Choose your State <span className="text-red-700">*</span>
            </Label>
            <SearchableSelect
              options={electricity_states}
              placeholder="Select state"
              selectedValue={selectState}
              onSelect={setSelectState}
            />
            {selectState && (
              <p className="text-xs font-medium">
                {`  *Cost per unit is ₹${stateUnitPrice} in your state`}
              </p>
            )}
          </div> */}
        </div>
      </div>

      <div className="flex gap-5 ">
        {/* <Button size={"lg"} variant={"outline"} onClick={handleReset}>
          Reset
        </Button> */}
        <Button
          size={"lg"}
          onClick={() => {
            if (predictRecomenedAc?.length === 1 && !isContactSubmit) {
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
        <p className="text-xs font-normal text-gray-900 text-left ">
          * Note: Calculations assume 8 hours of daily usage at 24°C with an
          electricity rate of ₹7 per unit. Actual costs may vary based on usage
          and local rates.
        </p>
      )}

      <Modal open={open} setOpen={setOpen} fetchPrediction={fetchPrediction} />
    </section>
  );
};

export default AcCalculatorForm;
