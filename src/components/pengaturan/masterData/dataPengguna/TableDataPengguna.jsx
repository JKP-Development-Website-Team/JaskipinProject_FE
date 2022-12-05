import React from "react";
import { Button } from "react-bootstrap";

const TableDataPengguna = () => {
  return (
    <table style={{
        marginTop: "2rem",
    }}>
      <thead style={{}}>
        <tr
          style={{
            backgroundColor: "#0843AD",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <th>ID</th>
          <th>Nama Lengkap</th>
          <th>Email</th>
          <th>No.Hp</th>
          <th>Alamat</th>
          <th>Tipe Pengguna</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12909xxxxx1</td>
          <td>Teh Botol</td>
          <td>tehbotol@123.com</td>
          <td>082123xxxxx0</td>
          <td>Jl.Teh kec.Botol</td>
          <td>Active</td>
          <td className="d-flex justify-content-end">
            <Button
              style={{
                border: "none",
                padding: "5px 1em",
              }}
              variant='secondary'
            >
              Detail
            </Button>
          </td>
        </tr>

        <tr>
          <td
            colSpan={6}
            style={{
              padding: "1.7rem",
              color: "#828181",
            }}
          >
            Menampilkan 6 dari 24
          </td>
          <td colSpan={2} style={{}}>
            <div
              style={{
                display: "flex",
                gap: "15px",
                marginLeft: "-30px",
              }}
            >
              <Button
                variant="light"
                size="sm"
                style={{
                  border: "none",
                  color: "#828181",
                  fontWeight: "500",
                }}
              >
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
};

export default TableDataPengguna;
