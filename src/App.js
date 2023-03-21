import { Navbar } from "./components/Navbar";
import "swiper/css";
import "swiper/css/navigation";
import { SideNav } from "./components/SideNav";
import { Footer } from "./components/Footer";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import TransitionRoutes from "./components/TransitionRoutes";


function App() {
  return (
    <>
      <div className=" w-full md:h-screen h-full text-gray-300 md:flex bg-gray-100">
        <Navbar />

        <TransitionRoutes />

        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={true}
          theme="dark"
          limit={1} />
      </div>
    </>
  );
}

export default App;
