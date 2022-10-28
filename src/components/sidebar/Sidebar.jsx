import React, { useState } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import { categories } from "../../components/utils/Constant";

import LogoJaskipin from "../logo-jskpn/LogoJaskipin";

const Sidebar = ({animated, setAnimated}) => {
  const [selectedCategory, setSelectedCategory] = useState('home-1')


  return (
    <div style={{
        position:"absolute",
        left:"0"
    }}>
      <Row>
        <Col
          md={12}
          style={{
            width: animated ? "180px" : "300px",
            height: "100vh",
            background: "#0843AD",
            padding: "130px 40px 0 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            transition:"0.5s"
          }}
          className=""
        >
          <LogoJaskipin animated={animated} setAnimated={setAnimated} />
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
                    width: animated ? "5em" : "13em",
                    border:"none",
                    transition:"0.5s"
                  }}
                  className="mb-3 d-flex justify-content-between align-items-center"
                >
                  <span
                    style={{
                      fontSize: "25px",
                      transition:"0.5s",
                      marginTop: "-7px",
                    }}
                  >
                    {item.icon}
                  </span>
                  {animated ? "" : item.name }
                  
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
