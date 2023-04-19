import { Routes, Route } from "react-router";
import { Announce } from "../pages/Announce";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/Login";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/announce" element={<Announce />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default RoutesMain;
