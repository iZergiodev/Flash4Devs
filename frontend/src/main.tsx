import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Flash4DevsRouter } from "./router/Flash4DevsRouter.tsx";
import { BrowserRouter } from "react-router";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Flash4DevsRouter/>
    </BrowserRouter>
  </StrictMode>
);
