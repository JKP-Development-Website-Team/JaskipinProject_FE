import React, {useState} from "react";
import LogoJaskipin from "../logo-jskpn/LogoJaskipin";
import { categories } from "../../components/utils/Constant";
import {SlArrowRight, SlArrowDown} from 'react-icons/sl'

const SidebarDua = () => {

  const [selectedCategory, setSelectedCategory] = useState('')
  const [showContent, setShowContent] = useState('')

//   const handleShow = (name) => {
//     setShowContent(name)

//     if(showContent !== '') {
//         setShowContent('')
//     }
//   }

// Terahir pengerjaan lanjutan item content

  return (
    <aside id="sidebar" className="sidebar">
      <LogoJaskipin />
      <ul className="sidebar-nav" id="sidebar-nav">
        {categories.map((item, idx) => {
            return (
                <li 
                    key={idx}
                    className="nav-item" 
                    onMouseEnter={() => setSelectedCategory(item.name)}
                    onMouseLeave={() => setSelectedCategory('')}
                >
                <a
                  className="nav-link collapsed d-flex justify-content-between"
                  data-bs-target="#components-nav"
                  data-bs-toggle="collapse"
                  href="#"
                //   onClick={() => handleShow(item.name)}
                  onClick={() => setShowContent(item.name)}
                  style={{
                        backgroundColor: item.name === selectedCategory ? '#072E73' : "#0843AD",
                        color:"white",
                        fontWeight:"normal"
                    }}
                   >
                    <div>
                        <img className="me-3" src={item.icon} alt="" />
                        <span >{item.name}</span>
                    </div>
                  <SlArrowRight />
                </a>
                <ul
                  className="nav-content collapse"
                  data-bs-parent="#sidebar-nav"
                  style={{
                    display:showContent === item.name ? "block" : "none",
                    background:'#072E73',
                    borderTopLeftRadius:"0",
                    borderTopRightRadius:"0"
                  }}
                >
                  <li>
                    <a href="#" style={{
                        color:"white"
                    }}>
                      <i className="bi bi-circle" />
                      <span>Alerts</span>
                    </a>
                  </li>
                </ul>
              </li>
            )
        })}

        
      </ul>
    </aside>
  );
};

export default SidebarDua;
