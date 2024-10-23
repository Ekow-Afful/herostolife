"use client";
import {  useState } from "react";

import { motion } from "framer-motion";
import { navVariant2, navVariants } from "../../utils/motion";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import NavDrop from "./NavDrop";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // const [navStick, setNavStick] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 500) {
  //       setNavStick(true);
  //     } else {
  //       setNavStick(false);
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("scroll", () => {});
  //   };
  // }, []);

  return (
    <div className="work-sans flex fixed justify-center items-center mx-auto z-40 w-full mt-3">
      <div className="flex flex-col gap-4 md:w-[620px] w-[520px] mx-auto sm:mt-0  bg-transparent ">
        <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="flex justify-between items-center gap-0 text-[#ffffff] bg-[#111112] shadow-xl  shadow-[#111111] rounded-[12px] z-50 p-1 sm:border-none border-[0.1px] border-[#383636]"
        >
          <Link href="/" className="w-12 h-12 flex justify-center items-center">
            <Image
              width={100}
              height={100}
              alt="Hero Image"
              loading="eager"
              src="/favicon.ico"
              quality={100}
              className=" object-fit w-6"
            />
          </Link>

          <div className="flex lg:gap-10 md:gap-8 gap-6 items-center lg:text-[15px] text-white">
            <Link href="">
              <div className="group relative hidden sm:flex">
                <h2 className="">About</h2>
                <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-white  transition-all duration-300 group-hover:w-full"></div>
              </div>
            </Link>
            <Link href="">
              <div className="group relative hidden sm:flex">
                <h2 className="">Services</h2>
                <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-white  transition-all duration-300 group-hover:w-full"></div>
              </div>
            </Link>

            <Link href="">
              <div className="group relative hidden sm:flex">
                <h2 className="">Gallery</h2>
                <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-white  transition-all duration-300 group-hover:w-full"></div>
              </div>
            </Link>
            <Link href="">
              <div className="group relative hidden sm:flex">
                <h2 className="">Contacts</h2>
                <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-white  transition-all duration-300 group-hover:w-full"></div>
              </div>
            </Link>
          </div>
          <div
            className="cursor-pointer w-12 h-12 flex justify-center items-center rounded-[10px] text-[19px] bg-transparent hover:bg-white transition-colors duration-300 hover:text-black sm:border-none border-[0.1px] border-[#383636]"
            onClick={handleClick}
          >
            <div
              className={`transition-transform duration-200 ${
                click ? "-rotate-45" : "-rotate-90"
              }`}
            >
              <FaPlus />
            </div>
          </div>
        </motion.nav>

        <motion.div
          variants={navVariant2}
          initial="hidden"
          animate={click ? "show" : "hidden"}
          className={` bg-[#111111] shadow-xl  shadow-[#00000048] rounded-[12px] text-white flex items-start justify-start p-5 ${
            click ? "" : ""
          }`}
        >
          <NavDrop />
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
