import { Button } from "react-bootstrap";
import { datas } from "../bookingTable/BookingTable";

function TabelDomestik() {
  return (
    <>
      <table className="mt-4">
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
            <th>Tujuan</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item, id) => {
            return (
              <tr key={id}>
                <td>{item?.no_booking}</td>
                <td>{item?.nama}</td>
                <td>JEX0000001</td>
                <td>{item?.alamat}</td>
                <td>{item?.nama}</td>
                <td>Rp. {item?.harga}</td>
                <td>{item?.berat}</td>
                <td>
                  {item?.tujuan}
                </td>
                <td>
                  <Button variant="secondary">Detail</Button>
                </td>
              </tr>
            );
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
    </>
  );
}

export default TabelDomestik;
