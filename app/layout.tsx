import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Footer } from "@/components/sections/Footer";
import { exo2, inter, sometypemono, sono, spacegrotesk } from "@/lib/fonts";
import Cursor from "@/components/ui/Cursor";
import NextTopLoader from "nextjs-toploader";
import { MobileNav } from "@/components/MobileNavbar";
import { Particles } from "@/components/ui/particles";
import { ThemedParticles } from "@/components/ui/themedParticles";

// export const metadata: Metadata = {
//   title: "sahiwl",
//   description: "Made with <3 by Sahil Kumar Ray",
//   icons: {
//     icon: "/Website/app/favicon.ico",
//   },
// };

export const metadata = {
  title: "Sahil Kumar Ray",
  description: "Full stack developer and oss enthusiast. Building web applications, web interfaces and learning over time. Just a  student who enjoys tech.",
  keywords: ["sahiwl", "Sahil kumar ray", "sahil kumar ray", "sahiwl portfolio", "sahiwl nextjs", "Sahil Kumar Ray"],
  authors: [{ name: "Sahil Kumar Ray", url: "https://github.com/sahiwl" }],
  openGraph: {
    title: "Sahil Kumar Ray",
    description: "Full stack developer and oss enthusiast.",
    url: "https://sahiwl.live",
    siteName: "Sahil Kumar Ray || sahiwl",
    images: [
      {
        url: "https://sahiwl.live/sahil2.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  }
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
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              />
            <Navbar />
            <MobileNav />
            <Cursor />
              <ThemedParticles className="fixed inset-0 -z-10 pointer-events-none"/>
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
