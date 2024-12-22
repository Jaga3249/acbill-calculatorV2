import React, { createContext, useState, useContext } from "react";
import { ACUsageData } from "@/type/type";

interface AcContextType {
  predictRecomenedAc: ACUsageData[] | null;
  setPredictRecomenedAc: React.Dispatch<
    React.SetStateAction<ACUsageData[] | null>
  >;
}

const AcContext = createContext<AcContextType | undefined>(undefined);

export const useAcContext = (): AcContextType => {
  const context = useContext(AcContext);
  if (!context) {
    throw new Error("useAcContext must be used within an AcProvider");
  }
  return context;
};

export const AcProvider = ({ children }: { children: React.ReactNode }) => {
  const [predictRecomenedAc, setPredictRecomenedAc] = useState<
    ACUsageData[] | null
  >(null);

  return (
    <AcContext.Provider value={{ predictRecomenedAc, setPredictRecomenedAc }}>
      {children}
    </AcContext.Provider>
  );
};
