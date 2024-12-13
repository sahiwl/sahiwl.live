import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Footer } from "@/components/Footer";

import { exo2, inter, sometypemono, sono, spacegrotesk } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "sahiwl",
  description: "Generated by sahiwl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //removed suppressHydrationWarning={true} in html tag
    <html lang="en" suppressHydrationWarning={true} className={`${sometypemono.variable} ${inter.variable} ${exo2.variable} ${sono.variable} ${spacegrotesk.variable}`}>       
      <body className="font-sometypemono dark:bg-zinc-900 bg-slate-200">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {/* <div className="overflow-hidden min-h-[100vh] dark:bg-spaceblack bg-white-200"> */}
          <Navbar/>
          {children}
          <Footer />
        {/* </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
