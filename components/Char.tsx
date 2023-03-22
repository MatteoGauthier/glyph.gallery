import clsx from "clsx"
import React from "react"
import { useCallback } from "react"
import toast from "react-hot-toast"

import { motion } from "framer-motion"

type Props = {
  text: string
}

export default function Char({ text }: Props) {
  const copyChar = useCallback(() => {
    navigator.clipboard.writeText(text)
    toast.success('Copied "' + text + '" to clipboard 🏴')
  }, [text])

  return (
    <motion.button
      data-char={text}
      whileHover={{ backgroundColor: "#000", color: "#fff" }}
      // whileTap={{ backgroundColor: "#111" }}
      transition={{ ease: [0, 1.14, 1, 1] }}
      onClick={copyChar}
      style={{ backgroundColor: "#fff", color: "#000" }}
      // style={{ height: "var(--icon-size)", width: "var(--icon-size)" }}
      className="cursor-pointer group char flex items-center justify-center "
    >
      <span style={{ fontSize: "2rem" }} className={"text-md select-none"}>
        {text}
      </span>
    </motion.button>
  )
}
