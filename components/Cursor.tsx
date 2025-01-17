"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type MousePosition = [number, number];
export default function Cursor() {
  const [mousePos, setMousePos] = useState<MousePosition>([0, 0]);

  const [mouseVariant, setMouseVariant] = useState<"default" | "hover">(
    "default"
  );

  const [size, setSize] = useState<number>(6);

  // Handling mouse movement and setting the mouse position
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePos([e.clientX, e.clientY]);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Handling mouse down and mouse up to change cursor size
  useEffect(() => {
    const mouseDown = () => setSize(12);
    const mouseUp = () => setSize(6);

    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);
    return () => {
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  // Defining cursor variants for default and hover states
  const cursorVariants = {
    default: {
      x: mousePos[0] - size * 2,
      y: mousePos[1] - size * 2,
      height: size * 4,
      width: size * 4,
      background: "transparent",
      transition: {
        type: "spring", // Use "spring" for more natural, smooth motion
        damping: 10, // Controls how quickly the cursor reaches the target
        stiffness: 100, // Controls the speed of the spring (higher is faster)
        mass: 1, // Controls the bounciness
        duration: 0.9, // Increase this to slow down the cursor's following speed
      },
    },
    hover: {
      x: mousePos[0] - size * 8,
      y: mousePos[1] - size * 8,
      height: size * 16,
      width: size * 16,
      backgroundColor: "red",
      transition: {
        type: "spring", // Use "spring" for more natural, smooth motion
        damping: 10, // Controls how quickly the cursor reaches the target
        stiffness: 100, // Controls the speed of the spring (higher is faster)
        mass: 1, // Controls the bounciness
        duration: 0.9, // Increase this to slow down the cursor's following speed
      },
    },
  };

  return (
    <motion.div
      className={`cursor border-2 dark:border-slate-400 border-yellow-800
                rounded-full fixed top-0  left-0 select-none
                z-50 touch-none pointer-events-none
                ${mouseVariant === "hover"}`}
      variants={cursorVariants}
      animate={mouseVariant}
    />
  );
}
