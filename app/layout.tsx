import type { Metadata } from "next";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Footer } from "@/components/Footer";
import { exo2, inter, sometypemono, sono, spacegrotesk } from "@/lib/fonts";
import Cursor from "@/components/ui/Cursor";
import { MobileNav } from "@/components/MobileNavbar";


export const metadata: Metadata = {
  title: "sahiwl",
  description: "Made with <3 by Sahil Kumar Ray",
  icons: {
    icon: "/Website/app/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //removed suppressHydrationWarning={true} in html tag
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${sometypemono.variable} ${inter.variable} ${exo2.variable} ${sono.variable} ${spacegrotesk.variable} scroll-smooth`}
    >
      <body className="font-sometypemono dark:bg-zinc-900 bg- bg-[#eae5db]">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <main className="overflow-hidden">
              <NextTopLoader 
              color="#03A688"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"/> 
              <Navbar />
              <MobileNav/>  
              <Cursor />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
      </body>
    </html>
  );
}
