"use client";

import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Button from "./Button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ZentryHero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showPreview, setShowPreview] = useState(false);
  const previewContainerRef = useRef(null);
  const inactivityTimer = useRef(null);
  const backgroundVideoRef = useRef(null);
  const playedVideos = useRef(new Set()); // Track which videos have been played

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

  // Function to advance to next video
  const nextVideo = () => {
    setCurrentIndex((prev) => (prev % totalVideos) + 1);
  };

  // Track mouse movement and manage preview visibility
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Show preview on mouse movement
      if (!showPreview) {
        setShowPreview(true);
      }

      // Reset inactivity timer
      clearTimeout(inactivityTimer.current);
      inactivityTimer.current = setTimeout(() => {
        setShowPreview(false);
      }, 200); // Hide after 1.5 seconds of inactivity
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(inactivityTimer.current);
    };
  }, [showPreview]);

  // Handle video ending
  useEffect(() => {
    const videoElement = backgroundVideoRef.current;
    if (!videoElement) return;

    const handleEnded = () => {
      playedVideos.current.add(currentIndex);
      nextVideo();
    };

    videoElement.addEventListener("ended", handleEnded);

    // Reset video if it's been played before
    if (playedVideos.current.has(currentIndex)) {
      videoElement.currentTime = 0;
    }

    // Play the video
    videoElement.play().catch((e) => console.log("Play error:", e));

    return () => {
      videoElement.removeEventListener("ended", handleEnded);
    };
  }, [currentIndex]);

  // Calculate preview position based on mouse movement
  useEffect(() => {
    if (!previewContainerRef.current || !showPreview) return;

    const container = previewContainerRef.current;
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (mousePosition.x - centerX) / centerX;
    const deltaY = (mousePosition.y - centerY) / centerY;

    const translateX = deltaX * 20;
    const translateY = deltaY * 20;

    const scale =
      1 - Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) * 0.5, 0.3);

    gsap.to(container, {
      x: translateX,
      y: translateY,
      scale: scale,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [mousePosition, showPreview]);

  // Hide preview initially and when inactive
  useEffect(() => {
    if (!previewContainerRef.current) return;

    if (!showPreview) {
      gsap.to(previewContainerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [showPreview]);

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
        <div className="w-full h-full bg-[#00000040] absolute z-40"></div>
        <div>
          <div
            ref={previewContainerRef}
            className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg opacity-0"
          >
            <div
              onClick={handleMiniVdClick}
              className="origin-center transition-all duration-500 ease-in"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                id="current-video"
                className="size-64 origin-center object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center "
            onLoadedData={handleVideoLoad}
          />

          <video
            ref={backgroundVideoRef}
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            muted={currentIndex == totalVideos - 1}
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          rec<b>a</b>p
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-transparent bg-gradient-to-br from-[#ffffff] to-[#ffffff00] bg-clip-text">
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
  );
};

export default ZentryHero;
