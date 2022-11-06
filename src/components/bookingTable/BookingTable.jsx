import React from 'react'
import { Button } from 'react-bootstrap'
import {IoEllipse} from 'react-icons/io5'


const BookingTable = () => {
    const datas = [
        {
            nama:'Jhon Doe',
            nomor:'123123123',
            tanggal:'22 maret 2022',
            berat:'2 Kg',
            status:'Sudah dipickup',
            tujuan:'Aceh',
        },
        {
            nama:'Ujang Suryana',
            nomor:'1231230000',
            tanggal:'13 april 2022',
            berat:'1 Kg',
            status:'Belum dipickup',
            tujuan:'Garut',
        },
        {
            nama:'Jody Cmieww',
            nomor:'123123333',
            tanggal:'10 oktober 2022',
            berat:'23 Kg',
            status:'Sudah dipickup',
            tujuan:'Maluku',
        },
        {
            nama:'Abel',
            nomor:'123123123',
            tanggal:'01 november 2022',
            berat:'4 Kg',
            status:'Belum dipickup',
            tujuan:'Yogyakarta',
        },
        {
            nama:'Jhon',
            nomor:'123123123',
            tanggal:'20 maret 2022',
            berat:'2 Kg',
            status:'Sudah dipickup',
            tujuan:'Aceh',
        },
    ]



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
                    <tr>
                    <td>{data.nama}</td>
                    <td>{data.nomor}</td>
                    <td>{data.tanggal}</td>
                    <td>{data.berat}</td>
                    <td>{data.status}</td>
                    <td>{data.tujuan}</td>
                    <td className='d-flex gap-3'>
                        <Button style={{
                            background:"#9D9C9C",
                            border:"none",
                            padding:"5px 1em"
                        }}>
                            <span><IoEllipse /></span> Detail
                        </Button>
                        <Button style={{
                            background:"#9D9C9C",
                            border:"none",
                            padding:"5px 1em"
                        }}>
                            <span><IoEllipse /></span> Pickup
                        </Button>
                    </td>
                    </tr>
                    ))}
                    
                </tbody>
        </table>
    </div>
  )
}

export default BookingTable