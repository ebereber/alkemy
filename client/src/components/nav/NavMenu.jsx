import {
  Avatar,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function NavMenu() {
  const { setUser } = useAuth()

  const navigate = useNavigate()

  const handleLoggout = () => {
    setUser(null)
    window.localStorage.removeItem('user')
    navigate('/signin', { replace: true })
  }
  return (
    <Flex position="sticky" justifyContent={'flex-end'} top="0" padding={'1rem'} zIndex="sticky">
      <Menu>
        <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
          <Avatar
            size={'sm'}
            src={
              'https://cdns.iconmonstr.com/wp-content/releases/preview/7.5.0/240/iconmonstr-3d-lined.png'
            }
          />
        </MenuButton>
        <MenuList alignItems={'center'}>
          {/* <MenuItem>
            <Icon as={CgProfile} mr="1rem" />
            Profile
          </MenuItem>
          <MenuItem>
            <Icon as={FiSettings} mr="1rem" />
            Account Setting
          </MenuItem>

          <MenuDivider /> */}
          <MenuItem onClick={() => handleLoggout()}>
            {' '}
            <Icon as={FiLogOut} mr="1rem" />
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default NavMenu
