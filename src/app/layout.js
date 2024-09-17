import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shakiqur Rahman",
  description: "Shakiqur Rahman, experienced web developer specializing in responsive website design, front-end development, and web application solutions. Building modern, high-performance websites tailored to your business needs.",
  keywords : "shakiqur, shakiqur rahman, shakiqur portfolio, shakiqur's portfolio, shakiqur rahman's portfolio, shakiqur web developer, web developer, web development, software developer, developer",
  robots : "index, follow"
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
