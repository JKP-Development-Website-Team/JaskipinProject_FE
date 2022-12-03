import React from "react";
import { Container, Row, InputGroup, Form, Button } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import union2 from "../../Image/Union (2).png";
import DropdownDomestik from "../../components/Domestik/DropDownDomestik";
import TabelDomestik from "../../components/tabel/TabelDomestik";
import { useSelector } from "react-redux";
import TambahTransaksiDomestikForm from "../../components/Domestik/TambahTransaksiDomestikForm";
import ContainerMain from "../../components/containerMain/ContainerMain";

const DomestikTransaksi = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
    <div
      style={{
        backgroundColor: "#D9D9D9",
        minHeight: "100vh",
      }}
    >
    <ContainerMain>
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
    </ContainerMain>
    </div>
    </div>
  );
};

export default DomestikTransaksi;
