import Image from "next/image"
import React from "react"

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8 rounded-lg">
      <div className="max-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Summer Sale!</h1>
          <p className="text-lg md:text-xl font-semibold text-white mb-4">
            Enjoy discount on selected items
          </p>
          <p className="text-2xl md:text-5xl font-bold text-yellow-400">GET 50% OFF</p>
        </div>

        <div className="w-1/3 relative aspect-video">
          <Image
            src="/img/banner-image.png"
            fill
            alt="banner"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
