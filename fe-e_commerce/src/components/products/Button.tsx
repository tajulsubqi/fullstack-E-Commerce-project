import React from "react"

interface ButtonProps {
  label: string
  disabled?: boolean
  outline?: boolean
  small?: boolean
  custom?: string
  icon?: React.ComponentType<{ size: number }>
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-full border-slate-700 flex justify-center items-center gap-2
        ${outline ? "bg-white text-slate-700" : "bg-slate-700 text-white"}
        ${
          small
            ? "text-sm py-1 px-2 font-light border-[1px]"
            : "text-md py-3 px-4 font-semibold border-2"
        }
        ${custom ? custom : ""}`}
    >
      {Icon && <Icon size={24} />} {label}
    </button>
  )
}

export default Button
