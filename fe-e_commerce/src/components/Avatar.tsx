import Image from "next/image"
import React from "react"
import { FaUserCircle } from "react-icons/fa"

interface AvatarProps {
  src?: string | null | undefined
  size?: number
}

const Avatar: React.FC<AvatarProps> = ({ src, size }) => {
  if (src) {
    return (
      <Image src={src} alt="Avatar" className="rounded-full" height={30} width={30} />
    )
  }

  return <FaUserCircle size={size} />
}

export default Avatar
