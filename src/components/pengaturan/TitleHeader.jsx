import React, {useEffect, useRef, useState} from "react";
import { Link, useLocation } from "react-router-dom";

const TitleHeader = ({title, dataMenu}) => {

const [isClick, setIsClick] = useState(false)
  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = e => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }
  const scrollRef = useHorizontalScroll()
  console.log(isClick)
  return (
    <div 
    id="mainHeader" 
    className="d-flex align-items-center gap-3" 
    style={{
      overflow: isClick ? "" :"auto",
      width:"70%",
      paddingBottom:"15px",
      position:"relative",
    }}
    ref={scrollRef}
    onWheel={() => setIsClick(false)}
    >
      {dataMenu.map((item, idx) => {
        return (
        <div 
        className="dropdown" 
        key={idx}
        >
          <button
            className="btn btn-secondary dropdown-toggle shadow d-flex justify-content-between align-items-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              width:"175px",
              padding:"12px 1.1rem",
              textAlign:"left",
              fontSize:".9rem",
              fontWeight:"600",
              background: item.title === title ? "#5B93F9" : "#FFF",
              color: item.title === title ? "#FFF" : "#828181",
              border:"none"
            }}
            onClick={() => setIsClick(true)}
          >
            {item.title.slice(0, 15)} {item.title.length >= 15 && '...'}
          </button>
          <ul className="dropdown-menu" style={{
            paddingRight:"8.5px",
            borderTopRightRadius:"0",
            borderTopLeftRadius:"0",
            marginTop:"-13px",
            background:"#5B93F9",
            border:"none"
          }}>
            {item?.children?.map((item, idx) => (
            <li key={idx}>
              <Link className="dropdown-item" to={item.chilLink} style={{color:"#FFF", fontWeight:"600"}}>
                {item.nameChil}
              </Link>
            </li>
            ))}
          </ul>
        </div>
        )
        
})}
    </div>
  );
};

export default TitleHeader;
