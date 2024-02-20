import "./Registo.css";
import RegistoLogo from "../../assets/Registo.gif";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registo = (props) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    telefone: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegisto = async () => {
    try {
      // Verificar se as senhas correspondem
      if (userData.password !== confirmPassword) {
        alert("As senhas não correspondem");
        return;
      }

      // Chamada de API para o endpoint de registro no backend
      const response = await fetch("http://localhost:5000/api/users/registo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        alert("Erro ao registrar usuário , email já se encontra em uso");
      }
    } catch (error) {
      alert("Erro ao processar registro:", error);
    }
  };

  const handleMudanca = (e) => {
    if (e.target.name === "password") {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [e.target.name]: e.target.value,
      }));
    } else if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    } else {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <div className="Registo">
      <div className="Titulo">
        <div className="logo">
          <h1>Registo</h1>
          <img src={RegistoLogo} alt="Registo-Logo"></img>
        </div>

        <small>
          Regista-te já para ficares a par de todas as informações e ofertas
          entraremos em contato assim que possível!
        </small>
      </div>
      <hr></hr>
      <div className="form">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputFullName">Nome Completo</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputFullName"
              aria-describedby="fullNameHelp"
              placeholder="Insira o seu nome completo"
              name="name"
              value={userData.name}
              onChange={handleMudanca}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={handleMudanca}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputConfirmPassword">
              Confirme a sua Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputConfirmPassword"
              placeholder="Confirme a sua Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleMudanca}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Endereço de e-mail</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Escreva aqui o seu e-mail"
              name="email"
              value={userData.email}
              onChange={handleMudanca}
            />
          </div>
          <div className="form-group">
            <label htmlFor="examplePhone1">Nº de Telemóvel / Telefone</label>
            <input
              type="tel"
              className="form-control"
              id="examplePhone1"
              placeholder="Escreva aqui o seu contato"
              name="telefone"
              value={userData.telefone}
              onChange={handleMudanca}
            ></input>
          </div>
          <button
            type="button" // Evitar o envio automático do formulário
            className="btn btn-primary"
            onClick={handleRegisto}
          >
            Registar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registo;
