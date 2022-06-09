import { ethers } from "ethers"
import { createContext, useEffect, useState } from "react"
import { useContract, useEVM } from "react-ethers"
import contracts from "./contracts.json"

export const ERC20Context = createContext(null)

const ERC20Provider = ({ children }) => {
  const { ropsten } = contracts

  const token = useContract(
    ropsten.FungibleToken.address,
    ropsten.FungibleToken.abi
  )
  const { account } = useEVM()
  const [userBalance, setUserBalance] = useState({ balance: 0 })

  useEffect(() => {
    const main = async () => {
      if (token && account.isLogged) {
        const rawBalance = await token.balanceOf(account.address)
        setUserBalance({ balance: ethers.utils.formatEther(rawBalance) })
      }
    }
    main()
  }, [token, account.address, account.isLogged])

  return (
    <ERC20Context.Provider value={{ token, userBalance }}>
      {children}
    </ERC20Context.Provider>
  )
}

export default ERC20Provider
