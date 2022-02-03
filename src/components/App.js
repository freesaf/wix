import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { secondPageLink, dashboardLink, firstPageLink } from "../routes";
import Check from "./Check";
import Check2 from "./Check2";
import Header from "./layout/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path={`${dashboardLink}`} element={<Dashboard />} /> */}
        <Route path={`${dashboardLink}`} element={<Home />} />
        <Route path={`${firstPageLink}`} element={<Check />} />
        <Route path={`${secondPageLink}`} element={<Check2 />} />
      </Routes>
    </BrowserRouter>
  );
}
