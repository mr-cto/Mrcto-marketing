interface GhibliCloudProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

export default function GhibliCloud({
  className = "",
  size = "medium",
}: GhibliCloudProps) {
  const sizeClasses = {
    small: "w-16 h-10",
    medium: "w-24 h-16",
    large: "w-32 h-20",
  };

  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 40c-8 0-15-7-15-15s7-15 15-15c2-8 9-14 18-14s16 6 18 14c8 0 15 7 15 15s-7 15-15 15H20z"
        fill="currentColor"
        className="text-white opacity-80"
      />
      <path
        d="M25 35c-6 0-11-5-11-11s5-11 11-11c1-6 7-10 13-10s12 4 13 10c6 0 11 5 11 11s-5 11-11 11H25z"
        fill="currentColor"
        className="text-white opacity-60"
      />
    </svg>
  );
}
