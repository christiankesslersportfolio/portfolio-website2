import { Box, Container, Flex, Image, Link, Text } from "@chakra-ui/react"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import { EmailIcon, ChatIcon } from "@chakra-ui/icons"

const Footer = () => {
  return (
    <Flex mt="auto" bg="blackAlpha.800">
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
            <Image w="2rem" color="white" as={EmailIcon} />
            <Image w="2rem" color="white" as={ChatIcon} />
          </Flex>
        </Box>
      </Container>
    </Flex>
  )
}

export default Footer
