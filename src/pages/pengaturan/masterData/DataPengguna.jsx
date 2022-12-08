import React from "react";
import { Button } from "react-bootstrap";
import ContainerMain from "../../../components/containerMain/ContainerMain";
import Header from "../../../components/pengaturan/Header";
import { AiOutlinePlus } from "react-icons/ai";
import TabelPengaturan from '../../../components/tabel/TabelPengaturan'

const DataPengguna = () => {
  const columns = [
    {field:"noOrder", header:"No. Order"},
    {field:"pengirim", header:"Pengirim"},
    {field:"noResi", header:"No. Resi"},
    {field:"ekspedisi", header:"Ekspedisi"},
    {field:"penerima", header:"Penerima"},
    {field:"ongkir", header:"Ongkir"},
    {field:"berat", header:"Berat"},
    {field:"tujuan", header:"Tujuan"},
    {field:"action", header:""}
  ]

  const colSpan = {
    colOne: 7,
    colTwo: 3,
  };

  const actionButton = (id) => (
    <Button style={{
      background:"#9D9C9C",
      border:"none",
      padding:"5px 1.2rem"
    }}>
      Detail
    </Button>
  )

  const dataTable = [
    {
      id:"1",
      noOrder: "JEX000000888",
      pengirim:"John Doe",
      noResi:"JEX000000888",
      ekspedisi:"siCepat",
      penerima:"Johnn",
      ongkir:"Rp 20.000",
      berat:"1 Kg",
      tujuan:"Indramayu",
      action:""
    },
    {
      id:"2",
      noOrder: "JEX000000888",
      pengirim:"John Doe",
      noResi:"JEX000000888",
      ekspedisi:"siCepat",
      penerima:"Johnn",
      ongkir:"Rp 20.000",
      berat:"1 Kg",
      tujuan:"Indramayu",
      action:""
    },
    {
      id:"3",
      noOrder: "JEX000000888",
      pengirim:"John Doe",
      noResi:"JEX000000888",
      ekspedisi:"siCepat",
      penerima:"Johnn",
      ongkir:"Rp 20.000",
      berat:"1 Kg",
      tujuan:"Indramayu",
      action:""
    },
    {
      id:"4",
      noOrder: "JEX000000888",
      pengirim:"John Doe",
      noResi:"JEX000000888",
      ekspedisi:"siCepat",
      penerima:"Johnn",
      ongkir:"Rp 20.000",
      berat:"1 Kg",
      tujuan:"Indramayu",
      action:""
    },
  ]

  return (
    <div>
      <div
        style={{
          backgroundColor: "#D9D9D9",
          minHeight: "100vh",
        }}
      >
        <ContainerMain>
          <div className="d-flex flex-column">
            <div className="d-flex">
              <Header title='Master Data'/>
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
              <TabelPengaturan
               columns={columns}
               dataTable={dataTable}
               colSpan={colSpan}
               actionButton={actionButton}
              />
            </div>
          </div>
        </ContainerMain>
      </div>
    </div>
  );
};

export default DataPengguna;
