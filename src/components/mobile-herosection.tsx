import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import { imagePath } from "@/constants/imagePath";

export function MobileHeroSection() {
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const images = [imagePath.mobileCarousel1, imagePath.mobileCarousel2];

  return (
    <>
      <div className=" overflow-hidden mt-2 rounded-md">
        <Carousel
          // setApi={setApi}
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="flex w-full h-full rounded-md">
            {images?.map((image, index) => (
              <CarouselItem key={index} className="rounded-md">
                <div className="w-full h-[148px] relative rounded-md">
                  <img
                    src={image}
                    alt={`hero-img-${index}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
