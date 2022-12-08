import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import ContainerMain from '../../../components/containerMain/ContainerMain'
import TabelPengaturan from '../../../components/tabel/TabelPengaturan'
import HeaderOfficeParameter from '../../../components/pengaturan/officeParameter/HeaderOfficeParameter'

const MainPage = () => {
    const columns = [
        {field:"noOrder", header:"No. Order"},
        {field:"pengirim", header:"Pengirim"},
        {field:"noResi", header:"No. Resi"},
        {field:"ekpedisi", header:"Ekspedisi"},
        {field:"penerima", header:"Penerima"},
        {field:"ongkir", header:"Ongkir"},
        {field:"berat", header:"Berat"},
        {field:"tujuan", header:"Tujuan"},
        {field:"action", header:""}
      ]
    
      const colSpan = {
        colOne: 7,
        colTwo: 2,
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
          ekpedisi:"siCepat",
          penerima: "Jhony",
          ongkir: "Rp. 20.000",
          berat: "2 Kg",
          tujuan: "Cikampek",
          action:""
        },
        {
          id:"2",
          noOrder: "JEX000000888",
          pengirim:"John Doe",
          noResi:"JEX000000888",
          ekpedisi:"siCepat",
          penerima: "Jhony",
          ongkir: "Rp. 20.000",
          berat: "2 Kg",
          tujuan: "Cikampek",
          action:""
        },
        {
          id:"3",
          noOrder: "JEX000000888",
          pengirim:"John Doe",
          noResi:"JEX000000888",
          ekpedisi:"siCepat",
          penerima: "Jhony",
          ongkir: "Rp. 20.000",
          berat: "2 Kg",
          tujuan: "Cikampek",
          action:""
        },
        {
          id:"4",
          noOrder: "JEX000000888",
          pengirim:"John Doe",
          noResi:"JEX000000888",
          ekpedisi:"siCepat",
          penerima: "Jhony",
          ongkir: "Rp. 20.000",
          berat: "2 Kg",
          tujuan: "Cikampek",
          action:""
        },
        
      ]
  return (
    <>
        <div >
            <ContainerMain>
            <div className="d-flex flex-column">
            <div className="d-flex">
              <HeaderOfficeParameter
              title='Office Parameter'
              titlePage='Kemitraan'
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
                  Kemitraan
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
    </>
  )
}

export default MainPage