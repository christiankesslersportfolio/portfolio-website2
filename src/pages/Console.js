import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useEVM } from "react-ethers"

const Console = () => {
  const { methods, account, network } = useEVM()
  const [showName, setShowName] = useState(false)

  return (
    <>
      {/* HEADER */}
      <Box shadow="lg" zIndex="2">
        <Flex justifyContent="space-between" px="5" py="10">
          <Heading>Console</Heading>

          {account.isLogged ? (
            showName ? (
              <Button onClick={() => setShowName((p) => !p)}>
                {account.address}
              </Button>
            ) : (
              <Button onClick={() => setShowName((p) => !p)}>
                No domain name
              </Button>
            )
          ) : (
            <Button onClick={() => methods.loginToInjected()}>Login</Button>
          )}
        </Flex>
      </Box>

      {/* BODY */}
      <Flex minH="80vh">
        {/* SIDE */}
        <Box d="flex" flexDirection="column" width="25%">
          <Text my="3" mx="auto">
            Dashboard
          </Text>
          <Text my="3" mx="auto">
            ERC20
          </Text>
        </Box>

        {/* MAIN */}
        <Box
          p="5"
          boxShadow="4px 6px 10px gray inset"
          width="75%"
          bg="gray.100"
          d="flex"
        >
          <Text ms="auto" mt="auto" fontWeight="bold">
            {network.blockHeight}
          </Text>
        </Box>
      </Flex>
    </>
  )
}

export default Console
