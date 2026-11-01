import type { Metadata, Viewport } from "next";
import { Allura, Amiri, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
  display: "swap",
});

const amiri = Amiri({
  weight: "400",
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noora & Moin · Wedding Invitation",
  description:
    "The family of Late Mr. Haji Abdul Hamid Shaikh & Mrs. Sabirabi Shaikh invite you to the Nikah of Noora Shaikh with Moin Khan — Saturday, 12 December 2026, 12:45 PM, Cubix Hotel, Gokul Road, Rajendra Nagar, Hubballi, followed by lunch.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${allura.variable} ${amiri.variable} ${cormorant.variable}`}
    >
      <body className="locked">{children}</body>
    </html>
  );
}
