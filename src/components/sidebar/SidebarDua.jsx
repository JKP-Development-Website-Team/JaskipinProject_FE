import React, { useState } from "react";
import LogoJaskipin from "../logo-jskpn/LogoJaskipin";
import { categories } from "../../components/utils/Constant";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";

const SidebarDua = ({ animated, setAnimated }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showContent, setShowContent] = useState("");

  return (
    <aside
      id="sidebar"
      className="sidebar"
      style={{
        width: animated ? "196px" : "292px",
      }}
    >
      <LogoJaskipin animated={animated} setAnimated={setAnimated} />
      <ul className="sidebar-nav" id="sidebar-nav">
        {categories.map((item, idx) => {
          return (
            <li
              key={idx}
              className="nav-item"
              onMouseEnter={() => setSelectedCategory(item.name)}
              onMouseLeave={() => setSelectedCategory("")}
            >
              <a
                className="nav-link collapsed d-flex justify-content-between"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
                onClick={() => setShowContent(item.name)}
                style={{
                  backgroundColor:
                    showContent === item.name
                      ? "#072E73"
                      : item.name === selectedCategory
                      ? "#072E73"
                      : "#0843AD",
                  color: "white",
                  fontWeight: "normal",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <div>
                  <img className="me-3" src={item.icon} alt="" />
                  {animated ? "" : <span>{item.name}</span>}
                </div>
                {showContent === item.name ? <SlArrowDown /> : <SlArrowRight />}
              </a>
              <ul
                className="nav-content collapse"
                data-bs-parent="#sidebar-nav"
                style={{
                  display: showContent === item.name ? "block" : "none",
                  background: "#072E73",
                  borderRadius: "0 0 10px 10px",
                }}
              >
                {item?.children?.chilOne ? (
                  <li>
                    <a
                      href="# "
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      <span>{item?.children?.chilOne}</span>
                    </a>
                  </li>
                ) : (
                  ""
                )}
                {item?.children?.chilTwo ? (
                  <li>
                    <a
                      href="#"
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      <span>{item?.children?.chilTwo}</span>
                    </a>
                  </li>
                ) : (
                  ""
                )}
                {item?.children?.chilThree ? (
                  <li>
                    <a
                      href="# "
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      <span>{item?.children?.chilThree}</span>
                    </a>
                  </li>
                ) : (
                  ""
                )}
                {item?.children?.chilFour ? (
                  <li>
                    <a
                      href="# "
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      <span>{item?.children?.chilFour}</span>
                    </a>
                  </li>
                ) : (
                  ""
                )}
                {item?.children?.chilFive ? (
                  <li>
                    <a
                      href="# "
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      <span>{item?.children?.chilFive}</span>
                    </a>
                  </li>
                ) : (
                  ""
                )}
                {item?.children?.chilSix ? (
                  <li>
                    <a
                      href="# "
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      <span>{item?.children?.chilSix}</span>
                    </a>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SidebarDua;
