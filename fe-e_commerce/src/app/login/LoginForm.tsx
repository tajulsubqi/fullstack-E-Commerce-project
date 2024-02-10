"use client"
import Input from "@/components/inputs/Input"
import Button from "@/components/products/Button"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { AiOutlineGoogle } from "react-icons/ai"

const LoginForm = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: FieldValues) => {
    setIsLoading(true)
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false)

      if (callback?.ok) {
        router.push("/cart")
        toast.success("Logged in!")
      }

      if (callback?.error) {
        toast.error("Login error")
      }
    })
  }

  return (
    <form>
      <h1 className="text-2xl font-bold text-center mb-5">Login V~Store</h1>

      <Button label="Continue width Google" outline icon={AiOutlineGoogle} />
      <hr className="bg-slate-300 w-[300px] md:w-[570px] h-[1px] my-4" />
      <div className="flex flex-col gap-6">
        <Input
          id="email"
          label="Email"
          type="email"
          disabled={isLoading}
          register={register}
          errors={errors}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
        />

        <Button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          label={isLoading ? "loading..." : "Login"}
        />

        <p className="text-center text-slate-500 font-semibold">
          Don&apos;t have an account?{" "}
          <Link
            href={"/register"}
            className="text-sky-500 hover:text-sky-600 duration-300 transition"
          >
            Sign in
          </Link>
        </p>
      </div>
    </form>
  )
}

export default LoginForm
