import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { pageMetadata } from "@/helpers/system.helpers";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

export const metadata: Metadata = pageMetadata(
  "Eventpeddle | Onboarding",
  "Find, Organize and Attend Event",
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#1B4AF5" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
