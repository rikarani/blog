import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Random Blog",
  description: "Personal Blog yang isinya bakal random atau bahkan gada isinya",
  authors: { name: "Phasya Ananta", url: "https://github.com/rikarani" },
};

type Props = Readonly<React.PropsWithChildren>;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "dark h-dvh bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
