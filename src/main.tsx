import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import { AcProvider } from "./context/use-context.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AcProvider>
      <StrictMode>
        <App />
        <Toaster />
      </StrictMode>
    </AcProvider>
  </BrowserRouter>
);
