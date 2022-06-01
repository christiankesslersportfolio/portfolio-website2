import { Button, Flex, Heading } from "@chakra-ui/react"

import { useEVM } from "react-ethers"

const Dashboard = ({ balance, token }) => {
  const { network } = useEVM()

  return (
    <>
      <Flex
        mx="auto"
        justifyContent="space-around"
        flexDirection="column"
        p="10"
      >
        <Heading>Vous êtes connecté sur {network.name}</Heading>
        <Heading>Soldes : {balance} ERC20</Heading>

        <Button onClick={() => console.log(token.functions)}>Log</Button>
      </Flex>
    </>
  )
}

export default Dashboard
