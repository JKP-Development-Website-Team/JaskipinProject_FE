import React, {useState} from 'react'
import { Container, Row, Button } from "react-bootstrap";
import NavbarAdmin from "../../../components/navbar/NavbarAdmin";
// import Sidebar from "../../../components/sidebar/Sidebar";

import {AiOutlineRight} from 'react-icons/ai'
import {BsChevronExpand} from 'react-icons/bs'
import CompHead from '../../../components/omzetLuar/CompHead';
import SidebarDua from '../../../components/sidebar/SidebarDua';
import TambahTransaksi from '../../../components/omzetLuar/TambahTransaksi';

const OmzetLuarNegri = () => {
  const [modalShow, setModalShow] = React.useState(false);
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
          <SidebarDua animated={animated} setAnimated={setAnimated} />          
        </div>
        <div className="ps-3 " style={{
          background:"",
          width: animated ? "85%" : "77%",
          position:"absolute",
          transition:"0.5s",
          left: animated ? "200px" : "300px",
          top:"125px"
        }}>
          {/* Batas Animasi */}
        <div
            style={{
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }}
          >
            <div className="py-2 bg-danger">
              <h1 className="textHead" style={{fontSize:"20px", marginBottom:"-1px"}}>Ringkasan Omzet Luar Negeri</h1>
              <p className="textP" style={{fontWeight:"500"}}>Periode 1 Oktober 2022 - 31 Oktober 2022</p>
            </div>

              <div style={{
                display:"flex",
                alignItems: "center",
                background:"red",
                gap:"1.2rem"
              }} >
                <div
                    className=""
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
                    className=""
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
                    className=""
                    style={{
                      cursor: "pointer",
                    }}
                >
                    <h4 style={{
                        
                    }} className=" shadowElement textChoose textChooseColor py-2">
                        Pilih Bulan
                        <BsChevronExpand style={{
                            marginLeft: "5px",
                            alignItems: "center"
                        }} />
                    </h4>
                </div>

                <Button onClick={() => setModalShow(true)} variant='danger'>Reset Filter</Button>
                <TambahTransaksi 
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />

              </div>
            
        </div>

          {/* Components Here */}
          <CompHead />
          {/* Components Here */}

        </div>
        {/* Batas Animasi */}
      </Row>
    </Container>
  </div>
  )
}

export default OmzetLuarNegri