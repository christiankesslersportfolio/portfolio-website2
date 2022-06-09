import {
  Box,
  Flex,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react"
import { ethers } from "ethers"
import { useState } from "react"
import { useUserName } from "../../hooks/useUserName"
import ContractButton from "../ContractButton"

const Shop = ({ shop, userColor, erc20, erc20Info }) => {
  const { userName, surname: _surname } = useUserName()
  const [color, setColor] = useState("#000000")
  const [surname, setSurname] = useState(_surname)
  const [available, setAvailable] = useState("")

  return (
    <>
      {/* CONTRACT INFO */}
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Text>
            Contract Info:
            <Link
              href={`https://ropsten.etherscan.io/address/${shop.address}`}
              isExternal
            >
              {shop.address}
            </Link>
          </Text>
          <Text>
            Le magasin peut utiliser {erc20Info.shopAllowance} de vos ERC20
          </Text>
        </Box>
        <ContractButton
          contractFunc={() =>
            erc20.approve(shop.address, ethers.utils.parseEther("50"))
          }
        >
          Authorisez le magasin pour 50 ERC20
        </ContractButton>
      </Flex>

      <Flex
        mx="auto"
        justifyContent="space-around"
        flexDirection="column"
        p="10"
        textAlign="center"
      >
        <Heading>Bienvenue au magasin</Heading>
        <Text>Vous pouvez acheter plusieurs tokens</Text>

        {/* COULEUR */}
        <Flex textAlign="start" flexDirection="column" mt="10">
          <Text>
            Offrez-vous une couleur unique parmi les 16 777 215 de couleur
            disponible ! Emet un ERC721 (NFT), vous ne pouvez en posseder qu'un
            seul par wallet. Transferez-le si vous en voulez une autre.
          </Text>
          <Flex alignItems="center" my="5">
            <FormLabel me="20">
              {userColor.haveColor ? (
                <Text color="red.400">Vous avez déjà une couleur</Text>
              ) : (
                <Text>Choisissez une couleur (cout : 12 ERC20)</Text>
              )}
              <Input
                disabled={userColor.haveColor}
                maxW="5rem"
                onChange={(e) => {
                  setColor(e.target.value)
                }}
                type="color"
                value={color}
              />
            </FormLabel>
            <ContractButton
              contractFunc={() => shop.buyColor(color.replace("#", "0x"))}
              isDisabled={userColor.haveColor}
            >
              Minter le {color}
            </ContractButton>
          </Flex>
        </Flex>

        {/* NAMES */}
        <Flex textAlign="start" flexDirection="column" mt="10">
          <Text>
            Changer votre nom sur la console (ce contrat n'emet aucun jeton).
          </Text>
          <Flex alignItems="center" my="5">
            <FormLabel me="20">
              {!surname ? (
                <Text>Entrer un nom (cout : 6 ERC20)</Text>
              ) : (
                <Text>Changer de nom (cout : 6 ERC20)</Text>
              )}

              <Input
                onBlur={async () => {
                  const name = await userName.resolveName(surname)
                  setAvailable(name)
                }}
                maxW="10rem"
                onChange={(e) => {
                  setSurname(e.target.value)
                }}
                bg="white"
                type="text"
                value={surname}
                placeholder="Entrer un nom"
              />
            </FormLabel>
            <ContractButton
              contractFunc={() => shop.buyName(surname)}
              isDisabled={
                !surname || available !== ethers.constants.AddressZero
              }
            >
              Enregistrer "{surname}"
            </ContractButton>
            <Text ms="5">
              {!surname
                ? ""
                : available === ethers.constants.AddressZero
                ? "Name available"
                : `Owned by ${available}`}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
export default Shop
