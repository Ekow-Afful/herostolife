"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const images = [
  "/projects/beafit.png",
  "/projects/art.png",
  "/projects/trust-power.png",
  "/projects/trust_design.jpg",
  "/projects/heroestolife_1.png",
  "/projects/portfolio.png",
  "/projects/game.png",
  "/projects/facol.png",
  "/projects/wear.png",
  "/projects/royal_web.png",
];

// Interface to define the structure of the image display object
interface ImageDisplay {
  id: number; // Unique identifier for each image
  index: number; // Index of the image in the array
  position: { x: number; y: number }; // X and Y coordinates for positioning the image
}

const HeroImageEffect: React.FC = () => {
  const [imageDisplays, setImageDisplays] = useState<ImageDisplay[]>([]); // Stores the list of images displayed
  const [lastPosition, setLastPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  }); // Tracks the last mouse position
  const [imageIndex, setImageIndex] = useState(0); // Index for cycling through images in the array

  const movementThreshold = 430; // Threshold distance for triggering a new image display

  useEffect(() => {
    // Function to handle mouse movement and track the distance moved
    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - lastPosition.x; // Difference in X-axis movement
      const deltaY = e.clientY - lastPosition.y; // Difference in Y-axis movement
      const newDistance = Math.abs(deltaX) + Math.abs(deltaY); // Total movement distance

      // If the movement exceeds the threshold, show a new image and update the last position
      if (newDistance > movementThreshold) {
        showNextImage(e.clientX, e.clientY);
        setLastPosition({ x: e.clientX, y: e.clientY });
      }
    };

    // Function to display the next image based on mouse position and movement direction
    const showNextImage = (x: number, y: number) => {
      const newImage = {
        id: Date.now() + Math.floor(Math.random() * 1000), // Generate a unique ID for each image
        index: imageIndex, // Use the current index for selecting the image
        position: { x, y }, // Set the position where the image will appear
      };

      // Add the new image to the list of displays
      setImageDisplays((prev) => [...prev, newImage]);

      // Remove the image after 1 second
      setTimeout(() => {
        setImageDisplays((prev) =>
          prev.filter((img) => img.id !== newImage.id)
        );
      }, 700);

      // Cycle through the image array, resetting to 0 when the end is reached
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [imageIndex, lastPosition]);

  // Function to calculate the offset of the image based on movement direction
  const calculateOffset = (delta: number) => {
    return -delta / 3; // Apply a reverse offset to match the movement direction
  };

  return (
    <div className="absolute w-full h-full">
      <AnimatePresence>
        {imageDisplays.map((display) => (
          <motion.div
            key={display.id} // Use unique ID to track the image in the DOM
            className="absolute z-40 lg:w-[16%] lg:h-[20%] w-[14%] h-[13%] object-cover "
            initial={{
              x: display.position.x, // Initial X position
              y: display.position.y, // Initial Y position
            }}
            animate={{
              x:
                display.position.x +
                calculateOffset(display.position.x - lastPosition.x), // Animate X position with offset
              y:
                display.position.y +
                calculateOffset(display.position.y - lastPosition.y), // Animate Y position with offset
              opacity: 1, // Fade in
              scale: 1, // Full scale
            }}
            exit={{
              x:
                display.position.x +
                calculateOffset(display.position.x - lastPosition.x), // Exit with adjusted X position
              y:
                display.position.y +
                calculateOffset(display.position.y - lastPosition.y), // Exit with adjusted Y position
              opacity: 0, // Fade out
              scale: 0.2, // Scale down on exit
            }}
            transition={{
              type: "tween", //animation type
              duration: 0.4, // Duration of the animation
            }}
          >
            <Image
              src={images[display.index]}
              alt="random display"
              width="200"
              height="100"
              className="lg:w-[85%] lg:h-[85%] w-[14%] h-[13%] object-cover"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default HeroImageEffect;
