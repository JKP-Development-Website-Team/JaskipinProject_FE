import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import popup from '../../Image/popup.png'

function PopupBooking(data) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                style={{
                    background: "#9D9C9C",
                    border: "none",
                    padding: "5px 1em 5px 8px",
                    display: "flex",
                    flexWrap: "nowrap"
                }}
                className="text-light"
                variant="btn" onClick={handleShow}>
                <img src={popup} alt="" className='mx-1 mt-1' width={'15px'} />
                Detail
            </Button>

            <Modal show={show} onHide={handleClose} size='lg' backdrop="static">
                <Modal.Header closeButton className='sticky-top'>
                    <div>
                        <div className='d-flex flex-row'>
                            <Modal.Title>Detail Booking</Modal.Title>
                        </div>
                        <div>
                            <p className='mb-0'>Detail booking pengiriman domestik</p>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body style={{ padding: '0px' }}>
                    <div className='d-flex flex-column' >
                        <p className='py-3 ps-3 mb-0'>No. Booking
                            <span style={{ marginLeft: '14rem' }}>
                                {data.no_booking}
                            </span></p>
                        <p style={{ backgroundColor: '#EFEFEF' }} className='py-3 ps-3 mb-0' >Nama Lengkap
                            <span style={{ marginLeft: '12.8rem' }} >
                                {data.nama}
                            </span>
                        </p>
                        <p className='py-3 ps-3 mb-0'>No. Handphone
                            <span style={{ marginLeft: '12.5rem' }} >
                                {data.no_hp}
                            </span>
                        </p>
                        <p style={{ backgroundColor: '#EFEFEF' }} className='py-3 ps-3 mb-0'>
                            Alamat
                            <span style={{ marginLeft: '16.6rem' }} >
                                {data.alamat}
                            </span>
                        </p>
                        <p className='py-3 ps-3 mb-0'>
                            Tanggal Pickup
                            <span style={{ marginLeft: '13rem' }} >
                                {data.tanggal}
                            </span>
                        </p>
                        <p style={{ backgroundColor: '#EFEFEF' }} className='py-3 ps-3 mb-0'>
                            Berat
                            <span style={{ marginLeft: '17.3rem' }} >
                                {data.berat}
                            </span>
                        </p>
                        <p className='py-3 ps-3 mb-0'>
                            Isi Paket
                            <span style={{ marginLeft: '16rem' }} >
                                {data.isi_paket}
                            </span>
                        </p>
                        <p style={{ backgroundColor: '#EFEFEF' }} className='py-3 ps-3 mb-0'>
                            Volume
                            <span style={{ marginLeft: '16.2rem' }} >
                                {data.volume}
                            </span>
                        </p>
                        <p className='py-3 ps-3 mb-0'>
                            Jenis Paket
                            <span style={{ marginLeft: '15rem' }} >
                                {data.jns_paket}
                            </span>
                        </p>
                        <p style={{ backgroundColor: '#EFEFEF' }} className='py-3 ps-3 mb-0'>
                            Asal Daerah
                            <span style={{ marginLeft: '14.5rem' }} >
                                {data.asal}
                            </span>
                        </p>
                        <p className='py-3 ps-3 mb-0'>
                            Tujuan Daerah
                            <span style={{ marginLeft: '13.4rem' }} >
                                {data.tujuan}
                            </span>
                        </p>
                        <p style={{ backgroundColor: '#EFEFEF' }} className='py-3 ps-3 mb-0'>
                            Kurir
                            <span style={{ marginLeft: '17.8rem' }} >
                                {data.kurir}
                            </span>
                        </p>
                        <p className='py-3 ps-3 mb-0'>
                            Estimasi
                            <span style={{ marginLeft: '16.4rem' }} >
                                {data.estimasi}
                            </span>
                        </p>
                        <p style={{ backgroundColor: '#EFEFEF' }} className='py-3 ps-3 mb-0'>
                            Harga
                            <span style={{ marginLeft: '17.2rem' }} >
                                {data.harga}
                            </span>
                        </p>
                        <p className='py-3 ps-3 mb-0'>
                            Wilayah Penjemputan
                            <span style={{ marginLeft: '10.4rem' }} >
                                {data.w_penjemputan}
                            </span>
                        </p>
                    </div>



                </Modal.Body>
            </Modal>
        </>
    );
}

export default PopupBooking