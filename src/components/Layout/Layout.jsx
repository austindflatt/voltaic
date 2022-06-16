import { Container } from '@mantine/core'
import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

const Layout = (props) => {
	const { children } = props;
  return (
  <>
    <NavBar />
    <Container size="xl">
      {children}
    </Container>
    <Footer />
  </>
  )
}

export default Layout