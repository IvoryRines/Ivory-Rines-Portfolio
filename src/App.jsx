import { Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";

import NavBar from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0c4a6e]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
