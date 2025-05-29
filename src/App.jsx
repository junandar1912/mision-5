import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Menu from "./Page/menu/Menu.jsx";
import Registrasi from "./Page/Registrasi/Registrasi.jsx";
import Login from "./Page/Login/Login.jsx";
import Semuaproduk from "./page/Semua-produk/Semuaproduk.jsx"
import Detail from "./Page/Detail/Detail.jsx";
import Metode from "./Page/Metode/Metode.jsx";
import Bayar from "./Page/Bayar/Bayar.jsx";
import Ubah from "./Page/Ubah/Ubah.jsx";
import Selesai from "./Page/Pesananselesai/Selesai.jsx";
import Profil from "./Page/Profil/Profil.jsx";
import Pembelajaran from "./Page/Pembelajaran/Pembelajaran.jsx";
import Rules from "./Page/Rules/Rules.jsx";


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
      <Route path="Bayar" element={<Bayar/>}/>
      <Route path="Ubah Metode" element={<Ubah/>}/>
      <Route path="Pesanan Selesai" element={<Selesai/>}/>
      <Route path="Profil" element={<Profil/>}/>
      <Route path="Pembelajaran" element={<Pembelajaran/>}/>
      <Route path="Rules" element={<Rules/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;