import { createContext, useState } from "react"

export const LangContext = createContext(null)

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("fr")
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export default LangProvider
