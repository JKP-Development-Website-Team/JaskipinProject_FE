import React from "react";
import TitleHeader from "./TitleHeader";

const Header = ({title}) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#D9D9D9",
        }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column gap-3 ">
            <h1
              style={{
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
             {title}
            </h1>
            <div className="d-flex">
              <TitleHeader  
              title='Tarif'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
