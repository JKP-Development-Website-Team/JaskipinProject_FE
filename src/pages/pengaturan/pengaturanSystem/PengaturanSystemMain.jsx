import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import ContainerMain from '../../../components/containerMain/ContainerMain'
import TabelPengaturan from '../../../components/tabel/TabelPengaturan'
import  HeaderPengaturanSystem  from '../../../components/pengaturan/pengaturanSystem/HeaderPengaturanSystem'

const PengaturanSystemMain = () => {
  const columns = [
    {field:"nama", header:"Nama"},
    // {field:"", header:""},
    // {field:"", header:""},
    // {field:"", header:""},
    // {field:"", header:""},
    // {field:"", header:""},
    // {field:"", header:""},
    // {field:"", header:""},
    {field:"action", header:""}
  ]

  const colSpan = {
    colOne: 1,
    colTwo: 0,
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
      nama:"John Doe",
      action: ""
    },
    {
      id:"1",
      nama:"John Doe",
      action: ""
    },
    {
      id:"1",
      nama:"John Doe",
      action: ""
    },
    {
      id:"1",
      nama:"John Doe",
      action: ""
    },
    
    
  ]
  return (
    <>
        <div >
            <ContainerMain>
            <div className="d-flex flex-column">
            <div className="d-flex">
              <HeaderPengaturanSystem
              title='Pengaturan System'
              titlePage='Hak Akses Pengguna'
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
                  Hak Akses Pengguna
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

export default PengaturanSystemMain