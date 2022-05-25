import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { useEVM } from "react-ethers"

const Dashboard = () => {
  const { network } = useEVM()

  return (
    <>
      <Text>Vous êtes connecté sur {network.name}</Text>
    </>
  )
}

export default Dashboard
