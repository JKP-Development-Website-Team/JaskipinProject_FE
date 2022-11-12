import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const TransaksiLuarForm = () => {
  return (
    <div>
      <Container fluid className="d-flex flex-column align-content-center">
        <Form>
          <Row className=" mb-3">
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="head-title-input">No. Order</Form.Label>
                <div className="d-flex flex-row rounded-5">
                  <Form.Control
                    className="me-3 "
                    type="text"
                    placeholder="Contoh: JEX000000000"
                  />
                  <Button
                    style={{
                      backgroundColor: "#0843AD",
                      border: "none",
                    }}
                  >
                    Copy
                  </Button>
                </div>
              </Form.Group>
            </Col>

            <Col>
              <Form.Label className="head-title-input">
                Nama Penerima
              </Form.Label>
              <Form.Control type="text" placeholder="Nama Kamu" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label className="head-title-input">Pilih Cabang</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Pilih Cabang</option>
                <option value="1">Jakarta</option>
                <option value="2">Bandung</option>
                <option value="3">Medan</option>
                <option value="4">Papua</option>
                <option value="5">U.S.A</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label className="head-title-input">
                Alamat Penerima
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Contoh: Jl. Lorem Ipsum"
                rows={1}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label className="head-title-input">Posisi Order</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Agen</option>
                <option value="1">Jakarta</option>
                <option value="2">Bandung</option>
                <option value="3">Medan</option>
                <option value="4">Papua</option>
                <option value="5">U.S.A</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label className="head-title-input">Negara</Form.Label>
              <Form.Control type="text" placeholder="Pilih negara tujuan" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label className="head-title-input">
                Nama Pengirim
              </Form.Label>
              <Form.Control type="text" placeholder="Pengirim" />
            </Col>
            <Col>
              <Form.Label className="head-title-input">Kode Pos</Form.Label>
              <Form.Control type="text" placeholder="Contoh: XXXXX" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label className="head-title-input">
                Alamat Pengirim
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Contoh: Jl. Lorem Ipsum"
                rows={1}
              />
            </Col>
            <Col>
              <Form.Label className="head-title-input">No. Telepon</Form.Label>
              <Form.Control type="text" placeholder="Contoh: 08XX XXXX XXXX" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label className="head-title-input">No. Telepon</Form.Label>
              <Form.Control type="text" placeholder="Contoh: 08XX XXXX XXXX" />
            </Col>
            <Col>
              <Form.Label className="head-title-input">No. Id</Form.Label>
              <Form.Control type="text" placeholder="Contoh: 123" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="head-title-input">
                Mitra Ekspedisi
              </Form.Label>
              <Form.Control type="text" placeholder="Contoh: 08XX XXXX XXXX" />

              <Col>
                <Form.Label className="head-title-input mt-3">
                  No. AWB/No. Resi
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Contoh: 08XX XXXX XXXX"
                />

                <Col>
                  <Form.Label className="head-title-input mt-3">
                    Jumlah Layanan
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="mb-3"
                    placeholder="Contoh: 08XX XXXX XXXX"
                  />
                </Col>

                <Col>
                  <Form.Label className="head-title-input">
                    Jumlah Koli
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="mb-3"
                    placeholder="Contoh: 08XX XXXX XXXX"
                  />

                  {/* Berat / Volume Section */}
                  <Col>
                    <Form.Label className="head-title-input">
                      Berat/Volume
                    </Form.Label>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <Button
                        variant="outline-secondary"
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                        className="px-4"
                      >
                        Berat : 10
                      </Button>
                      <Button
                        variant="outline-secondary"
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                        className="px-4"
                      >
                        Panjang : 10
                      </Button>
                      <Button
                        variant="outline-secondary"
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                        className="px-4"
                      >
                        Lebar : 10
                      </Button>
                      <Button
                        variant="outline-secondary"
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                        className="px-4"
                      >
                        Tinggi : 10
                      </Button>
                      <Button
                        variant="outline-secondary"
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                        className='px-4'
                      >
                        0
                      </Button>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <Button
                        className="me-3"
                        style={{
                          backgroundColor: "#F61031",
                          border: "none",
                          padding: "0 15px",
                        }}
                      >
                        <AiOutlineMinus
                          style={{
                            fontSize: "30px",
                          }}
                        />
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "#0843AD",
                          border: "none",
                          padding: "2px 15px",
                        }}
                      >
                        <AiOutlinePlus
                          style={{
                            fontSize: "30px",
                          }}
                        />
                      </Button>
                    </div>
                  </Col>
                  {/* Berat / Volume Section */}

                  <Col>
                    <Form.Label className="head-title-input">
                      Ongkos Kirim
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="mb-3"
                      placeholder="Contoh: 08XX XXXX XXXX"
                    />
                  </Col>
                  <Col>
                    <Form.Label className="head-title-input">
                      Pick up
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Contoh: 08XX XXXX XXXX"
                    />
                  </Col>

                  {/* Radio button Agen/Pelanggan */}
                  <Col>
                    <Form.Label className="head-title-input mt-3">
                    Agen/Pelanggan
                    </Form.Label>
                    {["radio"].map((type) => (
                      <div key={`block-${type}`} className="mb-4">
                        <Form.Check
                          block
                          label="Agen"
                          name="group1"
                          type={type}
                          id={`block-${type}-1`}
                        />
                        <Form.Check
                          block
                          label="Pelanggan"
                          name="group1"
                          type={type}
                          id={`block-${type}-2`}
                        />
                      </div>
                    ))}
                  </Col>
                  {/* Radio button Agen/Pelanggan */}
                  
                </Col>
              </Col>
            </Col>

            {/* Deskripsi Paket */}
            <Col>
              <Form.Label className="head-title-input">
                Deskripsi Paket
              </Form.Label>
              <div className="d-flex justify-content-between align-items-center flex-wrap ">
                <Button
                  variant="outline-secondary"
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                  className="px-4"
                >
                  Barang
                </Button>
                <Button
                  variant="outline-secondary"
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                  className="px-4"
                >
                  Kuantiti
                </Button>
                <Button
                  variant="outline-secondary"
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                  className="px-4"
                >
                  HS COD
                </Button>
                <Button
                  variant="outline-secondary"
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                  className="px-4"
                >
                  Satuan
                </Button>
                <Button
                  variant="outline-secondary"
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                  className="px-4"
                >
                  Total
                </Button>
              </div>
              <div className="d-flex justify-content-end mt-3 gap-3">
                <Button
                  style={{
                    backgroundColor: "#F61031",
                    border: "none",
                    padding: "0 15px",
                  }}
                >
                  <AiOutlineMinus
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </Button>
                <Button
                  style={{
                    backgroundColor: "#0843AD",
                    border: "none",
                    padding: "2px 15px",
                  }}
                >
                  <AiOutlinePlus
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </Button>
              </div>

              {/* Radio Button Pembayaran */}
              <Col>
                <Form.Label className="head-title-input">
                  Pilihan Pembayaran
                </Form.Label>
                {["radio"].map((type) => (
                  <div key={`block-${type}`} className="mb-3">
                    <Form.Check
                      block
                      label="Cash"
                      name="group1"
                      type={type}
                      id={`block-${type}-1`}
                    />
                    <Form.Check
                      block
                      label="Transfer"
                      name="group1"
                      type={type}
                      id={`block-${type}-2`}
                    />
                  </div>
                ))}

                <Col>
                  <Form.Label className="head-title-input">
                    Total yang dibayar (Cash)
                  </Form.Label>
                  <Form.Control type="text" placeholder="0" className="mb-2" />
                </Col>

                <Col>
                  <Form.Label className="head-title-input">
                    Total yang dibayar (Transfer)
                  </Form.Label>
                  <Form.Control type="text" placeholder="0" />
                </Col>

                <Col>
                  <div className="d-flex justify-content-end mt-3">
                    <Button
                      style={{
                        backgroundColor: "#0843AD",
                        border: "none",
                      }}
                    >
                      Buat Transaksi
                    </Button>
                  </div>
                </Col>
              </Col>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default TransaksiLuarForm;
