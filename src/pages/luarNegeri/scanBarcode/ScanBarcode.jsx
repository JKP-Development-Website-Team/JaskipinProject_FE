import React from "react";
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
} from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { TbScan } from "react-icons/tb";
import ScanBarcodeComponent from "../../../components/scanBarcode/ScanBarcodeComponent";
import ContainerMain from "../../../components/containerMain/ContainerMain";

const ScanBarcode = () => {
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
              <Button
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                  backgroundColor: "#0843AD",
                  padding: "8px 10px",
                  fontWeight: "600",
                  fontSize: "12px",
                }}
                size="sm"
                className="rounded-3 shadow"
              >
                <TbScan className="me-2" />
                Scan Barcode
              </Button>
            </div>

            <div className="d-flex justify-content-end align-items-center">
              <InputGroup>
                <InputGroup.Text
                  id="basic-addon1"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px 0px 0px 10px",
                  }}
                  className="border-0"
                >
                  <BiSearch />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="Search"
                  size="sm"
                  placeholder="Cari No. Order.."
                  style={{
                    borderLeft: "none",
                    borderRadius: "0px 7px 7px 0px",
                    // backgroundColor: "#EFEFEF",
                    // outline: "none",
                  }}
                  className="me-2 border-0"
                />

                <InputGroup.Text
                  id="basic-addon1"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px 0px 0px 10px",
                  }}
                  className="border-0"
                >
                  <BiSearch />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="Search"
                  placeholder="Cari No. Resi.."
                  size="sm"
                  style={{
                    borderLeft: "none",
                    borderRadius: "0px 7px 7px 0px",
                    outline: "none",
                  }}
                  className="me-2 border-0"
                />

                <InputGroup.Text
                  id="basic-addon1"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px 0px 0px 10px",
                  }}
                  className="border-0"
                >
                  <BiSearch />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="Search"
                  placeholder="Cari Nama Penerima.."
                  size="sm"
                  style={{
                    borderLeft: "none",
                    borderRadius: "0px 7px 7px 0px",

                    outline: "none",
                  }}
                  className="me-2 border-0"
                />
              </InputGroup>

              {/* Dropdown  */}
              <DropdownButton
                title="100"
                variant="light"
                align="end"
                size="sm"
                className="me-2 border-0"
              >
                <Dropdown.Item as="button"></Dropdown.Item>
              </DropdownButton>
              {/* Dropdown  */}

              {/* DropDown Filter */}
              <DropdownButton
                align="end"
                variant="light"
                title="Filter"
                size="sm"
                className="border-0"
              >
                <Dropdown.Item as="button"></Dropdown.Item>
              </DropdownButton>
              {/* DropDown */}
            </div>
          </div>

          {/* Component */}
          <ScanBarcodeComponent />
          {/* Component */}
          {/* Batas Animasi */}
        </ContainerMain>
      </div>
    </div>
  );
};

export default ScanBarcode;
