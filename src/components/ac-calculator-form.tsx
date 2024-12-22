import { useEffect, useState } from "react";
import {
  brands,
  electricity_rates,
  electricity_states,
  hours,
  temperature_preferences,
} from "../../data";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import ACCapacitySlider from "./ac-capacity-slider";
import { imagePath } from "@/constants/imagePath";

import { Label } from "./ui/label";
import { SearchableSelect } from "./searchable-select";
import usePredictAndRecommend from "@/hooks/use-predict-and-recomend-ac";

const url = import.meta.env.VITE_API_URL;

const AcCalculatorForm = () => {
  const [color, setColor] = useState("white");

  const [rating, setRating] = useState(0); // Selected rating
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedAcType, setSelectedAcType] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectTemperature, setSelectTemperature] = useState("");
  const [selectState, setSelectState] = useState("");
  const [selectHours, setSelectHours] = useState("");
  const [capacity, setCapacity] = useState<number>(1);
  const [stateUnitPrice, setStateUnitPrice] = useState<number>(0);

  const { fetchPrediction, loading } = usePredictAndRecommend({
    url: url as string,
    data: {
      brand: selectedBrand,
      capacity: capacity,
      starRating: rating,
      type: selectedAcType,
      temperature: selectTemperature,
      totalUsagesHour: Number(selectHours),
      state: selectState,
    },
    setHoverRating,
    setRating,
    setSelectedAcType,
    setSelectedBrand,
    setSelectTemperature,
    setSelectState,
    setSelectHours,
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
    changeColor();
  };
  const handleReset = () => {
    setSelectedBrand("");
    setSelectTemperature("");
    setSelectState("");
    setSelectHours("");
    setRating(0);
    setHoverRating(0);
    setSelectedAcType("");
    setCapacity(0.8);
  };
  const changeColor = () => {
    setColor("blue"); // Example usage of setColor
  };
  useEffect(() => {
    const unitPrice = electricity_rates.filter(
      (item) => item.state === selectState
    );
    setStateUnitPrice(unitPrice[0]?.unit_price);
  }, [selectState]);

  return (
    <section
      className="flex items-center  md:mt-[5%] mt-[5%] flex-col md:gap-9 gap-7 "
      id="calculatorForm"
    >
      <h1 className="text-primaryBlacktext-base font-medium md:text-center text-start ">
        Your Guide to Smarter AC Choices 🌟 Calculate and save on your bills
        today!
      </h1>
      <div className=" hidden  md:w-[773px] gap-[66px] md:flex">
        <div className="w-[352px]  flex flex-col gap-5">
          <div className="grid w-[352px] items-center gap-1.5">
            <Label htmlFor="brand">
              Brand <span className="text-red-700">*</span>
            </Label>
            <SearchableSelect
              options={brands}
              placeholder="Select Brand"
              selectedValue={selectedBrand}
              onSelect={setSelectedBrand}
            />
          </div>

          <div>
            <label htmlFor="" className="text-sm font-medium">
              Star Rating<span className="text-red-700">*</span>
            </label>
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
          <div className="grid w-[352px] items-center gap-1.5">
            <Label htmlFor="temperature">
              Temperature Preference <span className="text-red-700">*</span>
            </Label>
            <SearchableSelect
              options={temperature_preferences}
              placeholder="Select temperature"
              selectedValue={selectTemperature}
              onSelect={setSelectTemperature}
            />
          </div>

          <div className="grid w-[352px] items-center gap-1.5">
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
          </div>
        </div>

        <div className="w-[352px] flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[6px]">
            <p className="text-xs font-medium">
              AC Capacity in ton <span className="text-red-700">*</span>
            </p>
            <ACCapacitySlider setCapacity={setCapacity} capacity={capacity} />
          </div>
          <div className="flex flex-col gap-[6px]">
            <p>
              Ac Type<span className="text-red-700">*</span>
            </p>
            <div className="flex gap-[11px]">
              <div
                className={`w-[127px] p-[2px] border  ${
                  selectedAcType === "window"
                    ? " border-quaternaryBlack"
                    : "border-secondaryWhite "
                } rounded-[8px] flex items-center gap-1`}
                onClick={() => handleSelectAcType("windows AC")}
              >
                <div
                  className={`w-9 h-9 flex items-center justify-center
                 ${
                   selectedAcType === "windows AC"
                     ? " bg-primaryBlack"
                     : "bg-senaryWhite"
                 } py-[3px] px-[1px] rounded-[6px]`}
                >
                  <img
                    src={
                      color === "white"
                        ? imagePath.windowAc
                        : imagePath.darkWindowAc
                    }
                    alt=""
                    className="h-[13.14px] w-[17.74px]"
                  />
                </div>
                <span className="text-sm font-medium text-tertiaryBlack">
                  Window
                </span>
              </div>

              <div
                className={`w-[127px] p-[2px] border  ${
                  selectedAcType === "Split AC"
                    ? " border-quaternaryBlack"
                    : "border-secondaryWhite "
                } rounded-[8px] flex items-center gap-1`}
                onClick={() => handleSelectAcType("Split AC")}
              >
                <div
                  className={`w-9 h-9 flex items-center justify-center py-[3px] px-[1px]
                    ${
                      selectedAcType === "Split AC"
                        ? " bg-primaryBlack"
                        : "bg-senaryWhite"
                    }  rounded-[6px]`}
                >
                  <img
                    src={imagePath.splitAc}
                    alt=""
                    className="h-[13.14px] w-[17.74px]"
                  />
                </div>
                <span className="text-sm font-medium text-tertiaryBlack">
                  Split AC
                </span>
              </div>
            </div>
          </div>
          <div className="grid w-[352px] items-center gap-1.5">
            <Label htmlFor="hours">
              Hours of usage per day <span className="text-red-700">*</span>
            </Label>
            <SearchableSelect
              options={hours}
              placeholder="Select time"
              selectedValue={selectHours}
              onSelect={setSelectHours}
            />
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="md:hidden flex flex-col w-full">
        <div className="flex flex-col gap-5  w-full">
          <div className="flex flex-col gap-[6px] w-full">
            <Label htmlFor="brand">
              Brand <span className="text-red-700">*</span>
            </Label>
            <SearchableSelect
              options={brands}
              placeholder="Select Brand"
              selectedValue={selectedBrand}
              onSelect={setSelectedBrand}
            />
          </div>
          <div className="flex flex-col gap-[6px] w-full">
            <p className="text-xs font-medium">
              AC Capacity in ton <span className="text-red-700">*</span>
            </p>
            <ACCapacitySlider setCapacity={setCapacity} capacity={capacity} />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-sm font-medium">
              Star Rating <span className="text-red-700">*</span>
            </label>
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
          <div className="flex flex-col gap-[6px]">
            <p>
              Ac Type<span className="text-red-700">*</span>
            </p>
            <div className="flex gap-[11px]">
              <div
                className={`w-[127px] p-[2px] border  ${
                  selectedAcType === "window"
                    ? " border-quaternaryBlack"
                    : "border-secondaryWhite "
                } rounded-[8px] flex items-center gap-1`}
                onClick={() => handleSelectAcType("windows AC")}
              >
                <div
                  className={`w-9 h-9 flex items-center justify-center
                 ${
                   selectedAcType === "windows AC"
                     ? " bg-primaryBlack"
                     : "bg-senaryWhite"
                 } py-[3px] px-[1px] rounded-[6px]`}
                >
                  <img
                    src={
                      color === "white"
                        ? imagePath.windowAc
                        : imagePath.darkWindowAc
                    }
                    alt=""
                    className="h-[13.14px] w-[17.74px]"
                  />
                </div>
                <span className="text-sm font-medium text-tertiaryBlack">
                  Window
                </span>
              </div>

              <div
                className={`w-[127px] p-[2px] border  ${
                  selectedAcType === "Split AC"
                    ? " border-quaternaryBlack"
                    : "border-secondaryWhite "
                } rounded-[8px] flex items-center gap-1`}
                onClick={() => handleSelectAcType("Split AC")}
              >
                <div
                  className={`w-9 h-9 flex items-center justify-center py-[3px] px-[1px]
                    ${
                      selectedAcType === "Split AC"
                        ? " bg-primaryBlack"
                        : "bg-senaryWhite"
                    }  rounded-[6px]`}
                >
                  <img
                    src={imagePath.splitAc}
                    alt=""
                    className="h-[13.14px] w-[17.74px]"
                  />
                </div>
                <span className="text-sm font-medium text-tertiaryBlack">
                  Split AC
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[6px] w-full">
            <Label htmlFor="temperature">
              Temperature Preference <span className="text-red-700">*</span>
            </Label>
            <SearchableSelect
              options={temperature_preferences}
              placeholder="Select temperature"
              selectedValue={selectTemperature}
              onSelect={setSelectTemperature}
            />
          </div>
          <div className="flex flex-col gap-[6px] w-full">
            {/* <p className="text-xs font-medium">
              Hours of usage per day * <span className="text-red-700">*</span>
            </p> */}
            {/* <div
              id="usage-hours"
              className="flex gap-2 items-center justify-between rounded-[6px] border-[1px] border-tertiaryWhite p-2 w-full"
              aria-label="Hours of usage per day"
            >
              <span className="text-secondaryGray text-sm font-normal">
                8 hr
              </span>
              <Clock className="text-secondaryBlack" aria-hidden="true" />
            </div> */}
            <Label htmlFor="hours">
              Hours of usage per day <span className="text-red-700">*</span>
            </Label>
            <SearchableSelect
              options={hours}
              placeholder="Select time"
              selectedValue={selectHours}
              onSelect={setSelectHours}
            />
          </div>
          <div className="flex flex-col gap-[6px] w-full">
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
          </div>
        </div>
      </div>

      <div className="flex gap-5 ">
        <Button size={"lg"} variant={"outline"} onClick={handleReset}>
          Reset
        </Button>
        <Button size={"lg"} onClick={fetchPrediction} disabled={loading}>
          {loading && <Loader2 className="animate-spin" />}
          Calculate
        </Button>
      </div>
    </section>
  );
};

export default AcCalculatorForm;
