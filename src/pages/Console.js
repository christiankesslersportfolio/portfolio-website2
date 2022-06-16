import { Box, Flex } from "@chakra-ui/react"

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
              <Box>
                <Launcher />
                <Flex minH="79.4vh">
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
