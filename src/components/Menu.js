import { Box, Link, Spacer } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

const modules = [
  { path: "dashboard", display: "Dashboard" },
  { path: "erc20", display: "ERC20" },
  { path: "shop", display: "Shop" },
  { path: "erc721", display: "ERC721" },
  { path: "erc1155", display: "ERC1155" },
]

const Menu = () => {
  return (
    <Box d="flex" flexDirection="column" width="25%">
      {modules.map((elem) => {
        return (
          <Link key={elem.path} to={elem.path} as={RouterLink} my="3" mx="auto">
            {elem.display}
          </Link>
        )
      })}
      <Spacer />
      <Link to="/" as={RouterLink} my="3" mx="auto">
        Quitter la console
      </Link>
    </Box>
  )
}

export default Menu
