
import React, {useState} from 'react'
import { Container, Form, InputGroup, Row , Dropdown, DropdownButton} from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import BookingTable from '../../../components/bookingTable/BookingTable'
import { months } from '../../../components/utils/Constant'
import { useSelector } from 'react-redux';
import ContainerMain from '../../../components/containerMain/ContainerMain'

const BookingPage = () => {

  return (
    <div>
    <div
      style={{
        backgroundColor: "#D9D9D9",
        minHeight: "100vh",
      }}
    >
        <ContainerMain>
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
                      {months.map((item, idx) => {
                        return (
                          <Dropdown.Item key={idx} as="button">{item}</Dropdown.Item>
                        )
                      })}
                    </DropdownButton>
                </div>
              </div>
              
              {/* Component */}
              <BookingTable />
              {/* Component */}
              {/* Batas Animasi */}
              </ContainerMain>
              </div>
              </div>
  )
}

export default BookingPage