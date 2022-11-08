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
  Auth
} from "./pages";
import ScanBarcode from "./pages/luarNegeri/scanBarcode/ScanBarcode";
import SidebarDua from "./components/sidebar/SidebarDua";
import NavbarAdmin from "./components/navbar/NavbarAdmin";

function App() {
  return (
    <div>
      {/* <NavbarAdmin />
      <SidebarDua /> */}
      
      <Routes>
        <Route path="/auth" element={<Auth />} />

        <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
        } />
        <Route path="/calon-agen" element={
          <Layout>
            <CalonAgen />
          </Layout>
        } />
        <Route path="/tarif" element={
          <Layout>
            <Tarif />
          </Layout>
        } />
        <Route path="/omzet-luar-negri" element={
          <Layout>
            <OmzetLuarNegri />
          </Layout>
        } />
        <Route path="/member" element={
          <Layout>
            <Member />
          </Layout>
        } />
        <Route path="/scan-barcode" element={
          <Layout>
            <ScanBarcode />
          </Layout>
        } />
        <Route path="/booking" element={
          <Layout>
            <BookingPage />
          </Layout>
        } />
      </Routes>
    </div>
  );
}

export default App;
