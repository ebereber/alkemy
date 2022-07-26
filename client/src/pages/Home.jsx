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
  Stack,
  Icon
} from '@chakra-ui/react'
import TableMovements from '../components/table/TableMovements'
import { ModalMovement } from '../components/modal/ModalMovement'
import { useBalance } from '../context/BalanceContext'
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Home() {
  const { balance } = useBalance()
  const { user, setUser } = useAuth()

  const navigate = useNavigate()

  const handleLoggout = () => {
    setUser(null)
    window.localStorage.removeItem('user')
    navigate('/signin', { replace: true })
  }

  if (user) {
    return (
      <>
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
              <MenuItem onClick={() => handleLoggout()}>Logout</MenuItem>
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
            {balance === 0 ? (
              <Text>Add a movement to start </Text>
            ) : (
              <>
                {' '}
                <Box borderRadius=".5rem">
                  {balance < 0 ? (
                    <Icon as={FiTrendingDown} fontSize="2.5rem" color={'black'} />
                  ) : (
                    <Icon as={FiTrendingUp} fontSize="2.5rem" color={'black'} />
                  )}
                </Box>
                <Stack
                  h="100px"
                  w="250px"
                  justify={'center'}
                  align="center"
                  borderRadius=".5rem"
                  boxShadow={'base'}
                >
                  <HStack>
                    <Heading>${balance}</Heading>
                  </HStack>
                </Stack>
              </>
            )}

            <ModalMovement />
            <TableMovements />
          </VStack>
        </Center>
      </>
    )
  }
}

export default Home
