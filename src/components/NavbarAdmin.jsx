import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Image/logo.png";
import line from "../Image/line.png";

function NavbarAdmin() {
  return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className="mt-3 rounded-4 border bg-light"
        style={{
          zIndex: "99",
          position: "fixed",
          right: "30px",
          left: "30px",
          border:"none"
        }}
      >
        <>
          <Navbar.Brand href="#home" className="ms-5" style={{
            borderRight : "3px solid #9D9C9C"
          }}>
            <img src={logo} alt="" width={"150"} style={{
              marginRight:"2.9em"
            }} />
          </Navbar.Brand>
            {/* <img src={line} alt="" height={"45"} /> */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="me-4"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="me-3">
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>
      </Navbar>
  );
}

export default NavbarAdmin;
