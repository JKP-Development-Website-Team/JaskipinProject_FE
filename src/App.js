import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./widget/Layout";
import {
  Home,
  Tarif,
  OmzetLuarNegri,
  CalonAgen,
  Member,
  BookingPage,
  Auth,
  TransaksiLuarNegeri,
  ScanBarcode,
  Domestik,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />

      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/calon-agen"
        element={
          <Layout>
            <CalonAgen />
          </Layout>
        }
      />
      <Route
        path="/tarif"
        element={
          <Layout>
            <Tarif />
          </Layout>
        }
      />
      <Route
        path="/omzet-luar-negri"
        element={
          <Layout>
            <OmzetLuarNegri />
          </Layout>
        }
      />
      <Route
        path="/member"
        element={
          <Layout>
            <Member />
          </Layout>
        }
      />
      <Route
        path="/tracking"
        element={
          <Layout>
            <ScanBarcode />
          </Layout>
        }
      />
      <Route
        path="/booking"
        element={
          <Layout>
            <BookingPage />
          </Layout>
        }
      />
      <Route
        path="/transaksi-luar-negeri"
        element={
          <Layout>
            <TransaksiLuarNegeri />
          </Layout>
        }
      />
      <Route
        path="/luar-negeri/transaksi-domestik"
        element={
          <Layout>
            <Domestik />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
