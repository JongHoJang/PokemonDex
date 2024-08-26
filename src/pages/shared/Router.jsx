// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dex from "../Dex";
import Home from "../Home";
import PokemonDetail from "../../components/PokemonDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/dex-detail" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
