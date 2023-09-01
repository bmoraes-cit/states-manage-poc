import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Zustand from "../page/Zustand/Zustand";
import Jotai from "../page/Jotai/Jotai";

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Zustand />} />
        <Route path="/jotai" element={<Jotai />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
