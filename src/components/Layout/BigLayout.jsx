import React from 'react'
import FooterBig from '../Footer/FooterBig'
import NavBarBig from '../Header/NavBarBig'

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