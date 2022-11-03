import React, { useState } from "react";
import { Container, Row, InputGroup, Form } from "react-bootstrap";
import TabelCalonAgen from "../../components/Calon agen/Tabel Calon Agen/TabelCalonAgen";
import NavbarAdmin from "../../components/navbar/NavbarAdmin";
import Sidebar from "../../components/sidebar/Sidebar";
import { BiSearch } from "react-icons/bi";

const CalonAgen = () => {
  const [animated, setAnimated] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundColor: "#D9D9D9",
          minHeight: "100vh",
        }}
      >
        <NavbarAdmin animated={animated} />
        <Container>
          <Row className=''>
            <div style={{ background: "salmon" }}>
              <Sidebar animated={animated} setAnimated={setAnimated} />
            </div>
            <div className="ps-3 " style={{
              background: "",
              width: animated ? "85%" : "77%",
              position: "absolute",
              transition: "0.5s",
              left: animated ? "200px" : "300px",
              top: "125px"
            }}>
              {/* Batas Animasi*/}
            <div
                style={{
                  marginTop: "",
                }}
                className="d-flex"
              >
                <div className="p-2">
                  <h4>Agen</h4>
                </div>
                <div className="p-2">
                  <InputGroup className="w-75 mx-5">
                    <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px 0px 0px 20px' }} className="">
                      <BiSearch />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="Search"
                      placeholder="Search"
                      style={{ borderLeft: 'none', borderRadius: '0px 20px 20px 0px', backgroundColor: '#EFEFEF' }}



                    // onChange={handleChange}
                    />
                  </InputGroup>
                </div>
              </div>
              <TabelCalonAgen />
              {/* Batas Animasi */}
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CalonAgen;
