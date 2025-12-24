import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CalcTrust | Free Salary & Paycheck Calculators",
    template: "%s | CalcTrust",
  },
  description: "Free, accurate salary, paycheck, and tax calculators. Calculate your take-home pay, hourly rate, overtime, and more with our trusted financial tools.",
  keywords: ["salary calculator", "paycheck calculator", "take home pay calculator", "hourly to salary", "overtime calculator"],
  authors: [{ name: "CalcTrust" }],
  creator: "CalcTrust",
  publisher: "CalcTrust",
  metadataBase: new URL("https://calctrust.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://calctrust.com",
    siteName: "CalcTrust",
    title: "CalcTrust | Free Salary & Paycheck Calculators",
    description: "Free, accurate salary, paycheck, and tax calculators for US workers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalcTrust | Free Salary & Paycheck Calculators",
    description: "Free, accurate salary, paycheck, and tax calculators for US workers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
