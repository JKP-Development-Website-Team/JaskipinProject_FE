import {BsThreeDotsVertical} from 'react-icons/bs'


function TabelCalonAgen() {
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
        <tr>
          <td className='d-flex justify-content-between align-items-center' style={{
            color:"#0843AD"
          }}>
            Aktif
           <span><BsThreeDotsVertical style={{
            cursor:'pointer',
            color:"#828181",
            fontSize:"1.5em",
            marginLeft:"10px"
           }}/></span> 
          </td>
          <td>John Doe</td>
          <td>Johndoe@gmail.com</td>
          <td>Jl. Siliwangi</td>
          <td>0896 xxxx xxxx</td>
          <td>Cirebon</td>
          <td>2 Januari 2022</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TabelCalonAgen;
