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
  MenuItem,
  VStack,
  Flex,
  Heading,
  Text,
  HStack,
  Stack
} from '@chakra-ui/react'
import TableMovements from '../components/table/TableMovements'

function Home() {
  return (
    <>
      <Box float={'right'} padding="1rem">
        <Menu position="sticky" left="0" top="0">
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

      <Center minH={'100vh'}>
        <VStack w={'100%'}>
          <Flex justify={'center'}>
            <Avatar
              size={'xl'}
              src={
                'https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-generation-16.png'
              }
              alt={'Author'}
              css={{
                border: '2px solid white'
              }}
            />
          </Flex>
          <Heading>Hi ! Username </Heading>
          <Text>Your balance today</Text>
          <Text>Add a movement to start </Text>

          <Stack
            h="100px"
            w="250px"
            justify={'center'}
            align="center"
            borderRadius=".5rem"
            boxShadow={'base'}>
            <HStack>
              <Heading>$300</Heading>
            </HStack>
          </Stack>
          <TableMovements />
        </VStack>
      </Center>
    </>
  )
}

export default Home
