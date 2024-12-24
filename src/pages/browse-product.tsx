import { useEffect, useState } from "react";
import FilterModal from "@/components/filter-modal";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGetProducts from "@/hooks/use-get-products";
import Layout from "@/layout/layout";
import { Product } from "@/type/type";
import { Loader2, X } from "lucide-react";
import { useAcContext } from "@/context/use-context";
//
const url = import.meta.env.VITE_API_URL;

const BroserProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [capacity, setCapacity] = useState<number>(0);
  const [selectedAcType, setSelectedAcType] = useState("");
  const [rating, setRating] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { loading } = useGetProducts(url as string);

  const [currentPage, setCurrentPage] = useState(1);
  const { products, setProducts, updatedProducts } = useAcContext();
  const perPageProduct = 12;
  const totalPages = Math.ceil((products?.length || 0) / perPageProduct);

  const handleFilter = (
    selectedAcType: string,
    selectedBrand: string,
    capacity: number,
    rating: number
  ) => {
    const filteredProducts = updatedProducts.filter((product: Product) => {
      return (
        (selectedAcType ? product.type === selectedAcType : true) &&
        (selectedBrand ? product.brand === selectedBrand : true) &&
        (capacity ? product.capacity === capacity : true) &&
        (rating ? product.starRating === rating : true)
      );
    });
    console.log("filterProducrs", filteredProducts);

    setProducts(filteredProducts);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedSort) {
      sortProducts(selectedSort);
    }
  }, [selectedSort]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sortProducts = (sortOrder: string) => {
    const sortedProducts = [...products]; // Create a copy to avoid mutating the state directly
    if (sortOrder === "low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const displayedProducts = isMobile
    ? products // Show all products on mobile
    : products?.slice(
        (currentPage - 1) * perPageProduct,
        currentPage * perPageProduct
      );

  return (
    <Layout>
      <div>
        {loading ? (
          <div className="h-screen w-screen flex justify-center items-center">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          <>
            <div className="flex sm:justify-center md:justify-center md:mt-16 mt-5">
              <div className=" w-full flex flex-col gap-[16px]">
                {/* Top Section */}
                <div className="flex flex-col gap-2">
                  <div className=" hidden sm:flex justify-between ">
                    <div className="flex flex-col gap-2">
                      <span className="text-primaryBlack text-base font-medium">
                        {`${
                          (currentPage - 1) * perPageProduct + 1
                        } - ${Math.min(
                          currentPage * perPageProduct,
                          products?.length || 0
                        )} of ${products?.length || 0} ACs to browse from`}
                      </span>
                      <div className="flex gap-[13px]">
                        <div
                          className="  bg-septenaryWhite rounded-[30px] py-[6px] px-[12px] border border-primaryBlack text-xs font-medium cursor-pointer"
                          onClick={() => setIsOpen(true)}
                        >
                          Filter by
                        </div>
                        {selectedBrand && !isOpen && (
                          <div className="bg-septenaryWhite rounded-[30px] py-[6px] px-[12px] border border-primaryBlack text-xs font-medium cursor-pointer flex gap-[10px] items-center">
                            {selectedBrand}
                            <X
                              size={18}
                              className="text-gray-900 stroke-[3]"
                              onClick={() => {
                                setSelectedBrand("");
                                handleFilter(
                                  selectedAcType,
                                  "",
                                  capacity,
                                  rating
                                );
                              }}
                            />
                          </div>
                        )}
                        {capacity != 0 && !isOpen && (
                          <div
                            className="bg-septenaryWhite rounded-[30px] py-[6px] px-[12px] border border-primaryBlack text-xs font-medium cursor-pointer flex gap-[10px] items-center"
                            onClick={() => setCapacity(0)}
                          >
                            {`${capacity} Ton`}
                            <X
                              size={18}
                              className="text-gray-900 stroke-[3]"
                              onClick={() => {
                                setCapacity(0);
                                handleFilter(
                                  selectedAcType,
                                  selectedBrand,
                                  0,
                                  rating
                                );
                              }}
                            />
                          </div>
                        )}
                        {rating != 0 && !isOpen && (
                          <div
                            className="bg-septenaryWhite rounded-[30px] py-[6px] px-[12px] border border-primaryBlack text-xs font-medium cursor-pointer flex gap-[10px] items-center"
                            onClick={() => setRating(0)}
                          >
                            {`${rating} Stars`}
                            <X
                              size={18}
                              className="text-gray-900 stroke-[3]"
                              onClick={() => {
                                setRating(0);
                                handleFilter(
                                  selectedAcType,
                                  selectedBrand,
                                  capacity,
                                  0
                                );
                              }}
                            />
                          </div>
                        )}
                        {selectedAcType && !isOpen && (
                          <div
                            className="bg-septenaryWhite rounded-[30px] py-[6px] px-[12px] border border-primaryBlack text-xs font-medium cursor-pointer flex gap-[10px] items-center"
                            onClick={() => setSelectedAcType("")}
                          >
                            {`${selectedAcType} `}
                            <X
                              size={18}
                              className="text-gray-900 stroke-[3]"
                              onClick={() => {
                                setSelectedAcType("");
                                handleFilter(
                                  "",
                                  selectedBrand,
                                  capacity,
                                  rating
                                );
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <Select onValueChange={(value) => setSelectedSort(value)}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="low-to-high">
                            Price low to high
                          </SelectItem>
                          <SelectItem value="high-to-low">
                            Price high to low
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Mobile view */}
                  <div className="sm:hidden">
                    <h1 className="text-primaryBlack text-base font-medium mb-2">
                      {" "}
                      {`${(currentPage - 1) * perPageProduct + 1} - ${Math.min(
                        currentPage * perPageProduct,
                        products?.length || 0
                      )} of ${products?.length || 0} ACs to browse from`}
                    </h1>
                    <div className="flex justify-end mb-2">
                      <Select onValueChange={(value) => setSelectedSort(value)}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="low-to-high">
                              Price low to high
                            </SelectItem>
                            <SelectItem value="high-to-low">
                              Price high to low
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-[13px]">
                      <div
                        className="  bg-septenaryWhite rounded-[30px] py-[6px] px-[12px] border border-primaryBlack text-xs font-medium cursor-pointer"
                        onClick={() => setIsOpen(true)}
                      >
                        Filter by
                      </div>
                      {selectedBrand && !isOpen && (
                        <div className="bg-septenaryWhite rounded-[30px] py-[6px] px-[12px] border border-primaryBlack text-xs font-medium cursor-pointer flex gap-[10px] items-center">
                          {selectedBrand}
                          <X
                            size={18}
                            className="text-gray-900 stroke-[3]"
                            onClick={() => {
                              setSelectedBrand("");
                              handleFilter(
                                selectedAcType,
                                "",
                                capacity,
                                rating
                              );
                            }}
                          />
                        </div>
                      )}
                      {capacity != 0 && !isOpen && (
                        <div
                          className="bg-septenaryWhite rounded-[30px] py-[6px] px-[12px] border border-primaryBlack text-xs font-medium cursor-pointer flex gap-[10px] items-center"
                          onClick={() => setCapacity(0)}
                        >
                          {`${capacity} Ton`}
                          <X
                            size={18}
                            className="text-gray-900 stroke-[3]"
                            onClick={() => {
                              setCapacity(0);
                              handleFilter(
                                selectedAcType,
                                selectedBrand,
                                0,
                                rating
                              );
                            }}
                          />
                        </div>
                      )}
                      {rating != 0 && !isOpen && (
                        <div
                          className="bg-septenaryWhite rounded-[30px] py-[6px] px-[12px] border border-primaryBlack text-xs font-medium cursor-pointer flex gap-[10px] items-center"
                          onClick={() => setRating(0)}
                        >
                          {`${rating} Stars`}
                          <X
                            size={18}
                            className="text-gray-900 stroke-[3]"
                            onClick={() => {
                              setRating(0);
                              handleFilter(
                                selectedAcType,
                                selectedBrand,
                                capacity,
                                0
                              );
                            }}
                          />
                        </div>
                      )}
                      {selectedAcType && !isOpen && (
                        <div
                          className="bg-septenaryWhite rounded-[30px] py-[6px] px-[12px] border border-primaryBlack text-xs font-medium cursor-pointer flex gap-[10px] items-center"
                          onClick={() => setSelectedAcType("")}
                        >
                          {`${selectedAcType} `}
                          <X
                            size={18}
                            className="text-gray-900 stroke-[3]"
                            onClick={() => {
                              setSelectedAcType("");
                              handleFilter("", selectedBrand, capacity, rating);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Product List */}

                <div className=" w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid-cols-1 sm:gap-3 gap-4 sm:justify-center ">
                  {displayedProducts?.length === 0 ? (
                    <div className="flex flex-col justify-center items-center h-[50vh] w-screen  rounded-md">
                      <span className="text-4xl mb-4">😞</span>{" "}
                      {/* Emoji for "No Results Found" */}
                      <h2 className="text-lg font-semibold text-gray-700">
                        No ACs Found
                      </h2>
                      <p className="text-sm text-gray-500 mt-2">
                        Try adjusting your filters or search criteria.
                      </p>
                    </div>
                  ) : (
                    displayedProducts?.map((item: Product, i) => (
                      <div
                        className="w-full  rounded-[12px] border border-querternaryWhite
                           flex flex-col gap-[11px] pb-3 "
                        key={i}
                      >
                        <div className="h-[169px] flex justify-center items-center">
                          <img
                            src={item?.image}
                            alt="acImg"
                            className="w-[227px] h-[91px]"
                          />
                        </div>
                        <div className="flex flex-col mx-3 md:gap-[9px]">
                          <div className="flex justify-between items-center">
                            <span className="bg-tertiaryGreen py-[6px] px-[12px] rounded-[30px] text-xs text-secondaryGreen font-medium border border-secondaryGreen">
                              {item?.tagline}
                            </span>
                            <span className="py-[6px] px-[12px] bg-senaryGray rounded-[30px] text-primaryBlack text-xs font-medium">
                              {item.starRating}⭐
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-semibold text-primaryBlack my-2">
                              ₹{item.price}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-primaryBlack">
                            {`${item.brand} ${item.capacity} Ton  ${item.type}`}
                          </p>
                          {!item.capacity && (
                            <p className="text-septenaryGray text-[12px] leading-[18px] font-medium">
                              Estimated Monthly Cost:{" "}
                              <span className="text-primaryBlack">
                                ₹{item.estimatedMonthlyCost}
                              </span>{" "}
                              as per your data
                            </p>
                          )}
                        </div>
                        <div className="px-3">
                          <a href={item?.productLink} target="_blank">
                            {" "}
                            <Button
                              className="text-sm font-medium text-septenaryWhite w-full"
                              size={"sm"}
                            >
                              View at {item.buttonText}
                            </Button>
                          </a>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Pagination */}
                {!loading && displayedProducts?.length > 0 && (
                  <div className="hidden  sm:flex justify-center items-center mt-4 gap-2">
                    {/* Previous Button */}
                    <button
                      className={`px-3 py-1 border rounded ${
                        currentPage === 1
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-black"
                      }`}
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      Previous
                    </button>

                    {/* Page Numbers */}
                    {[...Array(totalPages)].map((_, index) => {
                      if (
                        index + 1 === currentPage || // Current page
                        index + 1 === 1 || // First page
                        index + 1 === totalPages || // Last page
                        Math.abs(index + 1 - currentPage) <= 1 // Adjacent pages
                      ) {
                        return (
                          <button
                            key={index}
                            className={`px-3 py-1 border rounded ${
                              currentPage === index + 1
                                ? "bg-primary text-white"
                                : "text-black"
                            }`}
                            onClick={() => handlePageChange(index + 1)}
                          >
                            {index + 1}
                          </button>
                        );
                      } else if (
                        Math.abs(index + 1 - currentPage) === 2 && // Ellipsis points
                        (index + 1 > 2 || index + 1 < totalPages - 1)
                      ) {
                        return (
                          <span key={index} className="px-3 py-1 text-gray-400">
                            ...
                          </span>
                        );
                      }
                      return null; // Hide non-adjacent pages
                    })}

                    {/* Next Button */}
                    <button
                      className={`px-3 py-1 border rounded ${
                        currentPage === totalPages
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-black"
                      }`}
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </div>
            {isOpen && (
              <FilterModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
                capacity={capacity}
                setCapacity={setCapacity}
                selectedAcType={selectedAcType}
                setSelectedAcType={setSelectedAcType}
                rating={rating}
                setRating={setRating}
              />
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default BroserProduct;
