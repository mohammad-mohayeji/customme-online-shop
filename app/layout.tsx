import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainHeader from "@/components/layout/main-header";
import MainFooter from "@/components/layout/main-footer";
import PersianNumbers from "@/components/layout/persian-numbers";

const iranSansX = localFont({
  src: [
    {
      path: "./fonts/woff/IRANSansX-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/woff/IRANSansX-UltraLight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/woff/IRANSansX-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/woff/IRANSansX-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/woff/IRANSansX-DemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/woff/IRANSansX-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/woff/IRANSansX-Black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/woff/IRANSansX-ExtraBlack.woff",
      weight: "950",
      style: "normal",
    },
    {
      path: "./fonts/woff/IRANSansX-Heavy.woff",
      weight: "1000",
      style: "normal",
    },
    {
      path: "./fonts/woff/IRANSansX-Bold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./fonts/woff/IRANSansX-Regular.woff",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-iran-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranSansX.variable} antialiased font-iran-sans relative z-0`}>
        <PersianNumbers>
          <MainHeader />
          {children}
          <MainFooter />
        </PersianNumbers>
      </body>
    </html>
  );
}
