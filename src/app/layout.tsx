import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script"; // ✅ import Script
import "./globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Digital Boost | Your Marketing Partner",
  description: "Grow your brand with expert digital marketing services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-2BQD8DF6XR"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2BQD8DF6XR');
            `,
          }}
        />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
