import React from 'react'
import FooterBig from '../Footer/FooterBig'
import NavBarBig from '../NavBar/NavBarBig'

const Layout = (props) => {
	const { children } = props;

  // This layout will be used for bigger pages such as the Map page.
  
  return (
    <>
      <NavBarBig />
        {children}
      <FooterBig />
    </>
  )
}

export default Layout;