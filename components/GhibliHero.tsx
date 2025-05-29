"use client";
import { useEffect, useState } from "react";

export default function GhibliHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<
    Array<{
      left: number;
      top: number;
      delay: number;
      duration: number;
    }>
  >([]);
  const [grassHeights, setGrassHeights] = useState<number[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Generate sparkle positions on client side only
    const sparkleData = Array.from({ length: 12 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }));
    setSparkles(sparkleData);

    // Generate grass heights on client side only
    const heights = Array.from({ length: 5 }, () => 20 + Math.random() * 20);
    setGrassHeights(heights);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-200 via-emerald-100 to-green-200">
      {/* Floating clouds */}
      <div className="absolute inset-0">
        <div className="cloud cloud-1 absolute top-20 left-10 w-32 h-20 bg-white rounded-full opacity-80 animate-float-slow"></div>
        <div className="cloud cloud-2 absolute top-32 right-20 w-24 h-16 bg-white rounded-full opacity-70 animate-float-medium"></div>
        <div className="cloud cloud-3 absolute top-48 left-1/3 w-40 h-24 bg-white rounded-full opacity-60 animate-float-fast"></div>
      </div>

      {/* Parallax elements */}
      <div
        className="absolute inset-0 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${
            mousePosition.y * 0.01
          }px)`,
        }}
      >
        {/* Background hills */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-green-300 to-green-200 rounded-t-full transform scale-x-150"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-48 bg-gradient-to-t from-green-400 to-green-300 rounded-tl-full"></div>
      </div>

      {/* Floating magical elements */}
      <div className="absolute inset-0">
        {sparkles.map((sparkle, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-yellow-300 rounded-full animate-sparkle opacity-70`}
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.duration}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold text-green-800 mb-6 animate-fade-in-up font-serif">
            AI Magic
          </h1>
          <h2 className="text-2xl md:text-4xl text-green-700 mb-8 animate-fade-in-up animation-delay-300 font-light">
            Transforming Organizations with Wonder
          </h2>
          <p className="text-lg md:text-xl text-green-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            Like the gentle magic of Studio Ghibli films, we bring AI solutions
            that feel natural, intuitive, and transformative to your
            organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-900">
            <button className="ghibli-button primary">
              Begin Your Journey
            </button>
            <button className="ghibli-button secondary">
              Discover Our Magic
            </button>
          </div>
        </div>
      </div>

      {/* Gentle wind effect */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {grassHeights.map((height, i) => (
            <div
              key={i}
              className="w-1 h-8 bg-green-400 rounded-full animate-sway opacity-60"
              style={{
                animationDelay: `${i * 0.2}s`,
                height: `${height}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
