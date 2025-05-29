"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function GhibliNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
      ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }
    `}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold text-lg">✨</span>
          </div>
          <span className="text-2xl font-bold text-green-800 font-serif">
            AI Magic
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/contact" label="Contact" />

          <button className="ghibli-button primary text-sm">
            Start Journey
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-5 h-0.5 bg-green-700 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-green-700 transition-all duration-300 mt-1 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-green-700 transition-all duration-300 mt-1 ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
        md:hidden absolute top-full left-0 right-0 
        bg-white/95 backdrop-blur-md shadow-lg
        transition-all duration-300 ease-out
        ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }
      `}
      >
        <div className="px-6 py-4 space-y-4">
          <MobileNavLink
            href="/"
            label="Home"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavLink
            href="/services"
            label="Services"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavLink
            href="/contact"
            label="Contact"
            onClick={() => setIsMenuOpen(false)}
          />
          <button className="ghibli-button primary w-full text-sm">
            Start Journey
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative text-green-700 hover:text-green-900 font-medium transition-colors duration-300 group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-green-700 hover:text-green-900 font-medium py-2 transition-colors duration-300"
    >
      {label}
    </Link>
  );
}
