import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./widget/Layout";
import { Home, Tarif, OmzetLuarNegri, CalonAgen, Member } from "./pages";
import ScanBarcode from "./pages/luarNegeri/scanBarcode/ScanBarcode";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calon-agen" element={<CalonAgen />} />
      <Route path="/tarif" element={<Tarif />} />
      <Route path="/omzet-luar-negri" element={<OmzetLuarNegri />} />
      <Route path="/member" element={<Member />} />
      <Route path="/scan-barcode" element={<ScanBarcode />} />
    </Routes>
  );
}

export default App;
