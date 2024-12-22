import { GaugeComponent } from "react-gauge-component";

const ACUsageComparison = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-[1030px]">
        <h1 className="text-base font-medium text-primaryBlack">
          Your Daily AC Usage vs. India’s Average 🌞
        </h1>
        <div className="flex">
          <div className=" w-[621px] border-primaryWhite flex border rounded-[12px]">
            <div className="flex flex-col justify-center items-center">
              <GaugeComponent
                id="gauge-component4"
                arc={{
                  gradient: true,
                  width: 0.15,
                  padding: 0,
                }}
                value={50}
                pointer={{ type: "arrow", elastic: true }}
              
              />
              <p className="text-base font-medium">
                Average usage in India in a day
              </p>
            </div>
            <div className="flex flex-col  justify-center items-center">
              <GaugeComponent />
              <p className="text-base font-medium">You usage in a day</p>
            </div>
          </div>
          <div className="w-[400px] h-auto border-2 flex ">
            <div>gggggggggggggg</div>
            <p>
              Your monthly usage of 180 units produces 165.6 kg of CO₂, needing
              95 trees a year to offset. Switching to an efficient appliance can
              cut this to 63 trees—saving energy and money!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ACUsageComparison;
