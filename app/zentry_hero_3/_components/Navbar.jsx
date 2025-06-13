"use client";

import React, { useEffect, useRef, useState } from "react";

import { TiLocationArrow } from "react-icons/ti";

import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const navItems = ["unscripted", "tours", "shoots", "team", "live"];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);

    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <Image
              src="/img/ray-logo.jpg"
              alt="logo"
              className="w-10 rounded-full"
              width={500}
              height={500}
            />

            <Link
              href="https://www.youtube.com/@officialraygan"
              target="_blank"
            >
              <Button
                id="product-button"
                title="Youtube Channel"
                rightIcon={<TiLocationArrow />}
                containerClass="!bg-[#FF0000ac] text-white  md:flex hidden items-center justify-center gap-1"
              />
            </Link>
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLocaleLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="ml-10 flex items-center"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="zentry/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
