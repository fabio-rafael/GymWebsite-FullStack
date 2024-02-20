import React from "react";
import logo1 from "../../assets/1.svg";
import logo2 from "../../assets/2.svg";
import logo3 from "../../assets/3.svg";
import logo4 from "../../assets/4.svg";
import "./Sobre.css";

function Sobre() {
  return (
    <div className="sobre">
      <div className="parte">
        <div className="logo">
          <img src={logo1} alt="Logo 1" />
        </div>
        <div className="texto">
          <li>Máquinas Dedicadas de Musculação</li>
          <p>
            Desenvolva sua força com nossas máquinas de última geração,
            projetadas especificamente para otimizar seu treino de musculação.
            Aprecie um ambiente exclusivo e focado para alcançar seus objetivos.
          </p>
        </div>
      </div>
      <div className="parte">
        <div className="logo">
          <img src={logo2} alt="Logo 2" />
        </div>
        <div className="texto">
          <li>Máquinas Funcionais</li>
          <p>
            Experimente a versatilidade de nossas máquinas funcionais,
            projetadas para oferecer treinos dinâmicos e eficientes. Explore
            diferentes movimentos para aprimorar sua resistência e flexibilidade
            em um ambiente inspirador.
          </p>
        </div>
      </div>
      <div className="parte">
        <div className="logo">
          <img src={logo3} alt="Logo 3" />
        </div>
        <div className="texto">
          <li>Pesos Livres</li>
          <p>
            Liberte o verdadeiro potencial do seu corpo com nossa ampla gama de
            pesos livres. Desde halteres até barras olímpicas, oferecemos a
            liberdade de criar seu próprio treino personalizado, promovendo o
            crescimento muscular e a definição.
          </p>
        </div>
      </div>
      <div className="parte">
        <div className="logo">
          <img src={logo4} alt="Logo 4" />
        </div>
        <div className="texto">
          <li>Acompanhamento Funcional</li>
          <p>
            Maximize seus resultados com nosso acompanhamento funcional
            personalizado. Nossos treinadores especializados estão aqui para
            guiar, motivar e ajustar seu programa de treino, garantindo que cada
            sessão seja um passo em direção aos seus objetivos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
