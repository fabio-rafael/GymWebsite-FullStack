import React, { useState, useEffect } from "react";
import "./Membros.css";

const Membros = () => {
  const [membros, setMembros] = useState([]);

  useEffect(() => {
    const buscarMembros = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users/membros");
        if (response.ok) {
          const data = await response.json();
          setMembros(data);
        } else {
          console.error("Erro ao buscar membros");
        }
      } catch (error) {
        console.error("Erro ao buscar membros:", error);
      }
    };

    buscarMembros();
  }, []);

  const handleExcluirMembro = async (membroId) => {
    try {
      console.log("Tentativa de excluir membro com ID:", membroId);

      const response = await fetch(
        `http://localhost:5000/api/users/excluir/${membroId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const updatedMembros = membros.filter(
          (membro) => membro._id !== membroId
        );
        setMembros(updatedMembros);
        console.log("Membro excluído com sucesso.");
      } else {
        console.error("Erro ao excluir membro");
      }
    } catch (error) {
      console.error("Erro ao excluir membro:", error);
    }
  };

  return (
    <div className="membros">
      <h1>Membros Registados</h1>
      <table>
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Senha</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {membros.map((membro) => (
            <tr key={membro._id}>
              <td>{membro.name}</td>
              <td>{membro.email}</td>
              <td>{membro.telefone}</td>
              <td>{membro.password}</td>
              <td>
                <button onClick={() => handleExcluirMembro(membro._id)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <small>
        *Foi adicionado um encriptador para prova de conceito nas passwords.*
      </small>
    </div>
  );
};

export default Membros;
