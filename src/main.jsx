import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// App level imports
import { Router } from "./router";
import "./index.css";
import GlobalContextProvider from "./context/GlobalContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GlobalContextProvider>
  </StrictMode>
);
