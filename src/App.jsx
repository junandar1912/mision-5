import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Menu from "./components/Page/menu/Menu"
import Login from "./components/Page/Login/Login";
import Registrasi from "./components/Page/Registrasi/Registrasi";


const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="Registrasi" element={<Registrasi />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App