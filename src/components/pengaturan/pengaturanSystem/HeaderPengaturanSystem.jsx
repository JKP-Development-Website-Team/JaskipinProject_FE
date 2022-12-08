import React from "react";
import TitleHeader from "../../../components/pengaturan/TitleHeader";
import { HeaderPengaturanSystems } from "../../utils/Constant";


const HeaderPengaturanSystem = ({title, titlePage}) => {
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
              dataMenu={HeaderPengaturanSystems}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPengaturanSystem;
