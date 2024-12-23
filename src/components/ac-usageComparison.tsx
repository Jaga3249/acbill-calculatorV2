// import { GaugeComponent } from "react-gauge-component";
import { imagePath } from "@/constants/imagePath";
import Gauge from "./graph";
import { ChatData } from "@/type/type";

const ACUsageComparison = ({ chatdata }: { chatdata: ChatData }) => {
  return (
    <div className="flex flex-col justify-center md:items-center mt-10 w-full">
      <h1 className="text-base font-medium text-primaryBlack mb-4">
        Your Daily AC Usage vs. India’s Average 🌞
      </h1>
      <div className="flex flex-col md:flex-row md:justify-center w-full gap-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 border-[#c6c6c6] border rounded-md">
          <Gauge
            value={chatdata.userHourlyUsage || 0}
            max={12}
            label="Average usage in India in a day"
            color="#f59e0b"
          />
          <Gauge
            value={chatdata.averageUserHourlyUsage || 0}
            max={12}
            label="You usage in a day"
            color="#ef4444"
          />
        </div>
        <div className="md:max-w-[400px] flex flex-col justify-center items-center gap-4 p-3 border-[#C6C6C6] border rounded-md">
          <img
            src={imagePath.tree}
            className="w-[336.623px] h-[153.968px]"
            alt=""
          />
          <p className="text-sm text-[#797979] font-medium tracking-wider leading-6">
            Your monthly usage of{" "}
            <span className="text-[#262626]">180 units</span> produces{" "}
            <span className="text-[#FC5D5D]">165.6 kg of CO₂</span>, needing
            <span className="text-[#262626]"> 95 trees</span> a year to offset.
            Switching to an efficient appliance can cut this to{" "}
            <span className="text-[#7CAF00]">
              63 trees—saving energy and money!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ACUsageComparison;
