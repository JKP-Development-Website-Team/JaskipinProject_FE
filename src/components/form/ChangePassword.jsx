import { Form, Button } from "react-bootstrap";
import IconUsername from "../../Image/IconUsername.png";
import IconPassword from "../../Image/IconPassword.png";
import IconUnhiden from "../../Image/IconUnhiden.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormChangePassword = ({
  handleChange,
  handleSubmit
}) => {
    const [isVisible, setIsVisible] = useState("password")

    let navigate = useNavigate()


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          style={{
            borderRadius: "15px",
            padding: "15px 3rem",
            background: `url(${IconUsername}) 10px center no-repeat`,
            color: "#828181 !important",
            fontWeight: "600",
            fontSize: "14px",
            border: "2px solid #828181",
          }}
          onChange={handleChange}
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          style={{
            borderRadius: "15px",
            padding: "15px 3rem",
            background: `url(${IconUsername}) 10px center no-repeat`,
            color: "#828181 !important",
            fontWeight: "600",
            fontSize: "14px",
            border: "2px solid #828181",
          }}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" style={{display:"flex", alignItems:"center"}}>
        <Form.Control
          type={isVisible}
          placeholder="Password Lama"
          name='password'
          style={{
            borderRadius: "15px",
            padding: "15px 3rem",
            background: `url(${IconPassword}) 10px center no-repeat`,
            color: "#828181 !important",
            fontWeight: "600",
            fontSize: "14px",
            border: "2px solid #828181",
          }}
          onChange={handleChange}
        />
        <img src={IconUnhiden} alt="Unhidden" width={22} height={22} style={{marginLeft:"-40px", cursor:"pointer"}} onClick={() => setIsVisible(isVisible === "password" ? "text" : "password")}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" style={{display:"flex", alignItems:"center"}}>
        <Form.Control
          type={isVisible}
          placeholder="Password Baru"
          name='password'
          style={{
            borderRadius: "15px",
            padding: "15px 3rem",
            background: `url(${IconPassword}) 10px center no-repeat`,
            color: "#828181 !important",
            fontWeight: "600",
            fontSize: "14px",
            border: "2px solid #828181",
          }}
          onChange={handleChange}
        />
        <img src={IconUnhiden} alt="Unhidden" width={22} height={22} style={{marginLeft:"-40px", cursor:"pointer"}} onClick={() => setIsVisible(isVisible === "password" ? "text" : "password")}/>
      </Form.Group> */}
      <Button
        variant="primary"
        type="submit"
        style={{
          width: "100%",
          borderRadius: "20px",
          backgroundColor: "#0843AD",
          border: "none",
          padding: "10px 5px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.400)",
          fontSize: "14px",
        }}
      >
        Ubah Password
      </Button>
      <p style={{fontWeight:"500", fontSize:"14px", marginTop:"1rem", textAlign:"right", color:"#5B93F9", cursor:"pointer"}} onClick={() => navigate("/login")} >Login</p>
    </Form>
  );
};

export default FormChangePassword;
