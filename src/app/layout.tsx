import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";

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

export const metadata: Metadata = {
  title: "Onchain Ticketing",
  description:
    "Low cost, high performance ticketing system using the Solana blockchain",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
