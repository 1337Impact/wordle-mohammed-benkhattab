import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WordleProvider } from "@/context/WordleContext";
import { UtilityProvider } from "@/context/UtilityContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wordle",
  description: "Wordle Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inter.className} bg-red-100`}>
        <WordleProvider>
          <UtilityProvider>{children}</UtilityProvider>
        </WordleProvider>
      </body>
    </html>
  );
}
