import React from "react";
import { Link, Grid, Row } from "carbon-components-react";

const Footer = () => {
  return (
    <Grid data-testid="footer-container" className="footer__container">
      <Row className="footer__row">
        <p>Bahmni is an open source project managed by Bahmni Coalition</p>
      </Row>
      <Row className="footer__row">
        <Link className="link" href="/">
          Bahmni Wiki
        </Link>
      </Row>
    </Grid>
  );
};

export default Footer;
