import React, { useState } from 'react'
import { Col, Container, Row, InputGroup, Form } from 'react-bootstrap'
import TabelCalonAgen from '../../components/Calon agen/Tabel Calon Agen/TabelCalonAgen'
import NavbarAdmin from '../../components/navbar/NavbarAdmin'
import Sidebar from '../../components/sidebar/Sidebar'
import { BiSearch } from "react-icons/bi";

const CalonAgen = () => {

    const [animated, setAnimated] = useState(false)

    return (
        <>
            <div style={{
                backgroundColor: "#D9D9D9"
            }} >
                <NavbarAdmin animated={animated} />
                <Container >
                    <Row>
                        <Col>
                            <Sidebar animated={animated} setAnimated={setAnimated} />
                        </Col>
                    </Row>
                    <div style={{ marginTop: "10vh" }} className="d-flex flex-row mb-2">
                        <div className='p-2'>
                            <h4>Member</h4>
                        </div>
                        <div className='p-2'>
                            <InputGroup className="w-100 mx-5">
                                <InputGroup.Text id="basic-addon1">
                                    <BiSearch />
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    name="Search"
                                    placeholder="Search"
                                // onChange={handleChange}
                                />
                            </InputGroup>
                        </div>
                    </div>
                    <TabelCalonAgen />
                </Container>
            </div>
        </>
    )
}

export default CalonAgen