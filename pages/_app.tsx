import "../styles/globals.css"

import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"
import { Toaster } from "react-hot-toast"

import LocalFont from "@next/font/local"
import Script from "next/script"

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
      <Script id="posthog" strategy="worker">
        {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init('phc_va22RtCKYMoi71hVEHaxGEGntiFeHRchTLgccMCF9p3',{api_host:'https://app.posthog.com'})`}
      </Script>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </>
  )
}
