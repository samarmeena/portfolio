import "./globals.css";
import "@/styles/themes.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Bottombar from "@/components/Bottombar";
import Explorer from "@/components/Explorer";
import Sidebar from "@/components/Sidebar";
import Tabsbar from "@/components/Tabsbar";
import Titlebar from "@/components/Titlebar";
import styles from "@/styles/Layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vijay Meena",
  description: "A person who uses computers every day to innovate new things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Titlebar />
        <div className={styles.main}>
          <Sidebar />
          <Explorer />
          <div className="w-full">
            <Tabsbar />
            <main id="main-editor" className={styles.content}>
              {children}
            </main>
          </div>
        </div>
        <Bottombar />
      </body>
    </html>
  );
}
