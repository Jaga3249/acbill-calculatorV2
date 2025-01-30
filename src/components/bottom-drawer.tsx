"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Input } from "./ui/input";
import useContactSubmit from "@/hooks/use-contact-submit";
import { useState } from "react";
import { imagePath } from "@/constants/imagePath";
import { Loader2 } from "lucide-react";
interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fetchPrediction: () => void;
}
export function DrawerDemo({ fetchPrediction, open, setOpen }: Props) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //   const [errors, setErrors] = useState({ name: "", contact: "", email: "" });
  const { handleContactSubmit, isLoading } = useContactSubmit({
    name,
    contact,
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
      //   setErrors((prev) => ({ ...prev, name: "" }));
      // } else {
      //   setErrors((prev) => ({
      //     ...prev,
      //     name: "Name must contain only letters and spaces",
      //   }));
    }
  };
  function isValidIndianMobileNumber(mobileNumber: string) {
    const mobileNumberPattern = /^[6-9]\d{9}$/;
    return mobileNumberPattern.test(mobileNumber);
  }
  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setContact(value);
    }
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handleSubmit = () => {
    if (!name || !email || !contact) {
      setErrorMessage("Please fill all the fields");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }
    if (!isValidIndianMobileNumber(contact)) {
      setErrorMessage("Please enter a valid Indian mobile number");
      return;
    }
    handleContactSubmit();
    setOpen(false);
    fetchPrediction();
  };
  return (
    <Drawer open={open}>
      <DrawerContent>
        <div className="flex flex-col gap-5 p-4">
          <div
            className="h-[136px]   flex flex-row justify-between p-5 rounded-[16px] "
            style={{
              backgroundImage: `url(${imagePath.leadFormBg})`,
              backgroundSize: "cover",
            }}
          >
            <div className="flex-1 flex flex-col justify-center">
              <h2 className=" max-w-[180px] text-[20px] leading-[28px] font-bold text-[#3E3E3E]">
                We would like to know you
              </h2>
              <h2 className=" text-[12px] leading-[18px] font-medium text-[#3E3E3E] mt-2 tracking-wide">
                Fill the form to calculate your AC Bill
              </h2>
            </div>
            <div className="w-[117px] ">
              <img
                src={imagePath.people}
                alt="people"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="h-[353px] bg-[#081747] rounded-[20px] p-4 flex flex-col gap-2">
            <h3 className="font-semibold text-base text-white mb-1">
              Fill this form
            </h3>
            <div>
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <div>
                <Input
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full"
                />
                {/* {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )} */}
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-white">
                Email ID
              </Label>
              <div>
                <Input
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full"
                />
                {/* {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )} */}
              </div>
            </div>
            <div>
              <Label htmlFor="contact" className="text-white">
                Contact No.
              </Label>
              <div>
                <Input
                  id="contact"
                  value={contact}
                  onChange={handleContactChange}
                  className="w-full"
                />
              </div>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
            <div className="mt-3 flex justify-center">
              <Button
                className="bg-[#0067F5] hover:bg-[#0067F5] h-[45px] w-[196px]"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="animate-spin" />}
                Calculate
              </Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
