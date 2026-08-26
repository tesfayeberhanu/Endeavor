import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Endeavor | A Tradition of Quality Cleaning",
  description: "Professional residential and commercial cleaning with a tradition of quality care.",
  icons: {
    icon: "/assets/endeavor-logo-v1.png",
    shortcut: "/assets/endeavor-logo-v1.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
