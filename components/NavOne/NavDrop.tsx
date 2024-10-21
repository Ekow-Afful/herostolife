import React from "react";
import NavLinks from "./NavLinks";

import NavCardOne from "./NavCardOne";
import NavCardTwo from "./NavCardTwo";

const NavDrop = () => {
  return (
    <div className="work-sans flex flex-col gap-3 w-full h-full tracking-wide">
      <div className="flex gap-1 justify-center items-center w-full">
        <h4 className="w-[20%]">NAVIGATION</h4>
        <div className="bg-white h-[1px] w-[80%]"></div>
      </div>

      <NavLinks />

      <div className="flex w-full gap-2 justify-start items-start">
        <div className="flex justify-between items-center gap-1 w-1/2 h-full">
          <h4 className="w-[20%]">BLOG</h4>
          <div className="bg-white h-[1px] w-[62%]"></div>
        </div>

        <div className="flex justify-between items-center gap-1 w-1/2 h-full">
          <h4 className="w-[20%] text-[#2b9ab8]">SPOTLIGHT</h4>
          <div className="bg-[#2b9ab8] h-[1px] w-[62%]"></div>
        </div>
      </div>

      <div className="flex w-full gap-2 justify-start items-start">
        <NavCardOne />

        <NavCardTwo />
      </div>
    </div>
  );
};

export default NavDrop;
