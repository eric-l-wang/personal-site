import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SoundProvider } from "@/contexts/SoundContext";
import { ThemeProvider } from "next-themes";
import { VT323, Caveat, Space_Mono } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vt323",
});

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Eric Wang",
  description: "Founder, Engineer, Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vt323.variable} ${caveat.variable} ${spaceMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SoundProvider>{children}</SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
