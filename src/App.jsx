// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dex from "./pages/Dex";
import Home from "./pages/Home";
// import styled from "styled-components";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/dex-detail" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
