import { Routes, Route } from "react-router";
import { Announce } from "../pages/Announce";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";

import FormCreateAnnounce from "../components/Forms/createAnnounce";

import { ProfileView } from "../pages/ProfileView";


const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/announce" element={<Announce />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create" element={<FormCreateAnnounce />} />
      <Route path="/profile" element={<ProfileView />} />

    </Routes>
  );
};

export default RoutesMain;
