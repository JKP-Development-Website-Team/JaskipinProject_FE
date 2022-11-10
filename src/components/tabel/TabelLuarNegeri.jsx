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
        <tr>
          <td>Menampilkan 6 dari 24</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="d-flex justify-content-center">
            <Button variant="light" className="border border-dark" >Sebelumnya</Button>
          </td>
          <td>
            <Button style={{ backgroundColor: '#0843AD', border: 'none' }} >Selanjutnya</Button>
          </td>

        </tr>
        </tbody>
          </table>
        </>
  );
}

export default TabelLuarNegeri;
