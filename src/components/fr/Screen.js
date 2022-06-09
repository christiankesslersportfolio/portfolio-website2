import { Box, Heading, Text } from "@chakra-ui/react"
import { useEVM, useContract } from "react-ethers"
import { Route, Routes } from "react-router-dom"
import { useERC20 } from "../../hooks/useERC20"

import { useERC721 } from "../../hooks/useERC721"
import Dashboard from "./Dashboard"
import ERC20 from "./ERC20"
import ERC721 from "./ERC721"
import Shop from "./Shop"
import contracts from "../../contexts/contracts.json"

const Screen = () => {
  const { ropsten } = contracts
  const shop = useContract(ropsten.Shop.address, ropsten.Shop.abi)
  const { network, connectionType, account } = useEVM()
  const { token, userColor } = useERC721()
  const { token: erc20, userInfo } = useERC20()

  return (
    <Box
      p="5"
      boxShadow={
        connectionType === "not initialized"
          ? "none"
          : "4px 6px 10px gray inset"
      }
      width="75%"
      bg={connectionType === "not initialized" ? "black" : "gray.100"}
      zIndex={connectionType === "not initialized" ? 100000 : 1}
      transition="1s"
    >
      {connectionType === "not initialized" || !account.isLogged ? (
        connectionType === "not initialized" ? (
          <>
            <Heading my="10" textAlign="center" color="gray.100">
              Installez une extensions web pour injecter le web3
            </Heading>
            <Text textAlign="center" color="gray.100">
              Comme Metamask, Brave (intégré au navigateur), XDEFI
            </Text>
          </>
        ) : (
          <Heading mt="10" textAlign="center">
            Connectez-vous à la dApp pour continuer
          </Heading>
        )
      ) : (
        <>
          <Routes>
            <Route
              path="dashboard"
              element={<Dashboard balance={userInfo.balance} token={erc20} />}
            />
            <Route
              path="erc20"
              element={
                erc20 ? (
                  <ERC20 balance={userInfo.balance} token={erc20} />
                ) : (
                  "Waiting for ERC20 contract"
                )
              }
            />
            <Route
              path="shop"
              element={
                shop ? (
                  <Shop
                    shop={shop}
                    userColor={userColor}
                    erc20={erc20}
                    erc20Info={userInfo}
                  />
                ) : (
                  ""
                )
              }
            />
            <Route
              path="erc721"
              element={<ERC721 contract={token} userInfo={userColor} />}
            />
          </Routes>
          <Text
            bottom="5rem"
            right="1rem"
            position="absolute"
            ms="auto"
            mt="auto"
            fontWeight="bold"
          >
            {network.blockHeight}
          </Text>
        </>
      )}
    </Box>
  )
}

export default Screen
