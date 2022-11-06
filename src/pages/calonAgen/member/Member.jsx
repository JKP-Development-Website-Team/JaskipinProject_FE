import React,  { useState }  from 'react'
import { Container, Row, InputGroup, Form, Button } from "react-bootstrap";
import NavbarAdmin from "../../../components/navbar/NavbarAdmin";
import { BiSearch } from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai"
import SidebarDua from "../../../components/sidebar/SidebarDua";
import Union from '../../../Image/Union.png'
import TabelMember from '../../../components/tabel/TabelMember';


const Member = () => {

    const [animated, setAnimated] = useState(false)

  return (
    <div>
            <div
        style={{
          backgroundColor: "#D9D9D9",
          minHeight: "100vh",
        }}
      >
        {/* <NavbarAdmin animated={animated} /> */}
        <Container>
          <Row className=''>
            <div style={{ background: "salmon" }}>
              {/* <Sidebar animated={animated} setAnimated={setAnimated} /> */}
              {/* <SidebarDua animated={animated} setAnimated={setAnimated} /> */}
            </div>
            <div className="ps-3 " style={{
              background: "",
              width: animated ? "85%" : "75%",
              position: "absolute",
              transition: "0.5s",
              left: animated ? "200px" : "320px",
              top: "125px"
            }}>
              {/* Batas Animasi*/}
            <div
                style={{
                  marginTop: "",
                }}
                className="d-flex align-items-center justify-content-start"
              >
                <div className="d-flex gap-3 align-items-center">
                  <h4 className='m-2 fw-bold' style={{fontSize:"20px"}}>Member</h4>
                <div className="">
                  <InputGroup className="shadow-sm">
                    <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#EFEFEF', borderRadius: '10px 0px 0px 10px' }} className="">
                      <BiSearch />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="Search"
                      placeholder="Cari"
                      style={{ borderLeft: 'none', borderRadius: '0px 7px 7px 0px', backgroundColor: '#EFEFEF' }}
                    />
                    </InputGroup>
                  </div>
                </div>

              </div>
              <TabelMember />
              {/* Batas Animasi */}
            </div>
          </Row>
        </Container>
      </div> 
    </div>
  )
}

export default Member