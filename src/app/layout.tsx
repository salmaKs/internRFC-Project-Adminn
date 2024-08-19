import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from '@/app/providers';
import {fonts} from '@/app/fonts'
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Projet | internRFC",
    template: "%s | internRFC",
  },
  description: "interRFC website for intern management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body className={inter.className}>
       <Providers> 
        <Navbar/>
        {children}
        </Providers>
        <Footer/>
         
        </body>
    </html>
  );
}
