"use client";
import { useState, useEffect } from "react";

interface GhibliDustBunnyProps {
  className?: string;
  size?: "small" | "medium" | "large";
  animated?: boolean;
  style?: React.CSSProperties;
}

export default function GhibliDustBunny({
  className = "",
  size = "medium",
  animated = true,
  style,
}: GhibliDustBunnyProps) {
  return null;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setIsVisible(true), Math.random() * 2000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [animated]);

  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${className} ${
        animated ? "transition-all duration-1000" : ""
      } ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      style={style}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Main dust bunny body - fluffy circle */}
        <circle
          cx="20"
          cy="20"
          r="15"
          fill="currentColor"
          className="text-gray-800"
        />

        {/* Fluffy texture - smaller circles around the edge */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 20 + Math.cos(angle) * 12;
          const y = 20 + Math.sin(angle) * 12;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3"
              fill="currentColor"
              className="text-gray-700"
            />
          );
        })}

        {/* Inner fluffy bits */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x = 20 + Math.cos(angle) * 8;
          const y = 20 + Math.sin(angle) * 8;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="2"
              fill="currentColor"
              className="text-gray-600"
            />
          );
        })}

        {/* Eyes - two white dots */}
        <circle
          cx="16"
          cy="17"
          r="2"
          fill="currentColor"
          className="text-white"
        />
        <circle
          cx="24"
          cy="17"
          r="2"
          fill="currentColor"
          className="text-white"
        />

        {/* Eye pupils */}
        <circle
          cx="16"
          cy="17"
          r="1"
          fill="currentColor"
          className="text-black"
        />
        <circle
          cx="24"
          cy="17"
          r="1"
          fill="currentColor"
          className="text-black"
        />

        {/* Little legs - tiny black dots at bottom */}
        <circle
          cx="15"
          cy="30"
          r="1"
          fill="currentColor"
          className="text-black"
        />
        <circle
          cx="20"
          cy="32"
          r="1"
          fill="currentColor"
          className="text-black"
        />
        <circle
          cx="25"
          cy="30"
          r="1"
          fill="currentColor"
          className="text-black"
        />
      </svg>
    </div>
  );
}
