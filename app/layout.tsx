import type { Metadata } from "next";
import { Cinzel, EB_Garamond } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/site-chrome";
import { MemberAccessProvider } from "@/components/member-access-provider";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"]
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Tareekh | تاریخ",
  description:
    "A dark editorial frontend for an Islamic heritage platform devoted to memory, scholarship, and civilizational continuity."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${garamond.variable}`}>
      <body>
        <MemberAccessProvider>
          <SiteChrome>{children}</SiteChrome>
        </MemberAccessProvider>
      </body>
    </html>
  );
}
