"use client"
import Link from "next/link"
import React from "react"
import { Redressed } from "next/font/google"
import { IoCart } from "react-icons/io5"
import CartCount from "./CartCount"
import { useCart } from "@/hooks/useCart"
import UserMenu from "./UserMenu"

//font
const redressed = Redressed({ subsets: ["latin"], weight: ["400"] })

const Navbar = () => {
  const { cartTotalQty } = useCart()

  return (
    <>
      <div className="sticky top-0 z-10 flex items-center bg-dark text-white py-2 px-7 justify-between">
        <div>
          <Link className={redressed.className} href={"/"}>
            <p className="font-medium text-2xl">Vvingzzz </p>
          </Link>
        </div>
        <div className="hidden md:block ">Search</div>

        <div className=" flex items-center gap-4">
          <div className="flex items-center gap-2 relative cursor-pointer">
            <CartCount />
          </div>

          <div>
            <UserMenu />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
