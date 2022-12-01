import clsx from "clsx"
import { useCallback, useState } from "react"
import Char from "../components/Char"
import Header from "../components/Header"
import { characters } from "../utils/constants"

type Font = {
  name: string
  tw: string
}

const availableFonts: Font[] = [
  {
    name: "Inter",
    tw: "font-inter",
  },
  {
    name: "Default System",
    tw: "font-[system-ui]",
  },
  {
    name: "Sans Serif (Default)",
    tw: "font-[sans-serif]",
  },
  {
    name: "Serif (system)",
    tw: "font-[serif]",
  },

  {
    name: "Mono (system)",
    tw: "font-[monospace]",
  },
]

export default function Home() {
  const [fontFamily, setFontFamily] = useState<Font>(availableFonts[0])

  const changeFont = useCallback(() => {
    const currentIndex = availableFonts.findIndex((f) => f === fontFamily)
    const nextIndex = (currentIndex + 1) % availableFonts.length
    setFontFamily(availableFonts[nextIndex])
  }, [fontFamily])

  return (
    <div>
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <div className="flex font-mono text-sm mb-2 justify-between">
          <div></div>
          <button onClick={changeFont}>Change font : {fontFamily.name}</button>
        </div>
        <div className={clsx("flex flex-wrap items-start", `${fontFamily.tw}`)}>
          {characters.map((char, i) => (
            <Char key={"icon" + i} text={char} />
          ))}
        </div>
      </main>
    </div>
  )
}
