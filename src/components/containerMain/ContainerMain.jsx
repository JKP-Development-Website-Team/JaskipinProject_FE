import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SidebarDua from "../sidebar/SidebarDua";
import NavbarAdmin from "../navbar/NavbarAdmin";


const ContainerMain = (props) => {

  const animated = useSelector(state => state.animasiSlice.value)


  return (
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
              top: "135px",
            }}
          >
            {props.children}
          </div>
        </Row>
      </Container>
  );
};

export default ContainerMain;
