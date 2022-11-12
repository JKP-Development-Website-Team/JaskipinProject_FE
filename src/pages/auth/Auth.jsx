import React, { useState, useEffect } from "react";
import FormAuth from "../../components/form/FormAuth";
import Maskot from "../../Image/maskot-ilustrasi.png";
import JaskipinLogo from "../../Image/JaskipinLogo.png";
import { loginAuth } from "../../redux/auth/AuthSlice";

import {useDispatch,} from 'react-redux'
import {useNavigate} from 'react-router-dom'


const Auth = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    isAuth:true,
    email:"",
    password:""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    try {
      e.preventDefault()
      dispatch(loginAuth(form))

      alert("semangat kerjanya")
      
      setTimeout(() => {
        navigate('/')
      }, 500)
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }

  console.log(form)

  return (
    <div
      className="d-flex justify-content-evenly w-full align-items-center"
      style={{
        height: "100vh",
      }}
    >
      {/* Maskot */}
      <div
        className=""
        style={{
          background: "linear-gradient(166deg, rgba(255,255,255,1) 0%, rgba(8,67,173,1) 45%)",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <div
          style={{
            margin: "auto",
          }}
        >
          <h1
            style={{
              textAlign: "left",
              color: "white",
              fontSize: "3.5rem",
              fontWeight: "900",
              paddingLeft: "80px",
              marginBottom: "-35px",
            }}
          >
            Hai,
            <br />
            Selamat <br />
            Datang<span className="fst-italic">!</span>
          </h1>

          <img
            src={Maskot}
            alt=""
            width={390}
            height={426}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      {/* Form Auth */}
      <div
        style={{
          flex: "1",
          height: "100vh",
        }}
      >
        <div
          style={{
            padding: "20px 8rem",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div className="d-flex justify-content-center">
            <img
              src={JaskipinLogo}
              alt=""
              height={89}
              width={306}
              style={{
                objectFit: "cover",
                marginBottom: "35px",
              }}
            />
          </div>

          <FormAuth 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
          />

        </div>
      </div>
    </div>
  );
};

export default Auth;
