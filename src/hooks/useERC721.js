import { useContext } from "react"
import { ERC721Context } from "../contexts/ERC721Context"

export const useERC721 = () => {
  const { token, userColor } = useContext(ERC721Context)

  if (token === undefined) {
    throw new Error(
      `It seems that you are trying to use useERC721 outside of its provider, OR you are on the wrong network`
    )
  }

  return { token, userColor }
}
