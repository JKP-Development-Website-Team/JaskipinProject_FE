import React from 'react'
import NavbarAdmin from '../components/navbar/NavbarAdmin'
import SidebarDua from '../components/sidebar/SidebarDua'
import ContainerMain from '../components/containerMain/ContainerMain'


const Layout = (props) => {


  return (
    <>
        <NavbarAdmin />
        <SidebarDua />
        {props.children}
    </>
  )
}

export default Layout