import React from "react";
import "./footer.css";
import {praktikumLink, marshakLink} from '../../data/footerConfig'

function Footer() {
  return (
    <footer className="footer">
      <a
        className="footer__link footer__link_marshak"
        href={marshakLink}
        target="blanc"
      >
        &#169; Маршак, 2020.
      </a>
      <span className="footer__creator">
        Сделано студентами
        <a
          target="_blank"
          href={praktikumLink}
          className="footer__link footer__link_spec"
        >
          Яндекс.Практикум
        </a>
      </span>
    </footer>
  );
}

export default Footer;
