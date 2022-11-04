import React from "react";
import Logo from "../../Image/logo.png";
import LogoNotFull from '../../Image/logo-not-full.png'

const LogoJaskipin = ({animated, setAnimated}) => {

  return (
    <div
      style={{
        background: "white",
        height: "75px",
        width: "93%",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        position: "absolute",
        top: "15px",
        right: "-14px",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        paddingLeft:"30px"
      }}
    >
      <div className="d-flex justify-content-center align-items-center" >
      {animated ? (
          <img
            src={LogoNotFull}
            alt="Jaskipin"
            width={64}
            height={55}
            onClick={() => setAnimated(false)}
            style={{
                transition:"0.5s"
              }}
          />
      ) : (
          <img
            src={Logo}
            alt="Jaskipin"
            width={175}
            height={51}
            onClick={() => setAnimated(true)}
            style={{
                transition:"0.5s"
              }}
          />
      )}
      </div>
      <span
        style={{
          height: "50px",
          marginTop: "10px",
          width: "3px",
          background: "#9D9C9C",
        }}
      ></span>
    </div>
  );
};

export default LogoJaskipin;
