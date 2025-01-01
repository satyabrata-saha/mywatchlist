"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AddShow, Navbar } from "@/components/ui";
import { useEffect, useState } from "react";

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

export function setIsLogin() {
  return setIsLogin;
}

export default function RootLayout({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(true);

  useEffect(() => {
    setIsAddFormOpen(true);
  }, []);
  const toggleAddForm = () => {
    setIsAddFormOpen((prev) => !prev);
  };

  return (
    <html lang="en" className="dark">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-900 dark:text-gray-50 flex flex-col items-center justify-center min-w-full min-h-full p-4 tracking-wide`}
      >
        <div className="w-full h-fit items-start">
          <Navbar isLogin={isLogin} toggleAddForm={toggleAddForm} />
          <AddShow isAddFormOpen={isAddFormOpen} />
        </div>
        {children}
      </body>
    </html>
  );
}
