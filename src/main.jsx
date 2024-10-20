import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Evaluacion from './Evaluacion';
import Satisfaccion from "./Satisfaccion"
import ServiciosBrindados from "./ServiciosBrindados"
import Fortalezas from "./Fortalezas"
import Gracias from "./Gracias"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/evaluacion" element={<Evaluacion />} />
      <Route path="/satisfaccion" element={<Satisfaccion />} />
      <Route path="/serviciosBrindados" element={<ServiciosBrindados />} />
      <Route path="/fortalezas" element={<Fortalezas />} />
      <Route path="/gracias" element={<Gracias />} />
    </Routes>
  </Router>
);
