import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
