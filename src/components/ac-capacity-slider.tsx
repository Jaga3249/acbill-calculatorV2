import React, { useState } from 'react';

type ACCapacitySliderProps = {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
};

const ACCapacitySlider: React.FC<ACCapacitySliderProps> = ({
  min = 0.8,
  max = 2,
  step = 0.1,
  defaultValue = 1,
}) => {
  const [value, setValue] = useState<number>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.target.value));
  };

  return (
    <div className="w-full max-w-md mx-auto text-center font-sans">
      <label htmlFor="ac-slider" className="text-lg font-medium mb-2 block">
        AC Capacity in ton<span className="text-red-500">*</span>
      </label>
      <div className="relative w-full mt-4">
        <input
          type="range"
          id="ac-slider"
          className="w-full h-1 bg-gray-300 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-black"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
        />
        <div className="flex justify-between mt-2">
          {[0.8, 1, 1.2, 1.5, 2].map((mark) => (
            <div key={mark} className="text-sm text-gray-500">
              {mark}
            </div>
          ))}
        </div>
        <div className="relative mt-1">
          {[0.8, 1, 1.2, 1.5, 2].map((mark) => (
            <div
              key={mark}
              className={`absolute w-3 h-3 bg-white border-2 rounded-full ${value === mark ? 'bg-black border-black' : 'border-gray-300'}`}
              style={{ left: `${((mark - min) / (max - min)) * 100}%`, transform: 'translateX(-50%)' }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ACCapacitySlider;

// Tailwind CSS used for styling. Exact UI alignment and spacing are handled using Tailwind classes.
