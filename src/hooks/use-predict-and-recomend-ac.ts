import { useAcContext } from "@/context/use-context";
import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

interface propType {
  url: string;
  data: {
    brand: string;
    capacity: number;
    starRating: number;
    type: string;
    temperature: string;
    totalUsagesHour: number;
    state: string;
  };
  setHoverRating: React.Dispatch<React.SetStateAction<number>>;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  setSelectedAcType: React.Dispatch<React.SetStateAction<string>>;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string>>;
  setSelectTemperature: React.Dispatch<React.SetStateAction<string>>;
  setSelectState: React.Dispatch<React.SetStateAction<string>>;
  setSelectHours: React.Dispatch<React.SetStateAction<string>>;
  setCapacity: React.Dispatch<React.SetStateAction<number>>;
}

const usePredictAndRecommend = ({
  data,
  url,
  setHoverRating,
  setRating,
  setSelectedAcType,
  setSelectedBrand,
  setSelectTemperature,
  setSelectState,
  setSelectHours,
  setCapacity,
}: propType) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const { setPredictRecomenedAc } = useAcContext();

  const fetchPrediction = async () => {
    setLoading(true);
    setError("");
    const hasEmptyValue = Object.values(data).some((value) => value === "");
    console.log("hasEmptyValue", hasEmptyValue);
    if (hasEmptyValue || !url) {
      setLoading(false);
      setError("please select all the fields");
      toast.error("please select all the fields");
      return;
    }

    try {
      const response = await fetch(`${url}/predict-and-recommend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const res = await response.json();
      const updatedRes = {
        ...res,
        id: uuidv4(),
      };
      setPredictRecomenedAc((prev) =>
        prev ? [...prev, updatedRes] : [updatedRes]
      );
      setHoverRating(0);
      setRating(0);
      setSelectedAcType("");
      setSelectedBrand("");
      setSelectTemperature("");
      setSelectState("");
      setSelectHours("");
      setCapacity(0);
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { fetchPrediction, loading, error };
};

export default usePredictAndRecommend;
