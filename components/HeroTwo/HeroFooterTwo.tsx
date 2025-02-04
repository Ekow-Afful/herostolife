import { socials } from "@/constants";
import Link from "next/link";
import React from "react";

const HeroFooterTwo = () => {
  return (
    <div className="work-sans absolute z-40 bottom-8 flex justify-center items-center w-full overflow-hidden">
      <div className="flex justify-between w-[94%]">
        <div className="flex gap-4">
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

        <div>
          <p>Talk to me</p>
        </div>
      </div>
    </div>
  );
};

export default HeroFooterTwo;
