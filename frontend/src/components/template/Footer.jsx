import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="text-center bg-body-tertiary">
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
    >
      <div className="container pt-2">
        <section className="mb-2">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/in/f%C3%A1bio-pinto-196292293/"
            role="button"
            data-mdb-ripple-color="dark"
            style={{ color: "black" }}
          >
            <i className="fa fa-linkedin"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/fabio-rafael"
            role="button"
            data-mdb-ripple-color="dark"
            style={{ color: "black" }}
          >
            <i className="fa fa-github"></i>
          </a>
        </section>
      </div>
      <div className="copyright">© Copyright: Fábio Rafael</div>
    </div>
  </footer>
);

export default Footer;
