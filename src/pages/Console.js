import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react"
import { useState } from "react"
import { useEVM } from "react-ethers"
import { Route, Routes, Link as RouterLink } from "react-router-dom"
import Dashboard from "../components/fr/Dashboard"

const modules = [
  { path: "dashboard", display: "Dashboard" },
  { path: "erc20", display: "ERC20" },
  { path: "erc721", display: "ERC721" },
  { path: "erc1155", display: "ERC1155" },
  { path: "erc777", display: "ERC777" },
  { path: "erc2771", display: "ERC2771" },
]

const Console = () => {
  const { methods, account, network, connectionType } = useEVM()
  const [showName, setShowName] = useState(false)

  return (
    <>
      {/* HEADER */}
      <Box shadow="lg" zIndex="2">
        <Flex justifyContent="space-between" px="5" py="10">
          <Heading>Console</Heading>
          {connectionType === "not initialized" ? (
            <Button onClick={() => methods.launchConnection("injected")}>
              Démarrer la console
            </Button>
          ) : account.isLogged ? (
            showName ? (
              <Button onClick={() => setShowName((p) => !p)}>
                {account.address}
              </Button>
            ) : (
              <Button onClick={() => setShowName((p) => !p)}>
                No domain name
              </Button>
            )
          ) : (
            <Button onClick={() => methods.loginToInjected()}>Login</Button>
          )}
        </Flex>
      </Box>

      {/* BODY */}
      <Flex minH="80vh">
        {/* SIDE */}
        <Box d="flex" flexDirection="column" width="25%">
          {modules.map((elem) => {
            return (
              <Link
                key={elem.path}
                to={elem.path}
                as={RouterLink}
                my="3"
                mx="auto"
              >
                {elem.display}
              </Link>
            )
          })}
          <Spacer />
          <Link to="/" as={RouterLink} my="3" mx="auto">
            Quitter la console
          </Link>
        </Box>

        {/* MAIN */}
        <Box
          p="5"
          boxShadow={
            connectionType === "not initialized"
              ? "none"
              : "4px 6px 10px gray inset"
          }
          width="75%"
          bg={connectionType === "not initialized" ? "black" : "gray.100"}
          d="flex"
          transition="1s"
        >
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
          <Text ms="auto" mt="auto" fontWeight="bold">
            {network.blockHeight}
          </Text>
        </Box>
      </Flex>
    </>
  )
}

export default Console
