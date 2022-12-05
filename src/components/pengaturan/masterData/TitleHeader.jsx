import React from "react";
import { HeaderMasterData } from "../../utils/Constant";

const TitleHeader = () => {
  return (
    <div className="d-flex ">
      {HeaderMasterData.map((title, i) => (
        <div
          className="bg-white d-flex ms-3 justify-content-center align-items-center rounded-4 shadow-sm"
          style={{
            cursor: "pointer",
            width: "190px",
            height: "60px",
            textAlign: "center",
          }}
          key={i}
        >
          <h2
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "gray",
              textAlign: "center",
            }}
          >
            {title.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default TitleHeader;
