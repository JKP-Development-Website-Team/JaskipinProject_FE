import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import TabelLuarNegeri from "../../../components/tabel/TabelLuarNegeri";
import union from "../../../Image/Union.png";
import union2 from "../../../Image/Union (2).png";
import DropdownLuarNegeri from "../../../components/LuarNegeri/DropDownLuarNegeri";
import { useSelector } from "react-redux";
import ContainerMain from "../../../components/containerMain/ContainerMain";

const TransaksiLuarNegeri = () => {

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
                    Transaksi Pengiriman Luar Negeri
                  </h4>
                </div>
              </div>
              <div className="d-flex flex-row mx-1 my-4">
                <div className="me-4">
                  <DropdownLuarNegeri />
                </div>
                <div className="">
                  <InputGroup className="w-100">
                    <InputGroup.Text
                      id="basic-addon1"
                      style={{
                        backgroundColor: "#EFEFEF",
                        borderRadius: "20px 0px 0px 20px",
                      }}
                      className=""
                    >
                      <BiSearch />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="Search"
                      placeholder="Cari No. Order"
                      style={{
                        borderLeft: "none",
                        borderRadius: "0px 20px 20px 0px",
                        backgroundColor: "#EFEFEF",
                      }}
                      // onChange={handleChange}
                    />
                  </InputGroup>
                </div>
                <div className="mx-4">
                  <InputGroup className="w-100">
                    <InputGroup.Text
                      id="basic-addon1"
                      style={{
                        backgroundColor: "#EFEFEF",
                        borderRadius: "20px 0px 0px 20px",
                      }}
                      className=""
                    >
                      <BiSearch />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="Search"
                      placeholder="Cari No. Resi"
                      style={{
                        borderLeft: "none",
                        borderRadius: "0px 20px 20px 0px",
                        backgroundColor: "#EFEFEF",
                      }}
                      // onChange={handleChange}
                    />
                  </InputGroup>
                </div>
                <div className="">
                  <InputGroup className="w-100">
                    <InputGroup.Text
                      id="basic-addon1"
                      style={{
                        backgroundColor: "#EFEFEF",
                        borderRadius: "20px 0px 0px 20px",
                      }}
                      className=""
                    >
                      <BiSearch />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="Search"
                      placeholder="Cari Nama Penerima"
                      style={{
                        borderLeft: "none",
                        borderRadius: "0px 20px 20px 0px",
                        backgroundColor: "#EFEFEF",
                      }}

                      // onChange={handleChange}
                    />
                  </InputGroup>
                </div>
                <div className="mx-4">
                  <Button
                    style={{ backgroundColor: "#0843AD", border: "none" }}
                    className=""
                  >
                    <img src={union2} alt="" className="me-1 mb-1" />
                    Tambah Transaksi
                  </Button>{" "}
                </div>
                <div className="">
                  <Button
                    style={{ backgroundColor: "#0843AD", border: "none" }}
                    className=""
                  >
                    <img src={union} alt="" className="me-1 mb-1" />
                    import Transaksi
                  </Button>{" "}
                </div>
              </div>

              <TabelLuarNegeri />
              {/* Batas Animasi */}
              </ContainerMain>
      </div>
    </div>
  );
};

export default TransaksiLuarNegeri;
