import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardDashboard from "../../components/card/CardDashboard";
import NavbarAdmin from "../../components/navbar/NavbarAdmin";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  const [animated, setAnimated] = useState(false);

  return (
    <Container>
      <NavbarAdmin animated={animated} />
      <Row>
        <Col>
          <Sidebar animated={animated} setAnimated={setAnimated} />
        </Col>
        <CardDashboard />
      </Row>
    </Container>
  );
};

export default Home;
