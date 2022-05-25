import { Box, Container, Divider, Text } from "@chakra-ui/react"
import Background from "../components/fr/Background"
import Header from "../components/fr/Header"
import Standards from "../components/fr/Standards"
import Technos from "../components/fr/Technos"
import Vision from "../components/fr/Vision"

const Home = () => {
  return (
    <Container maxW={"container.xl"}>
      <Header />

      <Divider
        mx="auto"
        my="3"
        width="75%"
        size="50%"
        borderColor="#FF7F50"
        borderBottomWidth="0.125rem"
      />
      <Text fontWeight="bold" px="4rem" fontSize="2xl" textAlign="center">
        Je développe des{" "}
        <Text as="i" color="#FF7F50">
          smart contracts
        </Text>{" "}
        avec le langage Solidity et les déploie sur la plupart des réseaux qui
        utilise l'EVM
      </Text>
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
