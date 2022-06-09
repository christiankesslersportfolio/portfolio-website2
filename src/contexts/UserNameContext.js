import { ethers } from "ethers"
import { createContext, useEffect, useState } from "react"
import { useContract, useEVM } from "react-ethers"
import contracts from "./contracts.json"

export const UserNameContext = createContext(null)

const UserNameProvider = ({ children }) => {
  const { ropsten } = contracts
  const userName = useContract(ropsten.UserName.address, ropsten.UserName.abi)
  const { account } = useEVM()
  const [surname, setSurname] = useState("")

  useEffect(() => {
    const main = async () => {
      if (userName && account.isLogged) {
        const walletName = await userName.getName(account.address)
        setSurname(walletName)
      }
    }
    main()
  }, [userName, account.address, account.isLogged])

  return (
    <UserNameContext.Provider value={{ userName, surname }}>
      {children}
    </UserNameContext.Provider>
  )
}

export default UserNameProvider
