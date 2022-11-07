import React, {useState} from "react";
import LogoJaskipin from "../logo-jskpn/LogoJaskipin";
import { categories } from "../../components/utils/Constant";
import {SlArrowRight, SlArrowDown} from 'react-icons/sl'
import { Link, useNavigate } from "react-router-dom";

const SidebarDua = ({animated, setAnimated}) => {

  const [selectedCategory, setSelectedCategory] = useState('')
  const [showContent, setShowContent] = useState('')
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside id="sidebar" className="sidebar" style={{
      width: animated ? "196px" : "292px"
    }}>
      <LogoJaskipin animated={animated} setAnimated={setAnimated} />
      <ul className="sidebar-nav" id="sidebar-nav">
        {categories.map((item, idx) => {
          let children = item.children
            return (
                <li 
                    key={idx}
                    className="nav-item" 
                    onMouseEnter={() => setSelectedCategory(item.name)}
                    onMouseLeave={() => setSelectedCategory('')}
                >
                <Link
                  className="nav-link collapsed d-flex justify-content-between"
                  data-bs-target="#components-nav"
                  data-bs-toggle="collapse"
                  to={item.chilTwo}
                  onClick={() => {
                    setShowContent(item.name)
                  }}
                  style={{
                        backgroundColor: showContent === item.name ? '#072E73' : item.name === selectedCategory ? '#072E73' : "#0843AD",
                        color:"white",
                        fontWeight:"normal",
                        borderRadius:"10px 10px 0 0"
                    }}
                   >
                    <div>
                        <img className="me-3" src={item.icon} alt="" />
                        {animated ? "" : (<span >{item.name}</span>) }
                        
                    </div>
                    {showContent === item.name ? (
                      <SlArrowDown />
                      ): (
                      <SlArrowRight />
                    )}
                </Link>
                <ul
                  className="nav-content collapse"
                  data-bs-parent="#sidebar-nav"
                  style={{
                    display:showContent === item.name ? "block" : "none",
                    background:'#072E73',
                    borderRadius:"0 0 10px 10px",
                  }}
                >
                 {children?.map((child, idx) => (
                  <li>
                  <Link to={child?.chilLink} style={{
                      color:"white",
                      textDecoration:"none"
                  }}>
                    <span>{child?.nameChil}</span>
                  </Link>
                </li>
                 ))} 

                  
                </ul>
              </li>
            )
        })}

        
      </ul>
    </aside>
  );
};

export default SidebarDua;
