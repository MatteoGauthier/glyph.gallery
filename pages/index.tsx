import clsx from "clsx"
import { useCallback, useState } from "react"
import Char from "../components/Char"
import Header from "../components/Header"
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
      <Header />
      <main className="max-w-screen-xl mx-auto mb-20">
        <div className="flex font-mono text-sm mb-2 justify-between">
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
    </div>
  )
}
