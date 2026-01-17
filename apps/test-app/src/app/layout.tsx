import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Grove Test App",
  description: "Test application for the-grove components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
