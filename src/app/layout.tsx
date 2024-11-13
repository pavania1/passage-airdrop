"use clinet";
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


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
const ignazio = localFont({
  src: "./fonts/Ignazio.ttf",
  variable: "--fonts-ignazio",
  weight: "100 900",
})

const opensSans = localFont({
  src: "./fonts/OpenSans-VariableFont_wdth,wght.ttf",
  variable: "--fonts-opensans",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Passage Airdrop",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */}
        <link rel="icon" href="src/app/favicon.ico" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ignazio.variable} ${opensSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
