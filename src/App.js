import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Layout from "./widget/Layout";
import DefaultRoute from "./components/utils/defaultRouter/DefaultRoute";
import {
  Home,
  Tarif,
  OmzetLuarNegri,
  CalonAgen,
  Member,
  BookingPage,
  Login,
  TransaksiLuarNegeri,
  Tracking,
  DomestikTransaksi,
  ScanBarcode,
  PengaturanHome,
  DataPengguna
} from "./pages";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  if (pathname === "/dashboard") {
    return <Navigate to="/dashboard/omzet-luar-negri" />;
  }
  if (pathname === "/calon-agen") {
    return <Navigate to="/calon-agen/agen" />;
  }
  if (pathname === "/luar-negeri") {
    return <Navigate to="/luar-negeri/transaksi" />;
  }
  if (pathname === "/domestik") {
    return <Navigate to="/domestik/transaksi-domestik" />;
  }
  if (pathname === "/keuangan") {
    return <Navigate to="" />;
  }
  if (pathname === "/laporan") {
    return <Navigate to="" />;
  }
  if (pathname === "/laporan-agen") {
    return <Navigate to="" />;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Dashboard */}
      <Route
        path="/dashboard/omzet-luar-negri"
        element={
          <Layout>
            <OmzetLuarNegri pathname={pathname} />
          </Layout>
        }
      />

      {/* Calon Agen */}
      <Route
        path="/calon-agen/agen"
        element={
          <Layout>
            <CalonAgen />
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

      {/* Luar Negeri */}
      <Route
        path="/luar-negeri/tarif"
        element={
          <Layout>
            <Tarif />
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
        path="/luar-negeri/scan-barcode"
        element={
          <Layout>
            <ScanBarcode />
          </Layout>
        }
      />

      {/* Domestik */}
      <Route
        path="/domestik/transaksi-domestik"
        element={
          <Layout>
            <DomestikTransaksi />
          </Layout>
        }
      />

      {/* Pengaturan */}
        <Route 
          path="/pengaturan"
          element={
            <Layout>
              <PengaturanHome />
            </Layout>
          }
        />

        <Route 
          path="/pengaturan/master-data/data-pengguna"
          element={
            <Layout>
              <DataPengguna />
            </Layout>
          }
        />
      {/* Pengaturan */}

      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/scan-barcode"
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
