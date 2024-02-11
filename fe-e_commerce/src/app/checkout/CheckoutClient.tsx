"use client"
import { useCart } from "@/hooks/useCart"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"

const CheckoutClient = () => {
  const { cartProducts, paymentIntent, handlePaymentIntent } = useCart()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [clientSecret, setClientSecret] = useState<string | null>(null)

  const router = useRouter()

  console.log("paymnetIntent", paymentIntent)
  console.log("clientSecret", clientSecret)

  useEffect(() => {
    //create a payment intent as soon the page loads
    if (cartProducts) {
      setLoading(true)
      setError(false)

      fetch("api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartProducts,
          payment_Intent_Id: paymentIntent,
        }),
      })
        .then((res) => {
          setLoading(false)
          if (res.status === 401) {
            return router.push("/login")
          }

          return res.json()
        })
        .then((data) => {
          setClientSecret(data.paymentIntent.client_secret)
          handlePaymentIntent(data.paymentIntent.id)
        })
        .catch((error) => {
          console.log("Error", error.message)
          toast.error("Something went wrong")
          setError(true)
        })
    }
  }, [cartProducts])

  return (
    <div>
      <h1>Checkout</h1>
    </div>
  )
}

export default CheckoutClient
