import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import profilPicture from "../../assets/profil-picture.png"

const Header = () => {
  return (
    <Box p="10">
      <Flex
        flexDirection={{ base: "column-reverse", md: "row" }}
        justifyContent="space-between"
      >
        <Box display="flex">
          <Flex justifyContent="space-between" flexDirection="column">
            <Box>
              <Heading as="h1" my="5">
                Raphaël Pellet
              </Heading>
              <Text>Crois en l'intelligence et la (bio)diversité</Text>
            </Box>
            <Box>
              <Text pb="4" display="block">
                Développeur <i>Full stack</i> Ethereum
              </Text>
            </Box>
          </Flex>
        </Box>
        <Image
          borderRadius="5"
          width={{ base: "600px", md: "400px" }}
          src={profilPicture}
        />
      </Flex>
    </Box>
  )
}

export default Header
