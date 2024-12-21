import React, { useState } from "react";

type SliderPoint = {
  value: number;
  label: string;
};

const ACCapacitySlider: React.FC = () => {
  const points: SliderPoint[] = [
    { value: 0.8, label: "0.8" },
    { value: 1, label: "1" },
    { value: 1.2, label: "1.2" },
    { value: 1.5, label: "1.5" },
    { value: 2, label: "2" },
  ];

  const [active, setActive] = useState<number>(1);

  const handleClick = (value: number) => {
    setActive(value);
  };

  return (
    <div className="flex items-center w-72 ">
      {points.map((point, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            {/* Label */}
            <span className="mb-2 text-xs text-gray-700">{point.label}</span>
            {/* Point */}
            <div
              className={`h-4 w-4 rounded-full cursor-pointer flex items-center justify-center ${
                active === point.value
                  ? "bg-black text-white"
                  : "bg-white border-2 border-[#D9D9D9]"
              }`}
              onClick={() => handleClick(point.value)}
            ></div>
          </div>
          {/* Connecting Line */}
          {index < points.length - 1 && (
            <div className="flex-1 h-[2px] bg-[#D9D9D9] mt-6"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ACCapacitySlider;
