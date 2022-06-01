import { Flex, Heading, Input } from "@chakra-ui/react"
import { ethers } from "ethers"
import { useState } from "react"
import ContractButton from "../ContractButton"

const ERC20 = ({ token, balance }) => {
  const [amount, setAmount] = useState(0)

  return (
    <>
      <Flex
        mx="auto"
        justifyContent="space-around"
        flexDirection="column"
        p="10"
      >
        <Heading>Votre solde : {balance} ERC20 (Fungible Token)</Heading>
        <Flex>
          <ContractButton
            contractFunc={() => token.mint(ethers.utils.parseEther(amount))}
          >
            Mint {amount} tokens
          </ContractButton>
          <Input
            ms="5"
            bg="white"
            value={amount}
            type="number"
            onChange={(e) => {
              setAmount(e.target.value)
            }}
          />
        </Flex>
      </Flex>
    </>
  )
}
export default ERC20
