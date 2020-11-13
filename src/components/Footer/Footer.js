import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <a
        className="footerLink footerLinkMarshak"
        href="https://marshakbooks.ru/"
        target="_blank"
      >
        &#169; Маршак, 2020.
      </a>
      <span className="footerCopyright">
        Сделано студентами
        <a
          target="_blank"
          href="https://praktikum.yandex.ru"
          className="footerLink footerLinkSpec"
        >
          Яндекс.Практикум
        </a>
      </span>
    </footer>
  );
}

export default Footer;
