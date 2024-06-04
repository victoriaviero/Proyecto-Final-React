import React from 'react'
import { BsCart4 } from "react-icons/bs";
import { Box, Flex } from '@chakra-ui/react';

const CartWidget = () => {
  return (
    <Flex>
      <Box>
        <BsCart4 />
      </Box>
    </Flex>
  )
}

export default CartWidget
