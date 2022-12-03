import React from "react";
import { Container, Row, InputGroup, Form, Button } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Union from "../../../Image/Union.png";
import TabelTarif from "../../../components/tabel/TabelTarif";
import ContainerMain from "../../../components/containerMain/ContainerMain";

const Tarif = () => {
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
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex gap-3 align-items-center">
              <h4>Tarif</h4>
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
            </div>

            <div className="d-flex gap-2 align-items-center">
              <Button
                style={{
                  background: "#0843AD",
                  border: "none",
                  fontSize: ".9em",
                  padding: "9px 2.7em 9px 1em",
                }}
              >
                <span>
                  <AiOutlinePlus />
                </span>{" "}
                Tambah Tarif
              </Button>
              <Button
                style={{
                  background: "#0843AD",
                  border: "none",
                  fontSize: ".9em",
                  padding: "9px 2.7em 9px 1em",
                }}
              >
                <span>
                  <img src={Union} alt="union" height={11.6} width={12} />
                </span>{" "}
                Import Data
              </Button>
            </div>
          </div>
          <TabelTarif />
          {/* Batas Animasi */}
        </ContainerMain>
      </div>
    </div>
  );
};

export default Tarif;
