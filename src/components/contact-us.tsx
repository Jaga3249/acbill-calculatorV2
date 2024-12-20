import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ContactUs = () => {
  return (
    <div className=" border-2 sm:mx-20 bg-primaryBlue py-8 sm:px-[72px] px-6 flex sm:flex-row flex-col gap-3 rounded-[20px] mt-10">
      <div className="flex-1 flex sm:items-center ">
        <p className="text-primaryWhite sm:max-w-[380px] text-2xl font-medium">
          Boost your brand visibility! 🚀 Contact us today to place your ads and
          reach the right audience
        </p>
      </div>
      <div className="flex-1 max-w-[284px] flex flex-col gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            htmlFor="Name"
            className="text-primaryWhite text-sm font-medium"
          >
            Name
          </Label>
          <Input
            id="Name"
            type="text"
            placeholder="Rohit Sharma"
            className="text-customBlack text-sm"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            htmlFor="Email ID"
            className="text-primaryWhite text-sm font-medium"
          >
            Email ID
          </Label>
          <Input
            id="Email ID"
            type="text"
            placeholder="rohitsharma44@gmail.com"
            className="text-customBlack text-sm"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            htmlFor="Contact No."
            className="text-primaryWhite text-sm font-medium"
          >
            Contact No.
          </Label>
          <Input
            id="Contact No."
            type="text"
            placeholder="8965323265"
            className="text-customBlack text-sm"
          />
        </div>
        <div className="flex justify-center">
          <Button
            className=" border border-primaryWhite rounded-[12px] w-[119px] text-white "
            variant={"ghost"}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
