import { ethers } from "ethers"
import { createContext, useEffect, useState } from "react"
import { useContract, useEVM } from "react-ethers"
import contracts from "./contracts.json"

export const ERC1155Context = createContext(null)

const createInventory = async (entrySingle, entryBatch, cards) => {
  const inventory = { booster: 0, cards: [] }

  // all entries
  const entrylist = []
  for (const entry of entrySingle) {
    entrylist.push(entry.args.id.toNumber())
  }
  for (const entry of entryBatch) {
    for (const id of entry.args.ids) {
      entrylist.push(id.toNumber())
    }
  }

  // const balances = await cards.balanceOfBatch(entrylist)

  return entrylist
}

const ERC1155Provider = ({ children }) => {
  const { ropsten } = contracts
  const cards = useContract(ropsten.Cards.address, ropsten.Cards.abi)
  const { account } = useEVM()

  const [userInfo, setUserInfo] = useState({
    booster: 0,
    cards: [{ id: 0, amount: 0 }],
  })

  useEffect(() => {
    const main = async () => {
      // check received => exited
      if (cards && account.address) {
        // boosters
        const boosterEnters = await cards.queryFilter(
          cards.filters.TransferSingle(null, null, account.address)
        )

        // cards
        const enters = await cards.queryFilter(
          cards.filters.TransferBatch(
            null,
            null,
            "0x2dD7A091e6F9759FB38E272E71a55a8c123258Bd"
          )
        )

        await createInventory(boosterEnters, enters, cards)
      }
    }
    main()
  }, [cards, account.address])

  return (
    <ERC1155Context.Provider value={{ cards, userInfo }}>
      {children}
    </ERC1155Context.Provider>
  )
}

export default ERC1155Provider
