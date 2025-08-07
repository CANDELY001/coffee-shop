import { Jost } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Coffee Shop",
  description: "A cozy place to enjoy your favorite coffee",
};
const jost = Jost({
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
