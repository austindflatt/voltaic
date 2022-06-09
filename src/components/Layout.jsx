import { Container } from '@mantine/core'
import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = (props) => {
	const { children } = props;
  return (
  <>
    <NavBar />
    <Container size="lg">
      {children}
    </Container>
    <Footer />
  </>
  )
}

export default Layout