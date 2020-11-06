import React from "react";
import "./logo.css";
import logoTurbina from "../../images/logo-turbina.svg";

function Logo() {
  return (
    <div className="mainLogo">
      <img
        className="mainLogoImage"
        src={logoTurbina}
        alt="Логотип проекта Турбина."
      />
    </div>
  );
}

export default Logo;
