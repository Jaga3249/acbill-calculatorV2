import React from "react";
import { useSpring, animated } from "@react-spring/web";

type GaugeProps = {
  value: number; // Current value in hours
  max: number; // Maximum value (e.g., 12)
  label: string;
  color: string; // Color of the arc
};

const Gauge: React.FC<GaugeProps> = ({ value, max, label, color }) => {
  const angle = (value / max) * 180;

  // Animation for the gauge's rotation
  const props = useSpring({
    from: { rotate: 0 },
    to: { rotate: angle },
    config: { tension: 120, friction: 14 },
  });

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            viewBox="0 0 200 100"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#e5e7eb" /* Light gray for background */
              strokeWidth="20"
            />
            {/* Animated Foreground Arc */}
            <animated.path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke={color}
              strokeWidth="20"
              strokeDasharray="251.2"
              strokeDashoffset={props.rotate.to(
                (rotate) => 251.2 - (rotate / 180) * 251.2
              )}
              strokeLinecap="round"
            />
          </svg>
        </div>
        {/* Center Label */}
        <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-semibold">
          {value}hr
        </div>
      </div>
      <p className="mt-16 text-sm text-black font-medium">{label}</p>
    </div>
  );
};

export default Gauge;
