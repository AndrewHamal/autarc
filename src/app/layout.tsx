import type { Metadata } from "next";
import "./globals.css";

import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

export const metadata: Metadata = {
  title: "autarc – Die Wärmepumpen-Software",
  description: "Generated by create next app",
  icons: {
    icon: 'https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/640dfdfb045ae2133f77e9ba_Favicon-Black-32.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#fafafa] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
