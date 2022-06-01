import { ethers } from "ethers"
import { createContext, useEffect, useState } from "react"
import { useContract, useEVM } from "react-ethers"
import { fungibleTokenAbi, fungibleTokenAddr } from "./contracts"

export const ERC20Context = createContext(null)

const ERC20Provider = ({ children }) => {
  const token = useContract(fungibleTokenAddr, fungibleTokenAbi)
  const { account } = useEVM()
  const [userBalance, setUserBalance] = useState({ balance: 0 })

  useEffect(() => {
    const main = async () => {
      if (token) {
        const rawBalance = await token.balanceOf(account.address)
        setUserBalance({ balance: ethers.utils.formatEther(rawBalance) })
      }
    }
    main()
  }, [token, account.address])

  return (
    <ERC20Context.Provider value={{ token, userBalance }}>
      {children}
    </ERC20Context.Provider>
  )
}

export default ERC20Provider
