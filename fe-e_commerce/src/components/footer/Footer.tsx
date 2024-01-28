import React from "react"
import Container from "../Container"
import Link from "next/link"
import FooterList from "./FooterList"
import { MdFacebook } from "react-icons/md"
import { AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Iphone</Link>
            <Link href="#">Macbook</Link>
            <Link href="#">Ipad</Link>
            <Link href="#">Iwatch</Link>
            <Link href="#">Accessories</Link>
          </FooterList>

          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchange</Link>
            <Link href="#">Watches</Link>
            <Link href="#">FAQs</Link>
          </FooterList>

          <FooterList>
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <Link href="#">At our electronics store, we are</Link>
            <Link href="#">Macbook</Link>
            <Link href="#">Ipad</Link>
            <Link href="#">Iwatch</Link>
            <Link href="#">Accessories</Link>
          </FooterList>

          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <p className="mb-2 w-[80%]">
              At our electronics store, we are dendicatred to providing the latest and
              greatest devices and accessories to our customers. With a wide selections of
              phones , macbook, Ipad, Iwatch, and Accessories
            </p>

            <p>2023 E-Ecommerce. All rights reserved.</p>
          </FooterList>

          <div>
            <FooterList>
              <h3 className="text-base font-bold mb-2">Socials</h3>
              <div className="flex gap-2">
                <Link href="#">
                  <MdFacebook size={24} />{" "}
                </Link>
                <Link href="#">
                  <AiFillTwitterCircle size={24} />
                </Link>
                <Link href="#">
                  <AiFillInstagram size={24} />
                </Link>
                <Link href="#">
                  <AiFillLinkedin size={24} />
                </Link>
              </div>
            </FooterList>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
