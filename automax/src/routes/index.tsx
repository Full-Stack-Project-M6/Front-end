import { Routes, Route } from "react-router";
import { Announce } from "../pages/Announce";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/announce" element={<Announce />}></Route>
    </Routes>
  );
};

export default RoutesMain;
