import React from "react";
import MouseFollower from "./MouseFollower";
import Image from "next/image";

const HeroTwoOther = () => {
  return (
    <div className="flex justify-center w-full h-[100vh] overflow-hidden">
      <div className="w-[70%] flex flex-col justify-center items-center gap-0">
        <div className="flex justify-center items-start pt-[12%] h-full">
          <p className="text-[50px] text-center">
            Hi I'm Ekow! Freelance Frontend developer. Available for hire
          </p>
          {/* <InteractiveLetters/> */}
        </div>

        <div className="flex justify-center items-center">
          <div className="absolute z-20 bottom-6 ">
            <Image
              src="/hero2/background.png"
              alt="3d futuristic image"
              width={400}
              height={200}
            />
          </div>
          <div
            className={`absolute z-30 -bottom-4 hover:translate-x-9 hover:scale-110  duration-300 transition-all`}
          >
            <Image
              src="/hero2/3d_guy.png"
              alt="3d futuristic image"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div>
        <MouseFollower />
      </div>
    </div>
  );
};

export default HeroTwoOther;
