import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Load the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

// SEO metadata
export const metadata: Metadata = {
  title: "Digital Boost | Elevating Your Brand Online",
  description:
    "Digital Boost is a creative digital marketing agency helping businesses grow through SEO, social media strategy, website design, and automation tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={poppins.className}>
        {/* Google Analytics with next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2BQD8DF6XR"
          strategy="afterInteractive"
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
        {children}
      </body>
    </html>
  );
}
