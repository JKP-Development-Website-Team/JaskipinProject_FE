import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from 'react-redux'
import TrackingCard from "../../../components/tracking/TrackingCard";

function Tracking() {

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
              <TrackingCard />
              {/* Batas Animasi */}
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Tracking;
