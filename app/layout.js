import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Apex Learning",
  description:
    "Apex Learning: Empowering Education with AI. Your AI-powered path to the Apex of Knowledge.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <Provider>{children}</Provider>
          </body>
      </html>
    </ClerkProvider>
  );
}
