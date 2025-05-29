"use client";

interface GhibliLoaderProps {
  message?: string;
}

export default function GhibliLoader({
  message = "Preparing the magic...",
}: GhibliLoaderProps) {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-sky-200 via-emerald-100 to-green-200 flex items-center justify-center z-50">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white rounded-full opacity-30 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main loader content */}
      <div className="text-center">
        {/* Spinning magical element */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-green-200 rounded-full animate-spin"></div>
            {/* Inner spinning element */}
            <div
              className="absolute inset-2 border-4 border-t-green-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"
              style={{
                animationDirection: "reverse",
                animationDuration: "1.5s",
              }}
            ></div>
            {/* Center sparkle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Floating sparkles around loader */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-sparkle"
              style={{
                left: `${30 + Math.cos((i * 60 * Math.PI) / 180) * 40}px`,
                top: `${30 + Math.sin((i * 60 * Math.PI) / 180) * 40}px`,
                animationDelay: `${i * 0.3}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Loading text */}
        <h2 className="text-2xl font-bold text-green-800 mb-2 font-serif animate-pulse">
          {message}
        </h2>

        {/* Animated dots */}
        <div className="flex justify-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-green-600 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
