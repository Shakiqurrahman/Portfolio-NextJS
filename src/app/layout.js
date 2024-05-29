import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shakiqur Rahman",
  description: "Shakiqur's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={inter.className}>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
