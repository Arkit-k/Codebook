import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import GlobalContextProvider from "@/Context/ContextApi";
import Footer from "@/compo/layout/Footer"
import { Providers } from "./provider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Code Board",
  description: "Code snippet saver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider>
      <GlobalContextProvider>   
        <Providers>
          <body
            className={`${poppins.className} antialiased`}
            // className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
          >
              {children}
              <Footer />
            </body>
            </Providers>
        </GlobalContextProvider>
        
      </ClerkProvider>
    </html>
  );
}
