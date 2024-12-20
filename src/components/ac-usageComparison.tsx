import { Colors } from "@/constants/color";
import GaugeChart from "react-gauge-chart";

const ACUsageComparison = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-[1030px]">
        <h1 className="text-base font-medium text-primaryBlack">
          Your Daily AC Usage vs. India’s Average 🌞
        </h1>
        <div className="flex">
          <div className=" h-[200px] border-primaryWhite flex border rounded-[12px]">
            <div className="flex flex-col justify-center items-center">
              {/* <GaugeChart
                id="gauge-chart1"
                nrOfLevels={2} // Number of color segments
                colors={[Colors.colorOne, Colors.colorTwo]} // Two color segments
                textColor={Colors.colorThree} // Text color
                formatTextValue={(value) => `${value}hrs`} // Text format
                percent={0.08} // Percentage value
              /> */}
              <GaugeChart
                id="gauge-chart1"
                nrOfLevels={2} // Two levels for two colors
                colors={["#ff0000", "#00ff00"]} // First color (Red), second color (Green)
                textColor="#ffffff" // Text color (White)
                formatTextValue={(value) => `${value}hrs`} // Custom text for value
                percent={0.5} // 50% for a joined effect with the two colors
                animate={true} // Optional: Add animation for smooth effect
              />

              <p className="text-base font-medium">
                Average usage in India in a day
              </p>
            </div>
            <div className="flex flex-col  justify-center items-center">
              <GaugeChart
                id="gauge-chart2"
                nrOfLevels={2}
                colors={[Colors.colorOne, Colors.colorTwo]}
                textColor={Colors.colorThree}
                formatTextValue={(value) => `${value}hrs`}
                percent={0.08}
              />
              <p className="text-base font-medium">You usage in a day</p>
            </div>
          </div>
          <div className="w-[400px] border-2">1</div>
        </div>
      </div>
    </div>
  );
};
export default ACUsageComparison;
