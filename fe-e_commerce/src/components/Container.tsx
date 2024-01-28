import React from "react"
interface Props {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="max-w-[1920px]  xl:px-20 md:px-2 px-4 mx-auto">{children}</div>
}

export default Container
