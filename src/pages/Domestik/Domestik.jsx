import React, { useState } from "react";
import { Container, Row, InputGroup, Form, Button } from "react-bootstrap";
// import TabelCalonAgen from "../../../components/tabel/TabelCalonAgen";
// import Sidebar from "../../../components/sidebar/Sidebar";
import { BiSearch } from "react-icons/bi";
import ToastDropDown from "../../components/LuarNegeri/DropDownLuarNegeri";
import NavbarAdmin from "../../components/navbar/NavbarAdmin";
import SidebarDua from "../../components/sidebar/SidebarDua";
import TabelLuarNegeri from "../../components/tabel/TabelLuarNegeri";
import union from "../../Image/Union.png";
import union2 from "../../Image/Union (2).png";
import DropdownDomestik from "../../components/Domestik/DropDownDomestik";
import TabelDomestik from "../../components/tabel/TabelDomestik";
import { useSelector } from "react-redux";
import TambahTransaksiDomestikForm from "../../components/Domestik/TambahTransaksiDomestikForm";

const Domestik = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const animated = useSelector((state) => state.animasiSlice.value);
  return (
    <>
      <div>
        <div
          style={{
            height: "100vh",
          }}
        >
          <Container>
            <Row className="">
              <div
                className="ps-3 "
                style={{
                  background: "",
                  width: animated ? "85%" : "75%",
                  position: "absolute",
                  transition: "0.5s",
                  left: animated ? "200px" : "320px",
                  top: "100px",
                }}
              >
                {/* Batas Animasi*/}
                <div
                  style={{
                    marginTop: "",
                  }}
                  className="d-flex align-items-center justify-content-start"
                >
                  <div className="">
                    <h4 className="m-2 fw-bold" style={{ fontSize: "20px" }}>
                      Transaksi Pengiriman Domestik
                    </h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-3">
                    <div className="">
                      <InputGroup className="shadow-sm">
                        <InputGroup.Text
                          id="basic-addon1"
                          style={{
                            backgroundColor: "#EFEFEF",
                            borderRadius: "10px 0px 0px 10px",
                          }}
                          className=""
                        >
                          <BiSearch />
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          name="Search"
                          placeholder="Cari"
                          style={{
                            borderLeft: "none",
                            borderRadius: "0px 7px 7px 0px",
                            backgroundColor: "#EFEFEF",
                          }}
                        />
                      </InputGroup>
                    </div>
                    <DropdownDomestik />
                  </div>
                  <div className="d-flex flex-row-reverse">
                    <div>
                      <Button
                        style={{ backgroundColor: "#0843AD", border: "none" }}
                        className=""
                        onClick={() => setModalShow(true)}
                      >
                        <img src={union2} alt="" className="me-1 mb-1" />
                        Tambah Transaksi
                      </Button>{" "}
                    </div>
                  </div>

                  <TambahTransaksiDomestikForm
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>

                <TabelDomestik />
                {/* Batas Animasi */}
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Domestik;
