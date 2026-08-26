import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Healthy Home UAE | Premium Home Services",
  description: "Premium home and personal wellness services for healthier living across the UAE.",
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
