"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import MouseFollower from "./MouseFollower";
import NavBarTwo from "./NavBarTwo";
import HeroFooterTwo from "./HeroFooterTwo";

export function HeroTwo() {
  const [click, setClick] = useState(false);
  return (
    <div
      className={`${
        click ? "dark:bg-[#272626] text-white" : "bg-white text-black"
      } work-sans flex flex-col justify-center items-center w-full h-[100dvh] overflow-hidden transition-all duration-700`}
    >
      <NavBarTwo click={click} setClick={setClick} />

      <div
        className={`${
          click ? "bg-[#ba7fe269]" : "bg-[#377bac75]"
        } absolute top-0 left-0 w-[200px] h-[120px] rounded-full  blur-2xl`}
      />

      <div className="w-[80%] sm:w-[70%] h-full flex flex-col justify-center items-center gap-0">
        <div className="flex justify-center items-center w-full h-[40%]">
          <p className="text-[2rem] md:text-[3rem] text-center">
            Hi I&apos;m Ekow! A Freelance Frontend developer. Available for hire
          </p>
          {/* <InteractiveLetters/> */}
        </div>
        <CardContainer className="w-full h-full">
          <CardBody className="flex flex-col items-center justify-center sm:w-full sm:h-full w-[80%] h-1/2">
            <Image
              src="/hero2/background.png"
              alt="3d futuristic image"
              width={450}
              height={200}
              className={`${
                click ? "hue-rotate-45 brightness-80" : "sepia-0"
              } rounded-xl border transition-all duration-700 `}
            />
            <CardItem
              translateZ="100"
              className="absolute w-full h-full flex  items-center justify-center"
            >
              <Image
                src="/hero2/3d_guy.png"
                alt="3d futuristic image"
                width={1000}
                height={300}
                className={`${
                  click ? "grayscale" : "hue-rotate-0"
                }  object-cover transition-all duration-700 `}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
      <div>
        <MouseFollower />
      </div>
      <HeroFooterTwo />
    </div>
  );
}
