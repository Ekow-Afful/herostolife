import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const NavCardTwo = () => {
  return (
    <div className="flex relative w-1/2 h-full rounded-[12px]">
      <div className="flex h-full w-full">
        <Image
          src="/luffy_2.jpg"
          alt="qwer"
          width={800}
          height={200}
          className=" object-cover h-[267px] rounded-[12px]"
        />
      </div>

      <div className="absolute right-2 top-2">
        <Image
          src="/toji.JPG"
          alt="qwer"
          width={200}
          height={200}
          className=" object-cover w-[110px] h-[100px] "
        />
      </div>

      <Link href="/first_hero" className="absolute bottom-2 right-2">
        <div className="bg-[#111111] p-4 rounded-[7px]">
          <div className="flex w-full justify-start items-center gap-2 group cursor-pointer">
            <div className="text-[12px]">READ ARTICLE</div>
            <div className="rotate-45 group-hover:rotate-90 transition-all duration-100">
              <FaArrowUp />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NavCardTwo;
