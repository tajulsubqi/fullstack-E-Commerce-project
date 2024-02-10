import { NextResponse } from "next/server"
import prisma from "../../../../libs/prismadb"
import bcrypt from "bcryptjs"

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
