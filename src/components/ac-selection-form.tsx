import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import windowAc from "@/assets/window-ac.png";
import splitAc from "@/assets/split-ac.png";
import { Clock } from "lucide-react";
import { Button } from "./ui/button";

const AcSelectionForm = () => {
  const [rating, setRating] = useState(0); // Selected rating
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedAcType, setSelectedAcType] = useState("");

  const handleRatingClick = (rate: number) => {
    setRating(rate); // Set the clicked rating
  };

  const handleRatingHover = (rate: number) => {
    setHoverRating(rate); // Set the hovered rating
  };

  const handleRatingHoverLeave = () => {
    setHoverRating(0); // Reset hover state on mouse leave
  };
  const handleSelectAcType = (acType: string) => {
    setSelectedAcType((prevType) => (prevType === acType ? "" : acType));
  };
  console.log("selectedACType", selectedAcType);

  return (
    <section className="flex sm:items-center items-start sm:mt-[5%] mt-[5%] flex-col">
      <h1 className="text-primaryBlack text-base font-medium sm:text-center text-start sm:mb-10 mb-5">
        Your Guide to Smarter AC Choices 🌟 Calculate and save on your bills
        today!
      </h1>

      <form className="sm:w-[773px] w-full" aria-labelledby="ac-selection-form">
        <div className="flex flex-col gap-5">
          {/* AC Brand and Star Rating */}
          <div className="flex sm:items-center  sm:flex-row flex-col sm:gap-[64px] gap-2">
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor="ac-brand"
                className="text-sm font-medium leading-4"
              >
                AC Brand <span className="text-red-600">*</span>
              </label>
              <Select>
                <SelectTrigger
                  id="ac-brand"
                  className="sm:w-[352px]  outline-none"
                  aria-label="Select AC Brand"
                >
                  <SelectValue placeholder="LG" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lg">LG</SelectItem>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="hitachi">Hitachi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium leading-4">
                Star Rating <span className="text-red-600">*</span>
              </span>
              {/* Customized Rating Component */}
              <div className="flex space-x-2  -mt-3">
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
          </div>

          {/* Temperature Preference and AC Type */}
          <div className="flex sm:flex-row flex-col sm:gap-[64px] gap-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="temp-preference"
                className="text-sm font-medium leading-4"
              >
                Temperature Preference <span className="text-red-600">*</span>
              </label>
              <Select>
                <SelectTrigger
                  id="temp-preference"
                  className="sm:w-[352px] outline-none"
                  aria-label="Select Temperature Preference"
                >
                  <SelectValue placeholder="22-24°C" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="22-24">22-24°C</SelectItem>
                  <SelectItem value="25-27">25-27°C</SelectItem>
                  <SelectItem value="28-30">28-30°C</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <fieldset className="flex flex-col gap-2 ">
              <label className="text-sm font-medium leading-4">
                AC Type <span className="text-red-600">*</span>
              </label>
              <div
                className="flex space-x-4"
                role="radiogroup"
                aria-label="AC Type"
              >
                <label
                  className={`flex items-center justify-start
                 border-[1px]  rounded-[8px] gap-1 w-[127px] cursor-pointer ${
                   selectedAcType === "window"
                     ? "border-primaryBlack"
                     : "border-secondaryWhite"
                 }`}
                  onClick={() => handleSelectAcType("window")}
                >
                  <span
                    className={`flex justify-center items-center  h-9 w-9 py-1 px-[1px] rounded-[6px]
                     ${
                       selectedAcType === "window"
                         ? "bg-primaryBlack"
                         : "bg-senaryWhite"
                     }`}
                  >
                    <img
                      src={windowAc}
                      alt="Window Air Conditioner"
                      className="w-[21px] h-[15px]"
                    />
                  </span>
                  <span className="text-sm font-medium leading-4">
                    Window AC
                  </span>
                </label>

                <label
                  className={`flex items-center border-[1px] rounded-[8px] gap-1 w-[134px] cursor-pointer ${
                    selectedAcType === "split"
                      ? "border-primaryBlack"
                      : "border-secondaryWhite"
                  }`}
                  onClick={() => handleSelectAcType("split")}
                >
                  <span
                    className={`flex justify-center items-center  ${
                      selectedAcType === "split"
                        ? "bg-primaryBlack"
                        : "bg-senaryWhite"
                    } h-9 w-9 py-3 px-[1px] rounded-[6px]`}
                  >
                    <img
                      src={splitAc}
                      alt="Split Air Conditioner"
                      className="w-9 p-[1.5px]"
                    />
                  </span>
                  <span className="text-sm font-medium leading-4">
                    Split AC
                  </span>
                </label>
              </div>
            </fieldset>
          </div>

          {/* State and Hours of Usage */}
          <div className="flex sm:flex-row flex-col sm:gap-[64px] gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="state" className="text-sm font-medium leading-4">
                Choose your State <span className="text-red-600">*</span>
              </label>
              <Select>
                <SelectTrigger
                  id="state"
                  className="sm:w-[352px] outline-none"
                  aria-label="Select State"
                >
                  <SelectValue placeholder="West Bengal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="west-bengal">West Bengal</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label
                htmlFor="usage-hours"
                className="text-sm font-medium leading-4"
              >
                Hours of usage per day <span className="text-red-600">*</span>
              </label>
              <div
                id="usage-hours"
                className=" flex gap-2 items-center justify-between rounded-[6px] border-[1px] border-tertiaryWhite p-2"
                aria-label="Hours of usage per day"
              >
                <span className="text-secondaryGray text-sm font-normal">
                  8 hr
                </span>
                <Clock className="text-secondaryBlack" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-10 justify-center">
          <Button
            size="xl"
            variant="outline"
            type="reset"
            aria-label="Reset form"
          >
            Reset
          </Button>
          <Button size="xl" type="submit" aria-label="Calculate AC efficiency">
            Calculate
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AcSelectionForm;
