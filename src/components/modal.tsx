import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useContactSubmit from "@/hooks/use-contact-submit";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fetchPrediction: any;
}

export function Modal({ open, setOpen, fetchPrediction }: Props) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({ name: "", contact: "" });
  const { handleContactSubmit, isLoading } = useContactSubmit({
    name,
    contact,
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
      setErrors((prev) => ({ ...prev, name: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        name: "Name must contain only letters and spaces",
      }));
    }
  };
  function isValidIndianMobileNumber(mobileNumber: string) {
    const mobileNumberPattern = /^[6-9]\d{9}$/;
    return mobileNumberPattern.test(mobileNumber);
  }
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setContact(value);
      setErrors((prev) => ({ ...prev, contact: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        contact: "Contact must contain only numbers",
      }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="space-y-1">
          {/* Name Field */}
          <div className="">
            <Label htmlFor="name">Name</Label>
            <div>
              <Input
                id="name"
                value={name}
                onChange={handleNameChange}
                className="w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
          </div>

          {/* Contact Field */}
          <div className="">
            <Label htmlFor="contact">Phone Number</Label>
            <div>
              <Input
                id="contact"
                value={contact}
                onChange={handleContactChange}
                className="w-full"
              />
              {errors.contact && (
                <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
              )}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              if (isValidIndianMobileNumber(contact)) {
                handleContactSubmit();
                setOpen(false);
                fetchPrediction();
              } else {
                setErrors((prev) => ({
                  ...prev,
                  contact: "Please enter a valid Indian mobile number",
                }));
              }
            }}
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="animate-spin" />}
            Calculating
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
