import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"
import { Toaster } from "react-hot-toast"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </>
  )
}
