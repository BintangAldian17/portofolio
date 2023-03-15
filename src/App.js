import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortofolioPage from "./pages/PortofolioPage";
import ContactPage from "./pages/ContactPage";
import { Navbar } from "./components/Navbar";

import './style.css'
import { SideNav } from "./components/SideNav";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className=" w-full md:h-screen h-full text-gray-300 md:flex bg-gray-100">
        <Navbar />
        <SideNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portofolio" element={<PortofolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
