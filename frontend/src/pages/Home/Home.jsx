import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/planos");
  };

  return (
    <div className="Home">
      <div className="text">
        <h1>Bem vindo</h1>
        <h2>Transforme já o seu suor em sucesso!</h2>
      </div>
      <div className="btn">
        <button onClick={handleButtonClick}>Ver Planos</button>
      </div>
    </div>
  );
};
export default Home;
