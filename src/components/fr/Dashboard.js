import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useContract, useEVM } from "react-ethers"
import { fungibleTokenAbi, fungibleTokenAddr } from "../../contexts/contracts"

const Dashboard = ({ balance, token }) => {
  const { network, account } = useEVM()

  return (
    <>
      <Text>Vous êtes connecté sur {network.name}</Text>
      <Text>Soldes : {balance} ERC20</Text>

      <Button onClick={() => console.log(token.functions)}>Log</Button>
    </>
  )
}

export default Dashboard
