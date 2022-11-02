import React, {useState} from 'react'
import { Container, Row, Button } from "react-bootstrap";
import NavbarAdmin from "../../components/navbar/NavbarAdmin";
import Sidebar from "../../components/sidebar/Sidebar";

import {AiOutlineRight} from 'react-icons/ai'
import {BsChevronExpand} from 'react-icons/bs'
import CompHead from '../../components/omzetLuar/CompHead';

const OmzetLuarNegri = () => {

    const [animated, setAnimated] = useState(false);

  return (
    <div
    style={{
      backgroundColor: "#D9D9D9",
      minHeight: "200vh",
    }}
  >
    <NavbarAdmin animated={animated} />
    <Container>
      <Row className=''>
        <div style={{background:"salmon"}}>
          <Sidebar animated={animated} setAnimated={setAnimated} />             
        </div>
        <div className="ps-3 " style={{
          background:"",
          width: animated ? "85%" : "77%",
          position:"absolute",
          transition:"0.5s",
          left: animated ? "200px" : "300px",
          top:"125px"
        }}>
        <div
            style={{
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }}
          >
            <div className="p-2">
              <h1 className="textHead">Ringkasan Omzet Luar Negeri</h1>
              <p className="textP">Periode 1 Oktober 2022 - 31 Oktober 2022</p>
            </div>

              <div style={{
                display:"flex",
                alignItems: "center",
                justifyContent: "flex-end"
              }} >
                <div
                    className=" me-4"
                    style={{
                      cursor: "pointer"
                    }}
                >
                    <h4 style={{
                        textAlign: "center",
                        alignItems:"center",
                    }} className="textChoose shadowElement">
                        Filter Transaksi
                        <AiOutlineRight style={{
                            marginLeft: "5px",
                            alignItems: "center"
                        }} />
                    </h4>
                </div>

                <div
                    className="me-4"
                    style={{
                      cursor: "pointer"
                    }}
                >
                    <h4 style={{
                        textAlign: "center",
                    }} className=" shadowElement textChoose textChooseColor" >
                        Pilih Cabang
                        <BsChevronExpand style={{
                            marginLeft: "5px",
                            alignItems: "center"
                        }} />
                    </h4>
                </div>
                
                <div
                    className="me-4"
                    style={{
                      cursor: "pointer"
                    }}
                >
                    <h4 style={{
                        
                    }} className=" shadowElement textChoose textChooseColor">
                        Pilih Bulan
                        <BsChevronExpand style={{
                            marginLeft: "5px",
                            alignItems: "center"
                        }} />
                    </h4>
                </div>

                <Button variant='danger'>Reset Filter</Button>

              </div>
            
        </div>

          {/* Components Here */}
          <CompHead />

          {/* Components Here */}

        </div>
      </Row>
    </Container>
  </div>
  )
}

export default OmzetLuarNegri