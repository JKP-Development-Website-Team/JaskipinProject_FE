import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import Layout from './widget/Layout';


function App() {
  return (
    <Routes>
      <Route path='/' element={
        <Layout>
          <Home />
        </Layout>
      } />
    </Routes>
  );
}

export default App;
