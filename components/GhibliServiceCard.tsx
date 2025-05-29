"use client";
import { ReactNode, useState, useEffect } from "react";
import GhibliDustBunny from "./GhibliDustBunny";

interface GhibliServiceCardProps {
  title: string;
  description: string;
  icon: string | ReactNode;
  features?: string[];
  href?: string;
  color?: "forest" | "sky" | "meadow" | "sunset";
  delay?: number;
  className?: string;
}

export default function GhibliServiceCard({
  title,
  description,
  icon,
  features,
  href,
  color = "forest",
  delay = 0,
  className = "",
}: GhibliServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [sparkles, setSparkles] = useState<
    Array<{
      left: number;
      top: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    // Generate sparkle positions on client side only
    const sparkleData = Array.from({ length: 6 }, () => ({
      left: 20 + Math.random() * 60,
      top: 20 + Math.random() * 60,
      delay: Math.random() * 2,
    }));
    setSparkles(sparkleData);
  }, []);

  const colorClasses = {
    forest:
      "from-green-100 to-emerald-200 border-green-300 hover:from-green-200 hover:to-emerald-300",
    sky: "from-blue-100 to-sky-200 border-blue-300 hover:from-blue-200 hover:to-sky-300",
    meadow:
      "from-yellow-100 to-lime-200 border-yellow-300 hover:from-yellow-200 hover:to-lime-300",
    sunset:
      "from-orange-100 to-pink-200 border-orange-300 hover:from-orange-200 hover:to-pink-300",
  };

  const iconColorClasses = {
    forest: "text-green-600",
    sky: "text-blue-600",
    meadow: "text-yellow-600",
    sunset: "text-orange-600",
  };

  const CardContent = () => (
    <div
      className={`
        relative p-8 rounded-3xl border-2 transition-all duration-700 ease-out
        bg-gradient-to-br ${colorClasses[color]}
        transform hover:scale-105 hover:rotate-1 hover:-translate-y-2
        shadow-lg hover:shadow-2xl
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {sparkles.map((sparkle, i) => (
          <div
            key={i}
            className={`
              absolute w-1 h-1 bg-white rounded-full transition-opacity duration-500
              ${isHovered ? "opacity-100 animate-sparkle" : "opacity-0"}
            `}
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.delay}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Icon */}
      <div
        className={`text-6xl mb-6 ${
          iconColorClasses[color]
        } transition-transform duration-500 ${
          isHovered ? "scale-110 rotate-12" : ""
        }`}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6">{description}</p>

      {/* Features list */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-gray-600 text-sm"
            >
              <span className="text-green-500 mt-1 flex-shrink-0">✨</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Learn More link */}
      {href && (
        <div className="mt-6">
          <span className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors">
            Learn More
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      )}

      {/* Decorative dust bunny */}
      <GhibliDustBunny
        className="absolute top-4 right-4 opacity-15 animate-float-slow"
        size="small"
      />

      {/* Decorative element */}
      <div
        className={`
        absolute bottom-4 right-4 w-8 h-8 rounded-full 
        bg-gradient-to-br ${colorClasses[color]} 
        opacity-30 transition-all duration-500
        ${isHovered ? "scale-150 opacity-50" : ""}
      `}
      ></div>
    </div>
  );

  // If href is provided, wrap in a link
  if (href) {
    return (
      <a href={href} className="block">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}
