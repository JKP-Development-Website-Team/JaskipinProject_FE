import React from "react";
import { Button } from "react-bootstrap";
import ContainerMain from "../../../components/containerMain/ContainerMain";
import TableDataPengguna from "../../../components/pengaturan/masterData/dataPengguna/TableDataPengguna";
import Header from "../../../components/pengaturan/masterData/Header";
import { AiOutlinePlus } from "react-icons/ai";

const DataPengguna = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#D9D9D9",
          minHeight: "200vh",
        }}
      >
        <ContainerMain>
          <div className="d-flex flex-column">
            <div className="d-flex">
              <Header />
            </div>
            <div className="d-flex flex-column mt-5">
              <div className="d-flex justify-content-between">
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                  }}
                >
                  Data Pengguna
                </h3>
                <Button variant="primary" className="d-flex align-items-center" 
                  style={{ backgroundColor: "#0843AD", border: "none", fontWeight: 400 }}>
                  <AiOutlinePlus />
                  <span className="ms-2 ">Tambah Item</span>
                </Button>
              </div>
              <TableDataPengguna />
            </div>
          </div>
        </ContainerMain>
      </div>
    </div>
  );
};

export default DataPengguna;
