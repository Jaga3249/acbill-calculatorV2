import React, { useState } from "react";

const SliderWithMarks: React.FC = () => {
  // State for the slider's current value
  const [value, setValue] = useState<number>(1);

  // Marks on the slider
  const marks: number[] = [0.8, 1, 1.2, 1.5, 2];

  // Handle slider value change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(parseFloat(event.target.value));
  };

  return (
    <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
      {/* Slider Wrapper */}
      <div style={{ position: "relative", height: "50px" }}>
        {/* Full Track */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            width: "100%",
            height: "2px",
            backgroundColor: "#e0e0e0",
            transform: "translateY(-50%)",
          }}
        ></div>

        {/* Active Track */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            width: `${((value - 0.8) / 1.2) * 100}%`,
            height: "2px",
            backgroundColor: "black",
            transform: "translateY(-50%)",
          }}
        ></div>

        {/* Marks */}
        {marks.map((mark, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: "50%",
              left: `${((mark - 0.8) / 1.2) * 100}%`,
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            {/* Dot */}
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: mark === value ? "black" : "#e0e0e0",
                borderRadius: "50%",
                marginBottom: "5px",
              }}
            ></div>
            {/* Label */}
            <span
              style={{
                fontSize: "12px",
                color: mark === value ? "black" : "#b0b0b0",
                fontWeight: mark === value ? "bold" : "normal",
              }}
            >
              {mark}
            </span>
          </div>
        ))}
      </div>

      {/* Slider Input */}
      <input
        type="range"
        min="0.8"
        max="2"
        step="0.1"
        value={value}
        onChange={handleChange}
        style={{
          width: "100%",
          height: "40px",
          background: "transparent",
          appearance: "none",
          position: "relative",
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default SliderWithMarks;
