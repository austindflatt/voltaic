import React from 'react'
import FooterBig from './FooterBig'
import NavBarBig from './NavBarBig'

const Layout = (props) => {
	const { children } = props;
  return (
  <>
    <NavBarBig />
      {children}
    <FooterBig />
  </>
  )
}

export default Layout