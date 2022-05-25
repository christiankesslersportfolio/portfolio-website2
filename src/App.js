import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react"
import github from "./assets/github.png"
import linkedin from "./assets/linkedin.png"
import { EmailIcon, ChatIcon } from "@chakra-ui/icons"
import Background from "./components/fr/Background"
import Header from "./components/fr/Header"
import Standards from "./components/fr/Standards"
import Technos from "./components/fr/Technos"
import Vision from "./components/fr/Vision"

const App = () => {
  return (
    <>
      {/* <Switch></Switch> */}
      <Container maxW={"container.xl"}>
        <Header />

        {/* BODY */}
        <Box p="10">
          <Text>
            Je développe des <i>smart contracts</i> avec la langage Solidity les
            déploie sur la plupart des réseaux qui utilise l'EVM
          </Text>
          <Technos />
          <Standards />
          <Background />
          <Vision />

          {/* FOOTER */}
        </Box>
      </Container>
      <Flex bg="blackAlpha.800">
        <Container
          d="flex"
          justifyContent="space-between"
          p="5"
          maxW="container.xl"
        >
          <Box>
            <Text textAlign="center" fontWeight="bold" color="white">
              @Raphaël Pellet
            </Text>
          </Box>
          <Box>
            <Text textAlign="center" fontWeight="bold" color="white">
              Créer à l'aide de{" "}
              <Link href="https://chakra-ui.com/">ChakraUI</Link>
            </Text>
          </Box>
          <Box>
            <Flex alignItems="center" gap="5">
              <Image w="2rem" src={github} />
              <Image w="2rem" src={linkedin} />
              <Icon w="2rem" color="white" as={EmailIcon} />
              <Icon w="2rem" color="white" as={ChatIcon} />
            </Flex>
          </Box>
        </Container>
      </Flex>
    </>
  )
}

export default App
