"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { heroTexts } from "@/constants";


const CarouselComponent = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.isPlaying}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {heroTexts.map((herotext, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex w-[100%] sm:h-[85vh] h-[75vh] mx-auto items-center justify-center p-0">
                    <span className="md:text-[100px] sm:text-[70px] text-[55px] font-semibold">
                      {herotext.title}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
