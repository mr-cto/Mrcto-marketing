import { ReactNode } from "react";

interface MagicCardProps {
  title: string;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

export default function MagicCard({
  title,
  icon,
  children,
  className = "",
}: MagicCardProps) {
  return (
    <div className={`p-6 bg-white rounded-lg shadow text-center ${className}`}>
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h2 className="font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
}
