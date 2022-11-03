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
            minHeight: "200vh",
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
                    <img src={item.icon} alt="" />
                  </span>
                  {animated ? "" : item.name }
                  
                </Dropdown.Toggle>

                {/* <Dropdown.Menu>
                  {item?.children?.chilOne ? (
                    <Dropdown.Item href="#/action-1">{item?.children?.chilOne}</Dropdown.Item>
                  ) : ""}    
                  {item?.children?.chilTwo ? (
                    <Dropdown.Item href="#/action-1">{item?.children?.chilTwo}</Dropdown.Item>
                  ) : ""}    
                  {item?.children?.chilThree ? (
                    <Dropdown.Item href="#/action-1">{item?.children?.chilThree}</Dropdown.Item>
                  ) : ""}    
                  {item?.children?.chilFour ? (
                    <Dropdown.Item href="#/action-1">{item?.children?.chilFour}</Dropdown.Item>
                  ) : ""}    
                  {item?.children?.chilFive ? (
                    <Dropdown.Item href="#/action-1">{item?.children?.chilFive}</Dropdown.Item>
                  ) : ""}    
                  {item?.children?.chilSix ? (
                    <Dropdown.Item href="#/action-1">{item?.children?.chilSix}</Dropdown.Item>
                  ) : ""}    
                </Dropdown.Menu> */}

                <div>
                  <ul>
                    <li>li</li>
                  </ul>
                </div>
              </Dropdown>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default Sidebar;
