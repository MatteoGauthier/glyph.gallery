import Image from "next/image"
import Marquee from "react-fast-marquee"

import MarqueeItemLarge from "../components/MarqueeItemLarge"
import MarqueeItemSmall from "../components/MarqueeItemSmall"
import headerSrc from "../public/joseph-chan-FPnNMzaq0RU-unsplash.jpg"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="h-72 bg-[#161616] header overflow-hidden relative md:mb-12 mb-6">
      <div className="marquee-additional-style">
        <Marquee
          loop={0}
          style={{
            position: "absolute",
            transform: "rotate(-30deg)",
            zIndex: 10,
            left: -368,
            top: 0,
            bottom: 0,
            right: 0,
          }}
          gradient={false}
        >
          <MarqueeItemSmall />
          <MarqueeItemSmall />
          <MarqueeItemSmall />
        </Marquee>
        <Marquee
          loop={0}
          style={{
            position: "absolute",
            transform: "rotate(-15deg)",
            zIndex: 10,
            left: -400,
            top: -300,
            bottom: 0,
            right: 0,
          }}
          gradient={false}
        >
          <MarqueeItemLarge />
          <MarqueeItemLarge />
          <MarqueeItemLarge />
        </Marquee>
        <Marquee
          loop={0}
          style={{
            position: "absolute",
            transform: "rotate(-15deg)",
            zIndex: 10,
            bottom: 70,
            right: -560,
          }}
          gradient={false}
        >
          <MarqueeItemLarge />
          <MarqueeItemLarge />
          <MarqueeItemLarge />
        </Marquee>
        <Marquee
          loop={0}
          style={{
            position: "absolute",
            transform: "rotate(15deg)",
            zIndex: 10,
            top: -120,
            right: -120,
          }}
          gradient={false}
        >
          <MarqueeItemSmall />
          <MarqueeItemSmall />
          <MarqueeItemSmall />
        </Marquee>
      </div>
      <div className="flex z-20 items-center h-full justify-center">
        <h1 className="text-white z-20 md:text-[82px] text-5xl font-neuemontreal">Glyph.gallery</h1>
      </div>
      <Image
        src={headerSrc}
        priority
        quality={70}
        style={{ objectFit: "cover" }}
        className="select-none touch-none pointer-events-none"
        draggable={false}
        fill
        alt={"Header background, mountain Fuji"}
      />
    </header>
  )
}
