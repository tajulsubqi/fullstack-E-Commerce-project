import Link from "next/link"
import { Redressed } from "next/font/google"
import CartCount from "./CartCount"
import UserMenu from "./UserMenu"
import getCurrentUser from "../../../actions/getCurrentUser"

//font
const redressed = Redressed({ subsets: ["latin"], weight: ["400"] })

const Navbar = async () => {
  const user = await getCurrentUser()

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
            {/* <CartCount /> */}
            <UserMenu user={user} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
