import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Select,
  Text,
} from "@chakra-ui/react"
import { useState } from "react"

import { useEVM } from "react-ethers"

const Dashboard = ({ balance, token }) => {
  const { network, account, methods } = useEVM()
  const [destination, setDestination] = useState(4)

  return (
    <>
      <Flex
        mx="auto"
        justifyContent="space-around"
        flexDirection="column"
        p="10"
      >
        <Text mb="4" fontSize="2xl" fontFamily="mono">
          {network.name}
        </Text>
        <Text mb="6" fontSize="2xl" fontFamily="mono">
          Compte:{" "}
          <Link href="" isExternal>
            {account.address}
          </Link>
        </Text>
      </Flex>

      <Box p="10">
        <Text mb="4" fontSize="2xl" fontFamily="mono">
          Changer de réseau
        </Text>
        <Select
          my="4"
          bg="white"
          maxW="25%"
          colorScheme="duck"
          fontSize="xl"
          placeholder="Choisissez un réseau"
          onChange={(e) => setDestination(e.target.value)}
        >
          <option disabled={network.chainId === 4} value="4">
            Rinkeby
          </option>
          <option disabled={network.chainId === 3} value="3">
            Ropsten
          </option>
          <option value="1">Aurora</option>
          <option value="1">Polygon</option>
        </Select>
        <Button
          onClick={() => methods.switchNetwork(destination)}
          colorScheme="duck"
        >
          Changer de network
        </Button>
      </Box>
    </>
  )
}

export default Dashboard
