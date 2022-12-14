import React from "react";
import { Button } from "react-bootstrap";
import ContainerMain from "../../../components/containerMain/ContainerMain";
import Header from "../../../components/pengaturan/masterData/Header";
import { AiOutlinePlus } from "react-icons/ai";
import TabelPengaturan from '../../../components/tabel/TabelPengaturan'


const DataPengguna = () => {
  const columns = [
    {field:"namaLengkap", header:"Nama Lengkap"},
    {field:"email", header:"Email"},
    {field:"noHp", header:"No. Handphone"},
    {field:"alamat", header:"Alamat"},
    {field:"tipePengguna", header:"Tipe Pengguna"},
    {field:"action", header:""}
  ]

  const colSpan = {
    colOne: 5,
    colTwo: 1,
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
      namaLengkap: "JEX000000888",
      email:"John Doe",
      noHp:"JEX000000888",
      alamat:"siCepat",
      tipePengguna: "John Doe",
      action:""
    },
    {
      id:"2",
      namaLengkap: "JEX000000888",
      email:"John Doe",
      noHp:"JEX000000888",
      alamat:"siCepat",
      tipePengguna: "John Doe",
      action:""
    },
    {
      id:"3",
      namaLengkap: "JEX000000888",
      email:"John Doe",
      noHp:"JEX000000888",
      alamat:"siCepat",
      tipePengguna: "John Doe",
      action:""
    },
    {
      id:"4",
      namaLengkap: "JEX000000888",
      email:"John Doe",
      noHp:"JEX000000888",
      alamat:"siCepat",
      tipePengguna: "John Doe",
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
              <Header 
              title='Master Data'
              titlePage='Data Pengguna'
              />
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
