import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import {Routes, Route} from 'react-router-dom'
import Layout from './widget/Layout';
import CalonAgen from './pages/Calon Agen/CalonAgen';


function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/calon-agen' element={<CalonAgen />} />

    </Routes>
  );
}

export default App;
