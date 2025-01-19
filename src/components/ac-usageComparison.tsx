// import { GaugeComponent } from "react-gauge-component";
import { imagePath } from "@/constants/imagePath";
// import Gauge from "./graph";
import { ACUsageData } from "@/type/type";
// import { Button } from "./ui/button";

const ACUsageComparison = ({ product }: { product: ACUsageData }) => {
  return (
    <div className="flex flex-col justify-center md:items-center mt-10 w-full">
      <div className="flex flex-col md:flex-row md:justify-center w-full gap-4">
        <div>
          {/* <h1 className="text-base font-medium text-primaryBlack mb-2 text-center">
            Save Trees, Save the Environment
          </h1> */}
          <div className="md:max-w-[400px]  flex flex-col justify-center items-center gap-4 p-3  rounded-md">
            <img
              src={imagePath.tree}
              className="w-[336.623px] h-[180px]"
              alt=""
            />
            <p className="text-sm text-[#797979] font-medium tracking-wider leading-6">
              Your monthly usage of{" "}
              <span className="text-[#262626] font-bold">
                {product?.predictions?.monthlyUnitConsumption} units
              </span>{" "}
              produces{" "}
              <span className="text-[#FC5D5D] font-bold">
                {product?.predictions?.co2_emmision_kg_annualy} kg of CO₂
              </span>{" "}
              anually, needing
              <span className="text-[#262626] font-bold">
                {" "}
                {product?.predictions?.Tree_needed} trees
              </span>{" "}
              a year to offset. Switching to an efficient appliance can cut this
              to{" "}
              <span className="text-[#7CAF00] font-bold">
                {product?.predictions?.Tree_updated} trees—saving energy and
                money!
              </span>
            </p>
          </div>
        </div>
        <div className=" flex flex-col">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-3 rounded-md flex-1 overflow-hidden">
            {/* <div className="flex-1">
              <Gauge
                value={
                  product?.chatData?.averageUserHourlyUsage
                    ? product.chatData.averageUserHourlyUsage > 16
                      ? 16
                      : product.chatData.averageUserHourlyUsage
                    : 0
                }
                actualValue={product?.chatData?.averageUserHourlyUsage}
                max={16}
                label="Average usage in India in a day"
                color="#f59e0b"
              />
            </div>
            <div className="flex-1">
              <Gauge
                value={
                  product?.chatData?.userHourlyUsage
                    ? product.chatData.userHourlyUsage > 16
                      ? 16
                      : product.chatData.userHourlyUsage
                    : 0
                }
                actualValue={product?.chatData?.userHourlyUsage}
                max={16}
                label="Your usage in a day"
                color={
                  product?.chatData?.userHourlyUsage < 8
                    ? "#6FCC39"
                    : product?.chatData?.userHourlyUsage > 10
                    ? "#ef4444"
                    : "#f59e0b"
                }
              />
            </div> */}

            <div className="flex flex-col justify-center items-center gap-3 max-w-lg">
              <div className="w-full max-w-[350px] sm:w-[380px] h-[180px] relative">
                <img
                  src={imagePath.browseElectronics}
                  alt=""
                  className="w-[200px]  rounded-md"
                />
                <img
                  src={imagePath.browseElectronics2}
                  alt=""
                  className="w-[200px]  rounded-md absolute bottom-0 right-0"
                />
              </div>
              {/* <span className="self-start ml-16">👉 Read The Article</span>
              <a
                className="text-[26px] font-medium  text-center text-primaryBlack underline"
                href="https://medium.com/@tushar_datascience/top-10-best-energy-saving-air-conditioners-in-india-for-2025-70f6b2aa930a"
                target="_blank"
              >
                Top 10 Best Energy Saving Air Conditioners in India for 2025
              </a> */}

              <div className="flex items-center sm:ml-16 space-x-2 self-start mt-4">
                <span className="self-start">👉 Read The Article</span>
                <span className="bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-full animate-color-blink">
                  New
                </span>
              </div>
              <a
                className="text-[26px] font-medium text-center text-primaryBlack underline hover:text-green-600 -mt-2"
                href="https://medium.com/@tushar_datascience/top-10-best-energy-saving-air-conditioners-in-india-for-2025-70f6b2aa930a"
                target="_blank"
              >
                Top 10 Best Energy Saving Air Conditioners in India for 2025
              </a>

              {/* <a
                href="https://medium.com/@tushar_datascience/top-10-best-energy-saving-air-conditioners-in-india-for-2025-70f6b2aa930a"
                target="_blank"
              >
                <Button> Read Here</Button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ACUsageComparison;
