"use client"
import React, { useCallback, useState } from "react"
import Avatar from "../Avatar"
import { AiFillCaretDown } from "react-icons/ai"
import Link from "next/link"
import MenuItem from "./MenuItem"
import { signOut } from "next-auth/react"
import BackDrop from "./BackDrop"

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <>
      {" "}
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="flex flex-row items-center gap-1 p-2 rounded-full cursor-pointer hover:shadow-md transition text-slate-200 border-slate-200 border-[1px]"
        >
          <Avatar size={30} />
          <AiFillCaretDown />
        </div>

        {isOpen && (
          <div className="absolute rounded-md shadow-md w-[170px] mt-1 bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            <div>
              <Link href="orders">
                <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
              </Link>

              <Link href="/admin">
                <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
              </Link>

              <Link href="/api/auth/signout">
                <MenuItem
                  onClick={() => {
                    toggleOpen()
                    signOut()
                  }}
                >
                  Logout
                </MenuItem>
              </Link>
            </div>

            <div>
              <Link href="/login">
                <MenuItem onClick={toggleOpen}>Login</MenuItem>
              </Link>

              <Link href="/register">
                <MenuItem onClick={toggleOpen}>Register</MenuItem>
              </Link>
            </div>
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen}/> : null}
    </>
  )
}

export default UserMenu
