import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"

import Footer from "./components/fr/Footer"
import Console from "./pages/Console"

import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <Box alignItems="space-around" minH="100vh" bg="ecru.100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="console/*" element={<Console />} />
        </Routes>
        {/* FOOTER */}
        <Footer />
      </Box>
    </>
  )
}

export default App
