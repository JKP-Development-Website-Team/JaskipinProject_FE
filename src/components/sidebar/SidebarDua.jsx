import React, {useState} from "react";
import LogoJaskipin from "../logo-jskpn/LogoJaskipin";
import { categories } from "../../components/utils/Constant";
import {SlArrowRight, SlArrowDown} from 'react-icons/sl'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { animatedReducers } from "../../redux/animasi/AnimasiSlice";

const SidebarDua = () => {

  const [selectedCategory, setSelectedCategory] = useState('')
  const [showContent, setShowContent] = useState('')
  const navigate = useNavigate()
  const animated = useSelector(state => state.animasiSlice.value)
  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside id="sidebar" className="sidebar" style={{
      width: animated ? "196px" : "292px"
    }}>
      <ul className="sidebar-nav" id="sidebar-nav">
        {categories.map((item, idx) => {
          let children = item.children
          let spaceClass = animated ? "justify-content-center" : "justify-content-between"

            return (
                <li 
                    key={idx}
                    className="nav-item" 
                    onMouseEnter={() => setSelectedCategory(item.name)}
                    onMouseLeave={() => setSelectedCategory('')}
                    style={{
                      transition:"0.5s",
                    }}
                >
                <Link
                  className={`nav-link collapsed d-flex ${spaceClass}`}
                  data-bs-target="#components-nav"
                  data-bs-toggle="collapse"
                  to={item.chilTwo}
                  onClick={() => {
                    setShowContent(item.name)
                    if(showContent === item.name) setShowContent('')
                    if(animated) {
                      dispatch(animatedReducers(false))
                    }
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
                        {animated ? null : (<span className='nav-item-name'>{item.name}</span>) }
                        
                    </div>
                    {animated && showContent != item.name ? <SlArrowRight /> : !animated && showContent != item.name ? <SlArrowRight /> : animated && showContent === item.name ?  <SlArrowRight /> : <SlArrowDown />}
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
                  {animated ? null : (
                 children?.map((child, idx) => (
                  
                  <li key={idx}>
                  <Link to={child?.chilLink} style={{
                      color:"white",
                      textDecoration:"none"
                  }}>
                    <span>{child?.nameChil}</span>
                  </Link>
                </li>
                 ))
                  )}


                  
                </ul>
              </li>
            )
        })}

        
      </ul>
    </aside>
  );
};

export default SidebarDua;
