import { Routes, Route } from "react-router";
import { Announce } from "../pages/Announce";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import FormCreateAnnounce from "../components/Forms/createAnnounce";
import { ProfileView } from "../pages/ProfileView";
import { RecoverPassword } from "../pages/sendEmailToResetPassword";
import { AnnouncePublic } from "../pages/AnnouncePublic";
import { ResetPassword } from "../pages/resetPassword";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/sendReset" element={<RecoverPassword />} />
      <Route path="/reset_password/:token" element={ <ResetPassword />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<ProfileView />} />
      <Route path="/announce" element={<Announce />} />
      <Route path="/announce/public" element={<AnnouncePublic />} />
      <Route path="/create" element={<FormCreateAnnounce />} />
    </Routes>
  );
};

export default RoutesMain;
