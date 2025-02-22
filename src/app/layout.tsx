import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kyle Friel | Portfolio",
  description:
    "Kyle Friel is a software engineer who builds accessible, pixel-perfect digital experiences for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontSans.className,
          fontSans.variable,
          "antialiased bg-zinc-900 text-zinc-400 selection:bg-blue-300 selection:text-blue-900"
        )}
      >
        {children}
      </body>
    </html>
  );
}
