import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

import { imagePath } from "@/constants/imagePath";
import { Button } from "./ui/button";

// DotButton Component
function DotButton({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`w-2 h-2 rounded-full ${
        selected ? "bg-primaryBlack" : "bg-[#D9D9D9]"
      }`}
      onClick={onClick}
      aria-label={`Go to slide`}
    />
  );
}

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const images = [
    imagePath.carousel1,
    imagePath.carousel2,
    imagePath.carousel3,
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <div className="w-full md:h-[300px] overflow-hidden mt-5 rounded-md">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="flex w-full md:h-[300px] h-full rounded-md">
            {images?.map((image, index) => (
              <CarouselItem key={index} className="rounded-md">
                <div className="w-full h-full relative rounded-md">
                  <img
                    src={image}
                    alt={`hero-img-${index}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                  {index === 2 && (
                    <div className="sm:block absolute sm:top-10 sm:left-10 left-6 top-0">
                      <h1 className="text-septenaryWhite sm:text-[50px] font-semibold sm:leading-[75px] text-base mt-5">
                        Contact Us
                      </h1>
                      <h1 className="text-septenaryWhite sm:text-[50px] font-semibold sm:leading-[75px] sm:mb-6 text-base">
                        To place your Add here
                      </h1>
                      <a href="#contact">
                        <Button className="bg-white text-primaryBlack hover:bg-white hover:text-primaryBlack hidden sm:block">
                          Contact Us
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
            {/* {[1, 2, 3].map((item, index) => {
              return (
                <CarouselItem key={index} className="">
                  <div className="w-full h-full border border-red-500"></div>
                </CarouselItem>
              );
            })} */}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-2 bg-white p-2 rounded-lg">
        {images.map((_, index) => (
          <DotButton
            key={index}
            selected={current === index}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
}
