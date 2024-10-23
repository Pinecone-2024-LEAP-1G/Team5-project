
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=" font-Inter font-normal text-base max-w-[1440px] mx-auto"
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
