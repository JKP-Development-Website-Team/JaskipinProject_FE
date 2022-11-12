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
  Tracking,
  Domestik,
  ScanBarcode
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />

      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/calon-agen/agen"
        element={
          <Layout>
            <CalonAgen />
          </Layout>
        }
      />
      <Route
        path="/luar-negeri/tarif"
        element={
          <Layout>
            <Tarif />
          </Layout>
        }
      />
      <Route
        path="/dashboard/omzet-luar-negri"
        element={
          <Layout>
            <OmzetLuarNegri />
          </Layout>
        }
      />
      <Route
        path="/calon-agen/member"
        element={
          <Layout>
            <Member />
          </Layout>
        }
      />
      <Route
        path="/luar-negeri/tracking"
        element={
          <Layout>
            <Tracking />
          </Layout>
        }
      />
      <Route
        path="/luar-negeri/booking"
        element={
          <Layout>
            <BookingPage />
          </Layout>
        }
      />
      <Route
        path="/luar-negeri/transaksi"
        element={
          <Layout>
            <TransaksiLuarNegeri />
          </Layout>
        }
      />
      <Route
        path="/domestik/transaksi-domestik"
        element={
          <Layout>
            <Domestik />
          </Layout>
        }
      />
      <Route
        path="/luar-negeri/scan-barcode"
        element={
          <Layout>
            <ScanBarcode />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
