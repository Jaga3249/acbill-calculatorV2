import { useAcContext } from "@/context/use-context";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetProducts = (url: string) => {
  const { products, setProducts, updatedProducts, setUpdatedProducts } =
    useAcContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const getProducts = async () => {
    setLoading(true);
    setError("");
    if (!url) {
      toast.error("Something went wrong");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(`${url}/products`);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const res = await response.json();
      products;
      setProducts(res?.products);
      setUpdatedProducts(res?.products);
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (products.length === 0 && updatedProducts.length === 0) {
      getProducts();
    }
  }, []);

  return {
    products,
    updatedProducts,
    setProducts,
    loading,
    error,
    getProducts,
  };
};
export default useGetProducts;
