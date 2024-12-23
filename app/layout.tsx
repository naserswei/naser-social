import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-44">
            <Navbar />
          </div>
          <div className=" max-w-[100rem] mx-auto px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-44 bg-slate-100 ">
            {children}
            <ToastContainer position="top-center" />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
