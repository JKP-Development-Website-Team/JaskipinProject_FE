import React from "react";
import { Modal } from "react-bootstrap";

function TambahTransaksiDomestikForm(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="rounded-5"
      closeButton
    >
      <Modal.Header className="sticky-top bg-white" closeButton>
        <div className="p-3">
          <p
            id="contained-modal-title-vcenter"
            style={{
              fontFamily: "Raleway",
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "23px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
            className="mb-2"
          >
            Tambah Transaksi
          </p>

          <span className="text-muted">
            Tambah transaksi pengiriman domestik
          </span>
        </div>
      </Modal.Header>
      <Modal.Body>
        <form className="mx-4 gap-5">
          <div className="mb-4">
            <label
              For="no-order"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              No. Order
            </label>
            <input
              id="no-order"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: JEX000000000"
            />
          </div>

          <div className="mb-4">
            <label
              For="tanggal-kirim"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Tanggal Kirim
            </label>
            <input
              id="tanggal-kirim"
              type="date"
              style={{
                borderRadius: "10px",
                mozBoxSizing: "borderBox",
                webkitBoxSizing: "borderBox",
                boxSizing: "borderBox",
                color: "#828181",
              }}
              // placeholder="DD/MM/YY"
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label
              For="nama-pengirim"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Nama Pengirim
            </label>
            <input
              id="nama-pengirim"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Agen"
            />
          </div>

          <div className="mb-4">
            <label
              For="alamat-pengirim"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Alamat Pengirim
            </label>
            <textarea
              id="alamat-pengirim"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: Jl. Kenangan"
            />
          </div>

          <div className="mb-4">
            <label
              For="no-telepon-pengirim"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              No. Telepon Pengirim
            </label>
            <input
              id="no-telepon-pengirim"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: 0867675688"
            />
          </div>

          <div className="mb-4">
            <label
              For="kode-pos-pengirim"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Kode Pos Pengirim
            </label>
            <input
              id="kode-pos-pengirim"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: 43152"
            />
          </div>

          <div className="mb-4">
            <label
              For="nama-penerima"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Nama Penerima
            </label>
            <input
              id="nama-penerima"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: 43152"
            />
          </div>

          <div className="mb-4">
            <label
              For="provinsi-tujuan"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Provinsi Tujuan
            </label>
            <input
              id="provinsi-tujuan"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: 43152"
            />
          </div>

          <div className="mb-4">
            <label
              For="alamat-penerima"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Alamat Penerima
            </label>
            <textarea
              id="alamat-penerima"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Jl. Mantan"
            />
          </div>

          <div className="mb-4">
            <label
              For="kode-pos-penerima"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Kode Pos Penerima
            </label>
            <input
              id="kode-pos-penerima"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: 43152"
            />
          </div>

          <div className="mb-4">
            <label
              For="no-telepon-penerima"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              No. Telepon Penerima
            </label>
            <input
              id="no-telepon-penerima"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="contoh:08xx xxxx xxxx"
            />
          </div>

          <div className="mb-4">
            <label
              For="mitra-ekspedisi"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Mitra Ekspedisi
            </label>
            <input
              id="mitra-ekspedisi"
              type="number"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: 08xx xxxx xxxx"
            />
          </div>

          <div className="mb-4">
            <label
              For="keterangan-isi-paket"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Keterangan Isi Paket
            </label>
            <input
              id="keterangan-isi-paket"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: 08xx xxxx xxxx"
            />
          </div>

          <div className="mb-4">
            <label
              For="no-awb"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              No. AWB/No. Isi
            </label>
            <input
              id="no-awb"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: 08xx xxxx xxxx"
            />
          </div>

          <div className="mb-4">
            <label
              For="jumlah-koli"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Jumlah Koli
            </label>
            <input
              id="jumlah-koli"
              type="number"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: 08xx xxxx xxxx"
            />
          </div>

          <div className="mb-4">
            <label
              For="berat"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Berat(Kg)
            </label>
            <input
              id="berat"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: 08xx xxxx xxxx"
            />
          </div>

          <div className="mb-4">
            <label
              For="jenis-layanan"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Jenis Layanan
            </label>
            <input
              id="jenis-layanan"
              type="number"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: 08xx xxxx xxxx"
            />
          </div>

          <div className="mb-4">
            <label
              For="ongkos-kirim"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Ongkos Kirim
            </label>
            <input
              id="ongkos-kirim"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: 08xx xxxx xxxx"
            />
          </div>

          <div className="mb-4">
            <label
              For="nama-agen"
              className="form-label"
              style={{ fontWeight: "700", fontSize: "14px" }}
            >
              Nama Agen
            </label>
            <input
              id="nama-agen"
              type="text"
              className="form-control"
              style={{ borderRadius: "10px" }}
              placeholder="Contoh: 08xx xxxx xxxx"
            />
          </div>

          <div className="mb-4 d-flex justify-content-lg-end">
            <button
              type="submit"
              className="btn btn-primary p-2"
              style={{
                background: "#0843AD",
                borderRadius: "10px",
                boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.15)",
                width: "150px",
                height: "41px",
              }}
            >
              Buat Transaksi
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default TambahTransaksiDomestikForm;
