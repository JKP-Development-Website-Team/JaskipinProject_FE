import React from "react";
import { Container, Row } from "react-bootstrap";
import NavbarAdmin from "../../../components/navbar/NavbarAdmin";
import SidebarDua from "../../../components/sidebar/SidebarDua";
import ScanBarcodeCard from "../../../components/scanBarcode/ScanBarcodeCard";
import { useState } from "react";
import { useSelector } from 'react-redux'

function ScanBarcode() {

  const animated = useSelector(state => state.animasiSlice.value)

  return (
    <div>
      <div
        style={{
          backgroundColor: "#D9D9D9",
          minHeight: "100vh",
        }}
      >
        <Container>
          <Row className="">
            <div style={{ background: "salmon" }}>
            </div>
            <div
              className="ps-3 "
              style={{
                background: "",
                width: animated ? "85%" : "75%",
                position: "absolute",
                transition: "0.5s",
                left: animated ? "200px" : "320px",
                top: "125px",
              }}
            >
              {/* Batas Animasi*/}
              <ScanBarcodeCard />
              {/* Batas Animasi */}
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ScanBarcode;
