import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";

const ContactUs = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userName || !userEmail || !contactNumber) {
      toast.error("Fields can't be empty");
      return;
    }

    const serviceId = "service_q6nrpyk";
    const templateId = "template_hwr9m4m";
    const publicKey = "zUhor_ZB76eleR8al";

    try {
      setLoading(true);

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          userName, // Pass individual state variables
          userEmail,
          contactNumber,
        },
        publicKey
      );

      console.log("EmailJS Response: ", response); // Debugging log
      setUserName("");
      setUserEmail("");
      setContactNumber("");
      toast.success("We will get back to you soon!");
    } catch (error) {
      console.error("EmailJS Error: ", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="border-2 sm:mx-28 bg-primaryBlack py-8 sm:px-[72px] px-6 flex flex-col gap-3 rounded-[20px] mt-10 sm:flex-row"
      id="contact"
    >
      <div className="flex-1 flex md:items-center items-start">
        <p className="text-primaryWhite sm:max-w-[380px] text-[28px] md:leading-[42px] font-medium">
          Have questions or need support? 💬 Reach out to us, and we'll be happy
          to assist!
        </p>
      </div>
      <form
        className="flex-1 flex flex-col md:items-end items-center gap-4"
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
            placeholder="Your Name"
            className="text-customBlack text-sm"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
            type="email"
            placeholder="Your Email"
            className="text-customBlack text-sm"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
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
            id="contactNumber"
            type="text"
            placeholder="Your Contact No."
            className="text-customBlack text-sm"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <Button
          className="border border-primaryWhite rounded-[12px] w-[119px] text-white"
          variant={"ghost"}
          type="submit"
          disabled={loading}
        >
          {loading && <Loader2 className="animate-spin" />}
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
