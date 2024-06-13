"use client";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useEffect } from "react";
import { ContextProvider, useAuthContext } from "@/context/authContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <Main>{children}</Main>
      </ContextProvider>
    </html>
  );
}

function Main({ children }) {
  const { loadData, orderStatus } = useAuthContext();
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (orderStatus !== null && window.location.pathname !== "/status") {
      if (!orderStatus) {
        return;
      }
      window.location.href = "/status";
    }
  }, [orderStatus]);

  return (
    <body className={inter.className}>
      <Navbar />
      {children}
      <Footer />
    </body>
  );
}
