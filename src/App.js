import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Layout from "./widget/Layout";
import {
  Home,
  Tarif,
  OmzetLuarNegri,
  CalonAgen,
  Member,
  BookingPage,
} from "./pages";
import ScanBarcode from "./pages/luarNegeri/scanBarcode/ScanBarcode";
import SidebarDua from "./components/sidebar/SidebarDua";
import NavbarAdmin from "./components/navbar/NavbarAdmin";
import LuarNegeri from "./pages/luarNegeri/LuarNegeri";
import Domestik from "./pages/Domestik/Domestik";

function App() {
  return (
    <div>
      <NavbarAdmin />
      <SidebarDua />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calon-agen" element={<CalonAgen />} />
        <Route path="/tarif" element={<Tarif />} />
        <Route path="/omzet-luar-negri" element={<OmzetLuarNegri />} />
        <Route path="/member" element={<Member />} />
        <Route path="/scan-barcode" element={<ScanBarcode />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/transaksi-luar-negeri" element={<LuarNegeri />} />
        <Route path="/transaksi-Domestik" element={<Domestik />} />
      </Routes>
    </div>
  );
}

export default App;
