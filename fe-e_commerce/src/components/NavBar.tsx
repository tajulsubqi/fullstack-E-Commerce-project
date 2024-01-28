"use client"
import Link from "next/link"
import React from "react"
import { Redressed } from "next/font/google"
import MyButton from "./MyButton"
import { IoCart } from "react-icons/io5"

//font
const redressed = Redressed({ subsets: ["latin"], weight: ["400"] })

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-10 flex items-center bg-dark text-white py-4 px-7 justify-between">
        <div>
          <Link className={redressed.className} href={"/"}>
            <p className="font-medium text-2xl">Vvingzzz </p>
          </Link>
        </div>
        <div className="hidden md:block ">Search</div>

        <div className=" flex items-center gap-4">
          <div>Category</div>
          <div>cart(0)</div>
          <div className="flex items-center gap-2 relative cursor-pointer">
            {/* cart(0) */}
            <IoCart size={28} />
            <div className="bg-red-500 rounded-full justify-center items-center flex h-4 w-4 p-[10px] text-[11px] absolute -right-2 -top-2">
              99
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
