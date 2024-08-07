import { Outfit } from "next/font/google";
import "./globals.css";
//Components
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

//theme provider
import { ThemeProvider } from '@/components/ThemeProvider';

 //import { ThemeProvider } from "next-themes";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
        <Header />
        {children}
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  );
};
