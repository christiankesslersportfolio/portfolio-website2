import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react"

import Screen from "../components/fr/Screen"
import ERC721Provider from "../contexts/ERC721Context"
import Launcher from "../components/Launcher"
import Menu from "../components/Menu"

const Console = () => {
  return (
    <>
      <ERC721Provider>
        <Launcher />
        <Flex minH="83.4vh">
          <Menu />
          <Screen />
        </Flex>
      </ERC721Provider>
    </>
  )
}

export default Console
