import { useState } from "react";

import { Button } from "react-bootstrap";
import { BsThreeDotsVertical, BsPencilSquare } from "react-icons/bs";
import { CgUserList } from "react-icons/cg";
import {BiTrash} from 'react-icons/bi'

function TabelCalonAgen({ valueTable }) {

  const [isShow, setIsShow] = useState(false)
  const [isDetail, setIsDetail] = useState('')

  const showUp = (val) => {
    setIsDetail(val)
    if(isDetail === val) {
      setIsShow(true)
    }else if(isDetail !== val) {
      setIsShow(false)
    }
    console.log('ini val ;', val)
  }
  console.log('isShow ;', isShow)
  console.log('isDetail ;', isDetail)

  return (
    <table className="mt-3">
      <thead style={{}}>
        <tr
          style={{
            backgroundColor: "#0843AD",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <th>Status</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Alamat</th>
          <th>No. Hp</th>
          <th>Kota</th>
          <th>Tanggal</th>
        </tr>
      </thead>
      <tbody>
        {valueTable?.map((res) => (
          <tr>
            <td
              className="d-flex justify-content-between align-items-center"
              style={{
                color: "#0843AD",
              }}
            >
              {res.status}
              <span
                style={{
                  position: "relative",
                }}
              >
                <BsThreeDotsVertical
                  style={{
                    cursor: "pointer",
                    color: "#828181",
                    fontSize: "1.5em",
                    marginLeft: "10px",
                  }}
                  onClick={() => setIsDetail(res.id)}
                />{" "}
                <span
                  style={{
                    position: "absolute",
                    height: "50px",
                    marginTop:"-40px",
                    left: "10px",
                    width: "21rem",
                    overflow: "hidden",
                    background: "#fff",
                    display: isDetail === res.id ? "flex" : "none",
                    alignItems: "center",
                    justifyContent:"space-evenly",
                  }}
                  onMouseLeave={() => setIsDetail('')}
                  className='shadow rounded'
                >
                  <Button
                    size="sm"
                    style={{
                      background: "#9D9C9C",
                      border: "none",
                    }}
                    className="shadow"
                  >
                    {" "}
                    <BsPencilSquare /> Ubah
                  </Button>
                  <Button
                    size="sm"
                    style={{
                      background: "#9D9C9C",
                      border: "none",
                    }}
                    className="shadow"
                  >
                    {" "}
                    <CgUserList /> Detail
                  </Button>
                  <Button
                    size="sm"
                    style={{
                      // background: "#9D9C9C",
                      border: "none",
                    }}
                    className="shadow"
                    variant="danger"
                  >
                    {" "}
                    <BiTrash /> Hapus
                  </Button>
                </span>{" "}
              </span>
            </td>
            <td>{res.nama}</td>
            <td>{res.email}</td>
            <td>{res.alamat}</td>
            <td>{res.noHp}</td>
            <td>{res.kota}</td>
            <td>{res.tanggal}</td>
          </tr>
        ))}
        <tr >
            <td colSpan={5} style={{
            padding:"1.7rem",
            color:'#828181'
          }}>Menampilkan 6 dari 24</td>
            <td colSpan={2} style={{

            }}>
              <div style={{
                display:"flex",
                gap:"15px",
                marginLeft:"-30px"
             }}>
              <Button variant="light" size="sm" style={{border:"2px solid #828181", color:"#828181"}}>
                Sebelumnya
              </Button>
            
            
              <Button
                style={{ backgroundColor: "#0843AD", border: "none" }}
                className="d-flex justify-content-center"
                size="sm"
              >
                Selanjutnya
              </Button>
              </div>

            </td>
          </tr>
      </tbody>
    </table>
  );
}

export default TabelCalonAgen;
