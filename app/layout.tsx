import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const robotoCondensed = Roboto_Condensed({
    variable: "--font-roboto-condensed",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Harvard Exhibitions Page",
    description: "Webpage for Harvard Exhibitions and Artifacts",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${robotoCondensed.variable} antialiased`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}