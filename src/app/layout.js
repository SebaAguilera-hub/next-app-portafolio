import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sebastian WEB",
  description: "Demo de mi página web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="h-auto">
        {children}
        </main>
        <Footer />
        </div>
       
      </body>
    </html>
  );
}
