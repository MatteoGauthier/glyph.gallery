import clsx from "clsx"
import { useCallback, useState } from "react"
import Char from "../components/Char"
import Header from "../components/Header"
import SEO from "../components/SEO"
import { characters } from "../utils/constants"

type Font = {
  name: string
  style: string
}

const availableFonts: Font[] = [
  {
    name: "Inter",
    style: `'Inter', Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  },
  {
    name: "Default System",
    style: "system-ui",
  },
  {
    name: "Sans Serif (Default)",
    style: "sans-serif",
  },
  {
    name: "Serif (system)",
    style: "serif",
  },
  {
    name: "Mono (system)",
    style: "monospace",
  },
]

const avaibleIconSize = [64, 72, 96]
const avaibleColumnsCount = [20, 16, 12]

export default function Home() {
  const [fontFamily, setFontFamily] = useState<Font>(availableFonts[0])
  const [iconSize, setIconSize] = useState<number>(avaibleIconSize[0])
  const [columnsCount, setColumnsCount] = useState<number>(avaibleColumnsCount[0])

  const changeFont = useCallback(() => {
    const currentIndex = availableFonts.findIndex((f) => f === fontFamily)
    const nextIndex = (currentIndex + 1) % availableFonts.length
    const nextIconFont = availableFonts[nextIndex]

    document.body.style.setProperty("--icon-font", `${nextIconFont.style}`)
    setFontFamily(nextIconFont)
  }, [fontFamily])

  return (
    <div>
      <SEO/>
      <Header />
      <main className="max-w-screen-xl mx-auto mb-20">
        <div className="flex xl:px-0 px-4 font-mono text-sm mb-2 justify-between">
          <div></div>
          <div className="flex items-center space-x-3">
            <button onClick={changeFont}>Change font : {fontFamily.name}</button>
          </div>
        </div>
        <div className={clsx("grid-wrapper")}>
          {characters.map((char, i) => (
            <Char key={"icon" + i} text={char} />
          ))}
        </div>
      </main>
      <div className="bg-[#161616] xl:px-0 px-4 md:py-20 py-10">
        <p className="font-inter text-white mx-auto max-w-screen-xl text-justify md:text-xl">
          <i>Glyph.gallery</i> is a web app to copy special characters simply, access and copy a wide range of special
          characters, such as emojis, symbols, and other non-standard characters. With this app, you can quickly copy
          arrows and paste them into their documents, messages, or other online content, without having to manually
          search for and insert the characters themselves. This can save users time and effort. The app is designed to
          be lightweight and easy to use, making it an ideal tool for anyone who needs to frequently use special
          characters in their online communications. If you have any suggestions or feedback, please let me know on my
          Twitter{" "}
          <a className="text-blue-500 font-medium" href="https://twitter.com/MatteoGauthier_">
            @MatteoGauthier_
          </a>
        </p>
      </div>
      <footer className="bg-[#111] pt-4 pb-8">
        <p className="text-white text-center ">
          Made with ❤️ by <a href="https://twitter.com/MatteoGauthier_">Mattèo Gauthier</a>
        </p>
      </footer>
    </div>
  )
}
