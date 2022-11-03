import { Navbar, Form, InputGroup } from "react-bootstrap";
import line from "../../Image/line.png"
import { BiSearch } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";


function NavbarAdmin({animated}) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="mt-3 rounded-4 border bg-light"
      style={{
        // zIndex: "-1",
        position: "fixed",
        right: "30px",
        left: "30px",
        border: "none"
      }}
    >
      <>
        <Navbar.Brand href="#home" className="ms-5" style={{
          borderRight: "3px solid #9D9C9C",
          marginRight: animated ? "2em" : "8em",
          transition:"0.5s"
        }}>
          <h4>a</h4>
        </Navbar.Brand>
      
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="me-4"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="ms-4">
          <InputGroup className="w-50 mx-5">
            <InputGroup.Text id="basic-addon1" style={{backgroundColor:'#EFEFEF', borderRadius:'20px 0px 0px 20px'}} className="">
              <BiSearch />
            </InputGroup.Text>
            <Form.Control
              type="text"
              name="Search"
              placeholder="Search"
              style={{borderLeft:'none', borderRadius:'0px 20px 20px 0px', backgroundColor:'#EFEFEF'}}

             

            // onChange={handleChange}
            />
          </InputGroup>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end me-4">
          <IoIosNotificationsOutline className="fs-1" />
          <p style={{fontSize:"100",width:"25px", height:"25px"}} className="bg-danger rounded-pill ps-2 fw-bold">1</p>
          <img src={line} alt="" height={"50"} width={"2"} className="mx-3" />
          <img src="https://cf.shopee.co.id/file/db9bd5c0187ce2c111b8d234e5d329df" width={50} className="rounded mx-3" />
          <div className="d-flex flex-column ">
            <div className="pt-2 mx-3 ">
              <h5 className="p-0 m-0">
                Admin
              </h5>
            </div>
            <div className="p-0 mx-3">
              <p className="p-0 m-0 bg-secondary rounded">
              super admin
              </p>
            </div>
          </div>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
}

export default NavbarAdmin;
