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

function SignUp() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { error, loading, login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    login('/signup', { username, email, password })
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
              <Text>Nice to meet you!</Text>
              <Text>Sign Up for a Free account.</Text>
            </VStack>
          </VStack>
          <form onSubmit={handleSubmit}>
            <FormControl pb={'28px'}>
              <Input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                required
                variant="flushed"
                placeholder="Username"
                focusBorderColor="black"
              />
            </FormControl>
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
              <Text as={'span'}> Already registered?</Text>
              <LinkBox
                textDecoration="underline"
                color={'black'}
                fontWeight="bold"
                as={Link}
                to="/signin"
              >
                Sign in
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
            Track your movements and make good decisions.
          </Text>
          <Box h={'80px'}></Box>
        </Box>
      </Box>
    </Stack>
  )
}

export default SignUp
