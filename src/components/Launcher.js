import { Badge, Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react"
import { useState } from "react"
import { useEVM } from "react-ethers"
import { useERC20 } from "../hooks/useERC20"
import { useERC721 } from "../hooks/useERC721"
import { useUserName } from "../hooks/useUserName"

const Launcher = () => {
  const { methods, account, connectionType } = useEVM()
  const { userColor } = useERC721()
  const { userInfo } = useERC20()
  const { surname } = useUserName()
  const [showName, setShowName] = useState(false)

  return (
    <Box shadow="lg" zIndex="2">
      <Flex alignItems="center" justifyContent="space-between" px="5" py="10">
        <Heading fontFamily="console" fontSize="7xl">
          Console
        </Heading>
        {connectionType === "not initialized" ? (
          <Button
            size="lg"
            colorScheme="duck"
            onClick={() => methods.launchConnection("injected")}
          >
            Démarrer la console
          </Button>
        ) : account.isLogged ? (
          <>
            <Spacer />
            <Badge bg="ecru.800" fontSize="lg" borderRadius="10" p="4" me="4">
              {userInfo.balance} FT (credits)
            </Badge>
            <Button
              size="lg"
              bgColor={userColor.haveColor ? userColor.color : ""}
              onClick={() => setShowName((p) => !p)}
            >
              {!showName ? account.address : surname ? surname : "No user name"}
            </Button>
          </>
        ) : (
          <Button
            size="lg"
            colorScheme="duck"
            onClick={() => methods.loginToInjected()}
          >
            Login
          </Button>
        )}
      </Flex>
    </Box>
  )
}

export default Launcher
