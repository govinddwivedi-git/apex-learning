import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets : ['latin']
});

export const metadata = {
  title: "Apex Learning",
  description:
    "Apex Learning: Empowering Education with AI. Your AI-powered path to the Apex of Knowledge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        {children}
      </body>
    </html>
  );
}
