import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import NavbarAdmin from "../../../components/navbar/NavbarAdmin";
// import Sidebar from "../../../components/sidebar/Sidebar";

import { AiOutlineRight } from "react-icons/ai";
import { BsChevronExpand } from "react-icons/bs";
import CompHead from "../../../components/omzetLuar/CompHead";
import SidebarDua from "../../../components/sidebar/SidebarDua";
import TambahTransaksi from "../../../components/omzetLuar/TambahTransaksi";
import { useSelector } from "react-redux";
import ContainerMain from "../../../components/containerMain/ContainerMain";

const OmzetLuarNegri = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const animated = useSelector((state) => state.animasiSlice.value);

  return (
    <div>
      <div
        style={{
          backgroundColor: "#D9D9D9",
          minHeight: "100vh",
        }}
      >
        <ContainerMain>
          {/* Batas Animasi */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="py-2">
              <h1
                className="textHead"
                style={{ fontSize: "20px", marginBottom: "-1px" }}
              >
                Ringkasan Omzet Luar Negeri
              </h1>
              <p className="textP" style={{ fontWeight: "500" }}>
                Periode 1 Oktober 2022 - 31 Oktober 2022
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "start",
                gap: "1.2rem",
              }}
            >
              <div
                className=""
                style={{
                  cursor: "pointer",
                }}
              >
                <h4
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                  }}
                  className="textChoose shadowElement shadow"
                >
                  Filter Transaksi
                  <AiOutlineRight
                    style={{
                      marginLeft: "5px",
                      alignItems: "center",
                    }}
                  />
                </h4>
              </div>

              <div
                className=""
                style={{
                  cursor: "pointer",
                }}
              >
                <h4
                  style={{
                    textAlign: "center",
                  }}
                  className=" shadowElement textChoose textChooseColor shadow"
                >
                  Pilih Cabang
                  <BsChevronExpand
                    style={{
                      marginLeft: "5px",
                      alignItems: "center",
                    }}
                  />
                </h4>
              </div>

              <div
                className=""
                style={{
                  cursor: "pointer",
                }}
              >
                <h4
                  style={{}}
                  className=" shadowElement textChoose textChooseColor shadow"
                >
                  Pilih Bulan
                  <BsChevronExpand
                    style={{
                      marginLeft: "5px",
                      alignItems: "center",
                    }}
                  />
                </h4>
              </div>

              <Button
                onClick={() => setModalShow(true)}
                size="md"
                className="shadow"
                variant="danger"
              >
                Reset Filter
              </Button>
              <TambahTransaksi
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>

          {/* Components Here */}
          <CompHead />
          {/* Components Here */}

          {/* Batas Animasi */}
        </ContainerMain>
      </div>
    </div>
  );
};

export default OmzetLuarNegri;
