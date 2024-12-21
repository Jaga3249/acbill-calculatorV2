import React, { useState } from "react";
import { brands, electricity_rates } from "../../data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import windowAc from "@/assets/window-ac.png";
import splitAc from "@/assets/split-ac.png";
import { Clock } from "lucide-react";
import { Button } from "./ui/button";
import ACCapacitySlider from "./ac-capacity-slider";
import { imagePath } from "@/constants/imagePath";
import TimePicker from "./time-picker";

const AcCalculatorForm = () => {
  const [color, setClor] = useState("white");
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
    <section className="flex md:items-center items-start md:mt-[5%] mt-[5%] flex-col md:gap-9">
      <h1 className="text-primaryBlack text-base font-medium md:text-center text-start ">
        Your Guide to Smarter AC Choices 🌟 Calculate and save on your bills
        today!
      </h1>
      <div className="flex  md:flex-row flex-col w-[773px] md:gap-[66px] ">
        <div className="w-[352px] flex flex-col gap-5">
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="" className="text-sm font-medium">
              AC Brand <span className="text-red-700">*</span>
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {brands.map((item: brands, i: number) => (
                    <SelectItem value={item.value} key={i}>
                      {item.label}
                    </SelectItem>
                  ))}
                  {/* <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem> */}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="" className="text-sm font-medium">
              Star Rating *<span className="text-red-700">*</span>
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
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="" className="text-sm font-medium">
              Temperature Preference<span className="text-red-700">*</span>
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Temperature" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">16-22</SelectItem>
                  <SelectItem value="banana">20-22</SelectItem>
                  <SelectItem value="blueberry">24</SelectItem>
                  <SelectItem value="grapes">&gt;24</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="" className="text-sm font-medium">
              Choose your State<span className="text-red-700">*</span>
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a  city" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {electricity_rates.map(
                    (item: electricity_rates, i: number) => (
                      <SelectItem value={item.state} key={i}>
                        {item.state}
                      </SelectItem>
                    )
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-xs font-medium">
              *Cost per unit is ₹5.3 in your state{" "}
            </p>
          </div>
        </div>

        <div className="w-[352px] md:flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[6px]">
            <p className="text-xs font-medium">
              AC Capacity in ton <span className="text-red-700">*</span>
            </p>
            <ACCapacitySlider />
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
                onClick={() => handleSelectAcType("window")}
              >
                <div
                  className={`w-9 h-9 flex items-center justify-center
                 ${
                   selectedAcType === "window"
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
                  selectedAcType === "split"
                    ? " border-quaternaryBlack"
                    : "border-secondaryWhite "
                } rounded-[8px] flex items-center gap-1`}
                onClick={() => handleSelectAcType("split")}
              >
                <div
                  className={`w-9 h-9 flex items-center justify-center py-[3px] px-[1px]
                    ${
                      selectedAcType === "split"
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

          <div className="flex flex-col gap-[6px]">
            <p className="text-xs font-medium">
              Hours of usage per day * <span className="text-red-700">*</span>
            </p>
            <div
              id="usage-hours"
              className=" flex gap-2 items-center justify-between rounded-[6px] border-[1px] border-tertiaryWhite p-2"
              aria-label="Hours of usage per day"
            >
              {/* <TimePicker onChange={(time) => console.log(time)} /> */}
              <span className="text-secondaryGray text-sm font-normal">
                8 hr
              </span>
              <Clock className="text-secondaryBlack" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <Button size={"lg"} variant={"outline"}>
          Reset
        </Button>
        <Button size={"lg"}>Calculate</Button>
      </div>
    </section>
  );
};

export default AcCalculatorForm;
