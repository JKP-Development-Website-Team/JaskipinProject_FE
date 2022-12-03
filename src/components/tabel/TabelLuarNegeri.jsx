import {Button} from "react-bootstrap";
import { datas } from "../bookingTable/BookingTable";

function TabelLuarNegeri() {
  return (
    <>      
    <table className="mt-3 ">
      <thead style={{}}>
        <tr
          style={{
            backgroundColor: "#0843AD",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <th>No. Order</th>
          <th>Nama</th>
          <th>No. Resi</th>
          <th>Alamat</th>
          <th>Tujuan </th>
          <th>Harga</th>
          <th>Berat</th>
          <th className="d-flex justify-content-center">Mitra</th>
          <th></th>
          {/* <th >Detail</th> */}
        </tr>
      </thead>
      <tbody>
      {datas.map((item,id) => {
          return (
        <tr key={id} >
          <td >{item?.no_booking}</td>
          <td>{item?.nama}</td>
          <td>JEX0000001</td>
          <td>{item?.alamat}</td>
          <td>{item?.tujuan}</td>
          <td>Rp. {item?.harga}</td>
          <td>{item?.berat}</td>
          <td className="d-flex justify-content-center">Fedex</td>
          <td>
            <Button variant="secondary">Detail</Button>
          </td>
          </tr>
          )
        })}
<tr >
            <td colSpan={7} style={{
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
              <Button variant="light" size="sm" style={{border:"2px solid #828181", color:"#828181", fontWeight:"500"}}>
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
        </>
  );
}

export default TabelLuarNegeri;
