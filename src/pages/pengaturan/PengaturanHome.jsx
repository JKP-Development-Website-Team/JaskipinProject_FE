import React from "react";
import { Link } from "react-router-dom";
import ContainerMain from "../../components/containerMain/ContainerMain";
import imgMasterData from "../../Image/image 1.png";
import imgOfficeParameter from "../../Image/image 2.png";
import imgPengaturanSistem from "../../Image/image 3.png";

const PengaturanHome = () => {
  const pengaturanUtils = [
    {
      name: "Master Data",
      image: imgMasterData,
      link: "/pengaturan/master-data/data-pengguna",
    },
    {
      name: "Office Parameter",
      image: imgOfficeParameter,
      link: "/pengaturan/office-parameter",
    },
    {
      name: "Pengaturan Sistem",
      image: imgPengaturanSistem,
      link: "/pengaturan/pengaturan-sistem",
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundColor: "#D9D9D9",
          minHeight: "100vh",
        }}
      >
        <ContainerMain>
          <h1
            style={{
              fontSize: "1.3rem",
              fontWeight: "700",
            }}
          >
            Pengaturan
          </h1>
          <div className="d-flex gap-4 justify-content-evenly mt-3 flex-column flex-md-row">
            {pengaturanUtils.map((item, idx) => (
              <Link
                className="bg-light d-flex justify-content-center align-items-center flex-column rounded-4 shadow text-decoration-none text-dark"
                style={{
                  width: "319px",
                  padding: "1.3rem 0",
                  cursor: "pointer",
                }}
                to={item.link}
                key={idx}
              >
                <img src={item.image} alt="" height={130} />
                <h3
                  style={{
                    fontSize: "1.3rem",
                    marginTop: "1rem",
                  }}
                >
                  {item.name}
                </h3>
              </Link>
            ))}
          </div>
        </ContainerMain>
      </div>
    </div>
  );
};

export default PengaturanHome;
