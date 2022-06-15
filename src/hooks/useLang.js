import { useContext } from "react"
import { LangContext } from "../contexts/Lang"

export const useLang = () => {
  const { lang, setLang } = useContext(LangContext)

  if (lang === undefined) {
    throw new Error(
      `It seems that you are trying to use useERC721 outside of its provider, OR you are on the wrong network`
    )
  }

  return { lang, setLang }
}
