import { useAcContext } from "@/context/use-context";
import React from "react";

interface Props {
  name: string;
  contact: string;
}

function useContactSubmit({ name, contact }: Props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const { setIsContactSubmit } = useAcContext();
  const handleContactSubmit = async () => {
    setIsLoading(true);
    if (!name || !contact) {
      setIsLoading(false);
      return;
    }
    try {
      const formData = new URLSearchParams();
      formData.append("Name", name); // Replace 'name' with the actual variable holding the Name value
      formData.append("Contact", contact); // Replace 'contact' with the actual variable holding the Contact value

      fetch("https://sheetdb.io/api/v1/4uv001mxsnbi2", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              ID: "INCREMENT",
              Name: name,
              Contact: contact,
            },
          ],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          setIsContactSubmit(true);
          setIsLoading(false);
        });
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleContactSubmit };
}

export default useContactSubmit;
