import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const BottomCarosel = () => {
  // Sample data for the carousel
  const carouselItems = [
    "Set your AC temperature to 24-26°C for optimal cooling and energy efficiency, saving up to 10% on your electricity bill!",
    "Switch off lights when not in use to save energy and reduce electricity costs.",
    "Use energy-efficient appliances to save up to 30% on your monthly utility bills.",
    "Seal windows and doors properly to prevent air leaks and reduce cooling costs.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle left button click (previous item)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  // Handle right button click (next item)
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mx-28 px-10 flex flex-col gap-7 mt-10">
      <h1 className="text-base font-medium text-center text-primaryBlack">
        Want to lower your bills? Check out our energy-saving tips! 🛠
      </h1>
      <div
        className="text-sm font-medium text-center text-primaryBlack border border-querternaryWhite
          rounded-[12px] py-[10px] px-[50px] h-[138px] flex justify-center items-center"
      >
        {carouselItems[currentIndex]}
      </div>
      <div className="flex justify-center items-center gap-10 mt-4">
        <ChevronLeft onClick={handlePrev} className="cursor-pointer" />
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ChevronRight onClick={handleNext} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default BottomCarosel;
