import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import nodeJS from "../../assets/nodeJS.png"
import solidity from "../../assets/solidity.png"
import hardhat from "../../assets/hardhat.png"
import react from "../../assets/react.png"
import ipfs from "../../assets/ipfs.png"
import typescript from "../../assets/typescript.png"
import ethers from "../../assets/ethers.png"
import waffle from "../../assets/waffle.png"
import foundry from "../../assets/foundry.png"

const technos = [
  { img: solidity, description: "Solidity" },
  { img: nodeJS, description: "Node JS" },
  { img: hardhat, description: "Hardhat" },
  { img: foundry, description: "Foundry" },
  { img: typescript, description: "Typescript" },
  { img: ethers, description: "Ethers JS" },
  { img: waffle, description: "Waffle" },
  { img: react, description: "React JS" },
  { img: ipfs, description: "IPFS" },
]

const Technos = () => {
  return (
    <>
      <Heading as="h1">Technologies maitrisées :</Heading>
      <Flex justifyContent="space-between" my="5" flexWrap="wrap" gap="5">
        {technos.map((tech) => {
          return (
            <Box
              key={tech.description}
              d="flex"
              flexDirection="column"
              alignItems="center"
              borderRadius="5"
              shadow="md"
              p="5"
              w="7rem"
              transition="0.5s"
              _hover={{ bg: "gray.100" }}
            >
              <Image m="auto" src={tech.img} />
              <Text mt="auto" as="b">
                {tech.description}
              </Text>
            </Box>
          )
        })}
      </Flex>
    </>
  )
}

export default Technos
