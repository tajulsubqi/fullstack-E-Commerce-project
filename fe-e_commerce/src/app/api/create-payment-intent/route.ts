import Stripe from "stripe"
import { CartProductType } from "@/types"
import getCurrentUser from "../../../../actions/getCurrentUser"
import { NextResponse } from "next/server"
import prisma from "../../../../libs/prismadb"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
})

const calculateOrderAmount = (items: CartProductType[]): number => {
  const totalPrice = items.reduce((acc, item) => {
    const itemTotal = item.price * item.quantity
    return acc + itemTotal
  }, 1)

  const price: any = Math.floor(totalPrice)

  return price
}

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { items, payment_intent_id } = body
    const total = calculateOrderAmount(items) * 100
    const orderData = {
      user: {
        connect: {
          id: user.id,
        },
      },
      amount: total,
      currency: "usd",
      status: "pending",
      deliveryStatus: "pending",
      paymentIntentId: payment_intent_id,
      products: items,
    }

    if (payment_intent_id) {
      const current_intent = await stripe.paymentIntents.retrieve(payment_intent_id)

      if (current_intent) {
        // update payment intent
        const updated_intetnt = await stripe.paymentIntents.update(payment_intent_id, {
          amount: total,
        })

        // update order
        const { existing_Order, update_order } = await Promise.all([
          prisma.order.findFist({
            where: {
              payment_intent_id: payment_intent_id,
            },
          }),

          prisma.order.update({
            payment_intent_id: payment_intent_id,
            data: {
              amount: total,
              products: items,
            },
          }),
        ])

        if (!existing_Order) {
          return NextResponse.json({ error: "Invalid Payment Intent" }, { status: 500 })
        }

        return NextResponse.json({ order: updated_intetnt })
      }
    } else {
      // create payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
        automatic_payment_methods: { enabled: true },
      })
      // create the order
      orderData.paymentIntentId = paymentIntent.id

      await prisma.order.create({
        data: orderData,
      })

      return NextResponse.json({ paymentIntent })
    }
  } catch (error: any) {
    console.log(error.message)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
