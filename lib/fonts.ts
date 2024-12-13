import { Exo_2, Inter, Sometype_Mono, Sono, Space_Grotesk } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-Inter" });
export const spacegrotesk = Space_Grotesk({
subsets: ["latin"],
variable: "--font-spacegrotesk",
display: "swap"
})

export const exo2 = Exo_2({
  subsets: ["latin"],
  style: 'normal',
variable: "--font-exo2",
display: "swap"
})

export const sometypemono = Sometype_Mono({
  subsets:["latin"],
  style: 'normal',
  display: "swap",
  variable: "--font-sometypemono"
})

export const sono = Sono({
  subsets: ["latin"],
  variable: "--font-sono",
  display: "swap"
})

