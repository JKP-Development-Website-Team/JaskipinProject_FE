import { Button } from "react-bootstrap";
import { datas } from "../bookingTable/BookingTable";


function TabelDomestik() {
  return (
    <>      
    <table className="mt-3">
      <thead style={{}}>
        <tr
          style={{
            backgroundColor: "#0843AD",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <th>No. Order</th>
          <th>Pengirim</th>
          <th>No. Resi</th>
          <th>Ekspedisi</th>
          <th>Penerima </th>
          <th>Ongkir</th>
          <th>Berat</th>
          <th className="d-flex justify-content-center">Tujuan</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {datas.map((item,id) => {
          return (
        <tr key={id}>
          <td>{item?.no_booking}</td>
          <td>{item?.nama}</td>
          <td>JEX0000001</td>
          <td>{item?.alamat}</td>
          <td>{item?.nama}</td>
          <td>Rp. {item?.harga}</td>
          <td>{item?.berat}</td>
          <td className="d-flex justify-content-center">{item?.tujuan}</td>
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
          <td>
            <Button variant="light" className="border border-dark" >Sebelumnya</Button>
          </td>
          <td>
            <Button style={{ backgroundColor: '#0843AD', border: 'none' }} className="d-flex justify-content-center">Selanjutnya</Button>
          </td>

        </tr>
        </tbody>
          </table>
        </>
  );
}

export default TabelDomestik;
