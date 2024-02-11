import Container from "@/components/Container"
import React from "react"
import RegisterForm from "./RegisterForm"
import FormWrap from "@/components/FormWrap"
import getCurrentUser from "../../../actions/getCurrentUser"

const Register = async () => {
  const user = await getCurrentUser()

  return (
    <Container>
      <FormWrap>
        <RegisterForm user={user} />
      </FormWrap>
    </Container>
  )
}

export default Register
