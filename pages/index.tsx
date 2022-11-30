import clsx from "clsx"
import Head from "next/head"
import Image from "next/image"
import { useCallback, useState } from "react"
import styles from "../styles/Home.module.css"
import Char from "../components/Char"

type FontFamily = "font-sans" | "font-serif" | "font-mono"

export default function Home() {
  const [fontFamily, setFontFamily] = useState<FontFamily>("font-mono")

  return (
    <div>
      <main className="max-w-screen-xl mx-auto">
        <div className={clsx("flex flex-wrap items-start", `${fontFamily}`)}>
          {[...Array(300)].map((_, i) => (
            <Char key={"icon" + i} text={String(i)} />
          ))}
        </div>
      </main>
    </div>
  )
}
