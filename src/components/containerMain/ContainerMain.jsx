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
            onWheel={(e) => {
              e.preventDefault();
              e.scrollLeft += e.deltaY
            }}
            className="ps-3 "
            style={{
              width: animated ? "85%" : "75%",
              position: "absolute",
              transition: "0.5s",
              left: animated ? "200px" : "320px",
              top: "135px",
              paddingBottom:"1.5rem",
              overflowX:"hidden"
            }}
          >
            {props.children}
          </div>
        </Row>
      </Container>
  );
};

export default ContainerMain;
