import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import prisma from "../../../../libs/prismadb"

export const POST = async (request: Request) => {
  const body = await request.json()
  const { name, email, password } = body

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  })

  return NextResponse.json(user)
}
