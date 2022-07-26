import React from 'react'
import {
  Center,
  Button,
  Box,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem
} from '@chakra-ui/react'

function Home() {
  return (
    <Box float={'right'} padding="1rem">
      <Menu position="relative">
        <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
          <Avatar
            size={'sm'}
            src={
              'https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-generation-16.png'
            }
          />
        </MenuButton>
        <MenuList alignItems={'center'}>
          <br />
          <Center>
            <Avatar
              size={'2xl'}
              src={
                'https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-generation-16.png'
              }
            />
          </Center>
          <br />
          <Center>
            <p>Username</p>
          </Center>
          <br />
          <MenuDivider />
          <MenuItem>Your Servers</MenuItem>
          <MenuItem>Account Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default Home
