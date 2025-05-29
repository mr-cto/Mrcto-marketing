import "../styles/globals.css";
import { ReactNode } from "react";
import GhibliNav from "../components/GhibliNav";
import GhibliFooter from "../components/GhibliFooter";
import GhibliChatWidget from "../components/GhibliChatWidget";
import CookieConsent from "../components/CookieConsent";

export const metadata = {
  title: "AI Magic - Transform Your Organization",
  description:
    "Studio Ghibli inspired AI services that bring magical transformation to your organization",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans text-gray-800 antialiased">
        <GhibliNav />
        {children}
        <GhibliFooter />
        <GhibliChatWidget />
        <CookieConsent />
      </body>
    </html>
  );
}
