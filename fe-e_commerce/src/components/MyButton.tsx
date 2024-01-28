import React from "react"
import { FaShoppingCart } from "react-icons/fa"

interface Props {
  text?: string
  background?: "primary" | "secondary"
  icon?: string
}

const MyButton = ({ text, background, icon }: Props) => {
  return (
    <div>
      <button
        className={` ${
          background === "primary"
            ? "bg-purple-700 hover:bg-purple-900 border-2 border-purple-600 transition-all duration-200 rounded-xl"
            : "border-2  hover:bg-slate-700 transition-all duration-200 rounded-xl"
        } flex items-center gap-3 text-white font-bold py-2 px-4 rounded `}
      >
        {icon && <FaShoppingCart />}
        {text}
        {/* <FaShoppingCart />
        Add to cart */}
      </button>
    </div>
  )
}

export default MyButton
