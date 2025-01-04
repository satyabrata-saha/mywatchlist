"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FullNavbar } from "@/components/ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "My Watchlist",
//   description:
//     "A simple watchlist app to keep track of my watched, unfinished, currently watching anime, Manga, movies, and TV shows.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-900 dark:text-gray-50 tracking-wide`}
      >
        <div className="w-full py-4 px-0">
          <FullNavbar />
        </div>
        {children}
      </body>
    </html>
  );
}
