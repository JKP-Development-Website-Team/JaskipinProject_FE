import React from "react";
import { Modal } from "react-bootstrap";
import TransaksiLuarForm from "./TransaksiLuarForm";

const TambahTransaksi = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    //   centered   
    >
      <Modal.Header closeButton className="sticky-top border-2 bg-body w-100" >
        
        <Modal.Title
          style={{
            fontSize: "20px",
            fontWeight: "700",
            display: "flex",
            flexDirection: "column",
            
          }}
          id="contained-modal-title-vcenter"
        >
          Tambah Transaksi
          <span
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: "#828181",
            }}
          >
            Tambah transaksi pengiriman ke luar negeri
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
        {/* Component Form  */}
        <TransaksiLuarForm />
        {/* Component Form  */}
        {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
      </Modal.Body>
    </Modal>
  );
};

export default TambahTransaksi;
