import React from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  return (
    <div>
      <ChakraProvider>
        <NavBar />
        <ItemListContainer titulo={'e-Commerce'} />
        <ItemCount />

      </ChakraProvider>
    </div>

  )
}

export default App
