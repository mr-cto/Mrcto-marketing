interface GhibliTreeProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

export default function GhibliTree({
  className = "",
  size = "medium",
}: GhibliTreeProps) {
  const sizeClasses = {
    small: "w-12 h-16",
    medium: "w-16 h-20",
    large: "w-20 h-24",
  };

  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tree trunk */}
      <rect
        x="35"
        y="70"
        width="10"
        height="30"
        fill="currentColor"
        className="text-amber-800"
        rx="2"
      />

      {/* Tree foliage - multiple organic shapes */}
      <ellipse
        cx="40"
        cy="45"
        rx="25"
        ry="20"
        fill="currentColor"
        className="text-green-600"
      />
      <ellipse
        cx="30"
        cy="35"
        rx="18"
        ry="15"
        fill="currentColor"
        className="text-green-500"
      />
      <ellipse
        cx="50"
        cy="35"
        rx="18"
        ry="15"
        fill="currentColor"
        className="text-green-500"
      />
      <ellipse
        cx="40"
        cy="25"
        rx="15"
        ry="12"
        fill="currentColor"
        className="text-green-400"
      />

      {/* Small highlights for magical effect */}
      <circle
        cx="35"
        cy="30"
        r="2"
        fill="currentColor"
        className="text-yellow-300 opacity-70"
      />
      <circle
        cx="48"
        cy="40"
        r="1.5"
        fill="currentColor"
        className="text-yellow-300 opacity-70"
      />
    </svg>
  );
}
