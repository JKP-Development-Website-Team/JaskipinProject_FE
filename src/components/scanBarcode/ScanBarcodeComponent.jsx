import React from "react";
import { Badge, Button } from "react-bootstrap";

const ScanBarcodeComponent = () => {
  const datas = [
    {
      no_order: "JEX000000888",
      no_resi: "JEX000000888",
      status_order: "Manifest",
      nama_penerima: "Karen Novi",
      nama_pengirim: "Gilang Saputra",
      mitra_expedisi: "Aramex",
      negara_tujuan: "Australia",
    },
    {
      no_order: "JEX000000888",
      no_resi: "JEX000000888",
      status_order: "Manifest",
      nama_penerima: "Karen Novi",
      nama_pengirim: "Gilang Saputra",
      mitra_expedisi: "Aramex",
      negara_tujuan: "Australia",
    },
    {
      no_order: "JEX000000888",
      no_resi: "JEX000000888",
      status_order: "Manifest",
      nama_penerima: "Karen Novi",
      nama_pengirim: "Gilang Saputra",
      mitra_expedisi: "Aramex",
      negara_tujuan: "Australia",
    },
    {
      no_order: "JEX000000888",
      no_resi: "JEX000000888",
      status_order: "Manifest",
      nama_penerima: "Karen Novi",
      nama_pengirim: "Gilang Saputra",
      mitra_expedisi: "Aramex",
      negara_tujuan: "Australia",
    },
    {
      no_order: "JEX000000888",
      no_resi: "JEX000000888",
      status_order: "Manifest",
      nama_penerima: "Karen Novi",
      nama_pengirim: "Gilang Saputra",
      mitra_expedisi: "Aramex",
      negara_tujuan: "Australia",
    },
    {
      no_order: "JEX000000888",
      no_resi: "JEX000000888",
      status_order: "Manifest",
      nama_penerima: "Karen Novi",
      nama_pengirim: "Gilang Saputra",
      mitra_expedisi: "Aramex",
      negara_tujuan: "Australia",
    },
    {
      no_order: "JEX000000888",
      no_resi: "JEX000000888",
      status_order: "Manifest",
      nama_penerima: "Karen Novi",
      nama_pengirim: "Gilang Saputra",
      mitra_expedisi: "Aramex",
      negara_tujuan: "Australia",
    },
  ];
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
            <th className="head-title-table">No. Order</th>
            <th className="head-title-table">No. Resi</th>
            <th className="head-title-table">Status Order</th>
            <th className="head-title-table">Nama Penerima</th>
            <th className="head-title-table">Nama Pengirim</th>
            <th className="head-title-table">Mitra Expedisi</th>
            <th className="head-title-table">Negara Tujuan</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td className="text-field-table">{data.no_order}</td>
              <td className="text-field-table">{data.no_resi}</td>
              <td>
                <h5>
                  <Badge
                    style={{
                      backgroundColor: "#70B5F4",
                    }}
                  >
                    {data.status_order}
                  </Badge>
                </h5>
              </td>
              <td className="text-field-lainnya">{data.nama_penerima}</td>
              <td className="text-field-lainnya">{data.nama_pengirim}</td>
              <td className="text-field-lainnya">{data.mitra_expedisi}</td>
              <td className="text-field-lainnya">{data.negara_tujuan}</td>
            </tr>
          ))}
          <tr
            style={{
              height: "70px",
            }}
          >
            <td colSpan={7}>
              <div className="d-flex flex-nowrap align-items-center justify-content-between">
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#828181",
                  }}
                >
                  Menampilkan 6 dari 24
                </span>
                <div>
                  <Button variant="outline-secondary" className="me-3">
                    Sebelumnya
                  </Button>
                  <Button variant="primary">Selanjutnya</Button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScanBarcodeComponent;
