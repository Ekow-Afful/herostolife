"use client";

import { motion, useMotionValue, animate } from 'framer-motion';
import React from 'react';

const InteractiveLetters: React.FC = () => {
  const letters = ['E', 'K', 'O', 'W'];

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    x: ReturnType<typeof useMotionValue>,
    y: ReturnType<typeof useMotionValue>,
    rotateX: ReturnType<typeof useMotionValue>,
    rotateY: ReturnType<typeof useMotionValue>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    animate(x, offsetX * 2, { duration: 0.5 });
    animate(y, offsetY * 2, { duration: 0.5 });
    animate(rotateX, offsetY / 10, { duration: 0.5 });
    animate(rotateY, -offsetX / 10, { duration: 0.5 });

    setTimeout(() => {
      animate(x, getRandomPosition(30), { duration: 0.5 });
      animate(y, getRandomPosition(30), { duration: 0.5 });
      animate(rotateX, getRandomRotation(), { duration: 0.5 });
      animate(rotateY, getRandomRotation(), { duration: 0.5 });

      // Spin and return to scattered center
      setTimeout(() => {
        animate(x, getRandomPosition(50), { duration: 0.2 });
        animate(y, getRandomPosition(50), { duration: 0.2 });
        animate(rotateX, getRandomRotation(), { duration: 0.2 });
        animate(rotateY, getRandomRotation(), { duration: 0.2 });
      }, 1000);
    }, 500);
  };

  const getRandomPosition = (max: number) => Math.random() * max - max / 2;
  const getRandomRotation = () => Math.random() * 360 - 180;

  return (
    <div className="absolute top-[4%] w-full h-screen bg-transparent overflow-hidden">
      <div className="absolute left-0 right-0 flex items-center justify-center">
        {letters.map((letter, index) => {
          const x = useMotionValue(0);
          const y = useMotionValue(0);
          const rotateX = useMotionValue(getRandomRotation());
          const rotateY = useMotionValue(getRandomRotation());

          return (
            <motion.div
              key={index}
              style={{
                x,
                y,
                rotateX,
                rotateY,
                perspective: 1000,
                transformOrigin: 'center',
              }}
              className="text-[250px] font-bold text-blue-500 transition-transform duration-200 ease-out shadow-lg shadow-gray-500 cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, x, y, rotateX, rotateY)}
              whileHover={{
                scale: 1.2,
                rotateX: 10,
                rotateY: 10,
                transition: { duration: 0.1 },
              }}
            >
              {letter}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default InteractiveLetters;
