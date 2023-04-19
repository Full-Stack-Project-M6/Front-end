import { Routes, Route } from "react-router";
import { Announce } from "../pages/Announce";
import { Home } from "../pages/Home";
import { ProfileView } from "../pages/ProfileView";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/announce" element={<Announce />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<ProfileView />} />
    </Routes>
  );
};

export default RoutesMain;
