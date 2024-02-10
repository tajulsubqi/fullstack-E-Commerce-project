import Container from "@/components/Container"
import React from "react"
import RegisterForm from "./RegisterForm"
import FormWrap from "@/components/FormWrap"
import getCurrentUser from "../../../actions/getCurrentUser"

const Register = async () => {
  const currentUser = await getCurrentUser()

  return (
    <Container>
      <FormWrap>
        <RegisterForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  )
}

export default Register
