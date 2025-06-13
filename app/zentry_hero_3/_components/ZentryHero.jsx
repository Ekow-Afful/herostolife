"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Link from "next/link";

import { TiLocationArrow } from "react-icons/ti";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

import Image from "next/image";

const navItems = ["unscripted", "tours", "shoots", "team", "live"];

gsap.registerPlugin(ScrollTrigger);

const ZentryHero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const toggleAudioIndicator = () => {
    setIsMuted((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  const handleClick = () => {
    currentIndex == totalVideos - 1 ? setIsMuted(true) : setIsMuted(false);
  };

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  const getVideoSrc = (index) => `zentry/videos/ray-${index}.mp4`;

  return (
    <>
      {" "}
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
      <div className="relative h-dvh w-screen overflow-x-hidden">
        {isLoading && (
          <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
            <div className="three-body">
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
            </div>
          </div>
        )}

        <div
          id="video-frame"
          className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
        >
          <div>
            <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextVideoRef}
                  src={getVideoSrc(upcomingVideoIndex)}
                  loop
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </div>
            <video
              ref={nextVideoRef}
              src={getVideoSrc(currentIndex)}
              loop
              id="next-video"
              className="absolute-center invisible absolute z-20 size-64 object-cover object-center "
              onLoadedData={handleVideoLoad}
            />

            <video
              src={getVideoSrc(
                currentIndex === totalVideos - 1 ? 1 : currentIndex
              )}
              autoPlay
              loop
              muted={isMuted}
              onClick={handleClick}
              className="absolute left-0 top-0 size-full object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          </div>

          <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
            rec<b>a</b>p
          </h1>

          <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-24 px-5 sm:px-10">
              <h1 className="special-font hero-heading text-blue-100">
                un<b>scri</b>pted
              </h1>

              <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                A short recap of season 3 <br /> of unscripted with reagan
              </p>

              <Link
                href="https://www.youtube.com/watch?v=sCx_0nQgzws&list=PLmhcVBD2zUmF-s_4FBf5--OWxLux9tKHT"
                target="_blank"
              >
                <Button
                  id="watch-trailer"
                  title="Watch Unscripted"
                  leftIcon={<TiLocationArrow />}
                  containerClass="!bg-[#998cc5] flex-center gap-1"
                />
              </Link>
            </div>
          </div>
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-[#000000]">
          g<b>a</b>ming
        </h1>
      </div>
    </>
  );
};

export default ZentryHero;
