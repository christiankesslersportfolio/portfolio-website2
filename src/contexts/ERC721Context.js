import { ethers } from "ethers"
import { createContext, useEffect, useState } from "react"
import { useContract, useEVM } from "react-ethers"
import { coloredTokenAbi, coloredTokenAddr } from "./contracts"

export const ERC721Context = createContext(null)

const ERC721Provider = ({ children }) => {
  const token = useContract(coloredTokenAddr, coloredTokenAbi)
  const { account } = useEVM()
  const [userColor, setUserColor] = useState({
    haveColor: false,
    color: "#000000",
  })

  useEffect(() => {
    // check user balance and get tokenID
    const main = async () => {
      if (token) {
        const enters = token.filters.Transfer(null, account.address, null)
        const exits = token.filters.Transfer(account.address, null, null)

        let tokenId
        const enter = await token.queryFilter(enters)

        if (enter.length !== 0) {
          const exit = await token.queryFilter(exits)
          if (exit.length !== 0) {
            const balance = enter
              .concat(exit)
              .sort((a, b) => b.blockNumber - a.blockNumber)
            if (balance[0].args.to !== ethers.constants.AddressZero) {
              tokenId = balance[0].args.tokenId.toHexString()
            }
          } else {
            tokenId = enter[0].args.tokenId.toHexString()
          } // no burn
        } // no entry

        if (tokenId) {
          setUserColor({ haveColor: true, color: `#${tokenId.slice(2)}` })
        } else {
          setUserColor({ haveColor: false, color: "#000000" })
        }
      }
    }
    main()
  }, [account.address, token])

  return (
    <ERC721Context.Provider value={{ token, userColor }}>
      {children}
    </ERC721Context.Provider>
  )
}

export default ERC721Provider
