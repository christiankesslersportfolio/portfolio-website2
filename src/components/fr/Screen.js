import { Box, Text } from "@chakra-ui/react"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useContract, useEVM } from "react-ethers"
import { Route, Routes } from "react-router-dom"
import {
  coloredTokenAbi,
  coloredTokenAddr,
  fungibleTokenAbi,
  fungibleTokenAddr,
} from "../../contexts/contracts"
import { useERC721 } from "../../hooks/useERC721"
import Dashboard from "./Dashboard"
import ERC20 from "./ERC20"
import ERC721 from "./ERC721"

const Screen = () => {
  const { account, network, connectionType } = useEVM()
  const { token, userColor } = useERC721()

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
      zIndex={connectionType === "not initialized" ? "dropdown" : 1}
      d="flex"
      transition="1s"
    >
      <Routes>
        <Route
          path="dashboard"
          // element={<Dashboard balance={balance} token={token} />}
        />
        <Route
          path="erc20"
          // element={<ERC20 balance={balance} token={token} />}
        />
        <Route
          path="erc721"
          element={<ERC721 contract={token} userInfo={userColor} />}
        />
      </Routes>
      <Text position="fixed" ms="auto" mt="auto" fontWeight="bold">
        {network.blockHeight}
      </Text>
    </Box>
  )
}

export default Screen
