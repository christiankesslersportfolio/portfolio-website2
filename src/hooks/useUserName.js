import { useContext } from "react"
import { UserNameContext } from "../contexts/UserNameContext"

export const useUserName = () => {
  const { userName, surname } = useContext(UserNameContext)

  if (userName === undefined) {
    throw new Error(
      `It seems that you are trying to use useUserName outside of its provider, OR you are on the wrong network`
    )
  }

  return { userName, surname }
}
