"use client"
import Input from "@/components/inputs/Input"
import Button from "@/components/products/Button"
import axios from "axios"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { FieldValues, useForm, SubmitHandler } from "react-hook-form"
import toast from "react-hot-toast"
import { AiOutlineGoogle } from "react-icons/ai"

const RegisterForm = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    console.log(data)

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Account created!")

        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            router.push("/cart")
            toast.success("Logged in!")
          }
          if (callback?.error) {
            toast.error(callback.error)
          }
        })
      })
      .catch(() => {
        toast.error("the account already exists")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div>
      {/* <Heading title="Sign up for Vvingzz~Store" /> */}
      <h1 className="text-2xl font-bold text-center mb-4">Sign up for V~Store</h1>

      <Button label="Sign up with Google" outline icon={AiOutlineGoogle} />
      <hr className="bg-slate-300 w-[300px] md:w-[570px] h-[1px] my-4" />

      <form className="flex flex-col gap-6">
        <Input
          id="name"
          label="Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Input
          id="password"
          label="Password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          label={isLoading ? "Loading.." : "Sign Up"}
        />

        <p className="text-center font-semibold text-slate-500">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className="text-sky-500 hover:text-sky-600 hover:duration-500"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default RegisterForm
