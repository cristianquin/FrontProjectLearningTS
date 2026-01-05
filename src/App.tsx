import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listado from "./pages/Listado";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Listado />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
