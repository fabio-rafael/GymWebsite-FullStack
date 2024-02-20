import React, { useState } from "react";
import "./Login.css";
import login from "../../assets/login.jpg";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Login bem-sucedido, redirecionar para a página de membros ou fazer outras ações necessárias
        navigate("/membros");
        alert("Login bem-sucedido");
      } else {
        // Tratar caso o login não seja bem-sucedido
        alert("Verifique se inseriu dados válidos");
      }
    } catch (error) {
      alert("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="login">
      <div className="foto">
        <img src={login} alt="logo" />
      </div>
      <div className="form">
        <div className="logo"></div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Endereço de e-mail</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p>
            Não tens conta?{" "}
            <a className="redirect" href="/registo">
              Registra-te aqui!
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
