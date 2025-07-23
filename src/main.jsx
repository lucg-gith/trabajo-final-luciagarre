import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterApp } from "./routes/RouterApp";
import { Header } from "./components/Header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>
);
