import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Planos from "./pages/Planos/Planos";
import Contatos from "./pages/Contatos/Contatos";
import Registo from "./pages/Registo/Registo";
import Login from "./pages/Login/Login";
import Sobre from "./pages/Sobre/Sobre";
import Membros from "./pages/Membros/Membros";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/sobre" element={<Sobre />} />
    <Route path="/planos" element={<Planos />} />
    <Route path="/contatos" element={<Contatos />} />
    <Route path="/registo" element={<Registo />} />
    <Route path="/login" element={<Login />} />
    <Route path="/membros" element={<Membros />} />

    <Route path="*" element={<Navigate to="/home" replace></Navigate>} />
  </Routes>
);

export default AppRoutes;
