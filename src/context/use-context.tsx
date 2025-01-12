import React, { createContext, useState, useContext, useEffect } from "react";
import { ACUsageData, Product } from "@/type/type";

interface AcContextType {
  predictRecomenedAc: ACUsageData[] | null;
  setPredictRecomenedAc: React.Dispatch<
    React.SetStateAction<ACUsageData[] | null>
  >;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  updatedProducts: Product[];
  setUpdatedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  isContactSubmit: boolean;
  setIsContactSubmit: React.Dispatch<React.SetStateAction<boolean>>;
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
  // State for `predictRecomenedAc`, synced with session storage
  const [predictRecomenedAc, setPredictRecomenedAc] = useState<
    ACUsageData[] | null
  >(() => {
    const storedData = sessionStorage.getItem("predictRecomenedAc");
    return storedData ? JSON.parse(storedData) : null;
  });

  // State for `products` and `updatedProducts`, synced with session storage
  const [products, setProducts] = useState<Product[]>(() => {
    const storedProducts = sessionStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });
  const [updatedProducts, setUpdatedProducts] = useState<Product[]>(() => {
    const storedProducts = sessionStorage.getItem("updatedProducts");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  // State for the `isContactSubmit` flag
  const [isContactSubmit, setIsContactSubmit] = useState<boolean>(() => {
    const storedFlag = sessionStorage.getItem("isContactSubmit");
    return storedFlag ? JSON.parse(storedFlag) : false;
  });

  // Sync `predictRecomenedAc` with session storage
  useEffect(() => {
    if (predictRecomenedAc !== null) {
      sessionStorage.setItem(
        "predictRecomenedAc",
        JSON.stringify(predictRecomenedAc)
      );
    } else {
      sessionStorage.removeItem("predictRecomenedAc");
    }
  }, [predictRecomenedAc]);

  // Sync `products` with session storage
  useEffect(() => {
    if (products !== null) {
      sessionStorage.setItem("products", JSON.stringify(products));
    } else {
      sessionStorage.removeItem("products");
    }
  }, [products]);

  // Sync `updatedProducts` with session storage
  useEffect(() => {
    if (updatedProducts !== null) {
      sessionStorage.setItem(
        "updatedProducts",
        JSON.stringify(updatedProducts)
      );
    } else {
      sessionStorage.removeItem("updatedProducts");
    }
  }, [updatedProducts]);

  // Sync `isContactSubmit` with session storage
  useEffect(() => {
    sessionStorage.setItem("isContactSubmit", JSON.stringify(isContactSubmit));
  }, [isContactSubmit]);

  return (
    <AcContext.Provider
      value={{
        predictRecomenedAc,
        setPredictRecomenedAc,
        products,
        setProducts,
        updatedProducts,
        setUpdatedProducts,
        isContactSubmit,
        setIsContactSubmit,
      }}
    >
      {children}
    </AcContext.Provider>
  );
};
