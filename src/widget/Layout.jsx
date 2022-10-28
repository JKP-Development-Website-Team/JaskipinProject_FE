import React from 'react'
import NavbarAdmin from '../components/navbar/NavbarAdmin'

const Layout = (props) => {
  return (
    <>
        <NavbarAdmin />
        {props.children}
    </>
  )
}

export default Layout