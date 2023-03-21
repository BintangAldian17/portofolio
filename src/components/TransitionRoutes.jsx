import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PortofolioPage from "../pages/PortofolioPage";
import ContactPage from "../pages/ContactPage";

import { AnimatePresence } from "framer-motion";

const TransitionRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/portofolio" element={<PortofolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default TransitionRoutes;
