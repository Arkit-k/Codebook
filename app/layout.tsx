import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import GlobalContextProvider from "@/Context/ContextApi";
import { ThemeProvider } from "./theme-switcher";



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
        <ThemeProvider>
          <body
            className={`${poppins.className} antialiased`}
            // className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
          >
              {children}

            </body>
            </ThemeProvider>
        </GlobalContextProvider>
        
      </ClerkProvider>
    </html>
  );
}
