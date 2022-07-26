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

function SignUp() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { error, loading, login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    login('http://localhost:4001/user/signup', { username, email, password })
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
              <Text>Already have an account? </Text>
              <LinkBox color={'purple.600'} as={Link} to="/signin">
                Sign in
              </LinkBox>
            </HStack>
          </VStack>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="text" onChange={(e) => setUsername(e.target.value)} required />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} required />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => setPassword(e.target.value)} required />
            </FormControl>
            {error && (
              <Text mt={'1rem'} color={'red.500'} fontSize="12px">
                {error}
              </Text>
            )}

            <Box w={'100%'}>
              {loading ? (
                <Button
                  isLoading
                  loadingText="Sign up"
                  type="submit"
                  bg="purple.400"
                  w={'100%'}
                  color={'white'}
                  mt={6}>
                  Sign up
                </Button>
              ) : (
                <Button type="submit" bg="purple.400" w={'100%'} color={'white'} mt={6}>
                  Sign up
                </Button>
              )}
            </Box>
          </form>
        </VStack>
      </VStack>
    </Center>
  )
}

export default SignUp
