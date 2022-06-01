import { Button, Flex, Heading, Text } from "@chakra-ui/react"

const ERC20 = ({ token, balance }) => {
  return (
    <>
      <Flex p="10">
        <Heading>Votre solde : {balance} ERC20 (Fungible Token)</Heading>
        <Button
          onClick={async () => {
            console.log(token)
            await token.mint(2000000)
          }}
        >
          Mint some tokens
        </Button>
      </Flex>
    </>
  )
}
export default ERC20
