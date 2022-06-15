import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react"
import Background from "../components/fr/Background"
import Header from "../components/fr/Header"
import Standards from "../components/fr/Standards"
import Technos from "../components/fr/Technos"
import Vision from "../components/fr/Vision"
import { useLang } from "../hooks/useLang"
import { ReactComponent as france } from "../assets/france.svg"
import { ReactComponent as uk } from "../assets/united-kingdom.svg"

const header_fr = (
  <Text fontWeight="bold" px="4rem" fontSize="2xl" textAlign="center">
    Je développe des{" "}
    <Text as="i" color="#FF7F50">
      smart contracts
    </Text>{" "}
    avec le langage Solidity et les déploie sur la plupart des réseaux qui
    utilise l'EVM
  </Text>
)

const header_en = (
  <Text fontWeight="bold" px="4rem" fontSize="2xl" textAlign="center">
    I code{" "}
    <Text as="i" color="#FF7F50">
      smart contracts
    </Text>{" "}
    with the Solidity language and deploy them on most networks that use the EVM
  </Text>
)

const Home = () => {
  const { lang, setLang } = useLang()
  return (
    <Container maxW={"container.xl"}>
      <Header />
      <Flex>
        <Button
          mx="auto"
          borderRadius="200"
          h="5rem"
          colorScheme="amber"
          variant="outline"
          onClick={() => setLang((l) => (l === "fr" ? "en" : "fr"))}
        >
          <Image w="3rem" as={lang === "fr" ? uk : france} />
        </Button>
      </Flex>

      <Divider
        mx="auto"
        my="3"
        width="75%"
        size="50%"
        borderColor="#FF7F50"
        borderBottomWidth="0.125rem"
      />
      {lang === "fr" ? header_fr : header_en}
      <Divider
        mx="auto"
        my="3"
        width="75%"
        size="50%"
        borderColor="#FF7F50"
        borderBottomWidth="0.125rem"
      />

      <Box p="10">
        <Technos />
        <Standards />
        <Background />
        <Vision />
      </Box>
    </Container>
  )
}

export default Home
