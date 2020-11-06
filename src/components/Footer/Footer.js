import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <a className="footerLink" href="https://marshakbooks.ru/" target="blanc">
        &#169; Маршак, 2020.
      </a>
      <spna className="footerCopyright">
        Сделано студентами{" "}
        <a
          target="blanc"
          href="https://praktikum.yandex.ru"
          className="footerLink footerLinkSpec"
        >
          Яндекс.Практикум
        </a>
      </spna>
    </footer>
  );
}

export default Footer;
