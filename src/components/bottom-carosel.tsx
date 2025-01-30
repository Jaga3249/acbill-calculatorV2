import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const BottomCarousel = () => {
  // Sample data for the carousel
  const carouselItems = [
    "Set your AC temperature to 24-26°C for optimal cooling and energy efficiency, saving up to 10% on your electricity bill!",
    "Switch off lights when not in use to save energy and reduce electricity costs.",
    "Use energy-efficient appliances to save up to 30% on your monthly utility bills.",
    // "Seal windows and doors properly to prevent air leaks and reduce cooling costs.",
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

  // Handle dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col gap-7 mt-10">
      <h1 className="text-base font-medium text-center text-primaryBlack select-text">
        Want to lower your bills? Check out our energy-saving tips! 🛠
      </h1>
      <div
        className="text-sm font-medium text-center text-primaryBlack border border-querternaryWhite
        rounded-[12px] py-[10px] px-[50px] h-[138px] flex justify-center items-center select-text"
      >
        {carouselItems[currentIndex]}
      </div>
      <div className="flex justify-center items-center gap-8 mt-4">
        {/* Left button */}
        <ChevronLeft
          onClick={handlePrev}
          className="cursor-pointer"
          size={20}
        />

        {/* Dots */}
        <div className="flex gap-2">
          {carouselItems.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-[#0067F4]" : "bg-gray-300"
              }`}
              style={{ pointerEvents: "none" }} // Prevents dots from blocking selection
            ></div>
          ))}
        </div>

        {/* Right button */}
        <ChevronRight
          onClick={handleNext}
          className="cursor-pointer"
          size={20}
        />
      </div>
    </div>
  );
};

export default BottomCarousel;
