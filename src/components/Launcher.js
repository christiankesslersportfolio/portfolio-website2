import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { useState } from "react"
import { useEVM } from "react-ethers"
import { useERC721 } from "../hooks/useERC721"

const Launcher = () => {
  const { methods, account, connectionType } = useEVM()
  const { userColor } = useERC721()
  const [showName, setShowName] = useState(false)

  return (
    <Box shadow="lg" zIndex="2">
      <Flex justifyContent="space-between" px="5" py="10">
        <Heading>Console</Heading>
        {connectionType === "not initialized" ? (
          <Button onClick={() => methods.launchConnection("injected")}>
            Démarrer la console
          </Button>
        ) : account.isLogged ? (
          <Button
            bgColor={userColor.haveColor ? userColor.color : ""}
            onClick={() => setShowName((p) => !p)}
          >
            {showName ? account.address : "No domain name"}
          </Button>
        ) : (
          <Button onClick={() => methods.loginToInjected()}>Login</Button>
        )}
      </Flex>
    </Box>
  )
}

export default Launcher
