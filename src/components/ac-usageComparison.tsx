// import { GaugeComponent } from "react-gauge-component";
import { imagePath } from "@/constants/imagePath";
import Gauge from "./graph";
import { ChatData } from "@/type/type";

const ACUsageComparison = ({ chatdata }: { chatdata: ChatData }) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="">
        <h1 className="text-base font-medium text-primaryBlack mb-4">
          Your Daily AC Usage vs. India’s Average 🌞
        </h1>
        <div className="flex w-full gap-4">
          {/* <div className=" w-[621px] border-primaryWhite flex border rounded-[12px]">
            <div className="flex flex-col justify-center items-center">
              <GaugeComponent
                type="semicircle"
                arc={{
                  width: 0.2,
                  padding: 0.005,
                  cornerRadius: 1,
                  // gradient: true,
                  subArcs: [
                    {
                      limit: 15,
                      color: "#EA4228",
                      showTick: true,
                      tooltip: {
                        text: "Too low temperature!",
                      },
                      onClick: () =>
                        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
                      onMouseMove: () =>
                        console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
                      onMouseLeave: () =>
                        console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
                    },
                    {
                      limit: 17,
                      color: "#F5CD19",
                      showTick: true,
                      tooltip: {
                        text: "Low temperature!",
                      },
                    },
                    {
                      limit: 28,
                      color: "#5BE12C",
                      showTick: true,
                      tooltip: {
                        text: "OK temperature!",
                      },
                    },
                    {
                      limit: 30,
                      color: "#F5CD19",
                      showTick: true,
                      tooltip: {
                        text: "High temperature!",
                      },
                    },
                    {
                      color: "#EA4228",
                      tooltip: {
                        text: "Too high temperature!",
                      },
                    },
                  ],
                }}
                pointer={{
                  color: "#345243",
                  length: 0.8,
                  width: 15,
                  // elastic: true,
                }}
                labels={{
                  valueLabel: { formatTextValue: (value) => value + "ºC" },
                  tickLabels: {
                    type: "outer",
                    defaultTickValueConfig: {
                      formatTextValue: (value: any) => value + "ºC",
                      style: { fontSize: 10 },
                    },
                    ticks: [{ value: 13 }, { value: 22.5 }, { value: 32 }],
                  },
                }}
                value={22.5}
                minValue={10}
                maxValue={35}
              />
              <p className="text-base font-medium">
                Average usage in India in a day
              </p>
            </div>
            <div className="flex flex-col  justify-center items-center">
              <GaugeComponent
                type="semicircle"
                arc={{
                  cornerRadius: 1,
                  nbSubArcs: 1,
                }}
                value={12}
                labels={{
                  valueLabel: { formatTextValue: (value) => value + " hr" },
                }}
              />
              <p className="text-base font-medium">You usage in a day</p>
            </div>
          </div> */}
          <div className="flex-1 flex justify-center items-center gap-8 p-8 border-[#c6c6c6] border rounded-md">
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
          <div className="w-[400px] flex flex-col justify-center items-center gap-4 p-3 border-[#C6C6C6] border rounded-md">
            <img
              src={imagePath.tree}
              className="w-[336.623px] h-[153.968px]"
              alt=""
            />
            <p className="text-sm text-[#797979] font-medium tracking-wider leading-6">
              Your monthly usage of{" "}
              <span className="text-[#262626]">180 units</span> produces{" "}
              <span className="text-[#FC5D5D]">165.6 kg of CO₂</span>, needing
              <span className="text-[#262626]">95 trees</span> a year to offset.
              Switching to an efficient appliance can cut this to{" "}
              <span className="text-[#7CAF00]">
                63 trees—saving energy and money!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ACUsageComparison;
