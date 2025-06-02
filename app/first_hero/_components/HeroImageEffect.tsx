"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

const images = [
  "/projects/beafit.webp",
  "/projects/art.webp",
  "/projects/crispy.webp",
  "/projects/royal.webp",
  "/projects/trust-power.webp",
  "/projects/trust_design.webp",
  "/projects/heroestolife_1.webp",
  "/projects/portfolio.webp",
  "/projects/game.webp",
  "/projects/facol.webp",
  "/projects/wear.webp",
  "/projects/royal_web.webp",
];

interface ImageDisplay {
  id: number;
  index: number;
  position: { x: number; y: number };
}

const HeroImageEffect: React.FC = () => {
  const [imageDisplays, setImageDisplays] = useState<ImageDisplay[]>([]);
  const [lastPosition, setLastPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [imageIndex, setImageIndex] = useState(0);

  // ref counter that guarantes unique IDs
  const nextId = useRef(1);

  const movementThreshold = 460;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - lastPosition.x;
      const deltaY = e.clientY - lastPosition.y;
      const newDistance = Math.abs(deltaX) + Math.abs(deltaY);

      if (newDistance > movementThreshold) {
        showNextImage(e.clientX, e.clientY);
        setLastPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const showNextImage = (x: number, y: number) => {
      const newImage: ImageDisplay = {
        id: nextId.current++,
        index: imageIndex,
        position: { x, y },
      };

      setImageDisplays((prev) => [...prev, newImage]);

      setTimeout(() => {
        setImageDisplays((prev) =>
          prev.filter((img) => img.id !== newImage.id)
        );
      }, 700);

      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [imageIndex, lastPosition]);

  return (
    <div className="absolute w-full h-full">
      <AnimatePresence>
        {imageDisplays.map((display) => {
          const { id, index, position } = display;

          return (
            <motion.div
              key={id}
              className="absolute z-40 2xl:w-[16%] 2xl:h-[20%] lg:w-[22%] lg:h-[18%] md:w-[22%] md:h-[13%]  w-[26%] h-[10%] object-cover"
              initial={{
                x: position.x,
                y: position.y,
                opacity: 0,
                scale: 0.2,
              }}
              animate={{
                x: position.x,
                y: position.y,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                x: position.x,
                y: position.y,
                opacity: 0,
                scale: 0.2,
              }}
              transition={{
                type: "tween",
                duration: 0.4,
              }}
            >
              <Image
                src={images[index]}
                alt="random display"
                width={800}
                height={600}
                className="lg:w-[85%] lg:h-[85%] w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default HeroImageEffect;
