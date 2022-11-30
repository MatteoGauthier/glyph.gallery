import clsx from "clsx"
import React from "react"
import { useCallback } from "react"
import toast from "react-hot-toast"

type Props = {
  text: string
}

export default function Char({ text }: Props) {
  const copyChar = useCallback(() => {
    navigator.clipboard.writeText(text)
    toast.success('Copied "' + text + '" to clipboard 🏴')
  }, [])

  return (
    <div
      onClick={copyChar}
      className="h-16 w-16 cursor-pointer group flex items-center justify-center border border-gray-50"
    >
      <span className={"text-md group-hover:scale-150 transition-transform duration-100 ease-in-out transform"}>
        {text}
      </span>
    </div>
  )
}
