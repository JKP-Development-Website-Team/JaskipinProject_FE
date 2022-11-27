import React, { useState } from "react";
import { Container, Row, InputGroup, Form, Button } from "react-bootstrap";
import { BiSearch, BiTrash } from "react-icons/bi";
import TabelCalonAgen from "../../../components/tabel/TabelCalonAgen";
import { BsPencilSquare, BsThreeDotsVertical } from "react-icons/bs";
import { CgUserList } from "react-icons/cg";

const Member = () => {
  const [animated, setAnimated] = useState(false);
  const [isDetailIcon, setIsDetailIcon] = useState("second")

  const columns = [
    { fieldStatus: "status", header: "Status" },
    { field: "nama", header: "Nama" },
    { field: "email", header: "Email" },
    { field: "alamat", header: "Alamat" },
    { field: "noHp", header: "No. Hp" },
    { field: "kota", header: "Kota" },
    { field: "tanggal", header: "Tanggal" },
  ];

  const dataTable = [
    {
      id: "1",
      status: "Aktif",
      nama: "John Doe",
      email: "Johndoe@gmail.com",
      alamat: "Jl. Siliwangi",
      noHp: "0896 xxxx xxxx",
      kota: "Cirebon",
      tanggal: "2 Januari 2022",
    },
    {
      id: "2",
      status: "Aktif",
      nama: "John Doe",
      email: "Johndoe@gmail.com",
      alamat: "Jl. Siliwangi",
      noHp: "0896 xxxx xxxx",
      kota: "Cirebon",
      tanggal: "2 Januari 2022",
    },
    {
      id: "3",
      status: "Non Aktif",
      nama: "John Doe",
      email: "Johndoe@gmail.com",
      alamat: "Jl. Siliwangi",
      noHp: "0896 xxxx xxxx",
      kota: "Cirebon",
      tanggal: "2 Januari 2022",
    },
    {
      id: "4",
      status: "Aktif",
      nama: "John Doe",
      email: "Johndoe@gmail.com",
      alamat: "Jl. Siliwangi",
      noHp: "0896 xxxx xxxx",
      kota: "Cirebon",
      tanggal: "2 Januari 2022",
    },
  ];

  const colSpan = {
    colOne: 5,
    colTwo: 2,
  };

  const actionIcon = (id) => (
    <span
      style={{
        position: "relative",
      }}
    >
      <BsThreeDotsVertical
        style={{
          cursor: "pointer",
          color: "#828181",
          fontSize: "1.5em",
          marginLeft: "10px",
        }}
        onClick={() => setIsDetailIcon(id)}
      />{" "}
      <span
        style={{
          position: "absolute",
          height: "50px",
          marginTop: "-40px",
          left: "10px",
          width: "21rem",
          overflow: "hidden",
          background: "#fff",
          display: isDetailIcon === id ? "flex" : "none",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
        onMouseLeave={() => setIsDetailIcon("")}
        className="shadow rounded"
      >
        <Button
          size="sm"
          style={{
            background: "#9D9C9C",
            border: "none",
          }}
          className="shadow"
        >
          {" "}
          <BsPencilSquare /> Ubah
        </Button>
        <Button
          size="sm"
          style={{
            background: "#9D9C9C",
            border: "none",
          }}
          className="shadow"
        >
          {" "}
          <CgUserList /> Detail
        </Button>
        <Button
          size="sm"
          style={{
            // background: "#9D9C9C",
            border: "none",
          }}
          className="shadow"
          variant="danger"
        >
          {" "}
          <BiTrash /> Hapus
        </Button>
      </span>{" "}
    </span>
  );

  return (
    <div>
      <div
        style={{
          backgroundColor: "#D9D9D9",
          minHeight: "100vh",
        }}
      >
        {/* <NavbarAdmin animated={animated} /> */}
        <Container>
          <Row className="">
            <div style={{ background: "salmon" }}>
              {/* <Sidebar animated={animated} setAnimated={setAnimated} /> */}
              {/* <SidebarDua animated={animated} setAnimated={setAnimated} /> */}
            </div>
            <div
              className="ps-3 "
              style={{
                background: "",
                width: animated ? "85%" : "75%",
                position: "absolute",
                transition: "0.5s",
                left: animated ? "200px" : "320px",
                top: "125px",
              }}
            >
              {/* Batas Animasi*/}
              <div
                style={{
                  marginTop: "",
                }}
                className="d-flex align-items-center justify-content-start"
              >
                <div className="d-flex gap-3 align-items-center">
                  <h4 className="m-2 fw-bold" style={{ fontSize: "20px" }}>
                    Member
                  </h4>
                  <div className="">
                    <InputGroup className="shadow-sm">
                      <InputGroup.Text
                        id="basic-addon1"
                        style={{
                          backgroundColor: "#EFEFEF",
                          borderRadius: "10px 0px 0px 10px",
                        }}
                        className=""
                      >
                        <BiSearch />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="Search"
                        placeholder="Cari"
                        style={{
                          borderLeft: "none",
                          borderRadius: "0px 7px 7px 0px",
                          backgroundColor: "#EFEFEF",
                        }}
                      />
                    </InputGroup>
                  </div>
                </div>
              </div>
              <TabelCalonAgen
                columns={columns}
                dataTable={dataTable}
                colSpan={colSpan}
                actionIcon={actionIcon}
              />
              {/* Batas Animasi */}
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Member;
