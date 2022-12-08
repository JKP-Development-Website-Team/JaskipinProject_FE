import React from "react";
import TitleHeader from "../../../components/pengaturan/TitleHeader";
import { HeaderOfficeParameter } from "../../utils/Constant";


const Header = ({title, titlePage}) => {
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
              title={titlePage}
              dataMenu={HeaderOfficeParameter}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
