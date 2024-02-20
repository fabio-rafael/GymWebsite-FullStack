import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.png";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-expand-lg">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="/home">
            <span className="glyphicon glyphicon-home"></span> Home
          </a>
        </li>
        <li>
          <a href="/sobre">
            <span className="glyphicon  glyphicon-fire"></span> Sobre Nós
          </a>
        </li>
        <li>
          <a href="/planos">
            <span className="glyphicon glyphicon-tag"></span> Planos
          </a>
        </li>
        <li>
          <a href="/contatos">
            <span className="glyphicon glyphicon-earphone"></span> Contatos
          </a>
        </li>
        <li>
          <a href="/registo">
            <span className="glyphicon glyphicon-user"></span> Registo
          </a>
        </li>
        <li>
          <a href="/login">
            <span className="glyphicon glyphicon-log-in"></span> Login
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
