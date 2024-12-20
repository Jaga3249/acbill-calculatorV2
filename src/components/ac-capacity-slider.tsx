import React, { useState } from "react";

const ACCapacitySlider: React.FC = () => {
  const [value, setValue] = useState<number>(1); // Default value (1)
  const points: number[] = [0.8, 1, 1.2, 1.5, 2];

  const handleDrag = (event: React.MouseEvent<HTMLDivElement>) => {
    const slider = event.currentTarget; // The slider div
    const rect = slider.getBoundingClientRect();
    const offsetX = event.clientX - rect.left; // Click position relative to the slider
    const percentage = offsetX / rect.width; // Position as a percentage of the slider width

    // Set the value directly based on the percentage of the slider width
    const positionValue =
      percentage * (points[points.length - 1] - points[0]) + points[0];
    setValue(positionValue); // Update the slider value directly
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const slider = event.currentTarget;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = slider.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const percentage = offsetX / rect.width;

      const positionValue =
        percentage * (points[points.length - 1] - points[0]) + points[0];
      setValue(positionValue); // Update the slider value directly
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Calculate the position for the thumb based on the closest point
  const thumbPosition = (value: number) => {
    const closestPoint = points.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
    return (
      ((closestPoint - points[0]) / (points[points.length - 1] - points[0])) *
      100
    );
  };

  return (
    <div className="relative w-96 mx-auto mt-10">
      {/* Marks (Numbers above the slider) */}
      <div className="relative mb-2">
        {points.map((point, index) => (
          <span
            key={index}
            className="absolute transform -translate-x-1/2 text-gray-700 text-sm"
            style={{
              left: `${(index / (points.length - 1)) * 100}%`,
              top: "-20px",
            }}
          >
            {point}
          </span>
        ))}
      </div>

      {/* Slider Track */}
      <div
        className="relative h-1 bg-gray-300 rounded cursor-pointer"
        onClick={handleDrag}
        onMouseDown={handleMouseDown}
      >
        {/* Slider Points */}
        {points.map((point, index) => (
          <div
            key={index}
            className={`absolute top-1/2 w-4 h-4 border-2 rounded-full transform -translate-y-1/2 ${
              value === point
                ? "bg-black border-black"
                : "bg-white border-gray-400"
            }`}
            style={{
              left: `${(index / (points.length - 1)) * 100}%`,
            }}
          ></div>
        ))}

        {/* Slider Thumb */}
        <div
          className="absolute top-1/2 w-5 h-5 bg-black rounded-full transform -translate-y-1/2"
          style={{
            left: `${thumbPosition(value)}%`, // Align thumb exactly on the point
          }}
        ></div>
      </div>
    </div>
  );
};

export default ACCapacitySlider;
