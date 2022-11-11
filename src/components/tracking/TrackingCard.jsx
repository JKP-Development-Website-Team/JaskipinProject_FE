import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import {useSelector} from 'react-redux'

function TrackingCard() {
  const animated = useSelector(state => state.animasiSlice.value)
  return (
    <Form
      style={{
        height: "22rem",
        width: animated ? "69rem" : "62rem",
        transition:"0.5s",
        left: "350px",
        top: "184px",
        borderRadius: "20px",
        padding: "4.25rem 7.563rem 4.5rem 7.563rem",
        background: "#EFEFEF",
        fontSize: "1.25rem",
        fontWeight: "700",
        // marginRight:""
      }}
    >
      <Row style={{ paddingBottom: "2.188rem" }}>
        <Col>
          <Form.Group controlId="formlacakorder.ControlInput1">
            <Form.Label style={{ paddingBottom: "2.188rem" }}>
              Masukan No. Order
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex. JEX"
              style={{ borderRadius: "1.813rem" }}
            />
          </Form.Group>
        </Col>
      </Row>
      <Button
        style={{
          width: "100%",
          background: "#0843AD",
          borderRadius: "1.813rem",
          fontSize: "14",
          color: "#FFFFFF",
          fontWeight: "700",
        }}
      >
        Lacak Pengiriman
      </Button>
    </Form>
  );
}

export default TrackingCard;
