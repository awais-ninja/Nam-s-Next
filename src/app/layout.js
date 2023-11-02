"use client";
import { GlobalContextProvider } from "@/context/globalContext";
import "./globals.css";
import App from "./App";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalContextProvider>
        <App />
        {children}
      </GlobalContextProvider>
    </html>
  );
}
