import React, { useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { categories } from "../components/utils/Constant";

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState('home-1')

  console.log(selectedCategory)
  return (
    <div style={{
        position:"absolute",
        left:"0"
    }}>
      <Row>
        <Col
          md={12}
          style={{
            width: "300px",
            height: "100vh",
            background: "#0843AD",
            padding: "120px 40px 0 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
          className=""
        >
          {categories.map((item, idx) => {
            return (
              <Dropdown
                key={idx}
                onMouseEnter={() => setSelectedCategory(item.name)}
                onMouseLeave={() => setSelectedCategory(null)}
              >
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{
                    backgroundColor: item.name === selectedCategory ? '#072E73' : "#0843AD",
                    width: "13em",
                    border:"none"
                  }}
                  className="mb-3 d-flex justify-content-between align-items-center"
                >
                  <span
                    style={{
                      fontSize: "25px",
                      marginTop: "-7px",
                      "&hover": {
                        background: "black",
                      },
                    }}
                  >
                    {item.icon}
                  </span>{" "}
                  {item.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default Sidebar;
