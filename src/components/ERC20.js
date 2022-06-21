import { Flex, FormLabel, Heading, Input, Link, Text } from "@chakra-ui/react"
import { ethers } from "ethers"
import { useEffect } from "react"
import { useState } from "react"
import { useEVM } from "react-ethers"
import ContractButton from "./ContractButton"

const ERC20 = ({ token, balance }) => {
  const { network } = useEVM()
  const [amount, setAmount] = useState("50")
  const [value, setValue] = useState("0")
  const [totalSupply, setTotalSupply] = useState("0")
  const [ethPrice, setEthPrice] = useState("0")

  useEffect(() => {
    if (token) {
      const main = async () => {
        try {
          const supply = await token.totalSupply()
          setTotalSupply(ethers.utils.formatEther(supply.toString()))
          const ethPrice = await token.ethToUsd(ethers.utils.parseEther("1"))
          setEthPrice(ethers.utils.formatEther(ethPrice))
        } catch (e) {
          console.log(e)
        }
      }
      main()
    }
  }, [token])

  return (
    <>
      <Text>
        Contract Info:
        <Link href={`${network.explorerUrl + token.address}`} isExternal>
          {token.address}
        </Link>
      </Text>
      <Flex
        mx="auto"
        justifyContent="space-around"
        flexDirection="column"
        p="10"
      >
        <Heading fontSize="6xl" fontFamily="console" mb="5" textAlign="center">
          Fungible Token (FT)
        </Heading>
        <Text textAlign="center">
          Ceci est un jeton ERC20 (fongible) pouvant être "minter" à l'infini
          (par tranche de 50).
        </Text>
        <Text mb="20" textAlign="center">
          Total supply : {totalSupply} FT
        </Text>
        <Heading fontFamily="mono" my="5">
          Votre solde : {balance} FT (Fungible Token)
        </Heading>
        <Heading fontFamily="mono" fontSize="2xl" mt="20" mb="5" as="h3">
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
        {balance > 0 ? (
          <Text>
            Maintenant que vous avez des jetons allez faire un tour au Shop
          </Text>
        ) : (
          ""
        )}

        {/* MINT MORE */}
        <Heading fontFamily="mono" fontSize="2xl" mt="20" as="h3">
          Obtenir plus de jetons
        </Heading>
        <Text mb="5" fontSize="md">
          Vous pouvez minter encore plus de jetons en envoyant de la valeur dans
          le contract
        </Text>
        <Flex alignItems="center">
          <ContractButton
            contractFunc={() =>
              token.mintMore(ethers.utils.parseEther(amount), {
                value: ethers.utils.parseEther(value),
              })
            }
          >
            Mint {amount} tokens
          </ContractButton>
          <FormLabel ms="5">
            <Text>
              Entrée un montant{" "}
              {amount > 1000 ? (
                <Text as="span" color="red.300">
                  entre 50 et 1000
                </Text>
              ) : (
                ""
              )}
            </Text>
            <Input
              focusBorderColor={amount > 1000 ? "red.300" : ""}
              bg="white"
              value={amount}
              type="number"
              onChange={(e) => {
                setAmount(e.target.value)
              }}
            />
          </FormLabel>
          <FormLabel ms="5">
            <Text>Entrer une valeur</Text>
            <Input
              step="0.005"
              min="0"
              bg="white"
              value={value}
              type="number"
              onChange={(e) => {
                setValue(e.target.value)
              }}
            />
          </FormLabel>
          <Flex color="gray" ms="4" flexDirection="column">
            <Text>ETH Price: {ethPrice} USD</Text>
            <Text>Value: {value * Number(ethPrice)} USD</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
export default ERC20
