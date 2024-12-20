import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import heroImg from "@/assets/heroImg.jpg";

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Array to repeat the single image
  const images = Array.from({ length: 5 }, () => heroImg); // Creates an array with 5 copies of `heroImg`

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-full sm:h-[300px] rounded-[20px] border overflow-hidden mt-5"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex">
        {images.map((image, index) => (
          <CarouselItem key={index} className="flex-shrink-0 w-full h-full">
            <div className="w-full h-full">
              <img
                src={image}
                alt={`hero-img-${index}`}
                className="w-full h-full object-cover" // Adjust object-cover to fit
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
