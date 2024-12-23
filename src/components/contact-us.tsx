import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";

interface ContactUsProps {
  userName: string;
  userEmail: string;
  contactNumber: string;
}
const initialState: ContactUsProps = {
  userName: "",
  userEmail: "",
  contactNumber: "",
};

const ContactUs = () => {
  const [formData, setFormData] = useState<ContactUsProps>(initialState);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.userName === "" ||
      formData.userEmail === "" ||
      formData.contactNumber === ""
    ) {
      toast.error("fields can't be empty");
      return;
    }
    const serviceId = "service_q6nrpyk";
    const templateId = "template_hwr9m4m";
    const publicKey = "zUhor_ZB76eleR8al";
    try {
      setLoading(true);

      await emailjs.sendForm(
        serviceId as string,
        templateId as string,
        e.target as HTMLFormElement,
        {
          publicKey: publicKey as string,
        }
      );
      setFormData(initialState);
      toast.success("message send sucessfully");
    } catch (error: any) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };
  return (
    <div
      className=" border-2 sm:mx-28 bg-primaryBlack py-8 sm:px-[72px] px-6 flex flex-col gap-3 rounded-[20px] mt-10 sm:flex-row"
      id="contact"
    >
      <div className="flex-1 flex md:items-center items-start ">
        <p className=" text-primaryWhite sm:max-w-[380px] text-[28px] md:leading-[42px] font-medium ">
          Have questions or need support? 💬 Reach out to us, and we'll be happy
          to assist!
        </p>
      </div>
      <form
        className="flex-1  flex flex-col md:items-end items-center gap-4"
        onSubmit={handleSubmit}
      >
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
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
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
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            required
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
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="flex justify-center"> */}
        <Button
          className=" border border-primaryWhite rounded-[12px] w-[119px] text-white "
          variant={"ghost"}
          type="submit"
        >
          {loading && <Loader2 className="animate-spin" />}
          Submit
        </Button>
        {/* </div> */}
      </form>
    </div>
  );
};
export default ContactUs;
