import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../views/Dashboard";
import { Home } from "../views/Home";
import { Login } from "../views/Login";
import { Register } from "../views/Register";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
export { RouterApp };
