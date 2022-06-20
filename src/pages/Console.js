import { Box, Flex, Spacer } from "@chakra-ui/react"

import Screen from "../components/Screen"
import ERC721Provider from "../contexts/ERC721Context"
import Launcher from "../components/Launcher"
import Menu from "../components/Menu"
import ERC20Provider from "../contexts/ERC20Context"
import UserNameProvider from "../contexts/UserNameContext"
import ERC1155Provider from "../contexts/ERC1155Context"

const Console = () => {
  return (
    <>
      <UserNameProvider>
        <ERC1155Provider>
          <ERC721Provider>
            <ERC20Provider>
              <Box
                fontFamily="mono"
                fontSize="xl"
                minH="100vh"
                flexDirection="column"
                display="flex"
              >
                <Launcher />
                <Flex flexGrow="1">
                  <Menu />
                  <Screen />
                </Flex>
              </Box>
            </ERC20Provider>
          </ERC721Provider>
        </ERC1155Provider>
      </UserNameProvider>
    </>
  )
}

export default Console
