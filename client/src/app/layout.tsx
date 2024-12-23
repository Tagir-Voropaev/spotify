import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.scss";
import styles from "./layout.module.scss";
import Sidebar from "@/layout/Sidebar";
import Player from "@/layout/Player";
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}`}>
          {children}
      </body>
    </html>
  );
}
