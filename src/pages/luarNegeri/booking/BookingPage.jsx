
import React, {useState} from 'react'
import { Container, Form, InputGroup, Row , Dropdown, DropdownButton} from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import BookingTable from '../../../components/bookingTable/BookingTable'
import NavbarAdmin from '../../../components/navbar/NavbarAdmin'
import SidebarDua from '../../../components/sidebar/SidebarDua'

const BookingPage = () => {
    const [animated, setAnimated] = useState('')
  return (
    <div>
            <div
        style={{
          backgroundColor: "#D9D9D9",
          minHeight: "100vh",
        }}
      >
        <NavbarAdmin animated={animated} />
        <Container>
          <Row className=''>
            <div style={{ background: "salmon" }}>
              {/* <Sidebar animated={animated} setAnimated={setAnimated} /> */}
              <SidebarDua setAnimated={setAnimated} />
            </div>
            <div className="ps-3 " style={{
              background: "",
              width: animated ? "85%" : "75%",
              position: "absolute",
              transition: "0.5s",
              left: animated ? "200px" : "320px",
              top: "125px"
            }}>
              {/* Batas Animasi*/}
            <div
                style={{
                  marginTop: "",
                }}
                className="d-flex align-items-center justify-content-between"
              >
                <div className="d-flex gap-3 align-items-center">
                  <h4 style={{
                   fontWeight: '700',
                   fontSize:'20px',
                   color:'#000' 
                  }}>Booking</h4>
                <div className="">
                  <InputGroup className="shadow-sm">
                    <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#EFEFEF', borderRadius: '10px 0px 0px 10px' }} className="">
                      <BiSearch />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="Search"
                      placeholder="Cari"
                      style={{ borderLeft: 'none', borderRadius: '0px 7px 7px 0px', backgroundColor: '#EFEFEF', outline: 'none' }}
                    />
                    </InputGroup>
                  </div>
                </div>

                <div className='d-flex gap-2 align-items-center'>
                    <DropdownButton variant='light' align='end' title="Month" style={{
                        color:'#c3cbc8',

                    }}>
                        <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>
              </div>
              
              {/* Component */}
              <BookingTable />
              {/* Component */}
              {/* Batas Animasi */}
            </div>
          </Row>
        </Container>
      </div> 
    </div>
  )
}

export default BookingPage