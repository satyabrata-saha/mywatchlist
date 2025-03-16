import { Open_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotsMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Watchlist",
  description:
    "A simple watchlist app to keep track of my watched, unfinished, currently watching anime, Manga, movies, and TV shows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${openSans.variable} ${robotsMono.variable} antialiased bg-gray-900 text-gray-50 dark:bg-gray-900 dark:text-gray-50 tracking-wide min-h-screen`}
      >
        {children}
        {/* <!-- Cloudflare Web Analytics --> */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "cc52d372fb934ec2bb49a3ef7973c008"}'
        />
        {/* <!-- End Cloudflare Web Analytics --> */}
      </body>
    </html>
  );
}
