import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Menu from "./Page/menu/Menu.jsx";
import Registrasi from "./Page/Registrasi/Registrasi.jsx";
import Login from "./Page/Login/Login.jsx";
import Semuaproduk from "./page/Semua-produk/Semuaproduk.jsx"
import Detail from "./Page/Detail/Detail.jsx";
import Metode from "./Page/Metode/Metode.jsx";



const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="Registrasi" element={<Registrasi />} />
      <Route path="login" element={<Login />} />
      <Route path="Semuaproduk" element={<Semuaproduk />}/>
      <Route path="Detail" element={<Detail/>}/>
      <Route path="Metode" element= {<Metode/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;