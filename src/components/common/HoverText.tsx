"use client";
import { cn } from "@/utils/cn";
import React, { useState } from "react";

interface HoverTextProps {
  text: string;
  classTextNormal?: string;
  classTextHover?: string;
  classContainer?: string;
}
const HoverText = ({
  text,
  classTextNormal,
  classTextHover,
  classContainer = "",
}: HoverTextProps) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`relative text-sm w-full h-[18.75px] overflow-hidden cursor-pointer flex items-center justify-center ${classContainer}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute w-full *:font-medium transition-transform duration-300 ${
          hovered ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <span className={cn("text-white inline-block", classTextNormal)}>
          {text}
        </span>
      </div>
      <div
        className={`absolute w-full transition-transform duration-300 ${
          hovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <span className={cn("text-neutral-800 inline-block", classTextHover)}>
          {text}
        </span>
      </div>
    </div>
  );
};

export default HoverText;
