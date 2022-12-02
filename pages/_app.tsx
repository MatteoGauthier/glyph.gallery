import "../styles/globals.css"

import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"
import { Toaster } from "react-hot-toast"

import LocalFont from "@next/font/local"

const inter = LocalFont({
  src: [
    {
      path: "../public/fonts/Inter-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Inter-Medium.woff2",
      weight: "500",
    },
  ],
  variable: "--font-inter",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </>
  )
}
