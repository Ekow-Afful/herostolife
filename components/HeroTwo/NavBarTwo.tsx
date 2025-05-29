import Link from "next/link";
import React from "react";

import TimeAndWeather from "./TimeAndWeather";

const NavBarTwo = ({
  click,
  setClick,
}: {
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col gap-6 work-sans absolute top-0 pt-6  justify-center items-center w-full bg-transparent text-[17px] z-40 overflow-hidden">
      <div className="flex w-[94%] items-center justify-between">
        <div>
          <Link
            href="https://michael-dev.vercel.app/"
            target="_blank"
            className="text-[1rem] sm:text-lg"
          >
            <p>Ekow.dev</p>
          </Link>
        </div>

        <div className="hidden sm:flex">
          <TimeAndWeather />
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="lg:flex gap-4 hidden">
            <Link href="">
              <p>Work</p>
            </Link>
            <Link href="">
              <p>Services</p>
            </Link>
            <Link href="https://michael-dev.vercel.app/" target="_blank">
              <p>Start a project</p>
            </Link>
          </div>

          <button
            onClick={() => setClick(!click)}
            className={`relative sm:w-14 sm:h-8 w-12 h-6 rounded-full transition-colors duration-500 cursor-pointer ${
              click ? "bg-[#595656]" : "bg-[#868585]"
            }`}
          >
            <div
              className={`absolute top-1 left-1 sm:w-6 sm:h-6 w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-500 ${
                click ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>
      </div>
      <div className="sm:hidden ">
        <TimeAndWeather />
      </div>
    </div>
  );
};

export default NavBarTwo;
