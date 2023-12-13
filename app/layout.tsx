import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { User } from "@/components/User";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Server Actions Demo",
  description: "Demo of server actions in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col gap-16 w-screen h-screen justify-center items-center">
          <User />
          {children}
        </main>
      </body>
    </html>
  );
}
