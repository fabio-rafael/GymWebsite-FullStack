import React, { useState } from "react";
import "./Planos.css";
import "./Card";
import Card from "./Card";

function Planos(props) {
  const [activeCard, setActiveCard] = useState(null);

  const handleTogglePopup = (cardTitle) => {
    setActiveCard(activeCard === cardTitle ? null : cardTitle);
  };

  return (
    <div>
      <div>
        <h1>
          Todos os planos <span className="fide"> sem fidelização</span>.
          Escolhe o teu!
        </h1>
      </div>
      <div className="Planos">
        <Card
          Título="SUPER OFF-PEAK"
          Horário="Horário Reduzido"
          Preço="0,50€ por dia"
          Caracteristicas={[
            "Acesso a todas as máquinas de cardio",
            "Acesso à área de musculação",
            "Horário restrito: 10h às 15h",
          ]}
          showPopup={activeCard === "SUPER OFF-PEAK"}
          togglePopup={() => handleTogglePopup("SUPER OFF-PEAK")}
        ></Card>
        <Card
          Título="AULAS DE GRUPO"
          Horário="Acesso Limitado a Aulas de Grupo"
          Preço="0,69€ por dia"
          Caracteristicas={[
            "Acesso a aulas de grupo específicas",
            "Horário flexível para aulas coletivas",
            "Instrutores especializados em aulas em grupo",
          ]}
          showPopup={activeCard === "AULAS DE GRUPO"}
          togglePopup={() => handleTogglePopup("AULAS DE GRUPO")}
        ></Card>
        <Card
          Título="OFF-PEAK"
          Horário="Horário Alargado"
          Preço="0,79€ por dia"
          Caracteristicas={[
            "Acesso a todas as áreas do ginásio",
            "Horário flexível durante a tarde",
            "Aulas em grupo disponíveis",
          ]}
          showPopup={activeCard === "OFF-PEAK"}
          togglePopup={() => handleTogglePopup("OFF-PEAK")}
        ></Card>
        <Card
          Título="LIVRE"
          Horário="Horário Livre"
          Preço="0,99€ por dia"
          Caracteristicas={[
            "Acesso irrestrito a todas as instalações",
            "Treinos personalizados com instrutores",
            "Aulas exclusivas para membros",
          ]}
          showPopup={activeCard === "LIVRE"}
          togglePopup={() => handleTogglePopup("LIVRE")}
        ></Card>
      </div>
    </div>
  );
}

export default Planos;
