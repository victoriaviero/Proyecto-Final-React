import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import CartWidget from "../CartWidget/CartWidget"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
} from '@chakra-ui/react'
import { FaAngleDoubleDown } from "react-icons/fa";


const NavBar = () => {
    return (
        <Flex
            justify={'space-between'}
            align={'center'}
            backgroundColor={'#C1C1C1'}
        >
            <Box>
                <Menu>
                    <MenuButton bg="#FFC300" m="10px" as={Button} rightIcon={<FaAngleDoubleDown />}>
                        Productos
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Celulares</MenuItem>
                        <MenuItem>Tablet</MenuItem>
                        <MenuItem>Notebook</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <CartWidget />
        </Flex>
    )
}

export default NavBar
