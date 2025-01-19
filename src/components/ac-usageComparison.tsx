// import { GaugeComponent } from "react-gauge-component";
import { imagePath } from "@/constants/imagePath";
// import Gauge from "./graph";
import { ACUsageData } from "@/type/type";
import { Button } from "./ui/button";

const ACUsageComparison = ({ product }: { product: ACUsageData }) => {
  return (
    <div className="flex flex-col justify-center md:items-center mt-10 w-full">
      <div className="flex flex-col md:flex-row md:justify-center w-full gap-4">
        <div className=" flex flex-col">
          <h1 className="text-base font-medium text-primaryBlack mb-2 text-center">
            {/* Your Daily AC Usage vs. India’s Average 🌞 */}
            Top 10 Best Energy-Saving Air Conditioners in India for 2025
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-4 border-[#c6c6c6] border rounded-md flex-1 overflow-hidden">
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

            <div className="flex flex-col justify-center  items-center gap-3">
              <img
                src={imagePath.browseElectronics}
                alt=""
                className="w-[432px]  rounded-md"
              />
              <a
                href="https://medium.com/@tushar_datascience/top-10-best-energy-saving-air-conditioners-in-india-for-2025-70f6b2aa930a"
                target="_blank"
              >
                <Button className="w-[200px]"> Read Here</Button>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-base font-medium text-primaryBlack mb-2 text-center">
            Save Trees, Save the Environment
          </h1>
          <div className="md:max-w-[400px]  flex flex-col justify-center items-center gap-4 p-3 border-[#C6C6C6] border rounded-md">
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
      </div>
    </div>
  );
};
export default ACUsageComparison;
