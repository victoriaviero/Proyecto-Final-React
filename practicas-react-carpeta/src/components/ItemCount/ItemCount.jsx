import React, {useState} from 'react'
import { Button, Flex } from '@chakra-ui/react'

const ItemCount = () => {
    const [count, setCount] = useState (1)
    const incrementar = () => {
      setCount(count + 1)
    }
    const decrementar = () => {
      setCount(count - 1)
    }


  return (
    <Flex>
      <Button colorScheme='green' onClick={incrementar}>+</Button>
      <Button colorScheme='red' onClick={decrementar}>-</Button>
      
    </Flex>
  )
}

export default ItemCount
