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

import heroImg from "@/assets/heroImg.jpg";
import { imagePath } from "@/constants/imagePath";

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
      className={`w-3 h-3 rounded-full border-2 ${
        selected
          ? "bg-primaryBlack border-primaryBlack"
          : "bg-gray-300 border-gray-400"
      }`}
      onClick={onClick}
      aria-label={`Go to slide`}
    />
  );
}

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const images = [imagePath.carousel1, imagePath.carousel2, heroImg];

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
      <div className="w-full max-w-full md:h-[300px] h-[200px] rounded-[20px] overflow-hidden mt-5">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full h-full"
        >
          <CarouselContent className="flex">
            {images.map((image, index) => (
              <CarouselItem key={index} className="">
                <div className="w-full h-full">
                  <img
                    src={image}
                    alt={`hero-img-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
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
