import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
      <Head>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta name="robots" content={metadata.robots} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shakiqur Rahman",
              "url": "https://shakiqur-rahman.vercel.app",
              "jobTitle": "Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "DevIt BD"
              }
            }),
          }}
        />
      </Head>
      </Head>
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
