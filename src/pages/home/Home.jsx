import React, {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarAdmin from '../../components/navbar/NavbarAdmin'
import Sidebar from '../../components/sidebar/Sidebar'
import SidebarDua from '../../components/sidebar/SidebarDua'

const Home = () => {
  
  const [animated, setAnimated] = useState(false)
  console.log(animated)
  return (
    <Container >
      {/* <NavbarAdmin animated={animated} /> */}
        <Row>
            <Col>
                {/* <Sidebar animated={animated} setAnimated={setAnimated} /> */}
                {/* <SidebarDua animated={animated} setAnimated={setAnimated}/> */}
            </Col>
        </Row>
    </Container>
  )
}

export default Home