import React from "react";

import { socials } from "@/constants";
import Link from "next/link";
import CarouselComponent from "@/app/first_hero/_components/CarouselComponent";
import HeroImageEffect from "@/app/first_hero/_components/HeroImageEffect";

const FirstHero = () => {
  return (
    <div className="fixed font-[family-name:var(--font-geist-sans)] pt-10 flex w-full h-[100vh] items-center justify-center bg-black">
      <div className="relative justify-center items-center w-[98.6%] h-[85vh] rounded-xl text-black">
        <CarouselComponent />
      </div>
      <div className="absolute flex  z-50 md:left-[13%] md:top-[85%] sm:top-[82%] top-[72%] text-black">
        {socials.map((social) => (
          <Link href={social.link} target="blank" key={social.name}>
            <div className="text-[25px] px-2">{social.imgUrl}</div>
          </Link>
        ))}
      </div>
      <HeroImageEffect />
    </div>
  );
};

export default FirstHero;
