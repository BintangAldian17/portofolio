import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortofolioPage from "./pages/PortofolioPage";
import ContactPage from "./pages/ContactPage";
import { Navbar } from "./components/Navbar";

import './style.css'
import { SideNav } from "./components/SideNav";
import { Footer } from "./components/Footer";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


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
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="dark"
          limit={1} />
      </div>
    </>
  );
}

export default App;
