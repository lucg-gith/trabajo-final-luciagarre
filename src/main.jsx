import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./views/Home.jsx";
import { Register } from "./views/Register.jsx";
import { Dashboard } from "./views/Dashboard.jsx";
import { Login } from "./views";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
