import React from 'react'
import { Button } from 'react-bootstrap'
import {IoEllipse} from 'react-icons/io5'
import PopupBooking from './PopupBooking'

export const datas = [
    {
        nama:'Jhon Doe',
        no_booking :'00000000',
        no_hp:'0858000000',
        isi_paket: 'makanan',
        tanggal:'22 maret 2022',
        berat:'2 Kg',
        status:'Sudah dipickup',
        tujuan:'Aceh',
        jns_paket:'paket',
        asal :'cirebon',
        kurir: 'Si Cepat',
        estimasi: '2-3 hari',
        harga: '15000',
        w_penjemputan: 'sumber',
        alamat :'jl. lorem',
        volume : '22 X 10 X 10'
    },
    {
        nama:'Jhon wick',
        no_booking :'00000000',
        no_hp:'0858000000',
        isi_paket: 'makanan',
        tanggal:'22 maret 2022',
        berat:'2 Kg',
        status:'Sudah dipickup',
        tujuan:'Aceh',
        jns_paket:'paket',
        asal :'cirebon',
        kurir: 'Si Cepat',
        estimasi: '2-3 hari',
        harga: '15000',
        w_penjemputan: 'sumber',
        alamat :'jl. lorem',
        volume : '22 X 10 X 10'
    },
    {
        nama:'Jhon wickWick',
        no_booking :'00000000',
        no_hp:'0858000000',
        isi_paket: 'makanan',
        tanggal:'22 maret 2022',
        berat:'2 Kg',
        status:'Sudah dipickup',
        tujuan:'Aceh',
        jns_paket:'paket',
        asal :'cirebon',
        kurir: 'Si Cepat',
        estimasi: '2-3 hari',
        harga: '15000',
        w_penjemputan: 'sumber',
        alamat :'jl. lorem',
        volume : '22 X 10 X 10'
    },
    {
        nama:'Jhon Jhon',
        no_booking :'00000000',
        no_hp:'0858000000',
        isi_paket: 'makanan',
        tanggal:'22 maret 2022',
        berat:'2 Kg',
        status:'Sudah dipickup',
        tujuan:'Aceh',
        jns_paket:'paket',
        asal :'cirebon',
        kurir: 'Si Cepat',
        estimasi: '2-3 hari',
        harga: '15000',
        w_penjemputan: 'sumber',
        alamat :'jl. lorem',
        volume : '22 X 10 X 10'
    },
    {
        nama:'Jhon Jhon',
        no_booking :'00000000',
        no_hp:'0858000000',
        isi_paket: 'makanan',
        tanggal:'22 maret 2022',
        berat:'2 Kg',
        status:'Sudah dipickup',
        tujuan:'Aceh',
        jns_paket:'paket',
        asal :'cirebon',
        kurir: 'Si Cepat',
        estimasi: '2-3 hari',
        harga: '15000',
        w_penjemputan: 'sumber',
        alamat :'jl. lorem',
        volume : '22 X 10 X 10'
    },
    {
        nama:'Jhon Jhon',
        no_booking :'00000000',
        no_hp:'0858000000',
        isi_paket: 'makanan',
        tanggal:'22 maret 2022',
        berat:'2 Kg',
        status:'Sudah dipickup',
        tujuan:'Aceh',
        jns_paket:'paket',
        asal :'cirebon',
        kurir: 'Si Cepat',
        estimasi: '2-3 hari',
        harga: '15000',
        w_penjemputan: 'sumber',
        alamat :'jl. lorem',
        volume : '22 X 10 X 10'
    },
]

const BookingTable = () => {
    

  return (
    <div>
        <table className="mt-4">
            <thead style={{}}>
                <tr
                style={{
                    backgroundColor: "#0843AD",
                    color: "white",
                    borderRadius: "10px",
                }}
                >
                <th>Nama Pelanggan</th>
                <th>No.Hp</th>
                <th>Tanggal Pickup</th>
                <th>Berat</th>
                <th>Status</th>
                <th>Tujuan</th>
                <th></th>
                </tr>
            </thead>
                <tbody>

                    {datas.map((data, index) => (
                    <tr key={index}>
                    <td>{data.nama}</td>
                    <td>{data.no_hp}</td>
                    <td>{data.tanggal}</td>
                    <td>{data.berat}</td>
                    <td>{data.status}</td>
                    <td>{data.tujuan}</td>
                    <td className='d-flex gap-3'>
                        {/* <Button style={{
                            background:"#9D9C9C",
                            border:"none",
                            padding:"5px 1em 5px 8px",
                            display:"flex",
                            flexWrap:"nowrap",
                        }}>
                            <span style={{
                                paddingRight:"5px",
                            }}><IoEllipse /></span> 
                        </Button> */}
                            <PopupBooking 
                            no_booking = {data.no_booking}
                            nama = {data.nama}
                            no_hp = {data.no_hp}
                            alamat = {data.alamat}
                            tanggal ={data.tanggal}
                            berat = {data.berat}
                            isi_paket ={data.isi_paket}
                            volume ={ data.volume}
                            jns_paket ={data.jns_paket}
                            asal={data.asal}
                            tujuan={data.tujuan}
                            kurir={data.kurir}
                            estimasi={data.estimasi}
                            harga ={data.harga}
                            w_penjemputan={data.w_penjemputan}
                            
                            />
                        <Button style={{
                            background:"#9D9C9C",
                            border:"none",
                            padding:"5px 1em 5px 8px",
                            display:"flex",
                            flexWrap:"nowrap",
                        }}>
                            <span style={{
                                paddingRight:"5px",
                            }}><IoEllipse /></span> Pickup
                        </Button>
                    </td>
                    </tr>
                    ))}

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
    </div>
  )
}

export default BookingTable