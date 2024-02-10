import Container from "@/components/Container"
import React from "react"
import RegisterForm from "./RegisterForm"
import FormWrap from "@/components/FormWrap"

const Register = () => {
  return (
    <Container>
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </Container>
  )
}

export default Register
