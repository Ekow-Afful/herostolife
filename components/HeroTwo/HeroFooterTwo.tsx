import { socials } from "@/constants";
import Link from "next/link";
import React from "react";

const HeroFooterTwo = () => {
  return (
    <div className="work-sans z-40 pb-4 flex justify-center items-center w-full overflow-hidden">
      <div className="flex lg:flex-row flex-col items-center justify-between w-[94%] text-[14px] sm:text-lg ">
        <div className="flex gap-4 ">
          {socials.map(
            (social) =>
              social.id !== 1 && (
                <div key={social.id} className="">
                  <Link href={social.link} className="">
                    <p className="">{social.name}</p>
                  </Link>
                </div>
              )
          )}
        </div>

        <div className="flex gap-4">
          {socials.map(
            (social) =>
              social.id == 1 && (
                <div key={social.id} className="">
                  <Link href={social.link} className="">
                    <p className="">{social.name}</p>
                  </Link>
                </div>
              )
          )}
        </div>

        <div className="hidden lg:flex">
          <p>Talk to me</p>
        </div>
      </div>
    </div>
  );
};

export default HeroFooterTwo;
