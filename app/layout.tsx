import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RogerAI API Concept",
  description:
    "A focused API onboarding concept for RogerAI's social and on-chain intelligence.",
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
