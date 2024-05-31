// Packages
import React from 'react'
import { Link } from 'react-router-dom'
import {Flex, Spacer} from '@chakra-ui/react'

// Local imports 
import "../Components/Navbar.css"

export default function Navbar() {
  return (
    <Flex id="navbar" p={4} >
      <Spacer />
      <Link to='/'>Home </Link> {/* Link to Home page*/}
      <Spacer />
      <Link to='/about'>About </Link> {/* Link to About page*/}
      <Spacer />
      <Link to='/Login'>Login </Link> {/* Link to Login page*/}
      <Spacer />
      <Link to='/Products'>Products </Link> {/* Link to Products page*/}
      <Spacer />
      <Link to='/SingleUser'>SingleUser </Link> {/* Link to SingleUser page*/}
      <Spacer />
    </Flex>
  )
}
