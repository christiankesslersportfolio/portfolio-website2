import { Flex } from "@chakra-ui/react"

import Screen from "../components/fr/Screen"
import ERC721Provider from "../contexts/ERC721Context"
import Launcher from "../components/Launcher"
import Menu from "../components/Menu"
import ERC20Provider from "../contexts/ERC20Context"

const Console = () => {
  return (
    <>
      <ERC721Provider>
        <ERC20Provider>
          <Launcher />
          <Flex minH="83.4vh">
            <Menu />
            <Screen />
          </Flex>
        </ERC20Provider>
      </ERC721Provider>
    </>
  )
}

export default Console
