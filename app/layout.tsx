import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";

export const metadata: Metadata = {
  title:
    "LeadWithSandeep | Leadership Architecture & Trust Partner to Scaling Founders",
  description:
    "A grounded partnership for founders moving from effort to leadership architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="navy-cognac" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans flex flex-col min-h-screen antialiased selection:bg-brand-100 selection:text-brand-900">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
