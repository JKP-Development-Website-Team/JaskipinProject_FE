import {Button} from 'react-bootstrap'
import {IoEllipse} from 'react-icons/io5'

const TabelTarif = () => {
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
          <th>Tujuan</th>
          <th>Kurir</th>
          <th>Jenis Paket</th>
          <th>Estimasi</th>
          <th>Tarif</th>
          <th>Berat</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Singapura</td>
          <td>Jaskipin</td>
          <td>Makanan, Kosmetik, Herbal</td>
          <td>5 - 7 Hari</td>
          <td>Rp.200.000</td>
          <td>1 Kg</td>
          <td className='d-flex gap-3'>
            <Button style={{
                background:"#9D9C9C",
                border:"none",
                padding:"5px 1em"
            }}>
                <span><IoEllipse /></span> Ubah
            </Button>
            <Button style={{
                background:"#F61031",
                border:"none",
                padding:"5px 1em"
            }}>
                <span><IoEllipse /></span> Hapus
            </Button>
          </td>
        </tr>
        <tr>
          <td>Singapura</td>
          <td>Jaskipin</td>
          <td>Makanan, Kosmetik, Herbal</td>
          <td>5 - 7 Hari</td>
          <td>Rp.200.000</td>
          <td>1 Kg</td>
          <td className='d-flex gap-3'>
            <Button style={{
                background:"#9D9C9C",
                border:"none",
                padding:"5px 1em"
            }}>
                <span><IoEllipse /></span> Ubah
            </Button>
            <Button style={{
                background:"#F61031",
                border:"none",
                padding:"5px 1em"
            }}>
                <span><IoEllipse /></span> Hapus
            </Button>
          </td>
        </tr>
        <tr>
          <td>Singapura</td>
          <td>Jaskipin</td>
          <td>Makanan, Kosmetik, Herbal</td>
          <td>5 - 7 Hari</td>
          <td>Rp.200.000</td>
          <td>1 Kg</td>
          <td className='d-flex gap-3'>
            <Button style={{
                background:"#9D9C9C",
                border:"none",
                padding:"5px 1em"
            }}>
                <span><IoEllipse /></span> Ubah
            </Button>
            <Button style={{
                background:"#F61031",
                border:"none",
                padding:"5px 1em"
            }}>
                <span><IoEllipse /></span> Hapus
            </Button>
          </td>
        </tr>

        <tr >
            <td colSpan={6} style={{
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
  )
}

export default TabelTarif