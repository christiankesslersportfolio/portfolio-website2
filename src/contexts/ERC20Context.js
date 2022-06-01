import { createContext } from "react"
import { useContract } from "react-ethers"
import { fungibleTokenAbi, fungibleTokenAddr } from "./contracts"

export const ERC20Context = createContext(null)

const ERC20Provider = ({ children }) => {
  const token = useContract(fungibleTokenAddr, fungibleTokenAbi)

  return (
    <ERC20Context.Provider value={{ token }}>{children}</ERC20Context.Provider>
  )
}

export default ERC20Provider
