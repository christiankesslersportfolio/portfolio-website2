import { Flex, Heading } from "@chakra-ui/react"

import { useEVM } from "react-ethers"

const Dashboard = ({ balance, token }) => {
  const { network, account } = useEVM()

  return (
    <>
      <Flex
        mx="auto"
        justifyContent="space-around"
        flexDirection="column"
        p="10"
      >
        <Heading my="10" textAlign="center">
          Vous êtes connecté sur {network.name}
        </Heading>
        <Heading mt="10" textAlign="center">
          Avec le compte :
        </Heading>
        <Heading my="10" textAlign="center">
          {account.address}
        </Heading>
      </Flex>
    </>
  )
}

export default Dashboard
