import Container from "@/components/Container"
import FormWrap from "@/components/FormWrap"
import React from "react"
import LoginForm from "./LoginForm"
import getCurrentUser from "../../../actions/getCurrentUser"

const page = async () => {
  const user = await getCurrentUser()

  return (
    <Container>
      <FormWrap>
        <LoginForm user={user} />
      </FormWrap>
    </Container>
  )
}

export default page
