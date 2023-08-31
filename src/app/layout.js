import Header from "./Header";
import Footer from "./Footer";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Red Fire AI Pvt. Ltd. - Digital Solution Providers",
  description: "Software Industry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " max-w-[1950px] m-auto"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
