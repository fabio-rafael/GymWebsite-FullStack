import React, { useState } from "react";
import "./Card.css";
/*import { useNavigate } from "react-router-dom";*/

function Card({
  Título,
  Horário,
  Preço,
  Caracteristicas,
  showPopup,
  togglePopup,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!showPopup) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  /*
  const navigate = useNavigate();

  
  const handleButtonClick = () => {
    navigate("/registo");
  };*/

  return (
    <div
      className={`Card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="Title">
        <h1 className="Titulo">{Título}</h1>
        <h2 className="Horário">{Horário}</h2>
      </div>
      <div className="Price">
        <span className="Preço">{Preço}</span>
        <button onClick={togglePopup}>Selecionar</button>
      </div>
      <div className="extra">
        <div>
          <span onClick={togglePopup}> Clique para mais informações</span>
          {showPopup && (
            <div className="popup">
              {Caracteristicas.map((caracteristica, index) => (
                <p key={index}>• {caracteristica}</p>
              ))}
              <button onClick={togglePopup}>Fechar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
