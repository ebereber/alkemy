import { Flex, Avatar } from '@chakra-ui/react'
import React from 'react'

function UserAvatar() {
  return (
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
  )
}

export default UserAvatar
