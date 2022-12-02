import { NextSeo, NextSeoProps, WebPageJsonLd } from "next-seo"
import Head from "next/head"
import React from "react"

const config: NextSeoProps = {
  title: "Glyph.gallery - Special characters, arrows, symbols, and more",
  description: "Copy and paste in a second special characters likes arrows, emoji, dots, etc...",
  canonical: "https://glyph.gallery",
  themeColor: "#161616",
  openGraph: {
    siteName: "Glyph.gallery",
    url: "https://glyph.gallery",
    type: "website",
    images: [
      { url: "https://glyph.gallery/og.jpg", width: 1200, height: 600, alt: "Glyph.gallery" },
      { url: "https://glyph.gallery/og-alt.jpg", width: 800, height: 600, alt: "Glyph.gallery alt" },
    ],

    // title: "Glyph.gallery - Special characters, arrows, symbols, and more",
  },
  twitter: {
    cardType: "summary_large_image",
    site: "@MatteoGauthier_",
    handle: "@MatteoGauthier_",
  },
}

export default function SEO() {
  return (
    <>
      <NextSeo {...config} />
      <WebPageJsonLd
        description="Copy and paste in a second special characters likes arrows, emoji, dots, etc..."
        id="https://glyph.gallery"
        lastReviewed="2022-12-02T00:25:20.019Z"
        reviewedBy={{
          type: "Person",
          name: "Mattèo Gauthier",
        }}
      />

      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#161616" />
        <meta name="theme-color" content="#161616" />
      </Head>
    </>
  )
}
