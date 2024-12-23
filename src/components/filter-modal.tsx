import React, { useEffect, useState } from "react";
import { brands } from "../../data";
import { Label } from "./ui/label";
import ACCapacitySlider from "./ac-capacity-slider";
import { imagePath } from "@/constants/imagePath";
import { SearchableSelectForFilter } from "./searchable-filter-select";
import { Button } from "./ui/button";
import { Product } from "@/type/type";

interface FilterModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  updatedProducts: Product[];
  selectedBrand: string;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string>>;
  capacity: number;
  setCapacity: React.Dispatch<React.SetStateAction<number>>;
  selectedAcType: string;
  setSelectedAcType: React.Dispatch<React.SetStateAction<string>>;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}
const FilterModal = ({
  isOpen,
  setIsOpen,
  setProducts,
  updatedProducts,
  selectedBrand,
  setSelectedBrand,
  capacity,
  setCapacity,
  selectedAcType,
  setSelectedAcType,
  rating,
  setRating,
}: FilterModalProps) => {
  const [color, setColor] = useState("white");

  const [hoverRating, setHoverRating] = useState(0);
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
  const changeColor = () => {
    setColor("blue"); // Example usage of setColor
  };

  const handleFilter = () => {
    // console.log(selectedAcType, selectedBrand, capacity, rating);
    if (selectedAcType || selectedBrand || capacity || rating) {
      const filteredProducts = updatedProducts.filter((product: Product) => {
        return (
          (selectedAcType ? product.type === selectedAcType : true) &&
          (selectedBrand ? product.brand === selectedBrand : true) &&
          (capacity ? product.capacity === capacity : true) &&
          (rating ? product.starRating === rating : true)
        );
      });
      setProducts(filteredProducts);
      setIsOpen(false);
    }
  };

  const handleReset = () => {
    setSelectedAcType("");
    setSelectedBrand("");
    setCapacity(0);
    setRating(0);
  };

  // useEffect(() => {
  //   if ((!isOpen && selectedAcType) || selectedBrand || capacity || rating) {
  //     handleFilter();
  //   }
  // }, [selectedBrand, capacity, rating, selectedAcType]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-96 p-3 gap-10 shadow-lg relative">
            <div className="flex justify-between items-center">
              {/* Modal Content */}
              <h2 className="text-xl font-semibold ">Filter by</h2>
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className=" text-gray-500 hover:text-black"
              >
                ✖
              </button>
            </div>

            <div className="p-6 flex flex-col gap-[10px]">
              {/* Dropdown */}
              <div className="">
                <div className="grid w-[352px] items-center gap-1.5">
                  <Label htmlFor="brand">
                    Brand <span className="text-red-700">*</span>
                  </Label>
                  <SearchableSelectForFilter
                    options={brands}
                    placeholder="Select Brand"
                    selectedValue={selectedBrand}
                    onSelect={setSelectedBrand}
                  />
                </div>
              </div>

              {/* Slider */}
              <div className="">
                <p className="text-xs font-medium">
                  AC Capacity in ton <span className="text-red-700">*</span>
                </p>
                <ACCapacitySlider
                  setCapacity={setCapacity}
                  capacity={capacity}
                />
              </div>

              {/* Star Rating */}
              <div className="">
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

              {/* AC Type */}
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
                    onClick={() => handleSelectAcType("Window")}
                  >
                    <div
                      className={`w-9 h-9 flex items-center justify-center
                            ${
                              selectedAcType === "Window"
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
            </div>
            {/* Buttons */}
            <div className="flex justify-between">
              <Button
                className="py-[10px] px-[16px] rounded-[12px] bg-septenaryWhite "
                variant={"outline"}
                onClick={handleReset}
              >
                Reset filter
              </Button>
              <Button className="py-[10px] px-[16px]" onClick={handleFilter}>
                Apply
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterModal;
