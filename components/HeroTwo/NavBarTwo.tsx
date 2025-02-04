import Link from "next/link";
import React from "react";
import { HiArrowSmallRight } from "react-icons/hi2";

const NavBarTwo = () => {
  return (
    <div className="work-sans absolute pt-6 flex justify-center items-start w-full bg-transparent text-black text-[17px] z-40 overflow-hidden">
      <div className="flex w-[94%] justify-between">
        <div>
          <Link href="https://michael-dev.vercel.app/">
            <p>Ekow.dev</p>
          </Link>
        </div>

        <div className="flex justify-center items-center gap-4">
          <p>Accra</p>
          <p>12:33</p>
          <p>28C</p>
          <HiArrowSmallRight />
          <p>NY</p>
          <p>07:33</p>
          <p>13C</p>
        </div>

        <div className="flex gap-4">
          <Link href="/">
            <p>Work</p>
          </Link>

          <Link href="/">
            <p>Services</p>
          </Link>

          <Link href="/">
            <p>Start a project</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarTwo;
