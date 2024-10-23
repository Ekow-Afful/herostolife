"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/luffy.jpg",
  "/purple.jpg",
  "/zoro_1.jpg",
  "/toji.jpg",
  "/zoro_2.jpg",
];

interface ImageDisplay {
  id: number; // Unique identifier for each image
  index: number; // Image index
  position: { x: number; y: number }; // Position of the image
}

const HeroImageEffect: React.FC = () => {
  const [imageDisplays, setImageDisplays] = useState<ImageDisplay[]>([]);
  const [lastPosition, setLastPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [imageIndex, setImageIndex] = useState(0); // To track the current index for sequential images

  const movementThreshold = 450; // Adjust for responsiveness

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - lastPosition.x; // Keep the sign (positive/negative)
      const deltaY = e.clientY - lastPosition.y; // Keep the sign (positive/negative)
      const newDistance = Math.abs(deltaX) + Math.abs(deltaY); // Just check the overall distance, ignoring sign here

      if (newDistance > movementThreshold) {
        showNextImage(e.clientX, e.clientY, deltaX, deltaY);
        setLastPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const showNextImage = (x: number, y: number, deltaX: number, deltaY: number) => {
      const newImage = {
        id: Date.now() + Math.floor(Math.random() * 1000), // Unique ID to differentiate images
        index: imageIndex, // Use the current index for the image
        position: { x, y },
      };

      // Add new image to the array with unique id and position
      setImageDisplays((prev) => [...prev, newImage]);

      // Set timeout to remove the image after 1 second
      setTimeout(() => {
        setImageDisplays((prev) => prev.filter((img) => img.id !== newImage.id)); // Remove by ID after 1 second
      }, 1000); // Image stays for 1 second

      // Increment the image index, resetting to 0 if it exceeds the image array length
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [imageIndex, lastPosition]);

  // Function to calculate the adjusted position based on positive or negative values
  const calculateOffset = (delta: number) => {
    return -delta / 5; // Inverted offset to match the mouse movement direction
  };

  return (
    <div className="absolute w-full h-full">
      <AnimatePresence>
        {imageDisplays.map((display) => (
          <motion.img
            key={display.id} // Use unique id for the key
            src={images[display.index]}
            alt="Random Display"
            className="absolute z-40 lg:w-[12%] lg:h-[20%] w-[12%] h-[13%] object-cover"
            initial={{
              x: display.position.x, // Start at the current position
              y: display.position.y, // Start at the current position
              
            }}
            animate={{
              x: display.position.x + calculateOffset(display.position.x - lastPosition.x) , // Adjust x based on positive or negative value
              y: display.position.y + calculateOffset(display.position.y - lastPosition.y), // Adjust y based on positive or negative value
              opacity: 1,
              scale: 1,
            }}
            exit={{
                x: display.position.x + calculateOffset(display.position.x - lastPosition.x), // Adjust x based on positive or negative value
                y: display.position.y + calculateOffset(display.position.y - lastPosition.y), // Adjust y based on positive or negative value
              opacity: 0,
              scale: 0.2,
            }}
           
            transition={{
              type: "",
              duration: 0.7,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default HeroImageEffect;
