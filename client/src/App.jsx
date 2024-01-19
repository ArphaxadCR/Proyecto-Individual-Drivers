import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/Detail/Detail";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <LandingPage />}
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/home" element={<Cards />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
