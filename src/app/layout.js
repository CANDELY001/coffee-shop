import { Jost } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Alowishus Coffee Shop - Premium Coffee & Artisan Beverages",
  description:
    "Experience exceptional coffee at Alowishus Coffee Shop. Premium single-origin beans, artisan lattes, fresh pastries, and professional catering services. Order online or visit our cozy café.",
  keywords:
    "coffee shop, premium coffee, single-origin beans, espresso, latte, catering, fresh pastries, coffee delivery, artisan beverages",
  authors: [{ name: "Alowishus Coffee Shop" }],
  creator: "Alowishus Coffee Shop",
  publisher: "Alowishus Coffee Shop",
  robots: "index, follow",
  openGraph: {
    title: "Alowishus Coffee Shop - Premium Coffee & Artisan Beverages",
    description:
      "Experience exceptional coffee at Alowishus Coffee Shop. Premium single-origin beans, artisan lattes, fresh pastries, and professional catering services.",
    type: "website",
    locale: "en_US",
  },
};
const jost = Jost({
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={jost.className}>{children}</body>
    </html>
  );
}
