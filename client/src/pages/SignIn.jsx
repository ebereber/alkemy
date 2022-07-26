import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  LinkBox,
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
    <Center minH={'100vh'} bg="white" align={'center'}>
      <VStack>
        <VStack
          justifyContent={'center'}
          borderRadius={'lg'}
          color={'black'}
          justify="flex-start"
          minW={'200px'}>
          <VStack w={'100%'} align="flex-start">
            <Heading>M Traker</Heading>
            <Text>Welcome to Money Tracker!</Text>
            <HStack fontSize={'12px'}>
              <Text>Don`t have an account? </Text>
              <LinkBox color={'purple.600'} as={Link} to="/signup">
                Sign up
              </LinkBox>
            </HStack>
          </VStack>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} required />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => setPassword(e.target.value)} required />
            </FormControl>
            <Box w={'100%'}>
              {error && (
                <Text mt={'1rem'} color={'red.500'} fontSize="12px">
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
                  mt={6}>
                  Sign in
                </Button>
              ) : (
                <Button type="submit" bg="purple.400" w={'100%'} color={'white'} mt={6}>
                  Sign in
                </Button>
              )}
            </Box>
          </form>
        </VStack>
      </VStack>
    </Center>
  )
}

export default SignIn

/*
<Stack
align={'center'}
spacing={{ base: 8, md: 10 }}
py={{ base: 20, md: 28 }}
direction={{ base: 'column', md: 'row' }}
>
    <Heading
    lineHeight={1.1}
    fontWeight={600}
    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
    <Text>
    Money Managment
    </Text>

    <Text as={'span'} color={'grey'} fontSize={'1rem'}>
    Money Managment is an on-chain perpetual futures DEX with deep liquidity and builder-ready composability.
    </Text>
</Heading>

</Stack> */
