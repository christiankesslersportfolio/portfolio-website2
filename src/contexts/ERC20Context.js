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
  const [userInfo, setUserInfo] = useState({ balance: 0, shopAllowance: 0 })

  useEffect(() => {
    const main = async () => {
      if (token && account.isLogged) {
        try {
          const rawBalance = await token.balanceOf(account.address)
          const shopAllowance = await token.allowance(
            account.address,
            ropsten.Shop.address
          )
          setUserInfo({
            balance: Number(ethers.utils.formatEther(rawBalance)),
            shopAllowance: Number(ethers.utils.formatEther(shopAllowance)),
          })
        } catch (e) {
          console.log(token)
          console.log(account.address)
          console.log(e)
        }
      }
    }
    main()
  }, [token, account.address, account.isLogged, ropsten.Shop.address])

  return (
    <ERC20Context.Provider value={{ token, userInfo }}>
      {children}
    </ERC20Context.Provider>
  )
}

export default ERC20Provider
