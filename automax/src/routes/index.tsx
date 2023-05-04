import { Routes, Route } from "react-router";
import { Announce } from "../pages/Announce";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import FormCreateAnnounce from "../components/Forms/createAnnounce";
import { ProfileView } from "../pages/ProfileView";
import { RecoverPassword } from "../pages/forgotPassword";
import { AnnouncePublic } from "../pages/AnnouncePublic";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/recuperar-senha" element={<RecoverPassword />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<ProfileView />} />
      <Route path="/announce" element={<Announce />} />
      <Route path="/announce/public" element={<AnnouncePublic />} />
      <Route path="/create" element={<FormCreateAnnounce />} />
    </Routes>
  );
};

export default RoutesMain;
