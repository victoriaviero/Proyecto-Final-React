import React from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div>
      <ChakraProvider>
        <NavBar />
        <ItemListContainer titulo={'e-Commerce'} />

      </ChakraProvider>
    </div>

  )
}

export default App
