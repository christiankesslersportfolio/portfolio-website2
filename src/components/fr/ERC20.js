import { Flex, FormLabel, Heading, Input, Link, Text } from "@chakra-ui/react"
import { ethers } from "ethers"
import { useState } from "react"
import ContractButton from "../ContractButton"

const ERC20 = ({ token, balance }) => {
  const [amount, setAmount] = useState(50)

  return (
    <>
      <Text>
        Contract Info:
        <Link
          href={`https://ropsten.etherscan.io/address/${token.address}`}
          isExternal
        >
          {token.address}
        </Link>
      </Text>
      <Flex
        mx="auto"
        justifyContent="space-around"
        flexDirection="column"
        p="10"
      >
        <Heading mb="5" textAlign="center">
          Fungible Token (ERC20)
        </Heading>
        <Text mb="20" textAlign="center">
          Ceci est un jeton ERC20 (fongible) pouvant être "minter" à l'infini
          (par tranche de 50).
        </Text>
        <Heading my="5">Votre solde : {balance} ERC20 (Fungible Token)</Heading>
        <Heading fontSize="2xl" mt="20" mb="5" as="h3">
          Obtenez des jetons
        </Heading>
        <Flex alignItems="center">
          <ContractButton
            contractFunc={() => token.mint(ethers.utils.parseEther(amount))}
          >
            Mint {amount} tokens
          </ContractButton>
          <FormLabel ms="5">
            <Text>
              Entrée un montant{" "}
              {amount > 50 ? (
                <Text as="span" color="red.300">
                  inférieur à 50
                </Text>
              ) : (
                ""
              )}
            </Text>
            <Input
              focusBorderColor={amount > 50 ? "red.300" : ""}
              bg="white"
              value={amount}
              type="number"
              onChange={(e) => {
                setAmount(e.target.value)
              }}
            />
          </FormLabel>
        </Flex>
      </Flex>
    </>
  )
}
export default ERC20
