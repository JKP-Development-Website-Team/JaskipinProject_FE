import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarAdmin from '../components/NavbarAdmin'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <Container style={{}} >
        <Row>
            <Col>
                <Sidebar />
            </Col>
        </Row>
    </Container>
  )
}

export default Home