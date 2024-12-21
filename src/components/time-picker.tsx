import React, { useState } from "react";

type TimePickerProps = {
  onChange: (time: string) => void;
  initialTime?: string;
};

const TimePicker: React.FC<TimePickerProps> = ({ onChange, initialTime }) => {
  const [hour, setHour] = useState<string>(initialTime?.split(":")[0] || "00");
  const [minute, setMinute] = useState<string>(
    initialTime?.split(":")[1] || "00"
  );

  const handleTimeChange = () => {
    const time = `${hour}:${minute}`;
    onChange(time);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Hour Dropdown */}
      <select
        value={hour}
        onChange={(e) => {
          setHour(e.target.value);
          handleTimeChange();
        }}
        className="border rounded p-2 bg-white"
      >
        {Array.from({ length: 24 }, (_, i) => (
          <option key={i} value={String(i).padStart(2, "0")}>
            {String(i).padStart(2, "0")}
          </option>
        ))}
      </select>

      <span className="text-lg">:</span>

      {/* Minute Dropdown */}
      <select
        value={minute}
        onChange={(e) => {
          setMinute(e.target.value);
          handleTimeChange();
        }}
        className="border rounded p-2 bg-white"
      >
        {Array.from({ length: 60 }, (_, i) => (
          <option key={i} value={String(i).padStart(2, "0")}>
            {String(i).padStart(2, "0")}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimePicker;
