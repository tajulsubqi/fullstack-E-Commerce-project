import { User } from "@prisma/client"

export type safeUser = Omit<User, "createdAt" | "updatedAt" | "emailVerified"> & {
  createdAt: string
  updatedAt: string
  emailVerified: string
}

export type CartProductType = {
  id: string
  name: string
  description: string
  category: string
  brand: string
  selectedImg: SelectedImgType
  quantity: number
  price: number
}

export type SelectedImgType = {
  color: string
  colorCode: string
  image: string
}
