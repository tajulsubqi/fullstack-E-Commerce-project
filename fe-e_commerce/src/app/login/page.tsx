import Container from "@/components/Container"
import FormWrap from "@/components/FormWrap"
import React from "react"
import LoginForm from "./LoginForm"
import getCurrentUser from "../../../actions/getCurrentUser"

const page = async () => {
  const currentUser = await getCurrentUser()
  console.log(currentUser)

  return (
    <Container>
      <FormWrap>
        <LoginForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  )
}

export default page
