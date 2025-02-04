"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import MouseFollower from "./MouseFollower";

export function HeroTwo() {
  return (
    <div className="work-sans flex justify-center items-center w-full h-[100vh] overflow-hidden">
      <div className="w-[70%] h-full flex flex-col justify-center items-center gap-0">
        <div className="flex justify-center items-center w-full h-[40%]">
          <p className="text-[48px] text-center">
            Hi I'm Ekow! Freelance Frontend developer. Available for hire
          </p>
          {/* <InteractiveLetters/> */}
        </div>
        <CardContainer className="w-full h-full">
          <CardBody className="flex flex-col w-full h-full ">
            <Image
              src="/hero2/background.png"
              alt="3d futuristic image"
              width={450}
              height={200}
              className="rounded-xl border"
            />
            <CardItem translateZ="100" className="absolute w-full h-full">
              <Image
                src="/hero2/3d_guy.png"
                alt="3d futuristic image"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
      <div>
        <MouseFollower />
      </div>
    </div>
  );
}
