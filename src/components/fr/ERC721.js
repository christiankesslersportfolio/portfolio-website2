import { Flex, Heading, Input, Spacer, Text } from "@chakra-ui/react"
import { useState } from "react"
import ContractButton from "../ContractButton"

const ERC721 = ({ contract, userInfo }) => {
  const [color, setColor] = useState("#000000")

  return (
    <>
      <Flex
        mx="auto"
        justifyContent="space-around"
        flexDirection="column"
        p="10"
      >
        <Heading>
          Vous avez {userInfo.haveColor ? 1 : 0} ERC721 (Non Fungible Token)
        </Heading>
        <Heading>
          <Text as="span" color={userInfo.color}>
            {userInfo.haveColor
              ? `Voici votre couleur: ${userInfo.color}`
              : "Vous n'avez pas de couleur, mintez en une"}
          </Text>
        </Heading>
        <Flex justifyContent="space-between">
          <ContractButton
            contractFunc={() =>
              contract.burnColor(userInfo.color.replace("#", "0x"))
            }
            isDisabled={!userInfo.haveColor}
          >
            Burn your color
          </ContractButton>
          <Spacer />
          <ContractButton
            contractFunc={() => contract.getColor(color.replace("#", "0x"))}
            isDisabled={userInfo.haveColor}
          >
            Get the {color.toLocaleUpperCase()}
          </ContractButton>

          <Input
            disabled={userInfo.haveColor}
            maxW="5rem"
            onChange={(e) => {
              setColor(e.target.value)
            }}
            type="color"
            value={color}
          />
        </Flex>
      </Flex>
    </>
  )
}
export default ERC721
