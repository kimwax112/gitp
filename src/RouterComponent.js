import React from "react";
import { Routes, Route } from "react-router-dom";
import { Mainp, CosMain, BrandDP, Clothes, Fabric, Size, Upload, FinalConfimation } from "./pages";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainp />} />
      <Route path="/CosMain" element={<CosMain />} />
      <Route path="/BrandDP" element={<BrandDP />} />
      <Route path="/Clothes" element={<Clothes />} />
      <Route path="/Fabric" element={<Fabric />} />
      <Route path="/Size" element={<Size />} />
      <Route path="/Upload" element={<Upload />} />
      <Route path="/FinalConfirmation" element={<FinalConfimation />} />
    </Routes>
  );
};

export default RouterComponent;
