import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "egyheppem | Kosiba Zsófia ",
  description: "Kosiba Zsófia fényképész portfóliója",
    generator: 'v0.app',
  icons: {
    /* Copy the URL from the Cloudinary image you want to use
        Add `/c_fill,h_64,w_64,g_face,r_max,f_png,b_transparent` after upload/, before v17xxx...
    */
    icon: "https://res.cloudinary.com/da5o0fitn/image/upload/c_fill,h_64,w_64,g_face,r_max,f_png,b_transparent/v1762194768/portfolio/profile-pictures/profile-picture_13.jpg",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
