import { Heading } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({titulo}) => {
  return (
    <div>
      <Heading color="#C70039" fontSize="4xl" >{titulo}</Heading>
    </div>
  )
}

export default ItemListContainer
