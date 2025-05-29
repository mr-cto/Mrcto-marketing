interface GhibliTotoroProps {
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "gray" | "blue" | "white";
  style?: React.CSSProperties;
}

export default function GhibliTotoro({
  className = "",
  size = "medium",
  variant = "gray",
  style,
}: GhibliTotoroProps) {
  return null;
  const sizeClasses = {
    small: "w-12 h-16",
    medium: "w-16 h-20",
    large: "w-20 h-24",
  };

  const colorClasses = {
    gray: "text-gray-600",
    blue: "text-blue-400",
    white: "text-gray-100",
  };

  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      {/* Totoro body */}
      <ellipse
        cx="40"
        cy="65"
        rx="25"
        ry="30"
        fill="currentColor"
        className={colorClasses[variant]}
      />

      {/* Totoro belly */}
      <ellipse
        cx="40"
        cy="70"
        rx="18"
        ry="22"
        fill="currentColor"
        className="text-gray-200"
      />

      {/* Totoro ears */}
      <ellipse
        cx="30"
        cy="35"
        rx="8"
        ry="15"
        fill="currentColor"
        className={colorClasses[variant]}
        transform="rotate(-20 30 35)"
      />
      <ellipse
        cx="50"
        cy="35"
        rx="8"
        ry="15"
        fill="currentColor"
        className={colorClasses[variant]}
        transform="rotate(20 50 35)"
      />

      {/* Inner ears */}
      <ellipse
        cx="30"
        cy="35"
        rx="4"
        ry="8"
        fill="currentColor"
        className="text-pink-300"
        transform="rotate(-20 30 35)"
      />
      <ellipse
        cx="50"
        cy="35"
        rx="4"
        ry="8"
        fill="currentColor"
        className="text-pink-300"
        transform="rotate(20 50 35)"
      />

      {/* Totoro head */}
      <ellipse
        cx="40"
        cy="45"
        rx="20"
        ry="18"
        fill="currentColor"
        className={colorClasses[variant]}
      />

      {/* Eyes */}
      <ellipse
        cx="35"
        cy="42"
        rx="3"
        ry="4"
        fill="currentColor"
        className="text-black"
      />
      <ellipse
        cx="45"
        cy="42"
        rx="3"
        ry="4"
        fill="currentColor"
        className="text-black"
      />

      {/* Eye highlights */}
      <circle
        cx="36"
        cy="41"
        r="1"
        fill="currentColor"
        className="text-white"
      />
      <circle
        cx="46"
        cy="41"
        r="1"
        fill="currentColor"
        className="text-white"
      />

      {/* Nose */}
      <ellipse
        cx="40"
        cy="48"
        rx="1.5"
        ry="1"
        fill="currentColor"
        className="text-black"
      />

      {/* Whiskers */}
      <line
        x1="25"
        y1="46"
        x2="32"
        y2="47"
        stroke="currentColor"
        strokeWidth="1"
        className="text-black"
      />
      <line
        x1="48"
        y1="47"
        x2="55"
        y2="46"
        stroke="currentColor"
        strokeWidth="1"
        className="text-black"
      />
      <line
        x1="25"
        y1="50"
        x2="32"
        y2="50"
        stroke="currentColor"
        strokeWidth="1"
        className="text-black"
      />
      <line
        x1="48"
        y1="50"
        x2="55"
        y2="50"
        stroke="currentColor"
        strokeWidth="1"
        className="text-black"
      />

      {/* Chest pattern */}
      <ellipse
        cx="35"
        cy="65"
        rx="2"
        ry="3"
        fill="currentColor"
        className="text-gray-400"
      />
      <ellipse
        cx="40"
        cy="68"
        rx="2"
        ry="3"
        fill="currentColor"
        className="text-gray-400"
      />
      <ellipse
        cx="45"
        cy="65"
        rx="2"
        ry="3"
        fill="currentColor"
        className="text-gray-400"
      />
      <ellipse
        cx="37"
        cy="72"
        rx="2"
        ry="3"
        fill="currentColor"
        className="text-gray-400"
      />
      <ellipse
        cx="43"
        cy="72"
        rx="2"
        ry="3"
        fill="currentColor"
        className="text-gray-400"
      />
    </svg>
  );
}
