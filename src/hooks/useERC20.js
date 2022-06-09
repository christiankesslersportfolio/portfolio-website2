import { useContext } from "react"
import { ERC20Context } from "../contexts/ERC20Context"

export const useERC20 = () => {
  const { token, userInfo } = useContext(ERC20Context)

  if (token === undefined) {
    throw new Error(
      `It seems that you are trying to use useERC721 outside of its provider, OR you are on the wrong network`
    )
  }

  return { token, userInfo }
}
