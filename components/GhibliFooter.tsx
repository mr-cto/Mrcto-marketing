"use client";
import { useEffect, useState } from "react";

export default function GhibliFooter() {
  const [leaves, setLeaves] = useState<
    Array<{
      left: number;
      top: number;
      delay: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    // Generate leaf positions on client side only
    const leafData = Array.from({ length: 12 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 4,
    }));
    setLeaves(leafData);
  }, []);
  return (
    <footer className="relative bg-gradient-to-t from-green-800 to-green-600 text-white py-16 px-6 overflow-hidden mt-0">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Floating leaves */}
        {leaves.map((leaf, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-green-300 rounded-full opacity-20 animate-float-slow"
            style={{
              left: `${leaf.left}%`,
              top: `${leaf.top}%`,
              animationDelay: `${leaf.delay}s`,
              animationDuration: `${leaf.duration}s`,
            }}
          ></div>
        ))}

        {/* Gentle hills silhouette */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-900 to-transparent rounded-t-full transform scale-x-150"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">✨</span>
              </div>
              <h3 className="text-3xl font-bold font-serif">AI Magic</h3>
            </div>
            <p className="text-green-100 leading-relaxed mb-6 max-w-md">
              Bringing the wonder and wisdom of Studio Ghibli to AI
              transformation. We help organizations discover the magic of
              artificial intelligence through thoughtful, human-centered
              solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon="🐦" label="Twitter" />
              <SocialLink href="#" icon="💼" label="LinkedIn" />
              <SocialLink href="#" icon="📧" label="Email" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-yellow-200">
              Our Services
            </h4>
            <ul className="space-y-2 text-green-100">
              <li>
                <FooterLink href="/services/ai-strategy">
                  AI Strategy & Vision
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/services/automation">
                  Intelligent Automation
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/services/analytics">
                  Data Analytics
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/services/custom">
                  Custom Solutions
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/services/training">
                  Training & Support
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-yellow-200">Company</h4>
            <ul className="space-y-2 text-green-100">
              <li>
                <FooterLink href="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
              <li>
                <FooterLink href="/blog">Blog</FooterLink>
              </li>
              <li>
                <FooterLink href="/careers">Careers</FooterLink>
              </li>
              <li>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-green-500 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 text-sm mb-4 md:mb-0">
            © 2025 AI Magic. All rights reserved. Made with ✨ and a touch of
            Ghibli magic.
          </p>
          <div className="flex items-center space-x-6 text-sm text-green-200">
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/cookies">Cookie Policy</FooterLink>
          </div>
        </div>

        {/* Magical disclaimer */}
        <div className="mt-8 p-4 bg-green-700/30 rounded-2xl border border-green-500/30">
          <p className="text-green-100 text-sm text-center">
            🌟 Like all magic, AI requires wisdom and care. Our solutions are
            designed with human oversight and ethical considerations at their
            heart. AI can be powerful but may produce unexpected results - we
            ensure responsible implementation every step of the way.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
      aria-label={label}
    >
      <span className="text-lg">{icon}</span>
    </a>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="hover:text-yellow-200 transition-colors duration-300 hover:underline"
    >
      {children}
    </a>
  );
}
