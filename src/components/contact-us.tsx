import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ContactUs = () => {
  return (
    <div className=" border-2 sm:mx-28 bg-primaryBlack py-8 sm:px-[72px] px-6 flex flex-col gap-3 rounded-[20px] mt-10 sm:flex-row">
      <div className="flex-1 flex md:items-center ">
        <p className=" text-primaryWhite sm:max-w-[380px] text-[28px] leading-[42px] font-medium">
          Have questions or need support? 💬 Reach out to us, and we'll be happy
          to assist!
        </p>
      </div>
      <div className="flex-1  flex flex-col items-end gap-4">
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
