import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  LinkBox,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, login, loading } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    login('http://localhost:4001/user/signin', { email, password })
  }

  return (
    <Stack
      flexDirection={{ base: 'column', md: 'row' }}
      bg="white"
      align={'center'}
      justify="space-evenly"
      minH="100vh"
    >
      <VStack
        p={{ base: 0, sm: '44px 20px', md: '44px 40px' }}
        m={'46px 0px'}
        width={{ base: '100%', sm: '540px' }}
      >
        <VStack justifyContent={'center'} borderRadius={'lg'} color={'black'} justify="flex-start">
          <VStack w={'100%'} align="center">
            <HStack justify={'center'} alignContent="center" pb={'20px'}>
              <Box boxSize="40px">
                <Image src="https://cdns.iconmonstr.com/wp-content/releases/preview/2014/240/iconmonstr-cube-18.png" />
              </Box>
              <Heading>My balance</Heading>
            </HStack>

            <VStack pb="28px" fontWeight={'400'}>
              <Text>Welcome back!</Text>
              <Text>Log In to your account.</Text>
            </VStack>
          </VStack>
          <form onSubmit={handleSubmit}>
            <FormControl pb={'28px'}>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="flushed"
                placeholder="Email"
                focusBorderColor="black"
              />
            </FormControl>

            <FormControl pb={'28px'}>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="flushed"
                placeholder="Password"
                focusBorderColor="black"
              />
            </FormControl>
            <Box w={'100%'} pb="28px">
              {error && (
                <Text mt={'1rem'} pb="12px" color={'red.500'} textAlign="center" fontSize="12px">
                  {error}
                </Text>
              )}
              {loading ? (
                <Button
                  isLoading
                  loadingText="Sign in"
                  type="submit"
                  bg="purple.400"
                  w={'100%'}
                  color={'white'}
                >
                  Sign in
                </Button>
              ) : (
                <Button type="submit" bg="black" w={'100%'} color={'white'}>
                  Sign in
                </Button>
              )}
            </Box>
            <HStack fontSize={'13px'}>
              <Text as={'span'}> Don't have an account?</Text>
              <LinkBox
                textDecoration="underline"
                color={'black'}
                fontWeight="bold"
                as={Link}
                to="/signup"
              >
                Sign up
              </LinkBox>
            </HStack>
          </form>
        </VStack>
      </VStack>
      <Center height="500px">
        <Divider orientation="vertical" />
      </Center>
      <Box display={{ base: 'none', sm: 'none', md: 'block' }} w="100%">
        <Box m={'auto'} maxW="540px">
          <Text as={'span'} fontSize="60px" fontWeight={'700'}>
            Oh, Hello.
            <br />
            Welcome back!
          </Text>
          <Box h={'80px'}></Box>
        </Box>
      </Box>
    </Stack>
  )
}

export default SignIn
