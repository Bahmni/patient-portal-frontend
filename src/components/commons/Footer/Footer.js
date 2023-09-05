import React from "react";
import { Link, Row } from "carbon-components-react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div data-testid="footer-container" className="footer__container">
      <Row className="footer__row">
        <p>Bahmni is an open source project managed by Bahmni Coalition</p>
      </Row>
      <Row className="footer__row">
        <Link
          href="https://bahmni.atlassian.net/wiki/spaces/BAH/overview"
          target="_blank"
          className="link"
        >
          Bahmni Wiki
        </Link>
      </Row>
    </div>
  );
};

export default Footer;
