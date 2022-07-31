import { Box, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi'
import { useBalance } from '../../context/BalanceContext'
import { currencyFormater } from '../../utils/currencyFormatter'

function HomeContent() {
  const { balance, movements } = useBalance()

  if (movements) {
    return (
      <>
        <Heading pb={'22px'}>Hi ! </Heading>
        {movements.length !== 0 && <Text>Your balance today</Text>}

        {movements.length === 0 ? (
          <Text fontWeight={'medium'} pb={'22px'}>
            You don´t have movements yet, add one!{' '}
          </Text>
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
                <Heading>{currencyFormater.format(balance)}</Heading>
              </HStack>
            </Stack>
          </>
        )}
      </>
    )
  }
}

export default HomeContent
